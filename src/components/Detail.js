import React, {useState} from "react"
import './Detail.scss';
import axios from "axios";

function Detail(){

const [hotelId, setHotelId] = useState("")
const [hotelCheckIn, setHotelCheckIn] = useState("")
const [hotelCheckOut, setHotelCheckOut] = useState("")
const [hotelCurrency, setHotelCurrency] = useState("")
const [hotelLocale, setHotelLocale] = useState("")
const [hotelAdults1, setHotelAdults1] = useState("")

// Fetch for the details data
const options = {
  method: 'GET',
  url: 'https://hotels4.p.rapidapi.com/properties/get-details',
  params: {
    id: {hotelId},
    checkIn: {hotelCheckIn},
    checkOut: {hotelCheckOut},
    currency: {hotelCurrency},
    locale: {hotelLocale},
    adults1: {hotelAdults1}
  },
  headers: {
    'x-rapidapi-key': 'e1039dda69mshb84ef6eded5d1f0p1a327cjsn267218ccb3dd',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


  return (
    <div className="detail">
       <h2>Title of the house</h2>
       <div className="imgContainer">
         <div className="img">
         <img  src="https://a0.muscache.com/im/pictures/dc09ee21-27e9-4dcd-9b59-7ba7ade0563f.jpg?im_w=1200" alt=""/>
         </div>
         <div className="img">
         <img  src="https://a0.muscache.com/im/pictures/044f322d-8806-4f78-bdd8-4719f5a78168.jpg?im_w=720" alt=""/>
         </div>
       </div>
       <div>
         <p>Channel the pursuit of pause in this one-of-a-kind earth house. The cozy retreat was hand-sculpted using  local   and    sustainable natural materials, and features a central living space with cantilevered slab stairs  leading to   the loft    bedroom.</p>
         <p>$60 /night</p>
       </div>
    </div>
  )
}

export default Detail;