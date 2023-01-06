// import pool for queries;
const pool = require('./config');

// create city object;
const city = {};

// add methods to city object;
city.addCity = async (cityDetails) => {
    try {
        const { city_name, city_id, arrival_time, departure_time } = cityDetails;
        const sql = `INSERT INTO city(city_name, city_id, arrival_time, departure_time) 
                    VALUES(?, ?, ?, ?)`; 
        const [rows, fields] = await pool.query(sql, [city_name, city_id, arrival_time, departure_time ]);
    } catch (error) {
        console.log(err)
    }

};

city.updateCity = async (cityDetails) => {
    
    try {
       // Get the keys of the object
        const keys = Object.keys(cityDetails);

        // Get the cityId
        const cityName = cityDetails[keys.pop()];

        // Start building the query
        let sql = `UPDATE city SET `;

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
        const values = keys.map(key => cityDetails[key]);

        // Add the id value to the end of the values array
        values.push(cityName);
        
        const [row, fields] = await pool.query(sql, values);
        return row;
    } catch (error) {
        console.log(err)
    }

};

city.getCity = async (cityName) => {
    try {
        const sql = `SELECT * FROM ? WHERE city_name = ?`;
        const [row, fields] = await pool.query(sql, ['city', cityName])
        return row;
    } catch (error) {
        console.log(error);
    }
};

city.getAllCities = async () => {
    try {
        const sql = `SELECT * FROM ? `;
        const [rows, fields] = await pool.query(sql, ['city'])
        return rows;
    } catch (error) {
        console.log(error);
    }
};

city.deleteCity = async (cityName) => {
     try {
        const sql = `DELETE FROM ? WHERE id = ?`;
        const [rows, fields] = await pool.query(sql, ['city', cityName])
        return rows;
    } catch (error) {
        console.log(error);
    }
}

module.exports = city;