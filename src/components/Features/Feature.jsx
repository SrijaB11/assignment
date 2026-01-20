import React from "react";
import FeatureCard from "./FeatureCard";
import "./Feature.css";
import featureHighlights from "./Features";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import star from "../../assets/vectors/Vector.png";

function Feature() {
  return (
    <div className="feature-section">
      <Typography variant="h3" color="secondary">
        <Box component="span" variant="h3" color="primary.main">
          Feature{" "}
        </Box>
        Highlights
      </Typography>
      <div className="feature-card-section">
        {featureHighlights.map((card) => {
          return <FeatureCard key={card.id} {...card} />;
        })}
      </div>
      <div className="vector">
        <img src={star} alt="star" />
      </div>
    </div>
  );
}

export default Feature;
