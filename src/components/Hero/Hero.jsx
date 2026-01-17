import React from "react";
import RightSideImg from "../RightImg/RightSideImg";
import "./Hero.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function Hero() {
  return (
    <div className="hero-section">
      <div className="left-hero-section">
        <Typography variant="h3" color="secondary">
          <Box component="span" variant="h3" color="primary.main">
            Where{" "}
          </Box>
          Skills
          <br /> are Sharpened{" "}
          <Box component="span" variant="h3" color="primary.main">
            and
            <br />
          </Box>
          Code Comes to Life
        </Typography>
        <Typography varient="body1" color="text.primary">
          Unlock your coding potential through interactive challenges, real-time
          feedback, and a supportive community.
        </Typography>

        <Button variant="contained" color="secondary" sx={{ width: "201px" }}>
          Get Started
        </Button>
      </div>
      <div className="right-hero-section">
        <RightSideImg />
      </div>
    </div>
  );
}

export default Hero;

// import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import RightSideImg from "../RightImg/RightSideImg";
// import "./Hero.css";

// function Hero() {
//   return (
//     <Box className="hero-section">
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           {/* LEFT */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h3" color="text.primary">
//               Where Skills are Sharpened and{" "}
//               <Box component="span" sx={{ color: "primary.main" }}>
//                 Code Comes to Life
//               </Box>
//             </Typography>

//             <Typography
//               variant="body1"
//               color="text.secondary"
//               sx={{ mt: 2, mb: 3 }}
//             >
//               Unlock your coding potential through interactive challenges,
//               real-time feedback, and a supportive community.
//             </Typography>

//             <Button variant="contained" sx={{ color: "palette.primary.main" }}>
//               Get Started
//             </Button>
//           </Grid>

//           {/* RIGHT */}
//           <Grid item xs={12} md={6} textAlign="center">
//             <RightSideImg />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default Hero;
