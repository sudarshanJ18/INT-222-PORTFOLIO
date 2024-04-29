import React from 'react';
import "./YoutubeCard.css";
import { Typography } from '@mui/material';

const YoutubeCard = ({ url = "https://www.youtube.com/@learntocode922", title = "Title", image }) => {
  return (
    <div className='youtubeCard'>
      <a href={url}>
        <img src={image} alt='Video' />
        <Typography>{title}</Typography>
      </a>
    </div>
  );
};

export default YoutubeCard;
