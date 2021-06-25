import React, { useContext } from "react";
import { PlacesContext } from "./../context/PlacesContext";
import { Container } from "react-bootstrap";
import PlaceCard from "./PlaceCard";

const Places = () => {
  const placesContext = useContext(PlacesContext);
  const { state } = placesContext;
  const { places, checkIn, checkOut, adults, children } = state;
console.log(places);
  var options = { month: 'short', day: 'numeric' };
  let formatedCheckIn = new Intl.DateTimeFormat('en-US', options).format(checkIn);
  let formatedCheckOut = new Intl.DateTimeFormat('en-US', options).format(checkOut);
  return (
    <>
      {places && places.length > 0 && 
        <Container className="my-2">
          <p>{formatedCheckIn} - {formatedCheckOut} · {adults + children} {(adults + children > 1) ? "guests" : "guest"}</p>
          <h1>Stays in {places.header}</h1>
          {places.searchResults.results && places.searchResults.results.map((place) => <PlaceCard key={place.id} place={place} />)}
      </Container>
      }
    </>
  );
};

export default Places;
