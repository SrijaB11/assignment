import React from "react";
import RightSideImg from "../RightImg/RightSideImg";
import "./Hero.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import star from "../../assets/vectors/Vector.png";
import starright from "../../assets/vectors/Vectorright.png";
import herovectorleft from "../../assets/vectors/herovectorleft.png";

function Hero() {
  return (
    <div>
      <div className="hero-section">
        <div className="left-hero-section">
          <Typography variant="h3" color="secondary">
            <Box component="span" variant="h3" color="primary.main">
              Where{" "}
            </Box>
            Skills
            <br /> are Sharpened{" "}
            <Box component="span" variant="h3" color="primary.main">
              and
              <br />
            </Box>
            Code Comes to Life
          </Typography>
          <Typography varient="body1" color="text.primary">
            Unlock your coding potential through interactive challenges,
            real-time feedback, and a supportive community.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "201px",
              "&:hover": {
                backgroundColor: "#e41f3a",
              },
            }}
          >
            Get Started
          </Button>
        </div>
        <div className="right-hero-section">
          <RightSideImg />
        </div>
      </div>

      <div className="vector">
        <img src={star} alt="star" />
      </div>
      <div className="vector1">
        <img src={starright} alt="starright" />
      </div>
      <div className="vector2">
        <img src={herovectorleft} alt="herovectorleft" />
      </div>
      <div className="vector3">
        <img src={star} alt="herovectorleft" />
      </div>
    </div>
  );
}

export default Hero;
