import React, {useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import './Detail.scss';
import axios from "axios";
// import { BsFillStarFill } from "react-icons/bs";
// import Overview from "./Overview"
// import Booking from "./Booking"
// import {Container,Row,Col} from 'react-bootstrap'

function Photos(){


const [photos, setPhotos] = useState()
const { id } = useParams();
//424023
// Fetch for the details data
const fetchData = async () => {
  const photosUrl = `https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=${id}`;
  try {
      let data = await axios.get(photosUrl, {
        headers: { "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST
      }});
      console.log(data)
      setPhotos(data.data)
    } catch(error){
      console.log(error)
    }
    
}

useEffect(() => {fetchData()},[])


  return (
    <div className="pohotos">
      {photos && photos.roomImages.map(roomImage => (
        <div>
        <img key={roomImage.images[0].imageId} src={roomImage.images[0].baseUrl.replace("{size}", roomImage.images[0].sizes[0].suffix)} alt=""/>
        </div>
      ))}
      {/* {photos && <><img  src={photos.roomImages[0].images[0].baseUrl.replace("{size}", photos.roomImages[0].images[0].sizes[0].suffix)} alt=""/></>} */}
    </div>
    // <div className="detail">
    //   {details && <><h2>{details.propertyDescription.name}</h2>
    //    <p><BsFillStarFill />
    //               <strong> {details.guestReviews.brands.rating} </strong> (
    //               {details.guestReviews.brands.total})</p>
    //    <div className="imgContainer">
    //      <div className="img">
    //      <img  src="https://a0.muscache.com/im/pictures/dc09ee21-27e9-4dcd-9b59-7ba7ade0563f.jpg?im_w=1200" alt=""/>
    //      </div>
    //      <div className="img">
    //      <img  src="https://a0.muscache.com/im/pictures/044f322d-8806-4f78-bdd8-4719f5a78168.jpg?im_w=720" alt=""/>
    //      </div>
    //    </div>
    //    <Row>
    //      <Col>
    //      {details.overview.overviewSections.map((item,i) => <Overview key={i} overviewSection = {item}/> )}
    //      </Col>
    //      <Col>
    //      <Booking />
    //      </Col>
    //     </Row></>}

    // </div>
  )
}

export default Photos;