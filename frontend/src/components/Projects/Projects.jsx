import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";


export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">TechNotic: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
    const projects = [1,2,3];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((projects, index) => (
          <ProjectCard
            
           
            url="https://github.com/"
            projectImage="https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png"
            projectTitle="Sample Project"
            description="This is a sample project"
            technologies="Mongodb, React, NodeJs, Express"
          />
        ))}                   
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;