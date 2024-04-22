import sortFlights from './sortFlights.js';

describe('sort flights', () => {
    test('all flights listed with schedule time', () => {
        const actual = sortFlights([
            {
                departureDate: '2023-08-15 13:45:00',
            },
            {
                departureDate: '2023-08-05 13:45:00',
            },
        ]);

        const expected = [
            {
                departureDate: '2023-08-05 13:45:00',
            },
            {
                departureDate: '2023-08-15 13:45:00',
            },
        ];

        expect(actual).toEqual(expected);
    });
});
