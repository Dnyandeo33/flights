import createElement from './createElements.js';

const createFlight = (flightData) => {
    const flightList = document.createElement('div');
    flightList.classList.add('flight');

    const nameEle = createElement('div', 'name', flightData.name);
    const planeEle = createElement('div', 'plane', flightData.plane);
    const departureDateEle = createElement('div', 'departureDate', flightData.departureDate);
    const originEle = createElement('div', 'origin', flightData.origin);
    const arrivalDateEle = createElement('div', 'arrivalDate', flightData.arrivalDate);
    const destinationEle = createElement('div', 'destination', flightData.destination);
    const stopsEle = createElement('div', 'stops', flightData.stops);

    flightList.append(
        nameEle,
        planeEle,
        departureDateEle,
        originEle,
        arrivalDateEle,
        destinationEle,
        stopsEle,
    );
    return flightList;
};

export default createFlight;
