import { Box } from "@mui/material";
import React from "react";
import UploadPhotoButton from "./UploadPhotoButton";
import useScreenSize from "../../hooks/useScreenSize";

const Photos = ({ photos, setPhotos }) => {
  const { phone } = useScreenSize();
  return (
    <Box display="flex" flexDirection="column" alignItems="center" pb={5}>
      <Box my={5}>
        <UploadPhotoButton setPhotos={setPhotos} />
      </Box>
      <Box
        display="flex"
        gap={3}
        sx={{ flexWrap: "wrap" }}
        width={"80%"}
        justifyContent="center"
      >
        {photos.map((photo) => (
          <img
            src={photo.src}
            alt={photo.id}
            key={photo.id}
            width={phone ? "100%" : undefined}
            height={!phone ? "250px" : undefined}
            style={{ borderRadius: "5px" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Photos;
