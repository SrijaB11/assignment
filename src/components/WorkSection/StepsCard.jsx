// import { Paper, Typography, Divider } from "@mui/material";

// export default function StepsCard({ number, title }) {
//   return (
//     <Paper
//       elevation={4}
//       sx={{
//         p: 2.5,
//         borderRadius: "15px",
//         display: "flex",
//         alignItems: "center",
//         bgcolor: "white",
//         maxWidth: "500px",
//         maxHeight: "101px",
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: 28,
//           fontWeight: 700,
//           minWidth: 52,
//           textAlign: "center",
//         }}
//       >
//         {number}
//       </Typography>

//       <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

//       <Typography
//         sx={{
//           fontSize: 20,
//           fontWeight: 600,
//         }}
//       >
//         {title}
//       </Typography>
//     </Paper>
//   );
// }
import { Paper, Typography, Divider } from "@mui/material";

export default function StepsCard({ number, title }) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: { xs: 2, md: 2.5 },
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        bgcolor: "white",
        maxWidth: { xs: "100%", sm: "420px", md: "500px" },
        minHeight: "80px",
        mx: { xs: "auto", md: 0 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 22, md: 28 },
          fontWeight: 700,
          minWidth: { xs: 40, md: 52 },
          textAlign: "center",
        }}
      >
        {number}
      </Typography>

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      <Typography
        sx={{
          fontSize: { xs: 16, md: 20 },
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </Paper>
  );
}
