// import { Box, Typography } from "@mui/material";
// import StepCard from "./StepsCard";
// import women from "../../assets/images/Image.png";
// import Grid from "@mui/material/Grid";

// import arrow1 from "../../assets/vectors/arrow1.png";
// import arrow2 from "../../assets/vectors/arrow2.png";

// const steps = [
//   "Sign Up",
//   "Code and Learn",
//   "Understand",
//   "Practice",
//   "Achieve",
// ];

// export default function WorkSection() {
//   return (
//     <Box sx={{ position: "relative", overflow: "hidden", height: "860px" }}>
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           display: "flex",
//           zIndex: 0,
//         }}
//       >
//         <Box sx={{ width: "100%", bgcolor: "primary.main" }} />
//       </Box>
//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         <Grid
//           container
//           spacing={6}
//           alignItems="flex-start"
//           wrap="nowrap"
//           height="1000px"
//         >
//           {/* LEFT IMAGE */}
//           <Grid size={6}>
//             <Box>
//               <Box
//                 component="img"
//                 src={women}
//                 alt="Student"
//                 sx={{
//                   width: "100%",
//                   maxWidth: 520,
//                   display: "block",
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* RIGHT CONTENT */}
//           <Grid size={6} width="600px" position={"relative"}>
//             <Typography
//               variant="h3"
//               color="white"
//               mb={2}
//               textAlign="left"
//               pt={4}
//             >
//               How It Works
//             </Typography>

//             <Typography
//               variant="body1"
//               color="#F3F4F6"
//               mb={5}
//               textAlign="left"
//               maxWidth={420}
//             >
//               Simplify the onboarding process by showing how easy it is to start
//               using CodeArena.
//             </Typography>

//             {/* STEPS */}
//             <Box sx={{ position: "relative" }}>
//               {steps.map((step, index) => (
//                 <Box key={step} sx={{ position: "relative", mb: 3 }}>
//                   <StepCard
//                     number={String(index + 1).padStart(2, "0")}
//                     title={step}
//                   />
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//       <Box
//         component="img"
//         src={arrow1}
//         alt="arrow"
//         sx={{
//           position: "absolute",
//           right: 640,
//           top: "100%",
//           width: 90,
//         }}
//       />
//       <Box
//         component="img"
//         src={arrow2}
//         alt="arrow"
//         sx={{
//           position: "absolute",
//           right: -40,
//           top: "60%",
//           width: 90,
//         }}
//       />
//       <Box
//         component="img"
//         src={arrow2}
//         alt="arrow"
//         sx={{
//           position: "absolute",
//           right: 40,
//           top: "60%",
//           width: 90,
//         }}
//       />{" "}
//       <Box
//         component="img"
//         src={arrow1}
//         alt="arrow"
//         sx={{
//           position: "absolute",
//           right: -40,
//           top: "60%",
//           width: 90,
//         }}
//       />
//     </Box>
//   );
// }

//
//
// import { Box, Typography } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2"; // ✅ FIX
// import StepCard from "./StepsCard";
// import women from "../../assets/images/Image.png";

// import arrow1 from "../../assets/vectors/arrow1.png";
// import arrow2 from "../../assets/vectors/arrow2.png";

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
//         position: "relative",
//         overflow: "hidden",
//         minHeight: { xs: "auto", md: "860px" },
//       }}
//     >
//       {/* BACKGROUND */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           bgcolor: "primary.main",
//           zIndex: 0,
//         }}
//       />

//       {/* CONTENT */}
//       <Box sx={{ position: "relative", zIndex: 1, px: { xs: 2, md: 6 } }}>
//         <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
//           {/* LEFT IMAGE */}
//           <Grid xs={12} md={6}>
//             <Box textAlign={{ xs: "center", md: "left" }}>
//               <Box
//                 component="img"
//                 src={women}
//                 alt="Student"
//                 sx={{
//                   width: "100%",
//                   maxWidth: { xs: 320, sm: 420, md: 520 },
//                   display: "block",
//                   mx: { xs: "auto", md: 0 },
//                 }}
//               />
//             </Box>
//           </Grid>

//           {/* RIGHT CONTENT */}
//           <Grid xs={12} md={6} position="relative">
//             <Typography
//               variant="h3"
//               color="white"
//               mb={2}
//               textAlign={{ xs: "center", md: "left" }}
//               pt={{ xs: 0, md: 4 }}
//             >
//               How It Works
//             </Typography>

//             <Typography
//               variant="body1"
//               color="#F3F4F6"
//               mb={5}
//               textAlign={{ xs: "center", md: "left" }}
//               maxWidth={420}
//               mx={{ xs: "auto", md: 0 }}
//             >
//               Simplify the onboarding process by showing how easy it is to start
//               using CodeArena.
//             </Typography>

//             {/* STEPS */}
//             <Box sx={{ position: "relative" }}>
//               {steps.map((step, index) => (
//                 <Box key={step} sx={{ mb: 3 }}>
//                   <StepCard
//                     number={String(index + 1).padStart(2, "0")}
//                     title={step}
//                   />
//                 </Box>
//               ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* DECORATIVE ARROWS */}
//       <Box
//         component="img"
//         src={arrow1}
//         alt="arrow"
//         sx={{
//           position: "absolute",
//           right: 640,
//           top: "85%",
//           width: 90,
//           display: { xs: "none", md: "block" },
//           pointerEvents: "none",
//         }}
//       />

//       <Box
//         component="img"
//         src={arrow2}
//         alt="arrow"
//         sx={{
//           position: "absolute",
//           right: -40,
//           top: "60%",
//           width: 90,
//           display: { xs: "none", md: "block" },
//           pointerEvents: "none",
//         }}
//       />

//       <Box
//         component="img"
//         src={arrow2}
//         alt="arrow"
//         sx={{
//           position: "absolute",
//           right: 40,
//           top: "70%",
//           width: 90,
//           display: { xs: "none", md: "block" },
//           pointerEvents: "none",
//         }}
//       />
//     </Box>
//   );
// }
import { Box, Typography } from "@mui/material";
import StepCard from "./StepsCard";
import women from "../../assets/images/Image.png";

import arrow1 from "../../assets/vectors/arrow1.png";
import arrow2 from "../../assets/vectors/arrow2.png";

const steps = [
  "Sign Up",
  "Code and Learn",
  "Understand",
  "Practice",
  "Achieve",
];

export default function WorkSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "auto", md: "860px" },
        bgcolor: "primary.main",
      }}
    >
      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2, md: 6 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "start",
        }}
      >
        {/* LEFT IMAGE */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Box
            component="img"
            src={women}
            alt="Student"
            sx={{
              width: "100%",
              maxWidth: { xs: 320, sm: 420, md: 520 },
              mx: { xs: "auto", md: 0 },
            }}
          />
        </Box>

        {/* RIGHT CONTENT */}
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h3"
            color="white"
            mb={2}
            textAlign={{ xs: "center", md: "left" }}
            pt={{ xs: 0, md: 4 }}
          >
            How It Works
          </Typography>

          <Typography
            variant="body1"
            color="#F3F4F6"
            mb={5}
            textAlign={{ xs: "center", md: "left" }}
            maxWidth={420}
            mx={{ xs: "auto", md: 0 }}
          >
            Simplify the onboarding process by showing how easy it is to start
            using CodeArena.
          </Typography>

          {/* STEPS */}
          <Box>
            {steps.map((step, index) => (
              <Box key={step} sx={{ mb: 3 }}>
                <StepCard
                  number={String(index + 1).padStart(2, "0")}
                  title={step}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* DECORATIVE ARROWS */}
      <Box
        component="img"
        src={arrow1}
        alt="arrow"
        sx={{
          position: "absolute",
          right: 120,
          top: "75%",
          width: 90,
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
        }}
      />

      <Box
        component="img"
        src={arrow2}
        alt="arrow"
        sx={{
          position: "absolute",
          right: -30,
          top: "55%",
          width: 90,
          display: { xs: "none", md: "block" },
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}
