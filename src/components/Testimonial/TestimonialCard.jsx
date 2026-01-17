// import { Box, Paper, Typography, Avatar } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";

// export default function TestimonialCard({ name, role, review, rating }) {
//   return (
//     <Paper
//       elevation={6}
//       sx={{
//         width: 320,
//         position: "relative",
//         overflow: "hidden",
//         bgcolor: "background.paper",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           gap: 1.5,
//           bgcolor: "primary.main",
//           color: "common.white",
//           p: 2,
//         }}
//       >
//         <Avatar />

//         <Box sx={{ flexGrow: 1 }}>
//           <Typography fontWeight={600}>{name}</Typography>
//           <Typography variant="caption">{role}</Typography>
//         </Box>

//         <Box sx={{ display: "flex" }}>
//           {Array.from({ length: rating }).map((_, i) => (
//             <StarIcon key={i} fontSize="small" />
//           ))}
//         </Box>
//       </Box>

//       <Box sx={{ p: 3 }}>
//         <Typography variant="body2" color="text.secondary">
//           “{review}”
//         </Typography>
//       </Box>

//       <Typography
//         sx={{
//           position: "absolute",
//           bottom: -30,
//           left: 16,
//           fontSize: 90,
//           color: "primary.main",
//           opacity: 0.15,
//         }}
//       >
//         “
//       </Typography>
//     </Paper>
//   );
// }

import { Paper, Box, Typography, Avatar, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const TestimonialCard = ({ name, role, text, image }) => {
  return (
    <Paper
      elevation={8}
      sx={{
        p: 3,
        width: 380,
        backgroundColor: "background.paper",
      }}
    >
      {/* Header strip */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          borderRadius: 2,
          p: 1.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Avatar src={image} alt={name} />

        <Box flex={1}>
          <Typography fontWeight={600}>{name}</Typography>
          <Typography variant="caption">{role}</Typography>
        </Box>

        <Stack direction="row" spacing={0.3}>
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} fontSize="small" />
          ))}
        </Stack>
      </Box>

      {/* Quote text */}
      <Typography variant="body1" color="text.primary">
        {text}
      </Typography>

      {/* Quote mark */}
      <Typography
        sx={{
          fontSize: 60,
          color: "primary.main",
          lineHeight: 1,
          mt: 2,
        }}
      >
        “
      </Typography>
    </Paper>
  );
};

export default TestimonialCard;
