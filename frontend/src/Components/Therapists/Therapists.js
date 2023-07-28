import React from "react";
import "./Therapists.css";
import TherapistCard from "./TherapistCard/TherapistCard";
import PaymentButton from "./PaymentButton/PaymentButton";

function Therapists() {
  return (
    <div className="therapists_container">
        <div className="therapists_heading">THERAPISTS</div>
      <div className="thearpists_card_container">
        <TherapistCard />
        <TherapistCard />
        <TherapistCard />
      </div>
    </div>
  );
}

export default Therapists;
