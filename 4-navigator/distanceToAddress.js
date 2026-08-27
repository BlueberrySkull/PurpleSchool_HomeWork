const addressLat = 10;
const addressLong = 15;
const positionLat = 0;
const positionLong = 0;

function distanceToObject (addLat, addLong, posLat, posLong) {
    return Math.sqrt((addLat - posLat) ** 2 + (addLong - posLong) ** 2);
}

console.log (`Расстояние до адреса = ${distanceToObject(addressLat, addressLong, positionLat, positionLong)}`);