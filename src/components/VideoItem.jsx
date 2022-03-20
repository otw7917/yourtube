import React from "react";
import styles from "./VideoItem.module.css";

function VideoItem({ video }) {
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.thumbnails.title}
        />
        <div className='metadata'>
          <p>{video.snippet.title}</p>
          <p>{video.snippet.channelTitle}</p>
        </div>
        {/* <div className='statistics'>
          <p>{video.statistics.viewCount}</p>
        </div> */}
      </div>
    </li>
  );
}

export default VideoItem;
