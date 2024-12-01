import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const LocationMarkerCard = () => {
  return (
    <div className="marker-card-wrapper">
      <div className="marker-icon">
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769674/mapPin_s4afhr.png"
          alt="Location marker"
          className="pinImgae"
        />
      </div>
      <div className="marker-card">
        <div className="marker-content">
          <p className="marker-title">McDonald&apos;s</p>
          <p className="marker-subtitle">South London</p>
        </div>
      </div>
    </div>
  );
};

const MapComponent = () => {
  return (
    <div className="map-wrapper">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <div className="card-container">
        <h1 className="title">McDonald&apos;s</h1>
        <h2 className="location">South London</h2>
        <p className="address">
          Tooley St, London Bridge, London SE1 2TF,
          <br />
          United Kingdom
        </p>
        <div className="contact-section">
          <h3 className="section-title">Phone number</h3>
          <p className="phone">+934443-43</p>
        </div>
        <div className="contact-section">
          <h3 className="section-title">Website</h3>
          <div className="website-link">http://mcdonalds.uk/</div>
        </div>
      </div>
      <LocationMarkerCard />
    </div>
  );
};

export default MapComponent;
