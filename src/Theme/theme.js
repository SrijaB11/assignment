// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#e11d48",
//     },
//     secondary: {
//       main: "#363F8F",
//     },
//     text: {
//       primary: "#484848",
//       secondary: "#6b7280",
//     },
//   },

//   typography: {
//     h3: {
//       fontWeight: 400,
//       fontFamily: "ADLaM Display",
//       fontSize: "70px",
//     },
//     h4: {
//       fontWeight: 400,
//       fontFamily: "Poppins",
//       fontSize: "70px",
//     },

//     body1: {
//       fontSize: "18px",
//       fontWeight: 500,
//       fontFamily: "ADLaM Display",
//       fontSize: "20px",
//       fontStyle: "Medium",
//     },
//     button: {
//       fontFamily: "Poppins",
//       fontWeight: 700,
//       fontStyle: "Bold",
//       fontSize: "18px",
//       height: "50px",
//       textTransform: "none",
//       width: "145px",
//     },
//   },

//   shape: {
//     borderRadius: 8,
//   },
// });

// export default theme;

// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#e11d48",
//     },
//     secondary: {
//       main: "#363F8F",
//     },
//     text: {
//       primary: "#484848",
//       secondary: "#6b7280",
//     },
//     background: {
//       default: "#ffffff",
//     },
//   },

//   typography: {
//     fontFamily: "Poppins, sans-serif",

//     h3: {
//       fontFamily: "ADLaM Display",
//       fontWeight: 400,
//       fontSize: "48px",
//       "@media (max-width:600px)": {
//         fontSize: "32px",
//       },
//     },

//     h4: {
//       fontWeight: 500,
//       fontSize: "28px",
//     },

//     subtitle1: {
//       fontSize: "18px",
//       color: "#6b7280",
//       "@media (max-width:600px)": {
//         fontSize: "16px",
//       },
//     },

//     body1: {
//       fontSize: "16px",
//     },

//     button: {
//       fontWeight: 700,
//       textTransform: "none",
//       fontSize: "16px",
//     },
//   },

//   shape: {
//     borderRadius: 12,
//   },

//   components: {
//     MuiTextField: {
//       defaultProps: {
//         fullWidth: true,
//         size: "medium",
//       },
//     },

//     MuiButton: {
//       styleOverrides: {
//         root: {
//           height: 48,
//           borderRadius: 10,
//         },
//       },
//     },
//   },
// });

// export default theme;

// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: { main: "#e11d48" },
//     secondary: { main: "#363F8F" },
//     text: {
//       primary: "#111827",
//       secondary: "#6b7280",
//     },
//   },

//   typography: {
//     fontFamily: "Poppins, sans-serif",

//     h3: {
//       fontFamily: "ADLaM Display",
//       fontSize: "40px",
//       fontWeight: 400,
//     },

//     subtitle1: {
//       fontSize: "16px",
//       color: "#6b7280",
//     },

//     body1: {
//       fontSize: "16px",
//     },

//     button: {
//       textTransform: "none",
//       fontWeight: 600,
//     },
//   },

//   components: {
//     MuiTextField: {
//       defaultProps: {
//         fullWidth: true,
//         variant: "outlined",
//       },
//     },

//     MuiButton: {
//       styleOverrides: {
//         root: {
//           height: 48,
//           borderRadius: 10,
//         },
//       },
//     },
//   },
// });

// export default theme;
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: { main: "#e11d48" },
    secondary: { main: "#363F8F" },

    background: {
      default: "white", // dark outer
      paper: "#FFFFFF", // white container
      card: "#F6F7FB", // mcq card
      bgcard: "#353EA6",
    },

    text: {
      primary: "#111827",
      secondary: "Light Black",
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "Poppins, sans-serif",

    h3: {
      fontFamily: "ADLaM Display",
      fontSize: "60px",
      fontWeight: 400,
    },

    subtitle1: {
      color: "Black",
      fontFamily: "Poppins",

      fontWeight: "600px",
      fontStyle: "SemiBold",
      fontSize: "35px",

      textAlign: "center",
    },

    body1: {
      fontSize: "16px",
      fontFamily: "Poppins",
      fontWeight: 400,
    },

    button: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "18px",
    },
  },

  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: "outlined",
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          borderRadius: 10,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
      },
    },
  },
});
export default theme;
