import rosblysk from "../images/projects/rosblysk.png";
import rosblyskHover from "../images/projects/rosblyskHover.png";
import rosblyskIcon from "../icons/rosblyskIcon.png";
import tripTrackers from "../images/projects/tripTrackers.png";
import tripTrackersHover from "../images/projects/tripTrackersHover.png";
import tripTrackersIcon from "../icons/tripTrackersIcon.png";
import weatherApp from "../images/projects/weatherApp.png";
import weatherAppHover from "../images/projects/weatherAppHover.png";
import weatherAppIcon from "../icons/weatherApp.png";
import kierki from "../images/projects/kierki.png";
import kierkiHover from "../images/projects/kierkiHover.png";
import kierkiIcon from "../icons/kierki.png";
import { motion } from "framer-motion";
import ProjectPanel from "./ProjectPanel";
const Projects = () => {
  return (
    <div className="flex items-center flex-grow flex-col gap-16 py-10">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 8,
          duration: 0.5,
        }}
        className="text-2xl text-pink font-extrabold"
      >
        COMMERCIAL
      </motion.h2>
      <ProjectPanel
        photo={rosblysk}
        photoHover={rosblyskHover}
        icon={rosblyskIcon}
        title="Ros-błysk"
        description="A website created for the cleaning company Ros-Błysk. It allows users to view the company's offers, gallery, and contact information. The site is bilingual."
        technologies={["React", "Tailwind"]}
        isCode={true}
        isWebsite={true}
        hrefCode="https://github.com/rosblysk"
        hrefWebsite="https://xn--rosbysk-qjb.pl/"
        photoSide="left"
      />
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 8,
          duration: 0.5,
        }}
        className="text-2xl text-pink font-extrabold"
      >
        PERSONAL
      </motion.h2>
      <ProjectPanel
        photo={tripTrackers}
        photoHover={tripTrackersHover}
        icon={tripTrackersIcon}
        title="TripTrackers"
        description="A portal for travelers to share their opinions and ratings about cities around the world. The website includes both a user panel and an admin panel. The project uses JWT tokens for authentication and is bilingual."
        technologies={["React", "Tailwind", "MySql", "Springboot"]}
        isCode={true}
        isWebsite={false}
        hrefCode="https://github.com/m4tiss/frontendTravel"
        photoSide="right"
      />
      <ProjectPanel
        photo={weatherApp}
        photoHover={weatherAppHover}
        icon={weatherAppIcon}
        title="Weather App"
        description={`A weather app for Android that allows users to retrieve basic and advanced information about today's weather and forecasts for the upcoming days.
           Additionally, it includes a list of favorite cities and settings such as unit preferences and data refresh intervals.
          The data is fetched from the OpenWeather API.`}
        technologies={["Kotlin"]}
        isCode={true}
        isWebsite={false}
        hrefCode="https://github.com/m4tiss/WeatherAndroid"
        photoSide="left"
      />
      <ProjectPanel
        photo={kierki}
        photoHover={kierkiHover}
        icon={kierkiIcon}
        title="Kierki"
        description={`A Hearts card game where players can create rooms and compete against each other.
           Additionally, the game includes a chat feature for players to communicate.
           The project utilizes tools such as Sockets, JUnit testing, and JavaDoc.`}
        technologies={["Java", "JavaFX Scene Builder"]}
        isCode={true}
        isWebsite={false}
        hrefCode="https://github.com/m4tiss/Kierki"
        photoSide="right"
      />
    </div>
  );
};

export default Projects;
