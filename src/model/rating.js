// import pool for queries;
const pool = require('./config');

// create rating object
const rating = {};

// add methods to rating object
rating.addRating = async (ratingDetail) => {
    try {
        const { rating } = ratingDetail;
        const sql = `INSERT INTO rating(rating)
                     VALUES(?)`;
        const [rows, fields] = await pool.query(sql, [rating]);
        return rows;

    } catch (error) {
        console.log(error);
    }
};

rating.updateRating = async (ratingDetail) => {
    try {
        const { rating, ratingId } = ratingDetail;
        const sql = `UPDATE rating SET rating = ? WHERE id = ?`;
        const [rows, fields] = await pool.query(sql, [rating, ratingId]);
        return rows;

    } catch (error) {
        console.log(error);
    }
};

rating.getRating = async (ratingId) => {
     try {
        const sql = `SELECT * FROM rating WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [ratingId]);
        return row;

    } catch (error) {
        console.log(error);
    }
};

rating.getAllRatings = async () => {
      try {
        const sql = `SELECT * FROM rating`;
        const [rows, fields] = await pool.query(sql);
        return rows;

    } catch (error) {
        console.log(error);
    }
};

rating.deleteRating = async (ratingId) => {
      try {
        const sql = `DELETE FROM rating WHERE id = ?`;
        const [row, fields] = await pool.query(sql, [ratingId]);
        return row;

    } catch (error) {
        console.log(error);
    }
};

module.exports = rating;