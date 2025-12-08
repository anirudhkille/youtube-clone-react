import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "../components/videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router";

export default function SearchFeed() {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for :<span style={{ color: "#FC1503" }}> {searchTerm} videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}
