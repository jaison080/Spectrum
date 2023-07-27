import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faPhone,
  faEnvelope,
  faRulerVertical,
} from "@fortawesome/free-solid-svg-icons";
import "./PropertyDetails.css";
import Footer from "../components/Footer";
import MyMap from "../components/MyMaps";
import data from "../data";
import { useParams } from "react-router-dom";
import axios from "axios";

function PropertyDetails() {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const property = data.properties.find((x) => x.id === id);
  //const position = [property.marker.lat, property.marker.lng];
  const [houseDetails, setHouseDetails] = useState({});
  const [ownerDetails, setOwnerDetails] = useState();

  const fetchById = async () => {
    const houseData = await axios.get(`${process.env.REACT_APP_API}/house/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(houseData.data);
    setHouseDetails(houseData.data);
    setOwnerDetails(houseData.data.owner);
  };

  useEffect(() => {
    fetchById();
  }, []);

  
       

  

  if (!id) return null;

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "slides",
  };

  return (
    <div className="property-details-container">
      {houseDetails?.image && (
        <div className="property-details-container-group">
          <div className="property-details-info">
         {houseDetails?.image && (<div className="SliderContainer">
            <Slider {...settings}>
            {houseDetails.image.map((item) => (
              <div key={item}>
                {console.log(item)}
                <img src={item} alt="" className="property-img" />
              </div>
            ))}
          </Slider>
              {/* <Slider {...settings}>
              <div key={houseDetails.image}>
                <img src={houseDetails.image} alt="" className="property-img"></img>
              </div>
            </Slider> */}
            </div>)}

            <h4 className="property-details-title"> Property Details</h4>
            <div className="property-details-section">
              <div className="property-details-section-top">
                <p className="property-details-info-title">
                  {houseDetails.type}
                </p>
                <p className="property-details-tag">{houseDetails.misc}</p>
              </div>
              <div className="property-details-section-bottom">
                <p className="property-details-address">
                  {houseDetails.address}
                </p>
                <div className="property-details-price">
                  <p className="property-details-price-top">price:</p>
                  <p className="property-details-price-bottom">
                    {houseDetails.rent}
                  </p>
                </div>
              </div>
            </div>
            <hr className="property-details-hr" />
            <div className="property-details-tags">
              <div className="property-detials-tags-main">
                <p className="property-details-tag-title">Bedrooms</p>
                <div className="property-details-tags-section">
                  <p>{houseDetails.rooms}</p>
                  <FontAwesomeIcon icon={faBed} />
                </div>
              </div>

              <div className="property-detials-tags-main">
                <p className="property-details-tag-title">Baths</p>
                <div className="property-details-tags-section">
                  <p>{houseDetails.bathrooms}</p>
                  <FontAwesomeIcon icon={faBath} />
                </div>
              </div>

              <div className="property-detials-tags-main">
                <p className="property-details-tag-title">size</p>
                <div className="property-details-tags-section">
                  <p>{houseDetails.squareFeet}sq/ft</p>
                  <FontAwesomeIcon icon={faRulerVertical} />
                </div>
              </div>
            </div>

            <div className="property-details-description">
              <div>
                <p className="property-details-title">Description</p>
              </div>
              <div>
                <p className="property-details-text">{houseDetails.misc}</p>
              </div>
            </div>
          </div>
          <div className="property-details-group">
            <div className="property-details-map">
            <MyMap
              center={houseDetails.coords}
              position={houseDetails.coords}
            />
            </div>
            <div className="property-details-contact">
              <div className="property-details-image-container">
                <img
                  src={require("../images/avatar.jpg")}
                  alt=""
                  className="property-details-image"
                />
              </div>

              <p className="property-details-contact-title">Agent</p>
              <h4> {ownerDetails ? ownerDetails.name : ""}</h4>
              <div className="property-details-call">
                <button>
                  <FontAwesomeIcon icon={faPhone} /> 054 123 1234
                </button>
              </div>

              <div className="property-details-mail">
                <button>
                  <FontAwesomeIcon icon={faEnvelope} /> Send Message{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyDetails;
