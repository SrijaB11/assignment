import { Box, Typography, Button, Paper } from "@mui/material";
import MCQCard from "./MCQCard";
import mcqs from "./MCQSData";

const MCQS = () => {
  return (
    <Box minHeight="100vh" bgcolor="background.default">
      <Paper
        sx={{
          width: "1440px",
          maxWidth: "100%",
          mx: "auto",
          px: { xs: 3, md: 12 },
          pt: 2, // 👈 small gap from navbar
          pb: 6,
        }}
      >
        <Typography variant="h3" textAlign="center" mb={6}>
          <Box component="span" color="primary.main">
            MCQ
          </Box>{" "}
          <Box component="span" color="secondary.main">
            Questions
          </Box>
        </Typography>

        <Box display="flex" flexDirection="column" gap={7.5}>
          {mcqs.map((mcq) => (
            <MCQCard key={mcq.id} mcq={mcq} />
          ))}
        </Box>

        <Box textAlign="center" mt={8}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "201px", height: "62px" }}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default MCQS;
