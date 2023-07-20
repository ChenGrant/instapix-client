import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Login from "./Login";
import useScreenSize from "../../hooks/useScreenSize";

const Home = () => {
  const user = useContext(UserContext);
  const { phone } = useScreenSize();

  if (user) return <Navigate to={"/profile"} />;

  return (
    <>
      <Box
        height={"100vh"}
        display="flex"
        justifyContent="center"
        textAlign="center"
        sx={{
          backgroundImage:
            "url('https://coolbackgrounds.io/images/backgrounds/white/white-contour-c990a61f.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Box display="flex" flexDirection="column" mt="20vh" p={phone ? 2 : 3}>
          <Typography variant={phone ? "h6" : "h3"}>
            AI generate Instagram posts with
          </Typography>
          <Typography
            variant={phone ? "h2" : "h1"}
            fontWeight={500}
            mb={phone ? 10 : 15}
          >
            instapix
          </Typography>
          <Typography variant={phone ? "h6" : "h4"} fontWeight={400}>
            Skip the hassle of deciding what to post
          </Typography>
          <Box mt={2}>
            <Login />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
