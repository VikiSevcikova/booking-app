import React, {useEffect,useState} from "react"
import { useParams } from "react-router-dom";
import './Detail.scss';
import axios from "axios";

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
    </div>
  )
}

export default Photos;