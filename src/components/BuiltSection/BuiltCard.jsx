import React from "react";
import student from "../../assets/images/students.png";
import professional from "../../assets/images/professional.png";
import { Box, Button, Container, Typography } from "@mui/material";

function BuiltCard() {
  return (
    <Container
      sx={{
        display: "flex",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${professional})`,

          width: "914px",
          height: "400px",
          //   paddingTop: "120px",
          //   paddingRight: "143px",
          //   paddingBottom: "120px",
          //   paddingLeft: "143px",

          backgroundSize: "cover",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Typography variant="subtitle1" color="white" fontSize="32px">
          FOR Professionals
        </Typography>
        <Button variant="contained" color="secondary" sx={{ width: "201px" }}>
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${student})`,

          width: "914px",
          height: "400px",
          //   paddingTop: "120px",
          //   paddingRight: "143px",
          //   paddingBottom: "120px",
          //   paddingLeft: "143px",
          //   gap: "17px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <Typography variant="subtitle1" color="white" fontSize="32px">
          FOR Students
        </Typography>
        <Button variant="contained" color="secondary" sx={{ width: "201px" }}>
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default BuiltCard;
