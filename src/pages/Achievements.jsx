import React from "react";
import PageHeader from "../components/page-header";
import "./Achievements.css";

const Achievements = () => {
  const achievementsHeader = {
    title: "Student/Developer",
    subtitle:
      "My encounters throughout my life made me stronger and smarter thus achieving my goals and future.",
  };
  return (
    <main className="Page page-achievements">
      <section className="section section-intro">
        <PageHeader
          title={achievementsHeader.title}
          subtitle={achievementsHeader.subtitle}
        />
      </section>
      <section className="section"></section>
    </main>
  );
};

export default Achievements;
