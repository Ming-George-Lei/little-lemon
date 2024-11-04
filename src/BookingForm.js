import { useForm } from 'react-hook-form';

const BookingForm = (props) => {
    const formatDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const dateFormat = `${year}-${month}-${day}`;
        return dateFormat;
    }

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: {
                reservationdate: formatDate()
            }
        }
    );

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem("form-data", JSON.stringify(data));
        props.submit(data);
    };

    const handleDateChange = (e) => {
        const date = e.target.value
        props.dispatch(new Date(date));
    };

    return (
        <div className="form-container">
        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="fullName">
                <div className="fullName-input">
                    <label htmlFor="fullName">FullName: </label>
                    <input type="text" 
                        alt="full_name"
                        id="fullName"
                        aria-label="please input fullName"
                            {
                                ...register("fullName", {
                                    required: "Full name is required.",
                                    minLength: {
                                        value: 5,
                                        message: "Full name must be at least 5 characters."
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "Full name cannot exceed 100 characters."
                                    }
                                })
                            }
                    />
                </div>
                {errors.fullName && (
                    <span className="fullname-error">{errors.fullName.message}</span>
                )}
            </div>
            <div className="telephone">
                <div className="telephone-input">
                    <label htmlFor="telephone">Tel: </label>
                    <input type="tel"
                        alt="telephone"
                        id="telephone"
                        aria-label="please input telephone number"
                        placeholder="(123) 456-7890"
                        {
                            ...register("telephone", {
                                required: "Telephone number is required.",
                                pattern: {
                                    value: /^\(\d{3}\) \d{3}-\d{4}$/,
                                    message: "Please enter a valid phone number. (xxx) xxx-xxxx."
                                }
                            })
                        }
                    />
                </div>
                {errors.telephone && (
                    <span className="telephone-error">{errors.telephone.message}</span>
                )}
            </div>
            <div className="email">
                <div className="email-input">
                    <label htmlFor="email">Email: </label>
                    <input type="email"
                        alt="email"
                        id="email"
                        aria-label="please input email"
                        placeholder="@example.com"
                        {
                            ...register("email", {
                                required: "Email is requird.",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address."
                                }
                            })
                        }
                    />
                </div>
                {errors.email && (
                    <span className="email-error">{errors.email.message}</span>
                )}
            </div>
            <div className="reservationdate">
                <div className="reservationdate-input">
                    <label htmlFor="reservationdate">Choose date: </label>
                    <input type="date"
                        id="reservationdate"
                        alt="reservationdate"
                        aria-label="please input reservation date"
                        {
                            ...register("reservationdate", {
                                onChange: handleDateChange,
                                validate: (value) => {
                                    const today = formatDate();
                                    return value >= today || "Date cannot be earlier than today."
                                }
                            })
                        }
                    >
                    </input>
                </div>
                {errors.reservationdate && (
                    <span className="reservationdate-error">{errors.reservationdate.message}</span>
                )}
            </div>
            <div className="reservationtime">
                <div className="reservationtime-input">
                    <label htmlFor="reservationtime">Choose time: </label>
                    <select id="reservationtime"
                            alt="reservationtime"
                            aria-label="please input reservation time"
                        {
                            ...register("reservationtime")
                        }
                    >
                        {props.availableTimes.map((time) => 
                            <option key={time}>{time}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="numberOfGuests">
                <div className="numberOfGuests-input">
                    <label htmlFor="numberOfGuests">Number of guests: </label>
                    <input type="number"
                        id="numberOfGuests"
                        alt="numberOfGuests"
                        aria-label="please input number of guests"
                        placeholder="1"
                        {
                            ...register("numberOfGuests", {
                                min: {
                                    value: 1,
                                    message: "At least one guest must be selected."
                                },
                                max: {
                                    value: 10,
                                    message: "Guests cannot exceed 10 people."
                                }
                            })
                        }
                    />
                </div>
                {errors.numberOfGuests && (
                    <span className="numberOfGuests-error">{errors.numberOfGuests.message}</span>
                )}
            </div>
            <div className="occasion">
                <div className="occasion-input">
                    <label htmlFor="occasion">Occasion: </label>
                    <select 
                        id="occasion"
                        alt="occasion"
                        aria-label="please input occasion"
                        {
                            ...register("occasion")
                        }
                        >
                        <option key="birthday">BirthDay</option>
                        <option key="anniversary">Anniversary</option>
                    </select>
                </div>
            </div>
            <div className="comments">
                <div className="comments-input">
                    <label htmlFor="comments">Comments: </label>
                    <div>
                        <textarea id="comments"
                                alt="comments"
                                aria-label="please input comments"
                                {
                                    ...register("comments")
                                }
                                rows={10}
                                cols={40}
                        >
                        </textarea>
                    </div>
                </div>
            </div>
            <button className="reservebutton" aria-label="click reserve button" type="submit">Reserve a table</button>
        </form>
        </div>
    )
}

export default BookingForm;