const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');
const MilitaryType = require('./Models/MilitaryTypes');
const ClassificationLevel = require('./Models/ClassificationLevel');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPlanes() {
        return this.planes;
    }

    getPassengerPlanes() {
        let passengerPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof PassengerPlane) {
                passengerPlanes.push(plane);
            }
        }
        return passengerPlanes;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        }
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengerCapacity() {
        let planeWithMaxCapacity = this.getPassengerPlanes()[0];
        for (let i = 0; i < this.getPassengerPlanes().length; i++) {
            if (this.getPassengerPlanes()[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = this.getPassengerPlanes()[i];
            }
        }
        return planeWithMaxCapacity.passengersCapacity;
    }

    getTransportMilitaryPlanes() {
        let transportMilitaryPlanes = [];
        for (let i = 0; i < this.getMilitaryPlanes().length; i++) {
            if (this.getMilitaryPlanes()[i].getMilitaryType() === MilitaryType.TYPE_TRANSPORT) {
                transportMilitaryPlanes.push(this.getMilitaryPlanes()[i]);
            }
        }
        return transportMilitaryPlanes;
    }

    getBomberMilitaryPlanes() {
        let bomberMilitaryPlanes = [];
        for (let i = 0; i < this.getMilitaryPlanes().length; i++) {
            if (this.getMilitaryPlanes()[i].getMilitaryType() === MilitaryType.TYPE_BOMBER) {
                bomberMilitaryPlanes.push(this.getMilitaryPlanes()[i]);
            }
        }
        return bomberMilitaryPlanes;
    }

    getExperimentalPlanes() {
        let experimentalPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof ExperimentalPlane) {
                experimentalPlanes.push(plane);
            }
        }
        return experimentalPlanes;
    }

    hasBomberPlanes() {
        return this.getBomberMilitaryPlanes()
            .filter(militaryPlane => militaryPlane.getMilitaryType() === MilitaryType.TYPE_BOMBER).length > 0;
    }

    hasTransportPlanes() {
        return this.getTransportMilitaryPlanes()
            .filter(militaryPlane => militaryPlane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT).length > 0;
    }

    hasExperimentalPlanesClassificationHigherThanUnclassified() {
        for (let experimentalPlane of this.getExperimentalPlanes()) {
            return experimentalPlane.classificationLevel !== ClassificationLevel.UNCLASSIFIED;
        }
    }

    isSortingByMaxLoadCapacityCorrect() {
        for (let i = 0; i < this.sortPlanesByMaxLoadCapacity().getPlanes().length - 1; i++) {
            !this.sortPlanesByMaxLoadCapacity().getPlanes()[i].getMaxLoadCapacity() > this.sortPlanesByMaxLoadCapacity().getPlanes()[i+1].getMaxLoadCapacity();
        }
        return true;
    }

    sortPlanesByMaxDistance() {
        this.planes.sort((previousPlane, nextPlane) => (previousPlane.getMaxFlightDistance() > nextPlane.getMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    sortPlanesByMaxSpeed() {
        this.planes.sort((previousPlane, nextPlane) => (previousPlane.getMaxSpeed() > nextPlane.getMaxSpeed()) ? 1 : -1);
        return this;
    }

    sortPlanesByMaxLoadCapacity() {
        this.planes.sort((previousPlane, nextPlane) => (previousPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity()) ? 1 : -1);
        return this;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
