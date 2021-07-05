import React, {useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import './Detail.scss';
import axios from "axios";
import { BsFillStarFill } from "react-icons/bs";
import Overview from "./Overview"
import Booking from "./Booking"
import Photos from "./Photos"
import {Container,Row,Col} from 'react-bootstrap'

function Detail(){

// const [hotelId, setHotelId] = useState("")
const [details, setDetails] = useState()
const { id } = useParams();
//424023
// Fetch for the details data
const fetchData = async () => {
  const detailUrl = `https://hotels4.p.rapidapi.com/properties/get-details?id=${id}&currency=CAD&locale=en_US`;
  try {
      let data = await axios.get(detailUrl, {
        headers: { "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST
      }});
      console.log(data)
      setDetails(data.data.data.body)
    } catch(error){
      console.log(error)
    }
    
}

useEffect(() => {fetchData()},[])


  return (
    <Container>
      {details && <><h2>{details.propertyDescription.name}</h2>
       <p><BsFillStarFill />
                  <strong> {details.guestReviews.brands.rating} </strong> (
                  {details.guestReviews.brands.total})</p>
       {/* <div className="imgContainer"> */}
         <Photos/>
       {/* </div> */}
       <Row>
         <Col>
         {details.overview.overviewSections.map((item,i) => <Overview key={i} overviewSection = {item}/> )}
         </Col>
         <Col>
         <Booking />
         </Col>
        </Row></>}
    </Container>
  )
}

export default Detail;