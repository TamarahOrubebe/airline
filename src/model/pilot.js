// import pool for queries
const pool = require('./config');

// create pilot object
const pilot = {};

// add methods to pilot object
pilot.addPilot = async (pilotDetails) => {
    try {
        const { rating_id, airplane_id, staff_id } = pilotDetails;
        const sql = `INSERT INTO pilot(rating_id, airplane_id, staff_id)
                     VALUES(${rating_id}, ${airplane_id}, ${staff_id})`;
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (error) {
        console.log(error)
    }
};

pilot.updatePilot = async (pilotDetails) => {
    try {
        
       // Get the keys of the object
        const keys = Object.keys(pilotDetails);

        // Get the pilotId
        const pilotId = pilotDetails[keys.pop()];

        // Start building the query
        let sql = `UPDATE pilot SET `;

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
        const values = keys.map(key => pilotDetails[key]);

        // Add the id value to the end of the values array
        values.push(pilotId);
        
        const [row, fields] = await pool.query(sql, values);
        return row;
    } catch (error) {
        console.log(error)
    }
};

pilot.getPilot = async (pilotId) => {
    try {   
        const sql = `SELECT * FROM pilot WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [pilotId]);
        return row;
    } catch (error) {
        console.log(error)
    }
}

pilot.getAllPilots = async () => {
      try {   
        const sql = `SELECT * FROM pilot ORDER BY id DESC`;
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (error) {
        console.log(error)
    }
};

pilot.deletePilot = async (pilotId) => {
      try {   
        const sql = `DELETE FROM pilot WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [pilotId]);
        return row;
    } catch (error) {
        console.log(error)
    }
};

module.exports = pilot;
