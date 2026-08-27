const addressLat = 10;
const addressLong = 15;
const positionLat = 0;
const positionLong = 0;

function distanceToObject (addLat, addLong, posLat, pos,Long) {
    return Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
}

console.log (`Расстояние до адреса = ${distanceToObject(addressLat, addressLong, positionLat, positionLong)}`);