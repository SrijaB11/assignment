// import React from "react";
// import RightSideImg from "../../components/RightImg/RightSideImg";

// function Login() {
//   return (
//     <div>
//       <div>
//         <h1>Login to your account</h1>
//         <p>its easy! just take a minute and provide the details</p>
//         <form>
//           <input placeholder="Email or Phone" />
//           <input placeholder="Password" />
//           <button>Login</button>
//         </form>
//         <p>Did’n Have An Account? Signup</p>
//       </div>
//       <div className="right-home-container">
//         <RightSideImg />
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React from "react";
// import { Box, Grid, Typography, TextField, Button } from "@mui/material";
// import RightSideImg from "../../components/RightImg/RightSideImg";

// const Login = () => {
//   return (
//     <Grid
//       container
//       minHeight="100vh"
//       alignItems="center"
//       justifyContent="center"
//     >
//       {/* LEFT SIDE */}
//       <Grid item xs={12} md={6} px={{ xs: 2, sm: 6, md: 10 }}>
//         <Typography variant="h3" gutterBottom>
//           Login to your account
//         </Typography>

//         <Typography variant="subtitle1" mb={4}>
//           It’s easy! Just take a minute and provide the details
//         </Typography>

//         <Box display="flex" flexDirection="column" gap={2}>
//           <TextField placeholder="Email or Phone" />
//           <TextField placeholder="Password" type="password" />

//           <Button variant="contained" color="secondary" size="large">
//             Login
//           </Button>
//         </Box>

//         <Typography variant="body1" mt={3}>
//           Didn’t have an account?{" "}
//           <Typography
//             component="span"
//             color="primary"
//             fontWeight={600}
//             sx={{ cursor: "pointer" }}
//           >
//             Signup
//           </Typography>
//         </Typography>
//       </Grid>

//       {/* RIGHT SIDE IMAGE */}
//       <Grid
//         item
//         md={6}
//         display={{ xs: "none", md: "flex" }}
//         justifyContent="center"
//       >
//         <RightSideImg />
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;

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

const Login = () => {
  return (
    <Box minHeight="100vh" display="flex" alignItems="center">
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Box maxWidth={480}>
              <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>
                Login to your account
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
                  placeholder="Password"
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
                  Login
                </Button>
              </Box>

              <Typography mt={4} textAlign="center">
                Didn’t Have An Account?{" "}
                <Typography
                  component="span"
                  color="primary"
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                  Signup
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

export default Login;
