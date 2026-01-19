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
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const CodingPage = () => {
  const { state } = useLocation(); // question data

  if (!state) {
    return <Typography>No Question Selected</Typography>;
  }

  return (
    <Box px={4} py={3}>
      <Grid container spacing={3}>
        {/* LEFT: PROBLEM */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h4" mb={2}>
              Problem
            </Typography>
            <Typography>{state.title}</Typography>
          </Paper>
        </Grid>

        {/* CENTER: CODE EDITOR */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h4" mb={2}>
              Code Editor
            </Typography>

            <Box
              sx={{
                height: 300,
                backgroundColor: "#0f172a",
                color: "white",
                borderRadius: 2,
                p: 2,
                fontFamily: "monospace",
              }}
            >
              {/* Replace later with Monaco */}
              Write your code here...
            </Box>

            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Run Code
            </Button>
          </Paper>
        </Grid>

        {/* RIGHT: TEST CASES */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h4" mb={2}>
              Test Cases
            </Typography>

            <Typography>Total: {state.testCases}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CodingPage;
