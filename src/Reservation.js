import { useNavigate } from 'react-router-dom';
import restaurantfood from './assets/restauranfood.jpg';

const Reservation = () => {
    const navigate = useNavigate();

    const handleClickReservation = () => {
        navigate("/booking");
    }; 


    return (
        <section className="reservation-container">
            <div className="reservation-introduction">
                <p className="reservation-title">Little Lemon</p>
                <p className="reservation-position">Chicago</p>
                <p>We are a family owned Mediterranean restaurant, located on the Michigan Avenue. We focused on traditional recipes served with a modern twist.</p>
                <button className="reservation-button" aria-label="click reverse button" onClick={handleClickReservation}>Reserve a table</button>
            </div>
            <div className="reservation-image">
                <img src={restaurantfood} alt="restaurant"></img>
            </div>
        </section>
    )
}

export default Reservation;