import { useState, useEffect } from "react";

import SearchBar from "./components/searchBar/SearchBar";
import VideoList from "./components/VideoList";

import { videoListMock } from "./videoList.js";

function App({ youtube }) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    youtube
      .getPopularList() //
      .then((result) => setVideoList(result));
  }, []);
  // const videoList = videoListMock;
  const onSearch = (searchTitle) => {
    youtube
      .getSearchList(searchTitle) //
      .then((result) => setVideoList(result));
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <VideoList videos={videoList} />;
    </>
  );
}

export default App;
