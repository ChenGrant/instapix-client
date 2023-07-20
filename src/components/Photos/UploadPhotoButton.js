import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import UploadPhotoModal from "./UploadPhotoModal";
import useScreenSize from "../../hooks/useScreenSize";

const UploadPhotoButton = ({ setPhotos }) => {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const theme = useTheme();
  const { phone } = useScreenSize();

  return (
    <>
      <Box
        width={phone ? "90vw" : "50vw"}
        display="flex"
        justifyContent="center"
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "5px",
            padding: "20px 50px",
            bgcolor: theme.palette.secondary.main,
            boxShadow: `0px 0px 10px 4px ${theme.palette.secondary.light}`,
          }}
          onClick={() => setModelIsOpen(true)}
        >
          <Typography
            sx={{ textTransform: "none" }}
            variant={phone ? "h6" : "h5"}
            fontWeight={400}
            color={theme.palette.primary.main}
          >
            Upload Photos
          </Typography>
        </Button>
      </Box>
      {modelIsOpen && (
        <UploadPhotoModal
          handleClose={() => setModelIsOpen(false)}
          setPhotos={setPhotos}
        />
      )}
    </>
  );
};

export default UploadPhotoButton;
