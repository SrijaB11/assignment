import { Box, Typography, Button, Paper } from "@mui/material";

export default function CodingTemplate() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F8FAFC",
        px: { xs: 2, md: 12 },
        py: 6,
      }}
    >
      {/* TITLE */}
      {/* <Typography variant="h4" align="center" mb={4}>
        <span style={{ color: "#E11D48" }}>Coding</span>{" "}
        <span style={{ color: "#2E3A8C" }}>Question</span>
      </Typography> */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" color="secondary">
          Coding <span style={{ color: "#e11d48" }}>Questions</span>
        </Typography>
      </Box>

      {/* QUESTION CARD */}
      <Paper
        sx={{
          bgcolor: "#F1F5F9",
          p: 4,
          borderRadius: 3,
          mb: 4,
        }}
      >
        <Typography fontWeight={600} mb={2}>
          First and Last Position of an Element In Sorted Array
        </Typography>

        <Typography color="#6B7280" fontSize="14px">
          You are given a sorted array and a target value. Find the first and
          last position of the target.
        </Typography>
      </Paper>

      {/* EDITOR + CONSOLE */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
          gap: 3,
        }}
      >
        {/* CODE EDITOR */}
        <Paper
          sx={{
            bgcolor: "#1E1E1E",
            color: "white",
            p: 3,
            borderRadius: 3,
            minHeight: 300,
            fontFamily: "monospace",
          }}
        >
          <Typography fontSize="14px" color="#9CA3AF">
            {/* // Write your code here */}
          </Typography>
        </Paper>

        {/* CONSOLE */}
        <Paper
          sx={{
            bgcolor: "#FFFFFF",
            p: 3,
            borderRadius: 3,
            minHeight: 300,
            border: "1px solid #E5E7EB",
          }}
        >
          <Typography fontWeight={600} mb={1}>
            Console
          </Typography>
          <Typography fontSize="13px" color="#6B7280">
            Output will appear here
          </Typography>
        </Paper>
      </Box>

      {/* ACTION BUTTONS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#E11D48",
            px: 4,
            "&:hover": { bgcolor: "#BE123C" },
          }}
        >
          Run
        </Button>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#6366F1",
            px: 4,
            "&:hover": { bgcolor: "#4F46E5" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
