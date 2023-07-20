import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import Posts from "../Posts/Posts";
import Photos from "../Photos/Photos";
import { fetchPhotos } from "../../utils/requests";

const Profile = () => {
  const user = useContext(UserContext);
  const [page, setPage] = useState("photos");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      user && setPhotos(await fetchPhotos(user));
    })();
  }, [user]);

  if (!user) return <Navigate to={"/"} />;
  return (
    <Box
      height={"100vh"}
      display="flex"
      sx={{
        backgroundImage:
          "url('https://coolbackgrounds.io/images/backgrounds/white/white-contour-c990a61f.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <NavBar page={page} setPage={setPage} />
      <Box mt="56px" width="100%">
        {page === "photos" ? (
          <Photos photos={photos} setPhotos={setPhotos} />
        ) : (
          <Posts />
        )}
      </Box>
    </Box>
  );
};

export default Profile;
