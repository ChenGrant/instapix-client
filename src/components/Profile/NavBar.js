import { useTheme } from "@emotion/react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../Firebase/firebase";
import useScreenSize from "../../hooks/useScreenSize";

const NavBar = ({ page, setPage }) => {
  const theme = useTheme();
  const { phone } = useScreenSize();

  return (
    <Box
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      bgcolor={theme.palette.primary.dark}
      boxShadow={`0px 13px 20px ${theme.palette.primary.veryDark}`}
      zIndex={1}
    >
      {!phone && <Box width="100px" visibility="hidden" ml={2} />}
      <Box
        flex={1}
        display="flex"
        justifyContent={phone ? "left" : "center"}
        gap={10}
      >
        <Tabs
          value={page}
          onChange={(_, newValue) => setPage(newValue)}
          TabIndicatorProps={{
            style: {
              backgroundColor: theme.palette.secondary.veryDark,
            },
          }}
        >
          <Tab
            label={
              <Typography
                variant="h5"
                sx={{
                  textTransform: "none",
                  color: theme.palette.secondary.veryDark,
                }}
              >
                Photos
              </Typography>
            }
            value="photos"
          />
          <Tab
            label={
              <Typography
                variant="h5"
                sx={{
                  textTransform: "none",
                  color: theme.palette.secondary.veryDark,
                }}
              >
                Posts
              </Typography>
            }
            value="posts"
          />
        </Tabs>
      </Box>
      <Box width="100px" mr={2}>
        <Tabs
          value={0}
          TabIndicatorProps={{
            style: {
              visibility: "hidden",
            },
          }}
        >
          <Tab
            onClick={() => signOut(auth)}
            label={
              <Typography
                variant="h5"
                sx={{
                  textTransform: "none",
                  color: theme.palette.secondary.veryDark,
                }}
              >
                Logout
              </Typography>
            }
            value={0}
          ></Tab>
        </Tabs>
      </Box>
    </Box>
  );
};

export default NavBar;
