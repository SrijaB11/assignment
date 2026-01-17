// import React from "react";
// import MCQCard from "./MCQCard";
// import mcqs from "./MCQSData";

// function MCQS() {
//   return (
//     <div>
//       {mcqs.map((mcq) => (
//         <MCQCard key={mcq.id} mcq={mcq} />
//       ))}
//       <button>Submit</button>
//     </div>
//   );
// }

// export default MCQS;

// import { Box, Button } from "@mui/material";
// import MCQCard from "./MCQCard";
// import mcqs from "./MCQSData";

// const MCQS = () => {
//   return (
//     <Box maxWidth={800} mx="auto" px={2}>
//       {mcqs.map((mcq) => (
//         <MCQCard key={mcq.id} mcq={mcq} />
//       ))}

//       <Button variant="contained" color="primary" fullWidth sx={{ mt: 4 }}>
//         Submit
//       </Button>
//     </Box>
//   );
// };

// export default MCQS;

// import { Box, Button, Container } from "@mui/material";
// import MCQCard from "./MCQCard";
// import mcqs from "./MCQSData";

// const MCQS = () => {
//   return (
//     <Container maxWidth="md">
//       <Box py={6}>
//         {mcqs.map((mcq) => (
//           <MCQCard key={mcq.id} mcq={mcq} />
//         ))}

//         <Box textAlign="center" mt={4}>
//           <Button
//             variant="contained"
//             color="secondary"
//             sx={{ height: 56, px: 6 }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default MCQS;

// import { Box, Typography, Button } from "@mui/material";
// import MCQCard from "./MCQCard";
// import mcqs from "./MCQSData";
// import RightSideImg from "../../components/RightImg/RightSideImg";

// const MCQS = () => {
//   return (
//     <Box minHeight="100vh" display="flex" bgcolor="#111">
//       {/* LEFT IMAGE */}
//       <Box
//         width={320}
//         display={{ xs: "none", md: "flex" }}
//         alignItems="center"
//         justifyContent="center"
//       >
//         <RightSideImg />
//       </Box>

//       {/* CENTER MCQ COLUMN */}
//       <Box flex={1} display="flex" justifyContent="center" py={4}>
//         <Box width="100%" maxWidth={600} bgcolor="#fff" borderRadius={3} p={4}>
//           <Typography variant="h5" fontWeight={700} textAlign="center" mb={4}>
//             MCQ <span style={{ color: "#e11d48" }}>Questions</span>
//           </Typography>

//           {mcqs.map((mcq) => (
//             <MCQCard key={mcq.id} mcq={mcq} />
//           ))}

//           <Box textAlign="center" mt={4}>
//             <Button
//               variant="contained"
//               color="secondary"
//               sx={{ px: 6, height: 48 }}
//             >
//               Submit
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       {/* RIGHT DARK SPACE */}
//       <Box width={320} display={{ xs: "none", md: "block" }} />
//     </Box>
//   );
// };

// export default MCQS;
import { Box, Typography, Button, Paper } from "@mui/material";
import MCQCard from "./MCQCard";
import mcqs from "./MCQSData";

const MCQS = () => {
  return (
    <Box minHeight="100vh" bgcolor="background.default" py={4}>
      <Paper
        sx={{
          width: "1440px",
          maxWidth: "100%",
          mx: "auto",
          px: { xs: 3, md: 12 }, // 96px
          py: 6,
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
