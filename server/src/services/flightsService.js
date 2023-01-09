// import flights model
const flights = require('../model/flights');

// create flights services object and add methids to it
const flightsService = {};

flightsService.addFlight = async (flightDetails) => {
    return await flights.addFlight(flightDetails);
}

flightsService.updateFlight = async (flightDetails) => {
    return await flights.updateFlight(flightDetails);
}


flightsService.getFlight = async (flightId) => {
    return await flights.getFlight(flightId);
}

flightsService.getAllFlights = async () => {
    return await flights.getAllFlights();
    
}

flightsService.deleteFlight = async (flightId) => {
    return await flights.deleteFlight(flightId);    
}

module.exports = flightsService;