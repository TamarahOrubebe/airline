// import required modules;
const aircraft = require('../model/aircraft');
const aircraftService = require('../services/aircraftService');

// create aircraft controller object and add methods to it
const aircraftController = {};

aircraftController.addAircraft = async (req, res) => {
    try {
    
        const result = await aircraftService.addAircraft(req.body);
        if (!result) {
            res.json({message: 'Error adding an aircraft'}).status(400)
        } else {
            const newResult = await aircraftService.getAllAircrafts()
            res.json(newResult).status(200);
           
        }
        
    } catch (error) {
        console.log(error)
       
    }
   
}


aircraftController.updateAircraft = async (req, res) => {
    try {
        const aircraftId  = Number(req.params.id);
        const aircraftDetails = {...req.body, aircraftId};
        const result = await aircraftService.updateAircraft(aircraftDetails);
        if (!result) {
           res.json({ message: 'Error updating aircraft' }).status(400);
        } else {
            const newResult = await aircraftService.getAllAircrafts()
            res.json(newResult).status(200);
        }
    } catch (error) {
        console.log(error);
        
    }
    
}

aircraftController.getAircraft = async (req, res) => {
    try {
        const aircraftId  = Number(req.params.id);
        const result = await aircraftService.getAircraft(aircraftId);
    if (!result) {
        res.json({ message: 'The Aircraft with the given ID does not exist' }).status(400)
    } else {
        res.json(result).status(200);
    }
    } catch (error) {
        console.log(error);
       
    }
    
}

aircraftController.getAircraftsAndPilots = async (req, res) => {
    try {
        const aircraftId  = Number(req.params.id);
        const result = await aircraftService.getAircraftAndPilot(aircraftId);
    if (!result) {
        res.json({ message: 'The Aircraft with the given ID does not exist' }).status(400)
    } else {
        res.json(result).status(200);
    }
    } catch (error) {
        console.log(error);
       
    }
    
}

aircraftController.getAllAircrafts = async (req, res) => {
    try {
        const result = await aircraftService.getAllAircrafts();
        if (!result) {
            res.json({ message: 'Error fetching all aircrafts' }).status(400);
        } else {
            res.json(result).status(200);
        }
    
    } catch (error) {
        console.log(error);
        
    }
}

aircraftController.deleteAircraft = async (req, res) => {
     try {
        const aircraftId  = Number(req.params.id);
         const result = await aircraftService.deleteAircraft(aircraftId);
         if (result) {
            res.json({message: `Successfully deleted aircraft with id ${aircraftId}`}).status(200)
         } else {
              res.json({ message: 'Error deleting aircraft' }).status(400);
         }
        
    } catch (error) {
        console.log(error);
       
    }
}


module.exports = aircraftController;