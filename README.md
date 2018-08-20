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
| tokenData | <code>Array | Object</code> | single token block data or full token block chain data |
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
Get all the data in token block chain database

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
| blockHashArray | <code>String | Array</code> | block hash values, string or array format |
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
| txData | <code>Array</code> \| <code>Object</code> | single tx block data or full transaction block chain data |
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
Get all the data in transaction block chain database

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
| blockHashArray | <code>String</code> \| <code>Array</code> | block hash values, string or array format |
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
