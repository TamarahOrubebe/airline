'use strict';
// [START cloud_sql_mysql_mysql_connect_tcp]
// [START cloud_sql_mysql_mysql_connect_tcp_sslcerts]
const mysql = require('mysql2');


// createTcpPool initializes a TCP connection pool for a Cloud SQL
// instance of MySQL.
  
const dbConfig = {
  host: process.env.INSTANCE_HOST, // e.g. '127.0.0.1'
  port: process.env.DB_PORT, // e.g. '3306'
  user: process.env.DB_USER, // e.g. 'my-db-user'
  password: process.env.DB_PASS, // e.g. 'my-db-password'
  database: process.env.DB_NAME, // e.g. 'my-database'
    // ... Specify additional properties here.
  ssl: {
      // DO NOT DO THIS
      // set up your ca correctly to trust the connection
      rejectUnauthorized: false
  }
  
};
  


const pool = mysql.createPool(dbConfig);
const poolPromise = pool.promise();
module.exports = poolPromise;