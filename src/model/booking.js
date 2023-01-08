// import pool for queries;
const pool = require('./config');

// create booking object
const booking = {};

// add methods to booking object;
booking.addBooking = async (bookingDetails) => {
    try {
        const { surname, given_name, address, telephone, origin, destination, flight_date, seat_count, price } = bookingDetails;
    const sql = `INSERT INTO booking(surname, given_name, address, telephone, origin, destination, flight_date, seat_count, price)
                 VALUES(?, ?, ?, ?, ?, ?, ?, ?, ? )`;
    const [rows, fields] = await pool.query(sql, [surname, given_name, address, telephone, origin, destination, flight_date, seat_count, price ]);
    return rows;
    } catch (error) {
        console.log(error);
    }
    
}

booking.updateBooking = async (bookingDetails) => {
    try {
       // Get the keys of the object
        const keys = Object.keys(bookingDetails);

        // Get the bookingId
        const bookingId = bookingDetails[keys.pop()];

        // Start building the query
        let sql = `UPDATE booking SET `;

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
        const values = keys.map(key => bookingDetails[key]);

        // Add the id value to the end of the values array
        values.push(bookingId);
        
        const [row, fields] = await pool.query(sql, values);
        return row;

    } catch (error) {
        console.log(error);
    }
}

booking.getBooking = async (bookingId) => {
    try {
        const sql = `SELECT * FROM booking WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [bookingId]);
        return row;
    } catch (error) {
        console.log(error);
    }
}
booking.getAllBookings = async () => {
    try {
        const sql = `SELECT * FROM booking ORDER BY id DESC`;
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (error) {
        console.log(error);
    }
}


booking.cancelBooking = async (bookingId) => {
    try {
        const sql = `DELETE FROM booking WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [bookingId]);
        return row;
    } catch (error) {
        console.log(error);
    }
}


module.exports = booking;
