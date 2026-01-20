import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { questions } from "./CodingData";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

/* -------------------- MAIN COMPONENT -------------------- */
export default function Coding() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4 }}>
      <Container maxWidth="lg">
        <Header />
        <Filters />
        <QuestionsTable onSolve={() => navigate("/solve")} />
      </Container>
    </Box>
  );
}

/* -------------------- HEADER -------------------- */
function Header() {
  return (
    <Box textAlign="center" mb={4}>
      <Typography variant="h3" color="secondary">
        Coding <span style={{ color: "#e11d48" }}>Questions</span>
      </Typography>
    </Box>
  );
}

/* -------------------- FILTERS -------------------- */
function Filters() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <TextField placeholder="Search..." />

      <TextField select defaultValue="language" placeholder="Language...">
        <MenuItem value="language">Language...</MenuItem>
        <MenuItem value="Python">Python</MenuItem>
        <MenuItem value="JavaScript">JavaScript</MenuItem>
      </TextField>
    </Box>
  );
}

/* -------------------- TABLE -------------------- */

function QuestionsTable({ onSolve }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          borderCollapse: "collapse",
        }}
      >
        <TableHead sx={{ bgcolor: "black", color: "white" }}>
          <TableRow>
            <TableCell sx={cellStyle}>Question Summary</TableCell>
            <TableCell sx={cellStyle} align="center">
              Test Case Count
            </TableCell>
            <TableCell sx={cellStyle} align="center">
              Language
            </TableCell>
            <TableCell sx={cellStyle} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {questions.map((q, index) => (
            <TableRow key={index}>
              <TableCell sx={cellStyle}>{q.title}</TableCell>
              <TableCell sx={cellStyle} align="center">
                {q.testCases}
              </TableCell>
              <TableCell sx={cellStyle} align="center">
                {q.language}
              </TableCell>
              <TableCell
                sx={cellStyle}
                display="flex"
                flexDirection="column"
                align="center"
              >
                {/* SOLVE BUTTON WITH BULB */}
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<LightbulbOutlinedIcon />}
                  onClick={onSolve}
                >
                  Solve
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/* column + row lines */
const cellStyle = {
  border: "1px solid #E5E7EB",
  color: " grey",
};
