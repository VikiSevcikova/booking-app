import React from "react";
import { Row } from "react-bootstrap";
import SearchCard from "./SearchCard";

const HomePageBanner = () => {

  return (
    <Row className="banner justify-content-center align-items-end position-relative">
      <h1 className="title text-light fw-bold text-uppercase p-2">
          Book your dream place
      </h1>
      <SearchCard />    
    </Row>

  );
};

export default HomePageBanner;
