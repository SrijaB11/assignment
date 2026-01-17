// import { Box, Typography } from "@mui/material";
// import TestimonialCard from "./TestimonialCard";
// import testimonials from "./Testimonial";
// import PageBg from "../../assets/images/PageBG.png";

// export default function TestimonialSection() {
//   console.log("fdghjk,");
//   return (
//     <Box
//       sx={{

//         backgroundImage: `url(${PageBg})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         py: 8,
//       }}
//     >
//       <Typography variant="h3" align="center" color="common.white" mb={6}>
//         What Our Students Say
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           gap: 4,
//           flexWrap: "wrap",
//         }}
//       >
//         {testimonials.map((item) => (
//           <TestimonialCard
//             key={item.id}
//             name={item.name}
//             role={item.role}
//             review={item.review}
//             rating={item.rating}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// }

import { Box, Container, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";

const OFFSET_X = 60; // horizontal shift (px)
const OFFSET_Y = 40; // vertical shift (px)

const testimonials = [
  {
    name: "Nutan Sai",
    role: "Student",
    text: "Thanks to CodeArena, I went from barely understanding loops to solving advanced algorithm challenges. I can’t recommend it enough to fellow students!",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Nutan Sai",
    role: "Student",
    text: "Thanks to CodeArena, I went from barely understanding loops to solving advanced algorithm challenges. I can’t recommend it enough to fellow students!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Nutan Sai",
    role: "Student",
    text: "Thanks to CodeArena, I went from barely understanding loops to solving advanced algorithm challenges. I can’t recommend it enough to fellow students!",
    image: "https://i.pravatar.cc/150?img=13",
  },
];

const TestimonialsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3A3F8F",
        py: 12,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" color="white" textAlign="center" mb={8}>
          What Our Students <br /> Say
        </Typography>

        {/* Cards wrapper */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            gap: 4,
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          {testimonials.map((item, i) => (
            <Box
              key={i}
              sx={{
                transform: {
                  xs: "none",
                  md: `translate(${i * OFFSET_X}px, ${i * OFFSET_Y}px)`,
                },
              }}
            >
              <TestimonialCard
                name={item.name}
                role={item.role}
                text={item.text}
                image={item.image}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
