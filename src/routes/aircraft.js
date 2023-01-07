const express = require('express');
const router = express.Router();
const aircraftController = require('../controllers/aircraftController');

router.get('/', aircraftController.getAllAircrafts);
router.get('/:id', aircraftController.getAircraft);
router.get('/:id/pilots', aircraftController.getAircraftAndPilots);
router.post('/', aircraftController.addAircraft);
router.patch('/:id', aircraftController.updateAircraft);
router.delete('/:id', aircraftController.deleteAircraft);


module.exports = router;