import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "narrative-treasures",
      description: "MERN Stack",
      link: "https://narrative-treasures.herokuapp.com/",
      repo: "https://github.com/jparris3213/Narrative_Treasures",
    },
    {
      name: "team-builder",
      description: "Inquirer/SQL/HTML/CSS/JavaScript",
      link: "https://youtu.be/3EVlIPb3JLU",
      repo: "https://github.com/NXTGenforcer/Team-generator",
    },
    {
      name: "riposte",
      description: "HTML/CSS/JavaScript",
      link: "https://ripost-forum.herokuapp.com/",
      repo: "https://github.com/ajlineb/Riposte-Forum",
    },
    {
      name: "employee-tracker",
      description: "Inquirer/SQL",
      link: "https://youtu.be/LalokqtyaL8",
      repo: "https://github.com/NXTGenforcer/employee-tracker",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
