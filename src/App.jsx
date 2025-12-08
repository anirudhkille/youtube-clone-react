import { Box } from "@mui/material";
import Header from "./components/header";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Loading from "./components/loading";

const Feed = lazy(() => import("./pages/feed"));
const VideoDetail = lazy(() => import("./pages/feed"));
const ChannelDetail = lazy(() => import("./pages/feed"));
const SearchFeed = lazy(() => import("./pages/feed"));

export default function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Suspense>
    </Box>
  );
}
