import Typography from "@mui/material/Typography";
import React from "react";
import "./Feature.css";

function FeatureCard({ icon: Icon, title, description }) {
  console.log(Icon);
  return (
    <div className="feature-card">
      <div className="icon-card">
        <Icon className="feature-icon" size={28} />
      </div>
      <div className="feature-text-card">
        <Typography variant="subtitle1">{title}</Typography>
        <Typography varient="body1" color="text.secondary">
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default FeatureCard;
