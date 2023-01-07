// import pool for queries'
const pool = require('./config');

// create aircraft object;
const aircraft = {};

// add methods to aircraft object;
aircraft.addAircraft = async (aircraftDetails) => {
    try {
        const { manufacturer, model_number, model_name, image_link } = aircraftDetails;
        const sql = `INSERT INTO airplane(manufacturer, model_number, model_name, image_link)
                     VALUES(?, ?, ?, ?)`;
        const [rows, fields] = await pool.query(sql, [manufacturer, model_number, model_name, image_link ]);
        return rows;
    } catch (error) {
        console.log(error)
    }
   
};


aircraft.updateAircraft = async (aircraftDetails) => {
    try {
       // Get the keys of the object
        const keys = Object.keys(aircraftDetails);

        // Get the aircraftId
        const aircraftId = aircraftDetails[keys.pop()];

        // Start building the query
        let sql = `UPDATE airplane SET `;

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
        const values = keys.map(key => aircraftDetails[key]);

        // Add the id value to the end of the values array
        values.push(aircraftId);
        
        const [row, fields] = await pool.query(sql, values);
        return row;

    } catch (error) {
        console.log(error)
    }
};

aircraft.getAircraft = async (aircraftId) => {
    try {
         const sql = `SELECT * FROM airplane WHERE id = ?`;
        const [row, field] = await pool.query(sql, [aircraftId]);
         return row;
    } catch (error) {
        console.log(error)
    }
};

aircraft.getAllAircrafts = async () => {
    try {
         const sql = `SELECT * FROM airplane ORDER BY id DESC`;
        const [rows, field] = await pool.query(sql);
         return rows;
    } catch (error) {
        console.log(error)
    }
};

aircraft.deleteAircraft = async (aircraftId) => {
    try {
         const sql = `DELETE FROM airplane WHERE id = ?`;
        const [row, field] = await pool.query(sql, [aircraftId]);
         return row;
    } catch (error) {
        console.log(error)
    }
};


module.exports = aircraft;