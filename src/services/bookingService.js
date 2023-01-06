// import booking model
const booking = require('../model/booking');

// create booking services object and add methids to it
const bookingService = {};

bookingService.addBooking = async (bookingDetails) => {
    return await booking.addBooking(bookingDetails);
}

bookingService.updateBooking = async (bookingDetails) => {
    return await booking.updateBooking(bookingDetails);
}


bookingService.getBooking = async (bookingId) => {
    return await booking.getBooking(bookingId);
}

bookingService.getAllbooking = async () => {
    return await booking.getAllBookings();
}

bookingService.deleteBooking = async (bookingId) => {
    return await booking.cancelBooking(bookingId);    
}

module.exports = bookingService;