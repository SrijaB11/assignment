// import { Paper, Typography, Divider } from "@mui/material";

// export default function StepsCard({ number, title }) {
//   return (
//     <Paper
//       elevation={4}
//       sx={{
//         p: 2.5,
//         mb: 3,
//         borderRadius: 3,
//         display: "flex",
//         alignItems: "center",
//         bgcolor: "background.paper",
//         maxWidth: 420,
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: 28,
//           fontWeight: 700,
//           minWidth: 48,
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
        p: 2.5,
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        bgcolor: "white",
        maxWidth: "500px",
        maxHeight: "101px",
      }}
    >
      <Typography
        sx={{
          fontSize: 28,
          fontWeight: 700,
          minWidth: 52,
          textAlign: "center",
        }}
      >
        {number}
      </Typography>

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </Paper>
  );
}
