import { useEffect, useState } from 'react';

const ConfirmedBooking = () => {
    const [bookingInfo, setBookingInfo] = useState({fullName: "", telephone: "", email: "", reservationdate: "", reservationtime: "", numberOfGuests: "", occasion: ""});

    useEffect(() => {
        const formData = localStorage.getItem("form-data");
        const parsedData = JSON.parse(formData);
        if (parsedData) {
            setBookingInfo(parsedData);
        }
        return () => {
            localStorage.removeItem("form-data");
        }
    }, []);

    return (
        <div className="confirmation-container">
            <h1>Your Booking has been confirmed!</h1>
            <h4>Your Booking Information is listed below: </h4>
            <div className="confirmation-details">
                <p className="fullName"><strong>FullName: </strong> {bookingInfo.fullName}</p>
                <p className="telephone"><strong>Tel: </strong>{bookingInfo.telephone}</p>
                <p className="email"><strong>Email: </strong>{bookingInfo.email}</p>
                <p className="reservation-date"><strong>Reservation Date: </strong>{bookingInfo.reservationdate}</p>
                <p className="reservation-time"><strong>Reservation Time: </strong>{bookingInfo.reservationtime}</p>
                <p className="numberOfGuests"><strong>Number Of Guests: </strong>{bookingInfo.numberOfGuests}</p>
                <p className="occasion"><strong>Occasion: </strong>{bookingInfo.occasion}</p>
                <span>Comments: </span>
                <p className="comments">{bookingInfo.comments}</p>
            </div>
        </div>
    )
}

export default ConfirmedBooking;