import React, { useEffect } from 'react';
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import Timeline from '../TimeLine/TimeLine';
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";
import img4 from "../../Images/img4.jpg";
import img5 from "../../Images/img5.jpg";
import img6 from "../../Images/img6.jpg";

import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import YoutubeCard from '../YoutubeCard/YoutubeCard';

const Home = () => {

    useEffect(()=>{
        const textureLoader = new THREE.TextureLoader();
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });

        const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
        const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);

        const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusGeometry, venusMaterial);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
        pointLight.position.set(8,8,5);
        pointLight2.position.set(-8,-8,-5);

        scene.add(moon);
        scene.add(pointLight);
        scene.add(venus);
        scene.add(pointLight2);
        scene.background = spaceTexture;

        const constSpeed = 0.01;

        window.addEventListener("mousemove",(e)=>{
          if(e.clientX <= window.innerWidth / 2){
            moon.rotation.x -= constSpeed;
            moon.rotation.y += constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y += constSpeed;
          }
          if(e.clientX > window.innerWidth / 2){
            moon.rotation.x -= constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y -= constSpeed;
          }
          if(e.clientY > window.innerHeight/2){
            moon.rotation.x -= constSpeed;
            moon.rotation.y += constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y += constSpeed;
          }
          if(e.clientX <= window.innerHeight/2){
            moon.rotation.x -= constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y -= constSpeed;
          }
        })

        venus.position.set(8, 5, 5);

        camera.position.set(4,4,8);
        const animate = () =>{
          requestAnimationFrame(animate);
          moon.rotation.y += 0.01;
          venus.rotation.y += 0.001;
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.render(scene, camera);
        };

        animate();

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);

    }, []);

    const timelines = [
      {
        date: new Date("2022-01-01"),
        title: "Event 1",
        description: "Description for Event 1"
      },
      {
        date: new Date("2022-02-01"),
        title: "Event 2",
        description: "Description for Event 2"
      },
      {
        date: new Date("2022-03-01"),
        title: "Event 3",
        description: "Description for Event 3"
      },
      {
        date: new Date("2022-04-01"),
        title: "Event 4",
        description: "Description for Event 4"
      }
    ];

    return (
      <div className="home">
        <canvas className="homeCanvas"></canvas>

        <div className="homeContainer">
          <Typography variant="h3">TIMELINE</Typography>
          <Timeline timelines={timelines} />
        </div>

        <div className="homeSkills">
          <Typography variant="h3">SKILLS</Typography>
          <div class="homeCubeSkills">
            <div className="homeCubeSkillsFaces" id="homeCubeSkillsFace1">
              <img src={img1} alt="Face1" />
            </div>
            <div className="homeCubeSkillsFaces" id="homeCubeSkillsFace2">
              <img src={img2} alt="Face2" />
            </div>
            <div className="homeCubeSkillsFaces" id="homeCubeSkillsFace3">
              <img src={img3} alt="Face3" />
            </div>
            <div className="homeCubeSkillsFaces" id="homeCubeSkillsFace4">
              <img src={img4} alt="Face4" />
            </div>
            <div className="homeCubeSkillsFaces" id="homeCubeSkillsFace5">
              <img src={img5} alt="Face5" />
            </div>
            <div className="homeCubeSkillsFaces" id="homeCubeSkillsFace6">
              <img src={img6} alt="Face6" />
            </div>
          </div>
          <div className="cubeShadow"></div>
          <div className="homeSkillsBox">
            <SiCplusplus />
            <FaJava />
            <FaDatabase />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNodedotjs />
          </div>
        </div>

        <div className="homeYoutube">
          <Typography variant="h3">YOUTUBE VIDEOS</Typography>
          <div className="homeYoutubeWrapper">
            <YoutubeCard image={img1} title="SampleVideo" />
            <YoutubeCard image={img1} title="SampleVideo" />
            <YoutubeCard image={img1} title="SampleVideo" />
            <YoutubeCard image={img1} title="SampleVideo" />
          </div>
        </div>
      </div>
    );
};

export default Home;
