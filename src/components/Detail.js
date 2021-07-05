import React, { useEffect, useState } from "react";
import Photos from "./Photos"
import "./Detail.scss";
import axios from "axios";
import { BsFillStarFill } from "react-icons/bs";
import Overview from "./Overview";
import Booking from "./Booking";
import { Spinner, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState();
  const { id } = useParams();
  //424023

  // Fetch for the details data
  const fetchData = async () => {
    const detailUrl = `https://hotels4.p.rapidapi.com/properties/get-details?id=${id}&currency=CAD&locale=en_US`;
    try {
      setLoading(true);
      let data = await axios.get(detailUrl, {
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
          "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST,
        },
      });
      console.log(data);
      setDetails(data.data.data.body);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <Row>
          <Spinner className="mx-auto" animation="border" />
        </Row>
      ) : (
        <div className="detail">
          {details && (
            <>
              <h2>{details.propertyDescription.name}</h2>
              <p>
                <BsFillStarFill />
                <strong> {details.guestReviews.brands.rating} </strong> (
                {details.guestReviews.brands.total} reviews)
              </p>
              <Photos/>
              <Row>
                <Col md={8}>
                  {details.overview.overviewSections.map((item, i) => (
                    <Overview key={i} overviewSection={item} />
                  ))}
                </Col>
                <Col md={4}>
                  <Booking
                    place={{
                      id: id,
                      name: details.propertyDescription.name,
                      price:
                        details.propertyDescription.featuredPrice.currentPrice
                          .plain,
                    }}
                  />
                </Col>
              </Row>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Detail;
