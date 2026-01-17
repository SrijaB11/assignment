import { Box, Typography, TextField, Button } from "@mui/material";

export default function Subscribe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.bgcard",
        py: 6,
        px: 3,
        borderRadius: "24px",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <Typography variant="subtitle1" color="white" mb={2}>
        Subscribe for our tips
      </Typography>
      <Typography variant="body1" color="white" mb={2}>
        Clearly communicate the benefits of subscribing, such as exclusive
        content.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          bgcolor: "white",
          borderRadius: 1,
          width: "800px",
        }}
      >
        <TextField
          placeholder="Enter your email address"
          sx={{
            bgcolor: "white",
            borderRadius: 1,
          }}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{
            "&:hover": {
              bgcolor: "secondary.main",
            },
          }}
        >
          Subscribe
        </Button>

        {/* <TextField placeholder="Enter your email address" color="white" /> */}
      </Box>
    </Box>
  );
}
