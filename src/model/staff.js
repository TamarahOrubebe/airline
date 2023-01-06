// import pool for queries
const pool = require('./config');

// create staff object
const staff = {};

// add methods to staff object
staff.addStaff = async (staffDetails) => {
    try {
        const { surname, given_name, address, telephone, salary, staff_role } = staffDetails;
        const sql = `INSERT INTO staff(surname, given_name, address, telephone, salary, staff_role)
                     VALUES(?, ?, ?, ?, ?, ?)`;
        const [rows, fields] = await pool.query(sql, [surname, given_name, address, telephone, salary, staff_role]);
        return rows;

    } catch (error) {
        console.log(error)
    }
}

staff.updateStaff = async (staffDetails) => {
     try {
        // Get the keys of the object
        const keys = Object.keys(staffDetails);

        // Get the staffId
        const staffId = staffDetails[keys.pop()];

        // Start building the query
        let sql = `UPDATE staff SET `;

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
        const values = keys.map(key => staffDetails[key]);

        // Add the id value to the end of the values array
        values.push(staffId);
        
        const [row, fields] = await pool.query(sql, values);
        return row;

    } catch (error) {
        console.log(error)
    }
}

staff.getStaff = async (staffId) => {
    try {
    
        const sql = `SELECT * FROM staff WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [staffId]);
        return row;

    } catch (error) {
        console.log(error)
    }
}

staff.getAllStaff = async () => {
     try {
        const sql = `SELECT * FROM staff`;
        const [rows, fields] = await pool.query(sql);
        return rows;

    } catch (error) {
        console.log(error)
    }
}

staff.deleteStaff = async (staffId) => {
     try {
        const sql = `DELETE FROM staff WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [staffId]);
        return row;

    } catch (error) {
        console.log(error)
    }
}

module.exports = staff;