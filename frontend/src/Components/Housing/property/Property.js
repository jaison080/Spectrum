import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Property.css";
import Footer from "../components/Footer";
import Card from "../components/Card";
import data from "../data";

function Property() {
  const [active, setActive] = useState("house");

  const houses = data.properties.filter((x) => x.type === "house");
  const apartments = data.properties.filter((x) => x.type === "apartment");
  const lands = data.properties.filter((x) => x.type === "land");

  const handleClick = (e) => {
    setActive(e.target.id);
  };
  return (
    <div className="properties-container">
      <div className="categories-container">
        <Tabs>
          <TabList className="tab-title-container">
            <Tab className="tab-title">
              <button
                id="house"
                onClick={handleClick}
                className={active === "house" ? "active" : null}
              >
                Houses
              </button>
            </Tab>
            <Tab className="tab-title">
              <button
                id="apartment"
                onClick={handleClick}
                className={active === "apartment" ? "active" : null}
              >
                Apartments
              </button>
            </Tab>
            <Tab className="tab-title">
              <button
                id="land"
                onClick={handleClick}
                className={active === "land" ? "active" : null}
              >
                Lands
              </button>
            </Tab>
            <div className="property-hero-title">
              <h4>Properties</h4>
            </div>
          </TabList>

          <TabPanel>
            <h4>Houses</h4>
            <div className="featured-gallery">
              {houses.map((house) => (
                <Card
                  key={house.id}
                  image={house.image}
                  tag={house.tag}
                  title={house.title}
                  price={house.price}
                  address={house.address}
                  beds={house.beds}
                  baths={house.baths}
                  size={house.size}
                  link={`/housing/${house.id}`}
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
      <Footer />
    </div>
  );
}

export default Property;
