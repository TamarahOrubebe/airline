const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');


router.get('/', staffController.getAllStaff);
router.get('/:id', staffController.getStaff);
router.post('/', staffController.addStaff);
router.patch('/:id', staffController.updateStaff);
router.delete('/:id', staffController.deleteStaff);


module.exports = router;
