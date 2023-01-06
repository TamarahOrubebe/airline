// import aircraft model
const aircraft = require('../model/aircraft');

// create aircraft services object and add methids to it
const aircraftService = {};

aircraftService.addAircraft = async (aircraftDetails) => {
    return await aircraft.addAircraft(aircraftDetails);
}

aircraftService.updateAircraft = async (aircraftDetails) => {
    return await aircraft.updateAircraft(aircraftDetails);
}


aircraftService.getAircraft = async (aircraftId) => {
    return await aircraft.getAircraft(aircraftId);

}

aircraftService.getAllAircrafts = async () => {
    return await aircraft.getAllAircrafts();
    
}

aircraftService.deleteAircraft = async (aircraftId) => {
    return await aircraft.deleteAircraft(aircraftId);    
}

module.exports = aircraftService;