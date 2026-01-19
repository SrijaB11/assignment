// // import React from "react";

// // function WorkSection() {
// //   return (
// //     <div>
// //       <div className="left-section">
// //         <img src="" alt="girl-img" />
// //       </div>
// //       <div className="right-section">
// //         <h1>How It Works</h1>
// //         <p>
// //           Simplify the onboarding process by showing how easy it is to start
// //           using CodeArena.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default WorkSection;
// // import { Box, Typography, Paper } from "@mui/material";
// // import women from "../../assets/images/Image.png";

// // const steps = [
// //   "Sign Up",
// //   "Code and Learn",
// //   "Understand",
// //   "Practice",
// //   "Achieve",
// // ];

// // export default function WorkSection() {
// //   return (
// //     <Box
// //       sx={{ width: "1440px", height: "885px" }}
// //       bgcolor="primary.main"
// //       display={"flex"}
// //     >
// //       <Box sx={{ width: "50%" }}>
// //         <img src={women} />
// //       </Box>
// //       <Box>
// //         <Typography variant="h3" color="white" mb={4}>
// //           How It Works
// //         </Typography>
// //         <Typography varient="body1" color="white">
// //           Simplify the onboarding process by showing how easy it is to start
// //           using CodeArena.
// //         </Typography>
// //       </Box>
// //     </Box>
// //   );
// // }
// import { Box, Grid, Typography } from "@mui/material";
// import StepCard from "./StepsCard";
// import women from "../../assets/images/Image.png";

// const steps = [
//   "Sign Up",
//   "Code and Learn",
//   "Understand",
//   "Practice",
//   "Achieve",
// ];

// export default function WorkSection() {
//   return (
//     <Box
//       sx={{
//         py: { xs: 6, md: 10 },
//         px: { xs: 2, md: 8 },
//         bgcolor: "primary.main",
//       }}
//     >
//       <Grid container spacing={4} alignItems="center">
//         {/* LEFT IMAGE */}
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src={women}
//             alt="Student"
//             sx={{
//               width: "100%",
//               maxWidth: 420,
//               mx: "auto",
//               display: "block",
//             }}
//           />
//         </Grid>

//         {/* RIGHT CONTENT */}
//         <Grid item xs={12} md={6}>
//           <Typography
//             variant="h4"
//             sx={{
//               color: "#fff",
//               fontWeight: 700,
//               mb: 1,
//             }}
//           >
//             How It Works
//           </Typography>

//           <Typography
//             variant="subtitle1"
//             sx={{
//               color: "#E5E7EB",
//               mb: 4,
//             }}
//           >
//             Simplify the onboarding process by showing how easy it is to start
//             using CodeArena.
//           </Typography>

//           {steps.map((step, index) => (
//             <StepCard
//               key={step}
//               number={String(index + 1).padStart(2, "0")}
//               title={step}
//             />
//           ))}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// import { Box, Grid, Typography } from "@mui/material";
// import StepCard from "./StepsCard";
// import women from "../../assets/images/Image.png";

// const steps = [
//   "Sign Up",
//   "Code and Learn",
//   "Understand",
//   "Practice",
//   "Achieve",
// ];

// export default function WorkSection() {
//   return (
//     <Box sx={{ position: "relative", overflow: "hidden" }}>
//       {/* Background split */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           display: "flex",
//           zIndex: 0,
//         }}
//       >
//         <Box sx={{ width: "50%", bgcolor: "#3A3F8F" }} />
//         <Box sx={{ width: "50%", bgcolor: "primary.main" }} />
//       </Box>

//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 1,
//           py: { xs: 6, md: 10 },
//           px: { xs: 2, md: 8 },
//         }}
//       >
//         <Grid container spacing={6} alignItems="center">
//           {/* LEFT IMAGE */}
//           <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
//             <Box
//               component="img"
//               src={women}
//               alt="Student"
//               sx={{
//                 width: "100%",
//                 maxWidth: 480,
//                 mx: "auto",
//                 display: "block",
//               }}
//             />
//           </Grid>

//           {/* RIGHT CONTENT */}
//           <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
//             <Typography variant="h3" color="white" mb={2}>
//               How It Works
//             </Typography>

//             <Typography variant="subtitle1" color="#F3F4F6" mb={5}>
//               Simplify the onboarding process by showing how easy it is to start
//               using CodeArena.
//             </Typography>

//             {/* Steps */}
//             <Box>
//               {steps.map((step, index) => (
//                 <StepCard
//                   key={step}
//                   number={String(index + 1).padStart(2, "0")}
//                   title={step}
//                 />
//               ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }
import { Box, Grid, Typography } from "@mui/material";
import StepCard from "./StepsCard";
import women from "../../assets/images/Image.png";

import arrow1 from "../../assets/vectors/arrow1.png";
// import arrow2 from "../../assets/vectors/arrow-2.svg";

const steps = [
  "Sign Up",
  "Code and Learn",
  "Understand",
  "Practice",
  "Achieve",
];

export default function WorkSection() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden", height: "880px" }}>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          zIndex: 0,
        }}
      >
        <Box sx={{ width: "100%", bgcolor: "primary.main" }} />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid container spacing={6} alignItems="flex-start" wrap="nowrap">
          {/* LEFT IMAGE */}

          <Grid
            item
            xs={6}
            // sx={{
            //   pl: "180px", // pushes cards into red area like Figma
            // }}
          >
            <Box>
              <Box
                component="img"
                src={women}
                alt="Student"
                sx={{
                  width: "100%",
                  maxWidth: 520,
                  display: "block",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid item xs={6} width={"600px"}>
            <Typography variant="h3" color="white" mb={2} textAlign="left">
              How It Works
            </Typography>

            <Typography
              variant="body1"
              color="#F3F4F6"
              mb={5}
              textAlign="left"
              maxWidth={420}
            >
              Simplify the onboarding process by showing how easy it is to start
              using CodeArena.
            </Typography>
            <Box
              component="img"
              src={arrow1} // <-- put vector here
              alt="arrow"
              sx={{
                position: "absolute",
                right: -40, // NOT -90
                top: "60%",
                width: 90,
              }}
            />

            {/* STEPS */}
            <Box sx={{ position: "relative" }}>
              {steps.map((step, index) => (
                <Box key={step} sx={{ position: "relative", mb: 3 }}>
                  <StepCard
                    number={String(index + 1).padStart(2, "0")}
                    title={step}
                  />

                  {/* VECTOR PLACEHOLDER */}
                  {index !== steps.length - 1 && (
                    <Box
                      component="img"
                      src={arrow1} // <-- put vector here
                      alt="arrow"
                      sx={{
                        position: "absolute",
                        right: -40, // NOT -90
                        top: "60%",
                        width: 90,
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
