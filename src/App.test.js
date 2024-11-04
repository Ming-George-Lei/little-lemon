import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test("show Full name is required on the screen", async () => {
  const availableTimes = ["18:00"];
  const dispatch = () => {};
  const submit = () => {};

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}/>);

  fireEvent.click(screen.getByText("Reserve a table"));

  expect(await screen.findByText("Full name is required.")).toBeInTheDocument();
});

test("show Full name must be at least 5 characters on the screen", async () => {
  const availableTimes = ["18:00"];
  const dispatch = () => {};
  const submit = () => {};

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}/>);

  const fullName = screen.getByAltText("full_name");

  fireEvent.change(fullName, {target: {value: "Ger"}});

  expect(fullName.value).toBe("Ger");

  fireEvent.click(screen.getByText("Reserve a table"));

  expect(await screen.findByText("Full name must be at least 5 characters.")).toBeInTheDocument();
});

test("show Email is required on the screen", async () => {
  const availableTimes = ["18:00"];
  const dispatch = () => {};
  const submit = () => {};

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}/>);

  fireEvent.click(screen.getByText("Reserve a table"));

  expect(await screen.findByText("Email is requird.")).toBeInTheDocument();
});

test("show Invalid email address on the screen", async () => {
  const availableTimes = ["18:00"];
  const dispatch = () => {};
  const submit = () => {};

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}/>);

  const email = screen.getByAltText("email");

  fireEvent.change(email, {target: {value: "qwerrrrr@"}});

  fireEvent.click(screen.getByText("Reserve a table"));

  expect(await screen.findByText("Invalid email address.")).toBeInTheDocument();
});

test("show Guests cannot exceed 10 people on the screen", async () => {
  const availableTimes = ["18:00"];
  const dispatch = () => {};
  const submit = () => {};

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}/>);

  const guests = screen.getByAltText("numberOfGuests");

  fireEvent.change(guests, {target: {value: "12"}});

  fireEvent.click(screen.getByText("Reserve a table"));

  expect(await screen.findByText("Guests cannot exceed 10 people.")).toBeInTheDocument();
});

test("show Date cannot be earlier than today on the screen", async () => {
  const availableTimes = ["18:00"];
  const dispatch = () => {};
  const submit = () => {};

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submit}/>);

  const reservationDate = screen.getByAltText("reservationdate");

  fireEvent.change(reservationDate, {target: {value: "2024-10-10"}});

  fireEvent.click(screen.getByText("Reserve a table"));

  expect(await screen.findByText("Date cannot be earlier than today.")).toBeInTheDocument();
});