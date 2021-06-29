import React, {useEffect,useState} from "react"
import './Detail.scss';
import axios from "axios";
import { BsFillStarFill } from "react-icons/bs";
import Overview from "./Overview"
import Booking from "./Booking"
import {Container,Row,Col} from 'react-bootstrap'

function Detail(){

// const [hotelId, setHotelId] = useState("")
const [details, setDetails] = useState()


// Fetch for the details data
const fetchData = async () => {
  const detailUrl = `https://hotels4.p.rapidapi.com/properties/get-details?id=424023&currency=CAD&locale=en_US`;
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
    <div className="detail">
      {details && <><h2>{details.propertyDescription.name}</h2>
       <p><BsFillStarFill />
                  <strong> {details.guestReviews.brands.rating} </strong> (
                  {details.guestReviews.brands.total})</p>
       <div className="imgContainer">
         <div className="img">
         <img  src="https://a0.muscache.com/im/pictures/dc09ee21-27e9-4dcd-9b59-7ba7ade0563f.jpg?im_w=1200" alt=""/>
         </div>
         <div className="img">
         <img  src="https://a0.muscache.com/im/pictures/044f322d-8806-4f78-bdd8-4719f5a78168.jpg?im_w=720" alt=""/>
         </div>
       </div>
       <Row>
         <Col>
         {details.overview.overviewSections.map((item,i) => <Overview key={i} overviewSection = {item}/> )}
         </Col>
         <Col>
         <Booking />
         </Col>
        </Row></>}

    </div>
  )
}

export default Detail;