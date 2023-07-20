import { TextField, useTheme } from "@mui/material";
import React, { useState } from "react";
import { generatePost } from "../../utils/requests";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const TextPrompt = ({ prompt, setPrompt, setPosts, setPostsIndex }) => {
  const user = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const theme = useTheme();

  const handleEnter = async () => {
    setDisabled(true);
    setPosts(await generatePost(user, prompt));
    setPostsIndex(0);
    setDisabled(false);
  };

  return (
    <TextField
      value={prompt}
      disabled={disabled}
      onChange={(e) => setPrompt(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleEnter()}
      variant="outlined"
      label="Prompt"
      placeholder="bowling date night"
      color="secondary"
      sx={{
        width: "100%",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "5px",
      }}
      InputLabelProps={{
        style: {
          color: theme.palette.primary.main,
        },
      }}
      InputProps={{
        style: {
          color: theme.palette.primary.dark,
          borderColor: theme.palette.primary.main,
        },
      }}
    />
  );
};

export default TextPrompt;
