"use strict";
//Configure environment
require("dotenv").config();

const pool = require('./src/model/config');
const express = require('express');
const cors = require('cors');
const aircraftRouter = require('./src/routes/aircraft');
const bookingRouter = require('./src/routes/booking');
const flightsRouter = require('./src/routes/flights');
const passengersRouter = require('./src/routes/passengers');
const staffRouter = require('./src/routes/staff');


//Define PORT
const PORT = process.env.PORT || 3000;

//Create app
const app = express();

//Body parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Static files
app.use(express.static("public"));

//Enable cors for all routes
app.use(cors());

// set up routes;
app.use('/aircraft', aircraftRouter);
app.use('/booking', bookingRouter);
app.use('/flights', flightsRouter);
app.use('/passengers', passengersRouter);
app.use('/staff', staffRouter);


app.listen(PORT || 3000, () => console.log(`server started on port ${PORT}`));

// const sql = `SELECT * FROM flights`;
// pool.query(sql, (err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(result);
//     }
// });

// async function startServer() {
//     console.log(pool)
//     const sql = `SELECT * FROM flight WHERE id = 11`;
//     const [rows, fields] = await pool.query(sql)
//     console.log(rows);
//     console.log(fields)
    
// }
// startServer();