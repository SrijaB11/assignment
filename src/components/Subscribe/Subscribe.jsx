import { Box, Typography, TextField, Button } from "@mui/material";

import star from "../../assets/vectors/Vector.png";

export default function Subscribe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.bgcard",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
        borderRadius: "24px",
        textAlign: "center",
        mx: { xs: 2, sm: 4, md: 10 },
        position: "relative",
      }}
    >
      {/* TITLE */}
      <Typography variant="subtitle1" color="white" mb={2}>
        Subscribe for our tips
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        variant="body1"
        color="white"
        mb={3}
        fontSize={{ xs: "13px", md: "14px" }}
      >
        Clearly communicate the benefits of subscribing, such as exclusive
        <br /> content.
      </Typography>

      {/* INPUT + BUTTON */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          bgcolor: "white",
          borderRadius: 1,
          width: { xs: "100%", sm: "500px", md: "650px" },
          padding: "10px 14px",
        }}
      >
        <TextField
          placeholder="Enter your email address"
          fullWidth
          sx={{
            bgcolor: "white",
            borderRadius: 1,

            "& fieldset": {
              border: "none",
            },

            "& .MuiInputBase-input": {
              color: "#09070799",
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: 500,
              fontFamily: "Poppins",
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{
            width: { xs: "100%", sm: "133px" },
            height: "50px",
            "&:hover": {
              bgcolor: "secondary.main",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>

      {/* DECORATIVE STAR LEFT */}
      <Box
        sx={{
          position: "absolute",
          top: -64,
          left: 44,
          display: { xs: "none", md: "block" },
        }}
      >
        <img src={star} alt="star" />
      </Box>

      {/* DECORATIVE STAR RIGHT */}
      <Box
        sx={{
          position: "absolute",
          zIndex: -100,
          top: -144,
          right: -140,
          display: { xs: "none", md: "block" },
        }}
      >
        <img src={star} alt="star" />
      </Box>
    </Box>
  );
}
