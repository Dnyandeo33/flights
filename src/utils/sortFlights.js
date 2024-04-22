const sortFlight = (flights) => {
    const sortFlights = flights.sort(
        (a, b) => new Date(a.departureDate).getTime() - new Date(b.departureDate).getTime(),
    );
    return sortFlights;
};

export default sortFlight;
