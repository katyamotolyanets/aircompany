import {assert} from 'chai';
import {describe} from 'mocha';
import {airport} from '../index.mjs'
import PassengerPlane from '../planes/passengerPlane.mjs';

let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

describe('Airport tests', () => {

    it('airport has at least one military plane with transport type', () => {
        assert(airport.hasTransportPlanes());
    });

    it('does passenger plane have max capacity', () => {
        assert.equal(airport.getPassengerPlaneWithMaxPassengerCapacity(),planeWithMaxPassengerCapacity.passengersCapacity);
    });

    it('is planes sorting by max load capacity correct', () => {
        assert(airport.isSortingByMaxLoadCapacityCorrect());
    })

    it('airport has at least one Bomber in Military planes', () => {
        assert(airport.hasBomberPlanes());
    })

    it('does experimental planes have classification level higher than unclassified', () => {
        assert(airport.hasExperimentalPlanesClassificationHigherThanUnclassified());
    });
});



