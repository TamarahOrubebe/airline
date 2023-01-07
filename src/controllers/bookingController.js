// import required modules;
const booking = require('../model/booking');
const flights = require('../model/flights');
const passengers = require('../model/passengers');
const flightsService = require('../services/flightsService');
const passengersService = require('../services/passengersService');
const bookingService = require('../services/bookingService');

// create bookingcontroller object and add methods to it
const bookingController = {};

bookingController.addBooking = async (req, res) => {
    try {
        const { surname, given_name, address, telephone, origin, destination, flight_date, seat_count, price } = req.body;
        const passengerDetails = { surname, given_name, address, telephone };
        const row = await passengersService.addPassenger(passengerDetails);
        const passenger_id = row.insertId;
        const staff_id = Math.floor(Math.random() * 10) + 1;
        const pilot_id = staff_id % 2 === 0 ? staff_id : staff_id + 1;
        const airplane_id = Math.floor(Math.random() * 3) + 1;
        const flightDetails = { origin, destination, flight_date, staff_id, airplane_id, passenger_id, pilot_id }
        await flightsService.addFlight(flightDetails);
       
        const result = await bookingService.addBooking(req.body);
        if (!result) {
            res.json({ message: 'Error adding Booking' }).status(400);
        } else {
            const newResult = bookingController.getAllbookings().sort((a, b) => b.id - a.id);
            res.json(newResult).status(200);
        
        }
        
    } catch (error) {
        console.log(error)
       
    }
   
}


bookingController.updateBooking = async (req, res) => {
    try {
        const bookingId = Number(req.params.id);
        const bookingDetails = { ...req.body, bookingId };
        const result = await bookingService.updateBooking(bookingDetails);
        if (!result) {
            res.json({ message: 'Error updating Booking' }).status(400);
        } else {
            res.json(result).status(200);
        }
       
    } catch (error) {
        console.log(error);
       
    }
    
}

bookingController.getBooking = async (req, res) => {
    try {
        const bookingId  = Number(req.params.id);
        const result = await bookingService.getBooking(bookingId);
    if (!result) {
        res.json({ message: 'The Booking with the given ID does not exist' }).status(400)
    } else {
        res.json(result).status(200);
    }
    } catch (error) {
        console.log(error);
       
    }
    
}

bookingController.getAllbookings = async (req, res) => {
    try {
        const result = await bookingService.getAllbooking();
        if (!result) {
            res.json({ message: 'Error fetching all booking' }).status(400);
        } else {
             res.json(result).status(200);
        }
       
    
    } catch (error) {
        console.log(error);
        
    }
}

bookingController.deleteBooking = async (req, res) => {
     try {
        const bookingId  = Number(req.params.id);
         const result = await bookingService.deleteBooking(bookingId);
         if (result) {
            res.json({message: `Successfully deleted Booking with id ${bookingId}`}).status(200)
         } else {
            res.json({ message: 'Error deleting Booking' }).status(400);
         }
        
    } catch (error) {
        console.log(error);
        
    }
}


module.exports = bookingController;