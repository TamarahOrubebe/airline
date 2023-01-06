// import required modules;
const flights = require('../model/flights');
const flightsService = require('../services/flightsService');

// create flightscontroller object and add methods to it
const flightsController = {};

flightsController.addFlight = async (req, res) => {
    try {
        const result = await flightsService.addFlight(req.body);
        if (!result) {
            res.json({message: 'Error adding Flight'}).status(400)
        } else {
            res.json(result).status(200);
        }
       
    } catch (error) {
        console.log(error)
       
    }
   
}


flightsController.updateFlight= async (req, res) => {
    try {
        const flightId = Number(req.params.id);
        const flightDetails = { ...req.body, flightId };
        const result = await flightsService.updateFlight(flightDetails);
        if (!result) {
            res.json({ message: 'Error updating Flight' }).status(400);
        } else {
            res.json(result).status(200);
        }
    } catch (error) {
        console.log(error);
        
    }
    
}

flightsController.getFlight = async (req, res) => {
    try {
        const flightId  = Number(req.params.id);
        const result = await flightsService.getFlight(flightId);
        if (!result) {
            res.json({ message: 'The Flight with the given ID does not exist' }).status(400)
        } else {
            res.json(result).status(200);
        }
    } catch (error) {
        console.log(error);
        
    }
    
}

flightsController.getAllFlights = async (req, res) => {
    try {
        const result = await flightsService.getAllFlights();
        if (!result) {
            res.json({ message: 'Error fetching all flights' }).status(400);
        } else {
            res.json(result).status(200);
        }
    } catch (error) {
        console.log(error);
        
    }
}

flightsController.deleteFlight = async (req, res) => {
     try {
         const flightId  = Number(req.params.id);
         const result = await flightsService.deleteFlight(flightId);
         if (result) {
            res.json({message: 'Successfully deleted Flight'}).status(200)
         } else {
            res.json({ message: 'Error deleting Flight' }).status(400);
         }
        
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = flightsController;