// import { Link } from "react-router-dom";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Container,
//   Typography,
//   Button,
//   Paper,
//   Divider,
//   IconButton,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// import logo from "../../assets/images/logo1.png";
// import text from "../../assets/images/CodeArena.png";

// const CodingPage = () => {
//   return (
//     <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
//       {/* ================= NAVBAR ================= */}
//       <AppBar
//         position="sticky"
//         elevation={0}
//         sx={{
//           bgcolor: "background.paper",
//           borderBottom: "1px solid #eee",
//         }}
//       >
//         <Toolbar sx={{ justifyContent: "space-between" }}>
//           {/* Logo */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <img src={logo} alt="logo" height={40} />
//             <img src={text} alt="CodeArena" height={30} />
//           </Box>

//           {/* Nav Links */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
//             {["Home", "About Us", "Coding", "MCQs"].map((item) => (
//               <Typography
//                 key={item}
//                 component={Link}
//                 to={`/${item === "Home" ? "" : item.toLowerCase()}`}
//                 sx={{
//                   textDecoration: "none",
//                   color: "text.primary",
//                   fontWeight: 500,
//                   "&:hover": { color: "primary.main" },
//                 }}
//               >
//                 {item}
//               </Typography>
//             ))}
//           </Box>

//           {/* Auth Buttons */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
//             <Button
//               component={Link}
//               to="/register"
//               variant="outlined"
//               color="secondary"
//             >
//               Signup
//             </Button>
//             <Button
//               component={Link}
//               to="/login"
//               variant="contained"
//               color="secondary"
//             >
//               Login
//             </Button>
//           </Box>

//           {/* Mobile Icon */}
//           <IconButton sx={{ display: { md: "none" } }}>
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* ================= PAGE CONTENT ================= */}
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         {/* Title */}
//         <Typography
//           variant="h3"
//           sx={{
//             textAlign: "center",
//             color: "primary.main",
//             mb: 4,
//           }}
//         >
//           Coding <span style={{ color: "#363F8F" }}>Question</span>
//         </Typography>

//         {/* Question Card */}
//         <Paper sx={{ p: 4 }}>
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             1. First and Last Position of an Element in Sorted Array
//           </Typography>

//           <Divider sx={{ my: 2 }} />

//           <Typography variant="body1" color="text.secondary">
//             You have been given a sorted array of N integers and an integer K.
//             Your task is to find the first and last occurrence of K. If K is not
//             present, return -1.
//           </Typography>

//           {/* ================= EDITOR + CONSOLE ================= */}
//           <Box sx={{ display: "flex", gap: 3, mt: 4 }}>
//             {/* Code Editor */}
//             <Paper
//               sx={{
//                 flex: 2,
//                 bgcolor: "#1f2937",
//                 color: "white",
//                 p: 3,
//                 minHeight: 320,
//               }}
//             >
//               <Typography variant="body1">// Write your code here</Typography>
//             </Paper>

//             {/* Console */}
//             <Paper
//               sx={{
//                 flex: 1,
//                 bgcolor: "background.paper",
//                 p: 3,
//                 minHeight: 320,
//               }}
//             >
//               <Typography variant="subtitle1">Console</Typography>
//             </Paper>
//           </Box>

//           {/* ================= ACTION BUTTONS ================= */}
//           <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
//             <Button variant="contained" color="primary">
//               Run
//             </Button>
//             <Button variant="contained" color="secondary">
//               Submit
//             </Button>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default CodingPage;
// import { Box, Grid, Typography, Paper, Button } from "@mui/material";
// import { useLocation } from "react-router-dom";

// const CodingPage = () => {
//   const { state } = useLocation(); // question data

//   if (!state) {
//     return <Typography>No Question Selected</Typography>;
//   }

//   return (
//     <Box px={4} py={3}>
//       <Grid container spacing={3}>
//         {/* LEFT: PROBLEM */}
//         <Grid item xs={12} md={4}>
//           <Paper sx={{ p: 3, height: "100%" }}>
//             <Typography variant="h4" mb={2}>
//               Problem
//             </Typography>
//             <Typography>{state.title}</Typography>
//           </Paper>
//         </Grid>

//         {/* CENTER: CODE EDITOR */}
//         <Grid item xs={12} md={5}>
//           <Paper sx={{ p: 3, height: "100%" }}>
//             <Typography variant="h4" mb={2}>
//               Code Editor
//             </Typography>

//             <Box
//               sx={{
//                 height: 300,
//                 backgroundColor: "#0f172a",
//                 color: "white",
//                 borderRadius: 2,
//                 p: 2,
//                 fontFamily: "monospace",
//               }}
//             >
//               {/* Replace later with Monaco */}
//               Write your code here...
//             </Box>

//             <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//               Run Code
//             </Button>
//           </Paper>
//         </Grid>

//         {/* RIGHT: TEST CASES */}
//         <Grid item xs={12} md={3}>
//           <Paper sx={{ p: 3, height: "100%" }}>
//             <Typography variant="h4" mb={2}>
//               Test Cases
//             </Typography>

//             <Typography>Total: {state.testCases}</Typography>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default CodingPage;

// import React from "react";

// function CodingPage() {
//   return (
//     <div>
//       <Box textAlign="center" mb={4}>
//         <Typography variant="h3">
//           Coding <span style={{ color: "#e11d48" }}>Questions</span>
//         </Typography>
//       </Box>
//      import { Box, Card, CardContent, Typography } from "@mui/material";

// export default function ProblemCard() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         mt: 4,
//       }}
//     >
//       <Card
//         sx={{
//           width: "1170px",
//           minHeight: "412px",
//           bgcolor: "background.paper",
//           borderRadius: 3,
//           boxShadow: "0px 8px 24px rgba(0,0,0,0.05)",
//         }}
//       >
//         <CardContent
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "24px",
//             p: 4,
//           }}
//         >
//           {/* TITLE */}
//           <Typography
//             sx={{
//               fontFamily: "Poppins",
//               fontWeight: 700,
//               fontSize: "18px",
//               textTransform: "capitalize",
//               color: "text.primary",
//             }}
//           >
//             First and Last Position of an Element In Sorted Array
//           </Typography>

//           {/* PROBLEM STATEMENT */}
//           <Typography sx={textStyle}>
//             <strong>Problem Statement</strong>
//             <br />
//             You have been given a sorted array/list ARR consisting of ‘N’
//             elements. You are also given an integer ‘K’. Now, your task is to
//             find the first and last occurrence of ‘K’ in ARR.
//           </Typography>

//           {/* NOTES */}
//           <Typography sx={textStyle}>
//             <strong>Note :</strong>
//             <br />
//             1. If ‘K’ is not present in the array, then the first and the last
//             occurrence will be -1.
//             <br />
//             2. ARR may contain duplicate elements.
//           </Typography>

//           {/* INPUT FORMAT */}
//           <Typography sx={textStyle}>
//             <strong>Input Format</strong>
//             <br />
//             The first line of input contains an integer T denoting the number
//             of test cases.
//             <br />
//             The first line of each test case contains two integers N and K.
//             <br />
//             The second line contains N space-separated integers of ARR.
//           </Typography>

//           {/* OUTPUT FORMAT */}
//           <Typography sx={textStyle}>
//             <strong>Output Format</strong>
//             <br />
//             Return two integers denoting the first and last occurrence of K.
//           </Typography>

//           {/* CONSTRAINTS */}
//           <Typography sx={textStyle}>
//             <strong>Constraints</strong>
//             <br />
//             1 ≤ T ≤ 100
//             <br />
//             1 ≤ N ≤ 5000
//             <br />
//             0 ≤ K ≤ 10⁵
//             <br />
//             0 ≤ ARR[i] ≤ 10⁵
//           </Typography>

//           {/* SAMPLE INPUT */}
//           <Typography sx={textStyle}>
//             <strong>Sample Input</strong>
//             <br />
//             2
//             <br />
//             6 3
//             <br />
//             0 5 5 6 6 6
//             <br />
//             8 2
//             <br />
//             0 0 1 1 2 2 2 2
//           </Typography>

//           {/* SAMPLE OUTPUT */}
//           <Typography sx={textStyle}>
//             <strong>Sample Output</strong>
//             <br />
//             -1 -1
//             <br />
//             4 7
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// /* SHARED TEXT STYLE */
// const textStyle = {
//   fontFamily: "Poppins",
//   fontWeight: 700,
//   fontSize: "18px",
//   lineHeight: "1.4",
//   color: "text.primary",
// };

//     </div>
//   );
// }

// export default CodingPage;

// import {
//   Box,
//   Container,
//   Typography,
//   Paper,
//   Button,
//   TextField,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function CodingPage() {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 4 }}>
//       <Container maxWidth="lg">
//         {/* Header */}
//         <Typography variant="h4" mb={3}>
//           Coding <span style={{ color: "#e11d48" }}>Editor</span>
//         </Typography>

//         {/* Question */}
//         <Paper sx={{ p: 3, mb: 3 }}>
//           <Typography variant="h6" mb={1}>
//             Problem Statement
//           </Typography>
//           <Typography color="text.secondary">
//             Write a program to calculate library fine based on overdue days.
//           </Typography>
//         </Paper>

//         {/* Code Editor (simple for now) */}
//         <Paper sx={{ p: 3, mb: 3 }}>
//           <Typography variant="h6" mb={1}>
//             Code
//           </Typography>
//           <TextField
//             multiline
//             minRows={10}
//             fullWidth
//             placeholder="Write your code here..."
//             sx={{ fontFamily: "monospace" }}
//           />
//         </Paper>

//         {/* Actions */}
//         <Box display="flex" gap={2}>
//           <Button variant="contained" color="primary">
//             Run
//           </Button>
//           <Button variant="outlined" color="secondary">
//             Submit
//           </Button>
//           <Button variant="text" onClick={() => navigate("/")}>
//             Back
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
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
          Problem Statement You have been given a sorted array/list ARR
          consisting of ‘N’ elements. You are also given an integer ‘K’. Now,
          your task is to find the first and last occurrence of ‘K’ in ARR. Note
          : 1. If ‘K’ is not present in the array, then the first and the last
          occurrence will be -1.  2. ARR may contain duplicate elements.  For
          example, if ARR = [0, 1, 1, 5] and K = 1, then the first and last
          occurrence of 1 will be 1(0 - indexed) and Detailed explanation (
          Input/output format, Notes, Images ) keyboard_arrow_down Input Format
          The first line of input contains an integer 'T' which denotes the
          number of test cases or queries to be run. Then the test cases
          follow.  The first line of each test case contains two single-space
          separated integers ‘N’ and ‘K’, respectively.  The second line of each
          test case contains ‘N’ single space-separated integers denoting the
          elements of the array/list ARR.  Output Format : Return two
          single-space separated integers denoting the first and the last
          occurrence of ‘K’ in ARR, respectively.  Note: You do not need to
          print anything; it has already been taken care of. Just implement the
          given function.  Constraints: Explanation Of Sample Output 1: For the
          first test case, 3 is not present in the array. Hence the first and
          last occurrence of 3 is -1 and -1.  For the second test case, the
          first occurrence of 2 in at index 4 and last occurrence is at index
          7.  Sample Inputt
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
            // Write your code here
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
