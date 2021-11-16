import PassengerPlane from './planes/passengerPlane.mjs';
import ExperimentalPlane from './planes/experimentalPlane.mjs';
import MilitaryPlane from './planes/militaryPlane.mjs';
import Airport from './airport.mjs';
import {ClassificationLevel} from './models/classificationLevel.mjs';
import {MilitaryTypes} from './models/militaryTypes.mjs';
import {ExperimentalTypes} from './models/experimentalTypes.mjs';

const planes = [
    new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
    new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
    new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
    new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
    new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
    new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
    new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
    new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
    new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryTypes.TYPE_BOMBER),
    new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryTypes.TYPE_BOMBER),
    new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryTypes.TYPE_BOMBER),
    new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryTypes.TYPE_FIGHTER),
    new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryTypes.TYPE_FIGHTER),
    new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryTypes.TYPE_TRANSPORT),
    new ExperimentalPlane("Bell X-14", 277, 482, 500, ExperimentalTypes.HIGH_ALTITUDE, ClassificationLevel.SECRET),
    new ExperimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, ExperimentalTypes.VTOL, ClassificationLevel.TOP_SECRET)
];
let airport = new Airport(planes);

(function run() {
    let militaryAirport = new Airport(airport.getMilitaryPlanes());
    let passengerAirport = new Airport(airport.getPassengerPlanes());
    console.log(`Military airport sorted by max distance: ${Airport.print(militaryAirport.sortPlanesByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${Airport.print(passengerAirport.sortPlanesByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${Airport.print(passengerAirport.getPassengerPlaneWithMaxPassengerCapacity())}`);
})();

export {airport};

