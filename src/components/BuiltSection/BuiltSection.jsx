import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BuiltCard from "./BuiltCard";

function BuiltSection() {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h3" color="secondary" marginBottom={"22px"}>
        <Box component="span" variant="h3" color="primary.main">
          Built for{" "}
        </Box>
        Every one
      </Typography>
      <BuiltCard />
    </Container>
  );
}

export default BuiltSection;
