import { Paper, Box, Typography, Avatar, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import quote from "../../assets/vectors/quote.png";

const TestimonialCard = ({ name, role, review, image }) => {
  return (
    <Paper
      elevation={8}
      sx={{
        p: 3,
        width: 380,
        backgroundColor: "background.paper",
        position: "relative",
      }}
    >
      {/* Header strip */}
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
        }}
      >
        <Avatar
          src={image}
          alt={name}
          variant="square"
          sx={{ width: 86, height: 76 }}
        />

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
      <Typography
        variant="body1"
        color="text.primary"
        marginTop={"80px"}
        paddingBottom={"30px"}
      >
        {review}
      </Typography>

      {/* Quote mark */}
      <Typography
        sx={{
          fontSize: 60,
          color: "primary.main",
          lineHeight: 1,
          mt: 2,
          position: "absolute",
          bottom: "-40px",
        }}
      >
        <img src={quote} />
      </Typography>
    </Paper>
  );
};

export default TestimonialCard;
