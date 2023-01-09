// import required modules;
const passengers = require('../model/passengers');
const passengersService = require('../services/passengersService');

// create passengerscontroller object and add methods to it
const passengersController = {};

passengersController.addPassenger= async (req, res) => {
    try {
        const result = await passengersService.addPassenger(req.body);
        if (!result) {
            res.json({message: 'Error adding passenger'}).status(400)
        } else {
            const newResult = await passengersService.getAllPassengers();
            res.json(newResult).status(200);
        }
       
    } catch (error) {
        console.log(error)
       
    }
   
}


passengersController.updatePassenger= async (req, res) => {
    try {
        const passengerId = Number(req.params.id);
        const passengerDetails = {...req.body, passengerId };
        const result = await passengersService.updatePassenger(passengerDetails);
         if (!result) {
            res.json({ message: 'Error updating passenger' }).status(400);
        } else {
            const newResult = await passengersService.getAllPassengers();
            res.json(newResult).status(200);
        }
    } catch (error) {
        console.log(error);
       
    }
    
}

passengersController.getPassenger = async (req, res) => {
    try {
         const passengerId  = Number(req.params.id);
        const result = await passengersService.getPassenger(passengerId);
        if (!result) {
            res.json({ message: 'The passenger with the given ID does not exist' }).status(400)
        } else {
            res.json(result).status(200);
        }
    } catch (error) {
        console.log(error);
        
    }
    
}


passengersController.getPassengerAndBooking = async (req, res) => {
    try {
         const passengerId  = Number(req.params.id);
        const result = await passengersService.getPassengerAndBooking(passengerId);
        if (!result) {
            res.json({ message: 'The passenger with the given ID does not exist' }).status(400)
        } else {
            res.json(result).status(200);
        }
    } catch (error) {
        console.log(error);
        
    }
    
}

passengersController.getAllPassengers = async (req, res) => {
    try {
        const result = await passengersService.getAllPassengers();
        if (!result) {
            res.json({ message: 'Error fetching all passengers' }).status(400);
        } else {
            res.json(result).status(200);
        } 
    } catch (error) {
        console.log(error);
       
    }
}

passengersController.deletePassenger = async (req, res) => {
     try {
        const passengerId  = Number(req.params.id);
         const result = await passengersService.deletePassenger(passengerId);
         if (result) {
            res.json({message: `Successfully deleted passenger with id ${passengerId}`}).status(200)
         } else {
             res.json({ message: 'Error deleting passenger' }).status(400);
         }
        
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = passengersController;