import React, { useState,useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Property.css";
import Button from '../form/Button';
import Card from "../components/Card";
import data from "../data";
import axios from 'axios'

function Property() {
  const [houseactive, setActive] = useState("house");
  const [house,setHouse] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const fetchHomes = async () =>
  {
      const homes = await axios.get(`${process.env.REACT_APP_API}/house/`);
      console.log(homes.data);
      setHouse(homes.data)
      console.log("done"+house);
  }

  useEffect(() => {
    fetchHomes()
  },[])
  

  const houses = data.properties.filter((x) => x.type === "house");
  const apartments = data.properties.filter((x) => x.type === "apartment");
  const lands = data.properties.filter((x) => x.type === "land");

  const handleClick = (e) => {
    setActive(e.target.id);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHouses = house.filter((house) =>
    house.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="properties-container">
       <div className="property-hero-title">
          <h2><span class="home-icon">&#127968;</span>PROPERTIES</h2>
        </div>
        
      <div className="categories-container">
       <div className="house-search-box">
        <input
          type="text"
          placeholder=" &#128269; Search by Address"
          value={searchTerm}
          onChange={handleSearch}
        />
       </div>
        <Tabs>
          <TabList className="tab-title-container">
            <Tab className="tab-title">
              <button
                id="house"
                onClick={handleClick}
                className={houseactive === "house" ? "active" : null}
              >
                Houses
              </button>
            </Tab>
            <Tab className="tab-title">
              <button
                id="apartment"
                onClick={handleClick}
                className={houseactive=== "apartment" ? "active" : null}
              >
                Apartments
              </button>
            </Tab>
            <Tab className="tab-title">
              <button
                id="land"
                onClick={handleClick}
                className={houseactive === "land" ? "active" : null}
              >
                Lands
              </button>
            </Tab>
          </TabList>

          <TabPanel>
            {/* <h4>Houses</h4>
            <div className="featured-gallery">
              {house.map((house) => (
                <Card
                  key={house._id}
                  image={house.image[0]}
                  tag={house.type}
                  title={house.title}
                  price={house.price}
                  address={house.address}
                  beds={house.rooms}
                  baths={house.bathrooms}
                  size={house.squareFeet}
                  link={`/housing/${house._id}`}
                />
              ))}
            </div> */}
             <h4>Houses</h4>
            <div className="featured-gallery">
              {filteredHouses.map((house) => (
                <Card
                  key={house._id}
                  image={house.image[0]}
                  tag={house.type}
                  title={house.title}
                  price={house.price}
                  address={house.address}
                  beds={house.rooms}
                  baths={house.bathrooms}
                  size={house.squareFeet}
                  link={`/housing/${house._id}`}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h4>Apartments</h4>
            <div className="featured-gallery">
              {apartments.map((apartment) => (
                <Card
                  key={apartment.id}
                  image={apartment.image}
                  tag={apartment.tag}
                  title={apartment.title}
                  price={apartment.price}
                  address={apartment.price}
                  beds={apartment.beds}
                  baths={apartment.baths}
                  size={apartment.size}
                  link={`/housing/${apartment.id}`}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h4>Lands</h4>
            <div className="featured-gallery">
              {lands.map((land) => (
                <Card
                  key={land.id}
                  image={land.image}
                  tag={land.tag}
                  title={land.title}
                  price={land.price}
                  address={land.price}
                  beds={land.beds}
                  baths={land.baths}
                  size={land.size}
                  link={`/housing/${land.id}`}
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Button />
    </div>
  );
}

export default Property;
