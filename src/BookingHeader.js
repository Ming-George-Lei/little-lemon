import restaurant from './assets/restaurant.jpg';

const BookingHeader = () => {
    return (
        <header>
            <div className="bookingheader">
                <img src={restaurant} alt="restaurant-img"></img>
                <h1>Reservation</h1>
            </div>
        </header>
    )
}

export default BookingHeader;