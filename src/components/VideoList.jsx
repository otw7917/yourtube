import React from "react";
import VideoItem from "./VideoItem";
import styles from "./VideoList.module.css";

function VideoList({ videos }) {
  console.log(videos);
  return (
    <ul className={styles.videos}>
      {videos.items && videos.items.map((video) => <VideoItem video={video} />)}
    </ul>
  );
}

export default VideoList;
