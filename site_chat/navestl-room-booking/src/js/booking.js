document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const checkInDate = document.getElementById('check-in');
    const checkOutDate = document.getElementById('check-out');
    const guestsInput = document.getElementById('guests');
    const submitButton = document.getElementById('submit-button');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const checkIn = new Date(checkInDate.value);
        const checkOut = new Date(checkOutDate.value);
        const guests = parseInt(guestsInput.value, 10);

        if (validateBooking(checkIn, checkOut, guests)) {
            alert('Booking successful!');
            // Here you can add code to handle the booking, e.g., send data to a server
        }
    });

    function validateBooking(checkIn, checkOut, guests) {
        const today = new Date();
        if (checkIn < today) {
            alert('Check-in date cannot be in the past.');
            return false;
        }
        if (checkOut <= checkIn) {
            alert('Check-out date must be after check-in date.');
            return false;
        }
        if (guests <= 0) {
            alert('Number of guests must be at least 1.');
            return false;
        }
        return true;
    }
});