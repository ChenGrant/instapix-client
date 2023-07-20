import { Box, Button, Typography, useTheme } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import React from "react";
import useScreenSize from "../../hooks/useScreenSize";

const Login = () => {
  const { phone } = useScreenSize();
  const theme = useTheme();
  return (
    <Button
      onClick={async () =>
        await signInWithPopup(auth, new GoogleAuthProvider())
      }
      variant="contained"
      color="primary"
      sx={{
        padding: "20px",
        textTransform: "none",
        borderRadius: "5px",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box display="flex" alignItems="center" gap={3}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
          alt="google"
          width={phone ? 30 : 50}
          height={phone ? 30 : 50}
        />
        <Typography
          variant={phone ? "h5" : "h4"}
          color={theme.palette.primary.main}
        >
          Sign in with Google
        </Typography>
      </Box>
    </Button>
  );
};

export default Login;
