var bookingExpanded = false;

$("#booking").on('click', function() {
    if(!bookingExpanded) {
        $(this).children('span').html("Phone: 502-500-8727<br>Email: maddylobeck@gmail.com").css("font-size", "36px");
        bookingExpanded = true;
    } else {
        $(this).children('span').html("Booking Info").css("font-size", "48px");
        bookingExpanded = false;
    }
})