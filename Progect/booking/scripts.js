document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");
    const pricePerNightInput = document.getElementById("pricePerNight");
    const totalCostInput = document.getElementById("totalCost");
    
    const checkinPicker = new Pikaday({ field: checkinInput });
    const checkoutPicker = new Pikaday({ field: checkoutInput });

    function calculateTotalCost() {
        const checkinDate = new Date(checkinInput.value);
        const checkoutDate = new Date(checkoutInput.value);
        const pricePerNight = parseFloat(pricePerNightInput.value);

        if (!isNaN(checkinDate) && !isNaN(checkoutDate) && !isNaN(pricePerNight)) {
            const timeDifference = checkoutDate - checkinDate;
            const daysDifference = timeDifference / (1000 * 3600 * 24);

            if (daysDifference > 0) {
                const totalCost = daysDifference * pricePerNight;
                totalCostInput.value = totalCost.toFixed(2);
            } else {
                totalCostInput.value = "0.00";
            }
        }
    }

    checkinInput.addEventListener("change", calculateTotalCost);
    checkoutInput.addEventListener("change", calculateTotalCost);
    pricePerNightInput.addEventListener("input", calculateTotalCost);

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const cardNumber = document.getElementById("cardNumber").value;
        const checkin = checkinInput.value;
        const checkout = checkoutInput.value;
        const pricePerNight = pricePerNightInput.value;
        const totalCost = totalCostInput.value;
        
        const bookingDetails = {
            name: name,
            email: email,
            cardNumber: cardNumber,
            checkin: checkin,
            checkout: checkout,
            pricePerNight: pricePerNight,
            totalCost: totalCost
        };

        console.log("Booking Details:", bookingDetails);

        alert("Бронювання успішно оформлене!");
        
        bookingForm.reset();
        totalCostInput.value = "0.00";
    });
});
