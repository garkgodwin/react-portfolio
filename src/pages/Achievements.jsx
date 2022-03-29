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
      <section className="section section-achievements">
        <div className="section-header">
          <span className="section-title">School</span>
        </div>
        <div className="section-content">
          <div className="school-content content-1">Elementary data</div>
          <div className="school-content content-2">Highschool data</div>
          <div className="school-content content-3">College data</div>
        </div>
      </section>
    </main>
  );
};

export default Achievements;
