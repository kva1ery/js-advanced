'use strict';

const flights = ['Russia', 'USA', 'China', 'USA', 'Russia'];
const setFlights = new Set(flights);
console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('Russia'));
console.log(setFlights.has('S'));
setFlights.add('France');
setFlights.delete('USA');
//setFlights.clear();
console.log(setFlights);

for (const flight of setFlights) {
    console.log(flight);
}

console.log([...setFlights]);