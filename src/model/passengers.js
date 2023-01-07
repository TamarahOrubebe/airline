// import pool for queries
const pool = require('./config');

// create passengers object
const passengers = {};

// add methods to passengers object
passengers.addPassenger = async (passengerDetails) => {
    try {
        const { surname, given_name, address, telephone } = passengerDetails;
        const sql = `INSERT INTO passenger(surname, given_name, address, telephone)
                     VALUES(?, ?, ?, ?)`;
        const [rows, fields] = await pool.query(sql, [ surname, given_name, address, telephone ]);
        return rows;
    } catch (error) {
        console.log(error);
    }
};

passengers.updatePassenger = async (passengerDetails) => {

    try {
        // Get the keys of the object
        const keys = Object.keys(passengerDetails);

        // Get the passengerId
        const passengerId = passengerDetails[keys.pop()];

        // Start building the query
        let sql = `UPDATE passenger SET `;

         // Add the column assignments to the query
        keys.forEach((key, index) => {
            // Add a comma separator between column assignments, except for the last one
            if (index < keys.length - 1) {
                sql += `${key} = ?,`;
            } else {
                sql += `${key} = ?`;
            }
        })

        // Add the WHERE clause to the query
        sql += `WHERE id = ?`;

         // Get the values of the object in the same order as the keys
        const values = keys.map(key => passengerDetails[key]);

        // Add the id value to the end of the values array
        values.push(passengerId)

        const [row, fields] = await pool.query(sql,values);
        return row;
    } catch (error) {
        console.log(error);
    }
};


passengers.getPassenger = async (passengerId) => {
    try {
        const sql = `SELECT * FROM passenger WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [passengerId]);
        return row;
    } catch (error) {
        console.log(error);
    }
};

passengers.getPassengerAndBooking = async (passengerId) => {
    try {
        const sql = `SELECT surname, given_name, address, telephone, origin, destination, flight_date, arrival_time,
        departure_time FROM passenger JOIN flight ON flight.passenger_id = passenger.id AND passenger.id = ?`;
        const [row, fields] = await pool.query(sql, [passengerId]);
        return row;
    } catch (error) {
        console.log(error);
    }
};

passengers.getAllpassengers = async () => {
    try {
        const sql = `SELECT * FROM passenger ORDER BY id DESC`;
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (error) {
        console.log(error);
    }
};

passengers.deletePassenger = async (passengerId) => {
   try {
        const sql = `DELETE FROM passenger WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [passengerId]);
        return row;
    } catch (error) {
        console.log(error);
    }
}

module.exports = passengers;

