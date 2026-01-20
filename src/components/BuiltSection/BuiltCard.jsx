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
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${professional})`,
          width: { xs: "100%", md: "614px" },
          height: { xs: "260px", md: "400px" },
          padding: {
            xs: "40px 20px",
            sm: "80px 60px",
            md: "120px 123px",
          },
          gap: "17px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          color="white"
          sx={{
            fontSize: { xs: "22px", md: "32px" },
            textAlign: "center",
            width: "100%",
          }}
        >
          FOR Professionals
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: {
              xs: "160px",
              md: "201px",
              "&:hover": {
                backgroundColor: "#e41f3a",
              },
            },
          }}
        >
          Get Started
        </Button>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${student})`,
          width: { xs: "100%", md: "614px" },
          height: { xs: "260px", md: "400px" },
          padding: {
            xs: "40px 20px",
            sm: "80px 60px",
            md: "120px 143px",
          },
          gap: "17px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          color="white"
          sx={{
            fontSize: { xs: "22px", md: "32px" },
            textAlign: "center",
            width: "100%",
          }}
        >
          FOR Students
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: {
              xs: "160px",
              md: "201px",
              "&:hover": {
                backgroundColor: "#e41f3a",
              },
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
export default BuiltCard;
