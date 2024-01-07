/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./videocard.scss";
import axios from "axios";
import { Link } from 'react-router-dom';
const VideoCard = ({ videoId }) => {
  const [stats, setStats] = React.useState(null);
  const [contentDetails, setContentDetails] = React.useState(null);
  const [localized, setLocalized] = React.useState(null);
  const [thumbnail, setThumbnail] = React.useState(null);
  React.useEffect(() => {
    const apiKey = 'AIzaSyBSB2NVJ_C93fg3IVDiJpYHEIsc8HOIM38';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);

        setStats(response.data.items[0].statistics);

        setContentDetails(response.data.items[0].contentDetails)
        setLocalized(response.data.items[0].snippet.localized)
        setThumbnail(response.data.items[0].snippet.thumbnails)
      } catch (error) {
        console.error('Error fetching video stats', error);
      }
    };

    fetchData();
  }, [videoId]);

  const formatDuration = (duration) => {
    if (duration) {
      const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

      const hours = (parseInt(match[1]) || 0);
      const minutes = (parseInt(match[2]) || 0);
      const seconds = (parseInt(match[3]) || 0);

      return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds}s`;
    }
  };
  return (
    <a href={`https://www.youtube.com/watch?v=${videoId}`} target='_blank' rel="noreferrer" className="videocard flex flex-col">
      <div className="videocard__image">
        <img src={thumbnail?.standard?.url} alt />
      </div>
      <div className="videocard__desc flex-1">
        <div className="videocard__desc-title">
          {localized?.title}
        </div>
      </div>
      <div className="videocard__seeding">
        <div className="seen">
          <img src="/img/seen.png" alt />
          <p>{stats?.viewCount}</p>
        </div>
        <div className="like">
          <img src="/img/like.png" alt />
          <p>{stats?.likeCount}</p>
        </div>
      </div>
      <div className="videocard__length">{formatDuration(contentDetails?.duration)}</div>
    </a>
  );
};

export default VideoCard;
