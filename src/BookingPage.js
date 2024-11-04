import BookingForm from "./BookingForm";
import BookingHeader from "./BookingHeader";

const BookingPage = (props) => {
    return (
        <>
        <BookingHeader/>
        <BookingForm availableTimes = {props.availableTimes} dispatch={props.dispatch} submit={props.submit}/>
       </>
    );
}

export default BookingPage;