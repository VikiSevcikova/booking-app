import axios from "axios";
import React, { useState, useContext } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { PlacesContext } from "./../context/PlacesContext";
import "react-datepicker/dist/react-datepicker.css";

const SearchCard = () => {
  const placesContext = useContext(PlacesContext);
  const { state, dispatch } = placesContext;
  const { checkIn, checkOut, adults, children } = state;

  const today = new Date();
  const tomorrow = new Date(new Date().setDate(today.getDate() + 1));

  const [location, setLocation] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    if (!location || location === null || location === "") {
      dispatch({ type: "SHOW_ALERT" });
      dispatch({
        type: "CHANGE_ALERT_MESSAGE",
        payload: "Please add location.",
      });
      return;
    }
    if (checkIn > checkOut) {
      dispatch({ type: "SHOW_ALERT" });
      dispatch({
        type: "CHANGE_ALERT_MESSAGE",
        payload: "Check out date has to be bigger than check in date.",
      });
      return;
    }
    let formatedCheckIn = checkIn.toISOString().slice(0, 10);
    let formatedCheckOut = checkOut.toISOString().slice(0, 10);
    const locationUrl = `https://hotels4.p.rapidapi.com/locations/search?query=${location}`;
    try {
      //get the destinationID
      let locationData = await axios.get(locationUrl, {
        headers: { "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST
      }});
      let destinationId = locationData.data.suggestions[0].entities[0].destinationId;
      console.log(destinationId);

      //get the places/hotels
      const placesUrl = `https://hotels4.p.rapidapi.com/properties/list?adults1=${adults}&pageNumber=1&destinationId=${destinationId}&pageSize=25&checkOut=${formatedCheckOut}&checkIn=${formatedCheckIn}&sortOrder=PRICE&locale=en_US&currency=CAD`
      let data = await axios.get(placesUrl, {
        headers: { "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST
      }});
         let places = data.data.data.body;
      console.log(places);
      dispatch({type: 'CHANGE_PLACES', payload: places});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form onSubmit={fetchData}>
        <Row className="glass px-3 py-3 mx-5 my-5 g-2 align-items-end">
          <Col md>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="Anywhere"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Col>
          <Col md>
            <Form.Label>Check in</Form.Label>
            <DatePicker
              name="checkIn"
              selected={checkIn}
              onChange={(date) =>
                dispatch({ type: "CHANGE_CHECKIN", payload: date })
              }
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
              name="checkOut"
              selected={checkOut}
              onChange={(date) =>
                dispatch({ type: "CHANGE_CHECKOUT", payload: date })
              }
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
              onChange={(e) =>
                dispatch({ type: "CHANGE_ADULTS", payload: e.target.value })
              }
            />
          </Col>{" "}
          <Col md>
            <Form.Label>Children</Form.Label>
            <Form.Control
              name="children"
              type="number"
              maxLength="10"
              value={children}
              onChange={(e) =>
                dispatch({ type: "CHANGE_CHILDREN", payload: e.target.value })
              }
            />
          </Col>
          <Col md className="align-items-end">
            <Button type="submit" variant="info" style={{ width: "100%" }}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchCard;
