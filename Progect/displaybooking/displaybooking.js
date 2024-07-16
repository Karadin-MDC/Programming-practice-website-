document.addEventListener("DOMContentLoaded", function () {
    const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));

    if (bookingDetails) {
        document.getElementById("nameDisplay").textContent = bookingDetails.name;
        document.getElementById("emailDisplay").textContent = bookingDetails.email;
        document.getElementById("cardNumberDisplay").textContent = bookingDetails.cardNumber;
        document.getElementById("checkinDisplay").textContent = bookingDetails.checkin;
        document.getElementById("checkoutDisplay").textContent = bookingDetails.checkout;
        document.getElementById("pricePerNightDisplay").textContent = bookingDetails.pricePerNight;
        document.getElementById("totalCostDisplay").textContent = bookingDetails.totalCost;
    } else {
        document.getElementById("bookingInfo").textContent = "Немає збережених даних про бронювання.";
    }

    document.getElementById("cancelBooking").addEventListener("click", function () {
        localStorage.removeItem('bookingDetails');
        alert("Бронювання скасовано.");
        window.location.reload();
    });
});
