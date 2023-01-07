const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllbookings);
router.get('/:id', bookingController.getBooking);
router.post('/', bookingController.addBooking);
router.patch('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);


module.exports = router;