import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row } from "react-bootstrap";
import "./HomePage.scss";
import Places from "./Places";
import HomePageBanner from "./HomePageBanner";
import { PlacesContext } from "../../context/PlacesContext";

const HomePage = () => {
  const params = new URLSearchParams(useLocation().search);
  const placesContext = useContext(PlacesContext);
  const { placesDispatch } = placesContext;

  useEffect(() => {
    if (params.get("success")) {
      placesDispatch({
        type: "CHANGE_ALERT_MESSAGE",
        payload: {
          title: "Successful checkout",
          message: "Your booking was payed.",
          variant: "success",
        },
      });
      placesDispatch({ type: "SHOW_ALERT" });
    }

    if (params.get("canceled")) {
      placesDispatch({
        type: "CHANGE_ALERT_MESSAGE",
        payload: {
          title: "Canceled checkout",
          message: "Your payment failed.",
          variant: "danger",
        },
      });
      placesDispatch({ type: "SHOW_ALERT" });
    }
  }, []);

  return (
    <div className="position-relative">
      <HomePageBanner />
      <Row>
        <Places />
      </Row>
    </div>
  );
};

export default HomePage;
