const addressLat = 10;
const addressLong = 15;
const postionLat = 0;
const positionLong = 0;

let distanceToObject = sqrt((addressLat - postionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log (`Расстояние до адреса = ${distanceToObject}`);