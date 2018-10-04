const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const Promise = require('promise')
const level = require('level')
const dataHandlerUtil = require('./util.js')

class ProductDB {
  /**
   * @param  {Object} config - contains the relative path for storing database
   */
  constructor (config) {
    if (typeof config.DBPath !== 'string' || config.DBPath === '') {
      throw new Error('Needs a valid config input for creating or loading product block chain db')
    }

    mkdirp.sync(config.DBPath + '/product')

    let productDBPath = path.join(config.DBPath, './product')
    this._initDB(productDBPath)
  }

  /**
   * Load or create databases
   */
  _initDB (productDBPath) {
    try {
      this.productDB = level(productDBPath)
    } catch (error) {
      // Could be invalid db path
      throw new Error(error)
    }
  }

  /**
   * Write single transaction block or full transaction chain data to product database
   * @param  {Array | Object} txData - single tx block data or full transaction block chain data
   * @param  {Function} callback - callback function, returns error if exist
   * @return {None}
   */
  writeTxBlockToDB (txData, callback) {
    let self = this
    let pdPromiseList = []

    if (!Array.isArray(txData)) {
      txData = [txData]
    }

    txData.forEach(function (txBlock) {
      txBlock.Transactions.forEach(function (transaction) {
        if (typeof transaction.ProductInfo.Name !== 'undefined') {
          pdPromiseList.push(dataHandlerUtil._putDBPromise(self.productDB, dataHandlerUtil._combineStrings('Name', transaction.ProductInfo.Name, transaction.TxHash), transaction.BlockNumber))
        }
      })
    })

    Promise.all(pdPromiseList).then(function () {
      callback()
    }).catch(function (err) {
      callback(err)
    })
  }

  /**
   * Check whether the product database is empty
   * @param  {Function} callback - callback function, callback arguments (err, emptyFlag)
   * @return {None}
   */
  isProductDBEmpty (callback) {
    dataHandlerUtil._isDBEmpty(this.productDB, callback)
  }

  /**
   * Get all the data in product database
   * @param  {Function} callback - callback function, callback arguments (err, block object array)
   * @return {None}
   */
  getProductDB (callback) {
    dataHandlerUtil._getAllDataInDB(this.productDB, callback)
  }
}

module.exports = ProductDB
