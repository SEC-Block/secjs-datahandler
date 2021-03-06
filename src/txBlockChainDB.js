const path = require('path')
const mkdirp = require('mkdirp')
const Promise = require('promise')
const level = require('level')
const dataHandlerUtil = require('./util.js')

class TxBlockChainDB {
  /**
   * @param  {Object} config - contains the relative path for storing database
   */
  constructor (config) {
    if (typeof config.DBPath !== 'string' || config.DBPath === '') {
      throw new Error('Needs a valid config input for creating or loading transaction block chain db')
    }
    if (typeof config.ID !== 'string' || config.ID === '') {
      throw new Error('Needs a valid config input for creating or loading transaction block chain db')
    }

    mkdirp.sync(config.DBPath + '/txBlockChain/' + config.ID)

    let txDBPath = path.join(config.DBPath, './txBlockChain', './' + config.ID)
    this._initDB(txDBPath)
  }

  /**
   * Load or create databases
   */
  _initDB (txDBPath) {
    try {
      this.txBlockChainDB = level(txDBPath)
    } catch (error) {
      // Could be invalid db path
      throw new Error(error)
    }
  }

  /**
   * Write single tx block or full transaction chain data to database
   * @param  {Array | Object} txData - single tx block data or full transaction block chain data
   * @param  {Function} callback - callback function, returns error if exist
   * @return {None}
   */
  writeTxBlockToDB (txData, callback) {
    let self = this
    let txPromiseList = []

    if (!Array.isArray(txData)) {
      txData = [txData]
    }

    txData.forEach(function (txBlock) {
      txBlock.Transactions = dataHandlerUtil._txStringify(txBlock.Transactions)
      txPromiseList.push(dataHandlerUtil._putJsonDBPromise(self.txBlockChainDB, txBlock.Number, txBlock))
      txPromiseList.push(dataHandlerUtil._putDBPromise(self.txBlockChainDB, txBlock.Hash, txBlock.Number))
    })

    Promise.all(txPromiseList).then(function () {
      callback()
    }).catch(function (err) {
      callback(err)
    })
  }

  /**
   * Check whether the transaction block chain database is empty
   * @param  {Function} callback - callback function, callback arguments (err, emptyFlag)
   * @return {None}
   */
  isTxBlockChainDBEmpty (callback) {
    dataHandlerUtil._isDBEmpty(this.txBlockChainDB, callback)
  }

  /**
   * Get all the block datas from transaction block chain database
   * @param  {Function} callback - callback function, callback arguments (err, block object array)
   * @return {None}
   */
  getTxBlockChainDB (callback) {
    dataHandlerUtil._getAllBlocksInDBSort(this.txBlockChainDB, callback)
  }

  /**
   * Get transaction blocks according to block hash values
   * @param  {String | Array} blockHashArray - block hash values, string or array format
   * @param  {Function} callback - callback function, callback arguments (err, block object array)
   * @return {None}
   */
  getTxBlockFromDB (blockHashArray, callback) {
    if (typeof blockHashArray === 'string') {
      blockHashArray = [blockHashArray]
    }

    if (!Array.isArray(blockHashArray)) {
      throw new Error('invalid blockHashArray input, should be an array')
    }

    let promise = this._getTxBlockFromDB(blockHashArray)
    promise.then((data) => {
      callback(null, data)
    }).catch((err) => {
      callback(err, null)
    })
  }

  /**
   * Read corresponding block data(json format) from transaction database
   * @return {None}
   */
  async _getTxBlockFromDB (blockHashArray) {
    let self = this
    let buffer = []

    await dataHandlerUtil._asyncForEach(blockHashArray, async (blockHash) => {
      let data = await dataHandlerUtil._getDBPromise(this.txBlockChainDB, blockHash)
      if (data[0] !== null) {
        throw data[0]
      } else {
        data = await dataHandlerUtil._getJsonDBPromise(self.txBlockChainDB, data[1])
        if (data[0] !== null) {
          throw data[0]
        } else {
          buffer.push(data[1])
        }
      }
    })

    return buffer
  }

  getBlock (number, callback) {
    dataHandlerUtil._getJsonDB(this.txBlockChainDB, number, callback)
  }

  getHashList (callback) {
    dataHandlerUtil._getHashList(this.txBlockChainDB, callback)
  }

  /**
   * Get transaction block chain data, from number 'minBlockNumber' to number 'maxBlockNumber'
   * @param {Integer} minBlockNumber - minimum block number
   * @param {Integer} maxBlockNumber - maximum block number
   * @param  {Function} callback - callback function, callback arguments (err, block object array)
   * @return {None}
   */
  getTxChain (minBlockNumber, maxBlockNumber, callback) {
    if (minBlockNumber > maxBlockNumber) {
      throw new Error('invalid block numbers')
    }

    let promise = this._getTxChain(minBlockNumber, maxBlockNumber)
    promise.then((data) => {
      callback(null, data)
    }).catch((err) => {
      callback(err, null)
    })
  }

  /**
   * Read corresponding block data(json format) from transaction database
   */
  async _getTxChain (minHeight, maxHeight) {
    let buffer = []
    for (let i = minHeight; i < maxHeight + 1; i++) {
      let data = await dataHandlerUtil._getJsonDBPromise(this.txBlockChainDB, i)
      if (data[0] !== null) {
        throw data[0]
      } else {
        buffer.push(data[1])
      }
    }
    return buffer
  }

  /**
   * Delete blocks which have a higher height than the input 'blockHeight' argument
   * @param {Integer} blockHeight - blocks with larger height will be deleted from database
   * @param  {Function} callback - callback function, callback arguments (err)
   * @return {None}
   */
  delBlocksFromHeight (blockHeight, callback) {
    let self = this
    dataHandlerUtil._getAllBlockHeightsInDB(this.txBlockChainDB, (err, data) => {
      if (err) {
        callback(err)
      } else {
        let pos = 0
        let promiseList = []
        let bufferHeight = data[0]
        let bufferHash = data[1]
        if (blockHeight in bufferHeight) {
          pos = bufferHeight.indexOf(blockHeight)
          bufferHeight = bufferHeight.slice(pos)
        } else {
          bufferHeight.push(blockHeight)
          bufferHeight = bufferHeight.sort((a, b) => a - b)
          pos = bufferHeight.indexOf(blockHeight)
          bufferHeight = bufferHeight.slice(pos + 1)
        }

        bufferHeight.forEach((height) => {
          promiseList.push(dataHandlerUtil._delDBPromise(self.txBlockChainDB, height))
        })
        bufferHash.forEach((hash) => {
          promiseList.push(dataHandlerUtil._delDBPromise(self.txBlockChainDB, hash))
        })

        Promise.all(promiseList).then(() => {
          callback()
        }).catch((err) => {
          callback(err)
        })
      }
    })
  }

  /**
   * Add new blocks from a specific position if the blocks does not exist
   * Update old blocks from a specific position if the blocks already exist
   * @param {Integer} pos - block add/update starting position
   * @param {Array} blockArray - array of block data(json object)
   * @param  {Function} callback - callback function, callback arguments (err)
   * @return {None}
   */
  addUpdateBlock (pos, blockArray, callback) {
    if (pos < 0 || !Array.isArray(blockArray)) {
      throw new Error('invalid input data')
    }
    let len = blockArray.length
    let promiseList = []
    for (let i = 0; i < len; i++) {
      promiseList.push(dataHandlerUtil._putJsonDBPromise(this.txBlockChainDB, pos + i, blockArray[i]))
      if (!('Hash' in blockArray[i])) {
        return callback(new Error('Invalid block data, block hash missing'))
      }
      promiseList.push(dataHandlerUtil._putJsonDBPromise(this.txBlockChainDB, blockArray[i].Hash, pos + i))
    }

    Promise.all(promiseList).then(() => {
      callback()
    }).catch((err) => {
      callback(err)
    })
  }

  /**
   * Find all previous transactions for a user
   * @param {String} userAddress - user account address
   * @param  {Function} callback - callback function, callback arguments (txArray, err)
   * @return {None}
   */
  findTxForUser (userAddress, callback) {
    let txBuffer = []
    this.txBlockChainDB.createReadStream().on('data', function (data) {
      if (data.key.length !== dataHandlerUtil.HASH_LENGTH) {
        data.value = JSON.parse(data.value)
        if (('Transactions' in data.value) && (data.value['Transactions'].length !== 0)) {
          data.value['Transactions'].forEach((transaction) => {
            try {
              transaction = JSON.parse(transaction)
              if ((transaction.SellerAddress === userAddress) || (transaction.BuyerAddress === userAddress)) {
                txBuffer.push(transaction)
              }
            } catch (err) {
              // expected errors: JsonParsingError or KeyError(SellerAddress or BuyerAddress does not exist)
              callback(err, null)
            }
          })
        }
      }
    }).on('error', function (err) {
      callback(err, null)
    }).on('close', function () {
    }).on('end', function () {
      callback(null, txBuffer)
    })
  }
}

module.exports = TxBlockChainDB
