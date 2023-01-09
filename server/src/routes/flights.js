const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flightsController');

router.get('/', flightsController.getAllFlights);
router.get('/:id', flightsController.getFlight);
router.post('/', flightsController.addFlight);
router.patch('/:id', flightsController.updateFlight);
router.delete('/:id', flightsController.deleteFlight);


module.exports = router;