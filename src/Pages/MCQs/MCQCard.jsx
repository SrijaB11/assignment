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
