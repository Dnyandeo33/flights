import createFlight from '../components/createFlight.js';
import createTitle from '../components/createTitle.js';
import data from '../data.js';
import dom from '../dom.js';
import sortFlight from '../utils/sortFlights.js';

const loadHandler = () => {
    const hadingTitle = createTitle(data.header);
    dom.container.append(hadingTitle);

    const sortedFlight = sortFlight(data.flights);
    sortedFlight.forEach((flightData) => {
        const flightDom = createFlight(flightData);
        dom.container.append(flightDom);
    });
};

export default loadHandler;
