import React from 'react'
import "./About.css";
import { Typography } from '@mui/material';


const About = () => {
  return (
   <div className="about">
    <div className="aboutContainer">

    <Typography>The greatest pleasure of life is love.</Typography>

    </div>
    <div className="aboutContainer2">
        
        <div>
            <img src="https://i.postimg.cc/xCqg3VjF/1706626100084.jpg" alt="Sudarshan" className="aboutAvatar" />
            <Typography varaint="h4" style={{ margin: "1vmax 0", color: "black"}}> Sudarshan Reddy</Typography>

            <Typography 
            style={{ margin: "1vmax 0", color: "black"}}> Full Stack Web Developer</Typography>

            <Typography style={{ margin: "1vmax 0", color: "black"}}> Empowering tomorrow's tech through today's learning.</Typography>
        </div>
        <div>
          <Typography 
          style={{
            wordSpacing: "5px",
            lineHeight: "50px",
            letterSpacing: "2px",
            textAlign: "right",
          }}
          >
          I am a logical and results-driven developer with a keen dedication to building 
          and optimizing user-focused websites and applications. I bring creativity and sound 
          judgment to crafting effective platforms that drive competitive advantage and revenue growth. 
          My technical proficiency includes programming languages such as C++, Python, and Java, as well 
          as web technologies like HTML5, CSS, JavaScript, ReactJs, and Angular. 
          </Typography>
        </div>
        </div>       
    </div>
  );
};

export default About
