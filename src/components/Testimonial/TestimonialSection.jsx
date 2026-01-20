import { Box, Typography, Avatar } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import testimonials from "./Testimonial";
import PageBg from "../../assets/images/PageBG.png";
import star from "../../assets/vectors/Vector.png";

export default function TestimonialSection() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${PageBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: "auto", md: "900px" },
        position: "relative",
        py: { xs: 6, md: 8 },
        overflow: "hidden",
        paddingRight: 4,
      }}
    >
      {/* TITLE */}
      <Typography
        variant="h3"
        align="center"
        color="white"
        mb={{ xs: 4, md: 8 }}
      >
        What Our Students <br /> Say
      </Typography>

      {/* CARDS WRAPPER */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: 4, md: 0 },
          height: { xs: "auto", md: "520px" },
        }}
      >
        {testimonials.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              position: { xs: "static", md: "absolute", xl: "relative" },

              /* DESKTOP STACK EFFECT */
              left: {
                md: `calc(10% + ${index * 420}px)`,
              },
              top: {
                md: `${15 + index * 140}px`,
              },

              mb: { xs: 4, md: 0 },
            }}
          >
            <TestimonialCard
              name={item.name}
              role={item.role}
              review={item.review}
              image={item.img}
            />
          </Box>
        ))}
      </Box>

      {/* DECORATIVE STARS */}
      <Avatar
        src={star}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 80,
          height: 80,
          bgcolor: "transparent",
          display: { xs: "none", md: "block" },
        }}
      />

      <Avatar
        src={star}
        sx={{
          position: "absolute",
          bottom: -200,
          right: 0,
          width: 80,
          height: 80,
          bgcolor: "transparent",
          display: { xs: "none", md: "block" },
        }}
      />
    </Box>
  );
}

// import { Box, Typography } from "@mui/material";
// import TestimonialCard from "./TestimonialCard";
// import testimonials from "./Testimonial";
// import PageBg from "../../assets/images/PageBG.png";
// import star from "../../assets/vectors/Vector.png";
// import { Avatar } from "@mui/material";

// export default function TestimonialSection() {
//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${PageBg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "900px",
//         position: "relative",
//         py: 8,
//         overflow: "hidden",
//       }}
//     >
//       <Typography variant="h3" align="center" color="white" mb={8}>
//         What Our Students <br />
//         Say
//       </Typography>

//       {/* RELATIVE WRAPPER */}
//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           height: "520px",
//         }}
//       >
//         {testimonials.map((item, index) => (
//           <Box
//             key={item.id}
//             sx={{
//               position: "absolute",

//               /* ⬅️ LEFT + ⬆️ UP */
//               left: `calc(10% + ${index * 420}px)`,
//               top: `${15 + index * 140}px`,

//               "@media (max-width:900px)": {
//                 position: "static",
//                 mb: 4,
//               },
//             }}
//           >
//             <TestimonialCard
//               name={item.name}
//               role={item.role}
//               review={item.review}
//               rating={item.rating}
//               image={item.img}
//             />
//           </Box>
//         ))}
//       </Box>

//       {/* Top-left star */}

//       <Avatar
//         src={star}
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: 80,
//           height: 80,
//           bgcolor: "transparent",
//         }}
//       />

//       <Avatar
//         src={star}
//         sx={{
//           position: "absolute",
//           bottom: -400,
//           right: 0,
//           width: 80,
//           height: 80,
//           bgcolor: "transparent",
//         }}
//       />
//     </Box>
//   );
// }

// import { Box, Typography } from "@mui/material";
// import TestimonialCard from "./TestimonialCard";
// import testimonials from "./Testimonial";
// import PageBg from "../../assets/images/PageBG.png";

// export default function TestimonialSection() {
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         backgroundImage: `url(${PageBg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "800px",
//         px: 8,
//         py: 6,
//         overflow: "hidden",
//       }}
//     >
//       {/* Title */}
//       <Typography variant="h3" align="center" color="common.white" mb={6}>
//         What Our Students <br /> Say
//       </Typography>

//       {/* Cards Wrapper */}
//       <Box sx={{ position: "relative", height: "600px" }}>
//         {testimonials.map((item, index) => (
//           <Box
//             key={item.id}
//             sx={{
//               position: "absolute",

//               /* 👇 EXACT FIGMA-LIKE SPACING */
//               left: `${index * 360}px`,
//               top: `${index * 120}px`,

//               /* center the whole group */
//               transform: "translateX(120px)",

//               /* mobile fallback */
//               "@media (max-width:900px)": {
//                 position: "static",
//                 transform: "none",
//                 mb: 4,
//               },
//             }}
//           >
//             <TestimonialCard {...item} />
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }
