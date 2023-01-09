// import pool for queries;
const pool = require('./config');

// create flights object
const flights = {};

// add methods to flights object;
flights.addFlight = async (flightDetails) => {
    try {
        const { origin, destination, flight_date, staff_id, airplane_id, passenger_id, pilot_id, arrival_time, departure_time } = flightDetails;
        const sql = `INSERT INTO flight(origin, destination, flight_date, staff_id, airplane_id, passenger_id, pilot_id, arrival_time,
            departure_time) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const [rows, fields] = await pool.query(sql, [origin, destination, flight_date, staff_id, airplane_id, passenger_id, pilot_id,
            arrival_time, departure_time]);
        return rows;

    } catch (error) {
        console.log(error);
    }
};

flights.updateFlight = async (flightDetails) => {
    try {
         // Get the keys of the object
        const keys = Object.keys(flightDetails);

        // Get the flightId
        const flightId = flightDetails[keys.pop()];

        // Start building the query
        let sql = `UPDATE flight SET `;

         // Add the column assignments to the query
        keys.forEach((key, index) => {
            // Add a comma separator between column assignments, except for the last one
            if (index < keys.length - 1) {
                sql += `${key} = ?, `;
            } else {
                sql += `${key} = ? `;
            }
        })

        // Add the WHERE clause to the query
        sql += `WHERE id = ?`;

         // Get the values of the object in the same order as the keys
        const values = keys.map(key => flightDetails[key]);

        // Add the id value to the end of the values array
        values.push(flightId);

        const [row, fields] = await pool.query(sql, values);
        return row;

    } catch (error) {
        console.log(error);
    }
};

flights.getFlight = async (flightId) => {
    try {
        const sql = `SELECT * FROM flight WHERE id = ?`;  
        const [row, fields] = await pool.query(sql, [flightId]);
        return row;

    } catch (error) {
        console.log(error)
    }
};

flights.getAllFlights = async () => {
     try {
        const sql = `SELECT * FROM flight ORDER BY id DESC`;  
        const [rows, fields] = await pool.query(sql);
        return rows;

    } catch (error) {
        console.log(error)
    }
};

flights.deleteFlight = async (flightId) => {
     try {
        const sql = `DELETE FROM flight WHERE id = ?`;  
        const [row, fields] = await pool.query(sql, [flightId]);
        return row;

    } catch (error) {
        console.log(error)
    }
};

module.exports = flights;