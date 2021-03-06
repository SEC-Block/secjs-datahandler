<a name="SECDataHandler"></a>

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard) 

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)]

## SECDataHandler

This package uses leveldb to store and handle data from SEC blockchain, this repository includes operations to four databases:
- Token Block Chain Database
- Transaction Block Chain Database
- Account Database
- Product Database

The databases contain following methods:
<a name="TokenBlockChainDB"></a>


## TokenBlockChainDB
**Kind**: global class  

* [TokenBlockChainDB](#TokenBlockChainDB)
    * [new TokenBlockChainDB(config)](#new_TokenBlockChainDB_new)
    * [.writeTokenBlockToDB(tokenData, callback)](#TokenBlockChainDB+writeTokenBlockToDB) ⇒ <code>None</code>
    * [.isTokenBlockChainDBEmpty(callback)](#TokenBlockChainDB+isTokenBlockChainDBEmpty) ⇒ <code>None</code>
    * [.getTokenBlockChainDB(callback)](#TokenBlockChainDB+getTokenBlockChainDB) ⇒ <code>None</code>
    * [.getTokenBlockFromDB(blockHashArray, callback)](#TokenBlockChainDB+getTokenBlockFromDB) ⇒ <code>None</code>
    * [.getTokenChain(minBlockNumber, maxBlockNumber, callback)](#TokenBlockChainDB+getTokenChain) ⇒ <code>None</code>
    * [.delBlocksFromHeight(blockHeight, callback)](#TokenBlockChainDB+delBlocksFromHeight) ⇒ <code>None</code>
    * [.addUpdateBlock(pos, blockArray, callback)](#TokenBlockChainDB+addUpdateBlock) ⇒ <code>None</code>
    * [.findTxForUser(userAddress, callback)](#TokenBlockChainDB+findTxForUser) ⇒ <code>None</code>
    * [.findTx(userAddress, callback)](#TokenBlockChainDB+findTx) ⇒ <code>None</code>

<a name="TxBlockChainDB"></a>

## TxBlockChainDB
**Kind**: global class  

* [TxBlockChainDB](#TxBlockChainDB)
    * [new TxBlockChainDB(config)](#new_TxBlockChainDB_new)
    * [.writeTxBlockToDB(txData, callback)](#TxBlockChainDB+writeTxBlockToDB) ⇒ <code>None</code>
    * [.isTxBlockChainDBEmpty(callback)](#TxBlockChainDB+isTxBlockChainDBEmpty) ⇒ <code>None</code>
    * [.getTxBlockChainDB(callback)](#TxBlockChainDB+getTxBlockChainDB) ⇒ <code>None</code>
    * [.getTxBlockFromDB(blockHashArray, callback)](#TxBlockChainDB+getTxBlockFromDB) ⇒ <code>None</code>
    * [.getTxChain(minBlockNumber, maxBlockNumber, callback)](#TxBlockChainDB+getTxChain) ⇒ <code>None</code>
    * [.delBlocksFromHeight(blockHeight, callback)](#TxBlockChainDB+delBlocksFromHeight) ⇒ <code>None</code>
    * [.addUpdateBlock(pos, blockArray, callback)](#TokenBlockChainDB+addUpdateBlock) ⇒ <code>None</code>
    * [.findTxForUser(userAddress, callback)](#TokenBlockChainDB+findTxForUser) ⇒ <code>None</code>

<a name="AccountDB"></a>

## AccountDB
**Kind**: global class  

* [AccountDB](#AccountDB)
    * [new AccountDB(config)](#new_AccountDB_new)
    * [.writeUserInfoToAccountDB(accDataList, callback)](#AccountDB+writeUserInfoToAccountDB) ⇒ <code>None</code>
    * [.readUserInfofromAccountDB(accNameList)](#AccountDB+readUserInfofromAccountDB) ⇒ <code>Promise Object</code>
    * [.isAccountDBEmpty(callback)](#AccountDB+isAccountDBEmpty) ⇒ <code>None</code>
    * [.getAccountDB(callback)](#AccountDB+getAccountDB) ⇒ <code>None</code>
    * [.isAccountInAccountDB(accName, callback)](#AccountDB+isAccountInAccountDB) ⇒ <code>None</code>

<a name="ProductDB"></a>

## ProductDB
**Kind**: global class  

* [ProductDB](#ProductDB)
    * [new ProductDB(config)](#new_ProductDB_new)
    * [.writeTxBlockToDB(txData, callback)](#ProductDB+writeTxBlockToDB) ⇒ <code>None</code>
    * [.isProductDBEmpty(callback)](#ProductDB+isProductDBEmpty) ⇒ <code>None</code>
    * [.getProductDB(callback)](#ProductDB+getProductDB) ⇒ <code>None</code>

<br>

## TokenBlockChainDB Methods

<a name="new_TokenBlockChainDB_new"></a>

### new TokenBlockChainDB(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | contains the relative path for storing database |

<a name="TokenBlockChainDB+writeTokenBlockToDB"></a>

### tokenBlockChainDB.writeTokenBlockToDB(tokenData, callback) ⇒ <code>None</code>
Write single token block or full token chain data to database

**Kind**: instance method of [<code>TokenBlockChainDB</code>](#TokenBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| tokenData | <code>Array, Object</code> | single token block data or full token block chain data |
| callback | <code>function</code> | callback function, returns error if exist |

<a name="TokenBlockChainDB+isTokenBlockChainDBEmpty"></a>

### tokenBlockChainDB.isTokenBlockChainDBEmpty(callback) ⇒ <code>None</code>
Check whether the token block chain database is empty

**Kind**: instance method of [<code>TokenBlockChainDB</code>](#TokenBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function, callback arguments (err, emptyFlag) |

<a name="TokenBlockChainDB+getTokenBlockChainDB"></a>

### tokenBlockChainDB.getTokenBlockChainDB(callback) ⇒ <code>None</code>
Get all the block datas from token block chain database

**Kind**: instance method of [<code>TokenBlockChainDB</code>](#TokenBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function, callback arguments (err, block object array) |

<a name="TokenBlockChainDB+getTokenBlockFromDB"></a>

### tokenBlockChainDB.getTokenBlockFromDB(blockHashArray, callback) ⇒ <code>None</code>
Get token blocks according to block hash values

**Kind**: instance method of [<code>TokenBlockChainDB</code>](#TokenBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| blockHashArray | <code>String, Array</code> | block hash values, string or array format |
| callback | <code>function</code> | callback function, callback arguments (err, block object array) |

<a name="TokenBlockChainDB+getTokenChain"></a>

### tokenBlockChainDB.getTokenChain(minBlockNumber, maxBlockNumber, callback) ⇒ <code>None</code>
Get token block chain data, from number 'minBlockNumber' to number 'maxBlockNumber'

**Kind**: instance method of [<code>TokenBlockChainDB</code>](#TokenBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| minBlockNumber | <code>Integer</code> | minimum block number |
| maxBlockNumber | <code>Integer</code> | maximum block number |
| callback | <code>function</code> | callback function, callback arguments (err, block object array) |

<a name="TokenBlockChainDB+delBlocksFromHeight"></a>

### tokenBlockChainDB.delBlocksFromHeight(blockHeight, callback) ⇒ <code>None</code>
Delete blocks which have a higher height than the input 'blockHeight' argument

**Kind**: instance method of [<code>TokenBlockChainDB</code>](#TokenBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| blockHeight | <code>Integer</code> | blocks with larger height will be deleted from database |
| callback | <code>function</code> | callback function, callback arguments (err) |

<a name="TokenBlockChainDB+addUpdateBlock"></a>

### tokenBlockChainDB.addUpdateBlock(pos, blockArray, callback) ⇒ <code>None</code>
Add new blocks from a specific position if the blocks does not exist<br>
Update old blocks from a specific position if the blocks already exist

**Kind**: instance method of [<code>TokenBlockChainDB</code>](#TokenBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| pos | <code>Integer</code> | block add/update starting position |
| blockArray | <code>Array</code> | array of block data(json object) |
| callback | <code>function</code> | callback function, callback arguments (err) |

<a name="TokenBlockChainDB+findTxForUser"></a>

### tokenBlockChainDB.findTxForUser(userAddress, callback) ⇒ <code>None</code>
Find all previous transactions for a user

**Kind**: instance method of [<code>TokenBlockChainDB</code>](#TokenBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| userAddress | <code>String</code> | user account address |
| callback | <code>function</code> | callback function, callback arguments (txArray, err) |

### tokenBlockChainDB.findTx(txHash, callback) ⇒ <code>None</code>
Find a previous transactions for a user by transaction hash

**Kind**: instance method of [<code>TokenBlockChainDB</code>](#TokenBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| txHash | <code>String</code> | transaction hash |
| callback | <code>function</code> | callback function, callback arguments (txArray, err) |

<br><br>

## TxBlockChainDB Methods

<a name="new_TxBlockChainDB_new"></a>

### new TxBlockChainDB(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | contains the relative path for storing database |

<a name="TxBlockChainDB+writeTxBlockToDB"></a>

### txBlockChainDB.writeTxBlockToDB(txData, callback) ⇒ <code>None</code>
Write single tx block or full transaction chain data to database

**Kind**: instance method of [<code>TxBlockChainDB</code>](#TxBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| txData | <code>Array, Object</code> | single tx block data or full transaction block chain data |
| callback | <code>function</code> | callback function, returns error if exist |

<a name="TxBlockChainDB+isTxBlockChainDBEmpty"></a>

### txBlockChainDB.isTxBlockChainDBEmpty(callback) ⇒ <code>None</code>
Check whether the transaction block chain database is empty

**Kind**: instance method of [<code>TxBlockChainDB</code>](#TxBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function, callback arguments (err, emptyFlag) |

<a name="TxBlockChainDB+getTxBlockChainDB"></a>

### txBlockChainDB.getTxBlockChainDB(callback) ⇒ <code>None</code>
Get all the block datas from transaction block chain database

**Kind**: instance method of [<code>TxBlockChainDB</code>](#TxBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function, callback arguments (err, block object array) |

<a name="TxBlockChainDB+getTxBlockFromDB"></a>

### txBlockChainDB.getTxBlockFromDB(blockHashArray, callback) ⇒ <code>None</code>
Get transaction blocks according to block hash values

**Kind**: instance method of [<code>TxBlockChainDB</code>](#TxBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| blockHashArray | <code>String, Array</code> | block hash values, string or array format |
| callback | <code>function</code> | callback function, callback arguments (err, block object array) |

<a name="TxBlockChainDB+getTxChain"></a>

### txBlockChainDB.getTxChain(minBlockNumber, maxBlockNumber, callback) ⇒ <code>None</code>
Get transaction block chain data, from number 'minBlockNumber' to number 'maxBlockNumber'

**Kind**: instance method of [<code>TxBlockChainDB</code>](#TxBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| minBlockNumber | <code>Integer</code> | minimum block number |
| maxBlockNumber | <code>Integer</code> | maximum block number |
| callback | <code>function</code> | callback function, callback arguments (err, block object array) |

### txBlockChainDB.delBlocksFromHeight(blockHeight, callback) ⇒ <code>None</code>
Delete blocks which have a higher height than the input 'blockHeight' argument

**Kind**: instance method of [<code>TxBlockChainDB</code>](#TxBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| blockHeight | <code>Integer</code> | blocks with larger height will be deleted from database |
| callback | <code>function</code> | callback function, callback arguments (err) |

<a name="TxBlockChainDB+addUpdateBlock"></a>

### txBlockChainDB.addUpdateBlock(pos, blockArray, callback) ⇒ <code>None</code>
Add new blocks from a specific position if the blocks does not exist<br>
Update old blocks from a specific position if the blocks already exist

**Kind**: instance method of [<code>TxBlockChainDB</code>](#TxBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| pos | <code>Integer</code> | block add/update starting position |
| blockArray | <code>Array</code> | array of block data(json object) |
| callback | <code>function</code> | callback function, callback arguments (err) |

<a name="TxBlockChainDB+findTxForUser"></a>

### TxBlockChainDB.findTxForUser(userAddress, callback) ⇒ <code>None</code>
Find all previous transactions for a user

**Kind**: instance method of [<code>TxBlockChainDB</code>](#TxBlockChainDB)  

| Param | Type | Description |
| --- | --- | --- |
| userAddress | <code>String</code> | user account address |
| callback | <code>function</code> | callback function, callback arguments (txArray, err) |

<br><br>

## AccountDB Methods

<a name="new_AccountDB_new"></a>

### new AccountDB(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | contains the relative path for storing database |

<a name="AccountDB+writeUserInfoToAccountDB"></a>

### accountDB.writeUserInfoToAccountDB(accDataList, callback) ⇒ <code>None</code>
Write user account information to account database

**Kind**: instance method of [<code>AccountDB</code>](#AccountDB)  

| Param | Type | Description |
| --- | --- | --- |
| accDataList | <code>Array, Object</code> | single user account info(json object) or a list of user account info |
| callback | <code>function</code> | callback function, returns error if exist |

<a name="AccountDB+readUserInfofromAccountDB"></a>

### accountDB.readUserInfofromAccountDB(accNameList) ⇒ <code>Promise Object</code>
Read user account information from account database, returns a promise object

**Kind**: instance method of [<code>AccountDB</code>](#AccountDB)  

| Param | Type | Description |
| --- | --- | --- |
| accNameList | <code>Array, String</code> | single user account address(string) or a list of user account addresses |

<a name="AccountDB+isAccountDBEmpty"></a>

### accountDB.isAccountDBEmpty(callback) ⇒ <code>None</code>
Check whether the account database is empty

**Kind**: instance method of [<code>AccountDB</code>](#AccountDB)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function, callback arguments (err, emptyFlag) |

<a name="AccountDB+getAccountDB"></a>

### accountDB.getAccountDB(callback) ⇒ <code>None</code>
Get all the data in account database

**Kind**: instance method of [<code>AccountDB</code>](#AccountDB)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function, callback arguments (err, block object array) |

<a name="AccountDB+isAccountInAccountDB"></a>

### accountDB.isAccountInAccountDB(accName, callback) ⇒ <code>None</code>
Check whether an account is in AccountDB

**Kind**: instance method of [<code>AccountDB</code>](#AccountDB)  

| Param | Type | Description |
| --- | --- | --- |
| accName | <code>String</code> | account name |
| callback | <code>function</code> | callback function, callback arguments (err, block object array) |

<br><br>

## ProductDB Methods

<a name="new_ProductDB_new"></a>

### new ProductDB(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | contains the relative path for storing database |

<a name="ProductDB+writeTxBlockToDB"></a>

### productDB.writeTxBlockToDB(txData, callback) ⇒ <code>None</code>
Write single transaction block or full transaction chain data to product database

**Kind**: instance method of [<code>ProductDB</code>](#ProductDB)  

| Param | Type | Description |
| --- | --- | --- |
| txData | <code>Array, Object</code> | single tx block data or full transaction block chain data |
| callback | <code>function</code> | callback function, returns error if exist |

<a name="ProductDB+isProductDBEmpty"></a>

### productDB.isProductDBEmpty(callback) ⇒ <code>None</code>
Check whether the product database is empty

**Kind**: instance method of [<code>ProductDB</code>](#ProductDB)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function, callback arguments (err, emptyFlag) |

<a name="ProductDB+getProductDB"></a>

### productDB.getProductDB(callback) ⇒ <code>None</code>
Get all the data in product database

**Kind**: instance method of [<code>ProductDB</code>](#ProductDB)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function, callback arguments (err, block object array) |

