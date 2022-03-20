import { useState, useEffect } from "react";

import VideoList from "./components/VideoList";
import { videoListMock } from "./videoList.js";

function App() {
  // const [videoList, setVideoList] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("http 오류");
  //       }
  //       return response.json();
  //     })
  //     .then((result) => setVideoList(result));
  // }, []);
  const videoList = videoListMock;
  return <VideoList videos={videoList} />;
}

export default App;
