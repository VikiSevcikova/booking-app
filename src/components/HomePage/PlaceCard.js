import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Image } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";

const PlaceCard = ({ place }) => {
  return (
    <Link to={`/detail/${place.id}`}>
      <Card className="border-top-0 border-left-0 border-right-0">
        <Card.Body>
          <Row>
            <Col md={4}>
              <Image
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={
                  place.thumbnailUrl
                    ? place.thumbnailUrl
                    : place.optimizedThumbUrls ? place.optimizedThumbUrls.srpDesktop : ''
                }
                alt={place.name}
                rounded
              />
            </Col>
            <Col md={8}>
              <Card.Text className="mb-1">{place.address.locality}</Card.Text>
              <Card.Title>{place.name}</Card.Title>
              <Card.Text>
                {place.deals && place.deals.specialDeal
                  ? place.deals.specialDeal.dealText
                  : ""}
              </Card.Text>
              <Row className="align-items-end">
                <Col className="justify-content-end">
                  {place.guestReviews ? (
                    <>
                      <BsFillStarFill />
                      <strong> {place.guestReviews.rating} </strong> (
                      {place.guestReviews.total} reviews)
                    </>
                  ) : (
                    ""
                  )}
                </Col>
                <Col className="float-right text-right">
                  <strong>{place.ratePlan.price.current}</strong>
                  <br />
                  {place.ratePlan.price.info}
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PlaceCard;
