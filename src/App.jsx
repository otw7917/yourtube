import { useState, useEffect } from "react";

import SearchBar from "./components/searchBar/SearchBar";
import VideoList from "./components/VideoList";
import { videoListMock } from "./videoList.js";

function App() {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("http 오류");
        }
        return response.json();
      })
      .then((result) => setVideoList(result));
  }, []);
  // const videoList = videoListMock;
  const onSearch = async (searchTitle) => {
    const request = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTitle}e&type=videos&key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await request.json();
    console.log(result);
    setVideoList(result);
  };
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <VideoList videos={videoList} />;
    </>
  );
}

export default App;
