import { Box, Button, useTheme } from "@mui/material";
import React, { useState } from "react";
import TextPrompt from "./TextPrompt";
import useScreenSize from "../../hooks/useScreenSize";

const Posts = () => {
  const theme = useTheme();
  const [prompt, setPrompt] = useState("");
  const [posts, setPosts] = useState([]);
  const [postsIndex, setPostsIndex] = useState(0);
  const { phone } = useScreenSize();
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      pb={5}
      mt={8}
    >
      <Box width={phone ? "80vw" : "400px"}>
        <Box my={2}>
          <TextPrompt
            setPrompt={setPrompt}
            prompt={prompt}
            setPosts={setPosts}
            setPostsIndex={setPostsIndex}
          />
        </Box>
        {posts.length !== 0 && (
          <>
            <img
              src={posts[postsIndex].photo_src}
              alt={posts[postsIndex].src}
              width="100%"
              style={{ borderRadius: "5px" }}
            />
            <Box display="flex" gap={2} mt={2}>
              <Button
                disabled={postsIndex === 0}
                onClick={() => setPostsIndex(postsIndex - 1)}
                variant="contained"
                sx={{
                  flex: 1,
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                Previous
              </Button>
              <Button
                disabled={postsIndex === posts.length - 1}
                onClick={() => setPostsIndex(postsIndex + 1)}
                variant="contained"
                sx={{
                  flex: 1,
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                Next
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Posts;
