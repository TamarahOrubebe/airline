// import passenger model
const passengers = require('../model/passengers');

// create passenger service object and addd methods
const passengersService = {};

passengersService.addPassenger = async (passengerDetails) => {
    return await passengers.addPassenger(passengerDetails);
}

passengersService.updatePassenger = async (passengerDetails) => {
    return await passengers.updatePassenger(passengerDetails);
}


passengersService.getPassenger = async (passengerId) => {
    return await passengers.getPassenger(passengerId);
}

passengersService.getPassengerAndBooking = async (passengerId) => {
    return await passengers.getPassengerAndBooking(passengerId);
}

passengersService.getAllPassengers = async () => {
    return await passengers.getAllpassengers();
    
}

passengersService.deletePassenger = async (passengerId) => {
    return await passengers.deletePassenger(passengerId);    
}

module.exports = passengersService;