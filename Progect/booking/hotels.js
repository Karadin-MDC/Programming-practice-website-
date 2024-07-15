const hotels = {
    hotel1: { name: "Hilton Hotel", pricePerNight: 12500},
    hotel2: { name: "Fairmont Grand Hotel", pricePerNight: 8570 },
    hotel3: { name: "FireInn Hotel", pricePerNight: 1300 },
    hotel4: { name: "PracticOtel", pricePerNight: 1080 },
    hotel5: { name: "IrisHotels", pricePerNight: 1590 },
};

function getHotelPrice(hotelId) {
    return hotels[hotelId].pricePerNight;
}

function getHotelName(hotelId) {
    return hotels[hotelId].name;
}
