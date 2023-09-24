import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { fetchPhotos, uploadPhotos } from "../../utils/requests";
import { UserContext } from "../../contexts/UserContext";

const UploadPhotoModal = ({ handleClose, setPhotos }) => {
  const user = useContext(UserContext);
  const [photosToUpload, setPhotosToUpload] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const theme = useTheme();

  const uploadPhoto = async () => {
    setIsUploading(true);
    await uploadPhotos(user, photosToUpload);
    setPhotos(await fetchPhotos(user));
    setIsUploading(false);
    handleClose();
  };

  return (
    <Modal open onClose={handleClose}>
      <Box
        height="100vh"
        display="grid"
        sx={{ placeItems: "center" }}
        onClick={handleClose}
      >
        <Paper
          onClick={(e) => e.stopPropagation()}
          sx={{ borderRadius: "10px" }}
        >
          <Box p={5}>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              multiple
              onChange={(e) => setPhotosToUpload([...e.target.files])}
            />
            <Box
              textAlign="center"
              width="300px"
              height="200px"
              border={`2px dashed ${theme.palette.secondary.main}`}
              borderRadius="5px"
              display="grid"
              sx={{ placeItems: "center", cursor: "pointer" }}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <Typography variant="h5">
                {photosToUpload.length === 0
                  ? "Drag 'n' drop some files"
                  : photosToUpload.length === 1
                  ? "1 photo selected"
                  : `${photosToUpload.length} photos selected`}
              </Typography>
            </Box>
            <Box
              display="grid"
              sx={{ placeItems: "center" }}
              height="50px"
              mt={4}
            >
              {isUploading ? (
                <CircularProgress
                  sx={{ color: theme.palette.secondary.main }}
                />
              ) : (
                <Button
                  onClick={uploadPhoto}
                  variant="contained"
                  disabled={photosToUpload.length === 0}
                  sx={{
                    width: "100%",
                    borderRadius: "5px",
                    bgcolor: theme.palette.secondary.main,
                  }}
                >
                  <Typography
                    sx={{ textTransform: "none" }}
                    variant="h5"
                    fontWeight={400}
                    color={theme.palette.primary.main}
                  >
                    Upload Photos
                  </Typography>
                </Button>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default UploadPhotoModal;
