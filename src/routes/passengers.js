const express = require('express');
const router = express.Router();
const passengersController = require('../controllers/passengersController');

router.get('/', passengersController.getAllPassengers);
router.get('/:id', passengersController.getPassenger);
router.post('/', passengersController.addPassenger);
router.patch('/:id', passengersController.updatePassenger);
router.delete('/:id', passengersController.deletePassenger);


module.exports = router;
