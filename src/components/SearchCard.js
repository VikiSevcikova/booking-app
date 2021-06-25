import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchCard = () => {
  const today = new Date();
  let tomorrow = new Date().setDate(today.getDate() + 1);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  return (
    <Row className="glass px-3 py-3 mx-5 my-5 g-2 align-items-end">
      <Col md>
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Anywhere" />
      </Col>
      <Col md>
        <Form.Label>Check in</Form.Label>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date)}
          className="form-control"
          minDate={today}
          customInput={
            <input type="text" id="checkin" placeholder="Check Out" />
          }
        />
      </Col>
      <Col md>
        <Form.Label>Check out</Form.Label>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date)}
          className="form-control"
          minDate={tomorrow}
          customInput={
            <input type="text" id="checkin" placeholder="Check Out" />
          }
        />
      </Col>
      <Col md>
        <Form.Label>Adults</Form.Label>
        <Form.Control
          name="adults"
          type="number"
          maxLength="10"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
        />
      </Col> <Col md>
        <Form.Label>Children</Form.Label>
        <Form.Control
          name="children"
          type="number"
          maxLength="10"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
        />
      </Col>
      <Col md className="align-items-end">
        <Button type="submit" style={{ width: "100%" }}>
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default SearchCard;
