import createElement from './createElements.js';

const createTitle = (titles) => {
    const flightList = document.createElement('div');
    flightList.classList.add('flight');

    titles.forEach((title) => {
        const headingTitle = createElement('div', 'heading', title);
        flightList.append(headingTitle);
    });
    return flightList;
};
export default createTitle;
