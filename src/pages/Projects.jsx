import React from "react";
import PageHeader from "../components/page-header";
import "./Projects.css";

const Projects = () => {
  const projectsHeader = {
    title: "ReactJs, NodeJs, ExpressJs, MongoDb",
    subtitle:
      "The projects I made are the products of years of my hardworking study of project development.",
  };
  return (
    <main className="Page page-projects">
      <section className="section section-intro section-projects">
        <PageHeader
          title={projectsHeader.title}
          subtitle={projectsHeader.subtitle}
        />
      </section>
    </main>
  );
};

export default Projects;
