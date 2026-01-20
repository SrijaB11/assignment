// import React from "react";

// function Coding() {
//   return (
//     <div>
//       <div>
//         <input type="search" placeholder="Search..." />
//       </div>
//       <div>
//         <input type="" placeholder="Language..." />
//       </div>
//       <table border="1px">
//         <th>Question Summary</th>
//         <th>Test Case Count</th>
//         <th>Language</th>
//         <th>Actions</th>
//         <tr>
//           <td>
//             The Library’s Fine Calculator Story: Alice manages the local library
//             and wants a way to calculate...
//           </td>
//           <td>3</td>
//           <td>Python</td>
//           <td>bulb</td>
//         </tr>
//       </table>
//     </div>
//   );
// }

// export default Coding;
// // App.js
// import React from "react";
// import { questions } from "./CodingData"; // import the JS file we created
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Box,
// } from "@mui/material";

// const StoriesTable = () => {
//   return (
//     <Box
//       p={4}
//       maxWidth="900px"
//       mx="auto"
//       bgcolor="background.default" // uses theme background
//     >
//       <Typography variant="h5" fontWeight={600} mb={3} color="text.primary">
//         Stories Table
//       </Typography>

//       <TableContainer
//         component={Paper}
//         sx={{
//           bgcolor: "background.card", // uses theme card color
//           borderRadius: 3, // uses theme shape if needed
//         }}
//       >
//         //{" "}
//         <div>
//           // <input type="search" placeholder="Search..." />
//           //{" "}
//         </div>
//         //{" "}
//         <div>
//           // <input type="" placeholder="Language..." />
//           //{" "}
//         </div>
//         //
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Title</TableCell>
//               <TableCell>Difficulty</TableCell>
//               <TableCell>Language</TableCell>
//               <TableCell>Icon</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {questions.map((question) => (
//               <TableRow key={question.id}>
//                 <TableCell>{question.title}</TableCell>
//                 <TableCell>{question.difficulty}</TableCell>
//                 <TableCell>{question.language}</TableCell>
//                 <TableCell>{question.icon}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default StoriesTable;

// StoriesTable.jsx
//
// import {
//   Box,
//   Typography,
//   TextField,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// const questions = [
//   {
//     title:
//       "The Library’s Fine Calculator Story: Alice manages the local library...",
//     testCases: 3,
//     language: "Python",
//   },
//   {
//     title:
//       "The Library’s Fine Calculator Story: Alice manages the local library...",
//     testCases: 3,
//     language: "Python",
//   },
//   {
//     title:
//       "The Library’s Fine Calculator Story: Alice manages the local library...",
//     testCases: 3,
//     language: "Python",
//   },
// ];

// export default function CodingQuestions() {
//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "background.default", p: 4 }}>
//       {/* Page Title */}
//       <Typography variant="h3" textAlign="center" gutterBottom>
//         Coding Questions
//       </Typography>

//       {/* Search & Filter */}
//       <Box
//         sx={{
//           display: "flex",
//           gap: 2,
//           maxWidth: 900,
//           mx: "auto",
//           mb: 3,
//         }}
//       >
//         <TextField placeholder="Search..." />
//         <TextField select defaultValue="" sx={{ width: 180 }}>
//           <MenuItem value="">Language</MenuItem>
//           <MenuItem value="Python">Python</MenuItem>
//           <MenuItem value="JavaScript">JavaScript</MenuItem>
//         </TextField>
//       </Box>

//       {/* Table */}
//       <TableContainer component={Paper} sx={{ maxWidth: 900, mx: "auto" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Question Summary</TableCell>
//               <TableCell align="center">Test Case Count</TableCell>
//               <TableCell align="center">Language</TableCell>
//               <TableCell align="center">Actions</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {questions.map((q, index) => (
//               <TableRow key={index}>
//                 <TableCell>{q.title}</TableCell>
//                 <TableCell align="center">{q.testCases}</TableCell>
//                 <TableCell align="center">{q.language}</TableCell>
//                 <TableCell align="center">
//                   <Button variant="contained" color="primary">
//                     Solve
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }
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
        <TableHead>
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
};
