var bookingExpanded = false;

$("#booking").on('click', function() {
    if(!bookingExpanded) {
        $(this).children('span').html("Phone: 502-500-8727<br>Email: maddylobeck@gmail.com").addClass('booking-info-expanded');
        bookingExpanded = true;
    } else {
        $(this).children('span').html("Booking Info").removeClass('booking-info-expanded');
        bookingExpanded = false;
    }
})