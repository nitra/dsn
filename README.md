DSN Parser
==========

inspired by https://www.npmjs.com/package/dsn, but allow port in host param. 

DSNs are a scheme, followed by semicolon (`;`), in the form of `key=value`.

All parameters are set as properties on the DSN object, except `dbname` is exposed as `database` and `username` is exposed as `user`.


## Installation

`npm install @nitra/dsn`

## Usage

````js
const { parse } = require('@nitra/dsn')

const dsn = parse('mysql:host=db:3306;dbname=myDBname')

/*
{ 
  protocol: 'mysql',
  host: 'db',
  port: '3306',
  database: 'myDBname'
} */
````