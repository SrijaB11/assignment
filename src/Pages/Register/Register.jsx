// import React from "react";
// import RightSideImg from "../../components/RightImg/RightSideImg";

// function Register() {
//   return (
//     <div>
//       <div>
//         <div>
//           <h1>Create an account</h1>
//           <p>its easy! just take a minute and provide the details</p>
//         </div>
//         <form>
//           <input placeholder="Email or Phone" />
//           <input placeholder="Full Name" />
//           <input placeholder="Create Password" />
//           <input placeholder="Confirm Password" />
//           <button>Signup</button>
//         </form>
//         <p>Already Have An Account? Login</p>
//       </div>
//       <div className="right-home-container">
//         <RightSideImg />
//       </div>
//     </div>
//   );
// }

// export default Register;

//
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import RightSideImg from "../../components/RightImg/RightSideImg";

const Register = () => {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center">
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Box maxWidth={480}>
              <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>
                Create an account
              </Typography>

              <Typography variant="subtitle1" sx={{ mb: 4, maxWidth: 420 }}>
                its easy! just take a minute and provide the details
              </Typography>

              <Box display="flex" flexDirection="column" gap={3}>
                <TextField
                  placeholder="Email or Phone"
                  InputProps={{
                    sx: {
                      height: 56,
                      borderRadius: 3,
                    },
                  }}
                />

                <TextField
                  placeholder="Full Name"
                  InputProps={{
                    sx: {
                      height: 56,
                      borderRadius: 3,
                    },
                  }}
                />

                <TextField
                  placeholder="Create Password"
                  type="password"
                  InputProps={{
                    sx: {
                      height: 56,
                      borderRadius: 3,
                    },
                  }}
                />

                <TextField
                  placeholder="Confirm Password"
                  type="password"
                  InputProps={{
                    sx: {
                      height: 56,
                      borderRadius: 3,
                    },
                  }}
                />

                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    height: 56,
                    borderRadius: 3,
                    fontSize: "16px",
                  }}
                >
                  Signup
                </Button>
              </Box>

              <Typography mt={4} textAlign="center">
                Already Have An Account?{" "}
                <Typography
                  component="span"
                  color="primary"
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                  Login
                </Typography>
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid
            item
            md={6}
            display={{ xs: "none", md: "flex" }}
            justifyContent="flex-end"
          >
            <RightSideImg />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
