import React from "react";
import { Row } from "react-bootstrap";
import "./HomePage.scss";
import Places from "./Places";
import HomePageBanner from "./HomePageBanner";
import Alert from "./Alert";

const HomePage = () => {
  return (
    <div className="position-relative">
      <Alert />
      <HomePageBanner />
      <Row>
        <Places />
      </Row>
    </div>
  );
};

export default HomePage;
