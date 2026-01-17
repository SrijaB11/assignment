// import React from "react";

// function MCQCard({ mcq }) {
//   return (
//     <div>
//       <p>
//         {mcq.id}.{mcq.question}
//       </p>
//       <div>
//         {mcq.options.map((option) => {
//           return (
//             <div>
//               <label>
//                 <input type="radio" name="radio" />
//                 {option}
//               </label>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default MCQCard;

// import {
//   Card,
//   CardContent,
//   Typography,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from "@mui/material";

// const MCQCard = ({ mcq }) => {
//   return (
//     <Card sx={{ mb: 3 }}>
//       <CardContent>
//         <Typography fontWeight={600} mb={2}>
//           {mcq.id}. {mcq.question}
//         </Typography>

//         <RadioGroup>
//           {mcq.options.map((option, index) => (
//             <FormControlLabel
//               key={index}
//               value={option}
//               control={<Radio />}
//               label={option}
//             />
//           ))}
//         </RadioGroup>
//       </CardContent>
//     </Card>
//   );
// };

// export default MCQCard;

// import {
//   Box,
//   Typography,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from "@mui/material";

// const MCQCard = ({ mcq }) => {
//   return (
//     <Box mb={4}>
//       {/* Question */}
//       <Typography variant="body1" fontWeight={600} mb={2}>
//         {mcq.id}. {mcq.question}
//       </Typography>

//       {/* Options */}
//       <RadioGroup>
//         <Box
//           display="grid"
//           gridTemplateColumns={{
//             xs: "1fr",
//             sm: "1fr 1fr",
//           }}
//           gap={2}
//         >
//           {mcq.options.map((option, index) => (
//             <Box key={index} p={2} border="1px solid #E5E7EB" borderRadius={2}>
//               <FormControlLabel
//                 value={option}
//                 control={<Radio />}
//                 label={option}
//               />
//             </Box>
//           ))}
//         </Box>
//       </RadioGroup>
//     </Box>
//   );
// };

// export default MCQCard;

// import {
//   Box,
//   Typography,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from "@mui/material";

// const MCQCard = ({ mcq }) => {
//   return (
//     <Box bgcolor="#F6F7FB" borderRadius={2} p={3} mb={3}>
//       <Typography fontWeight={600} mb={2}>
//         {mcq.id}. {mcq.question}
//       </Typography>

//       <RadioGroup>
//         <Box
//           display="grid"
//           gridTemplateColumns={{
//             xs: "1fr",
//             sm: "1fr 1fr",
//           }}
//           gap={2}
//         >
//           {mcq.options.map((option, index) => (
//             <FormControlLabel
//               key={index}
//               value={option}
//               control={<Radio />}
//               label={option}
//             />
//           ))}
//         </Box>
//       </RadioGroup>
//     </Box>
//   );
// };

// export default MCQCard;
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const MCQCard = ({ mcq }) => {
  return (
    <Box bgcolor="background.card" borderRadius={2} p={4}>
      <Typography variant="body1" fontWeight={500} mb={3}>
        {mcq.id}. {mcq.question}
      </Typography>

      <RadioGroup>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          rowGap={2}
          columnGap={46}
        >
          {mcq.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </Box>
      </RadioGroup>
    </Box>
  );
};

export default MCQCard;
