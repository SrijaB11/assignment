import { Paper, Box, Typography, Avatar, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import quote from "../../assets/vectors/quote.png";

const TestimonialCard = ({ name, role, review, image }) => {
  return (
    <Paper
      elevation={8}
      sx={{
        p: 3,
        width: { xs: "100%", sm: 360, md: 380 },
        maxWidth: "380px",
        backgroundColor: "background.paper",
        position: "relative",
      }}
    >
      {/* HEADER STRIP */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 2,
          position: "absolute",
          top: "-20px",
          left: "-20px",
          right: { xs: "-20px", md: "auto" },
          flexWrap: "wrap",
          p: 1,
        }}
      >
        <Avatar
          src={image}
          alt={name}
          variant="square"
          sx={{ width: 70, height: 70 }}
        />

        <Box flex={1}>
          <Typography fontWeight={600} fontSize="14px">
            {name}
          </Typography>
          <Typography variant="caption">{role}</Typography>
        </Box>

        <Stack direction="column" spacing={0.5}>
          <Stack direction="row" spacing={0.3}>
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} fontSize="small" sx={{ color: "#FFD700" }} />
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 1,
              }}
            >
              <ThumbUpIcon sx={{ color: "red", fontSize: 10 }} />
            </Box>

            <Typography variant="body2" fontSize="10px">
              Testimonial
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* REVIEW */}
      <Typography
        variant="body1"
        color="text.primary"
        mt="90px"
        pb="30px"
        fontSize={{ xs: "14px", md: "16px" }}
      >
        {review}
      </Typography>

      {/* QUOTE ICON */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-40px",
          left: 30,
        }}
      >
        <img src={quote} alt="quote" />
      </Box>
    </Paper>
  );
};

export default TestimonialCard;

// import { Paper, Box, Typography, Avatar, Stack } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import quote from "../../assets/vectors/quote.png";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";

// const TestimonialCard = ({ name, role, review, image }) => {
//   return (
//     <Paper
//       elevation={8}
//       sx={{
//         p: 3,
//         width: 380,
//         backgroundColor: "background.paper",
//         position: "relative",
//       }}
//     >
//       {/* Header strip */}
//       <Box
//         sx={{
//           backgroundColor: "primary.main",
//           color: "white",

//           display: "flex",
//           alignItems: "center",
//           gap: 2,
//           mb: 2,
//           position: "absolute",
//           top: "-20px",
//           left: "-20px",
//         }}
//       >
//         <Avatar
//           src={image}
//           alt={name}
//           variant="square"
//           sx={{ width: 86, height: 76 }}
//         />

//         <Box flex={1}>
//           <Typography fontWeight={600} fontSize={"14px"}>
//             {name}
//           </Typography>
//           <Typography variant="caption">{role}</Typography>
//         </Box>

//         <Stack direction="column" spacing={1} flex={1}>
//           {/* Stars */}
//           <Stack direction="row" spacing={0.3}>
//             {[1, 2, 3, 4, 5].map((i) => (
//               <StarIcon key={i} fontSize="small" sx={{ color: "#FFD700" }} />
//             ))}
//           </Stack>

//           {/* Thumbs Up + Testimonial */}

//           <Stack direction="row" spacing={1} alignItems="center">
//             <Box
//               sx={{
//                 width: 22,
//                 height: 22,
//                 borderRadius: "50%", // makes it circular
//                 backgroundColor: "white", // white background
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 boxShadow: 1, // optional: adds subtle shadow
//               }}
//             >
//               <ThumbUpIcon sx={{ color: "red", fontSize: 10 }} />
//             </Box>

//             <Typography variant="body2" color="text.bg" fontSize={"10px"}>
//               Testimonial
//             </Typography>
//           </Stack>
//         </Stack>
//       </Box>

//       {/* Quote text */}
//       <Typography
//         variant="body1"
//         color="text.primary"
//         marginTop={"80px"}
//         paddingBottom={"30px"}
//       >
//         {review}
//       </Typography>

//       {/* Quote mark */}
//       <Typography
//         sx={{
//           fontSize: 60,
//           color: "primary.main",
//           lineHeight: 1,
//           mt: 2,
//           position: "absolute",
//           bottom: "-40px",
//         }}
//       >
//         <img src={quote} />
//       </Typography>
//     </Paper>
//   );
// };

// export default TestimonialCard;
