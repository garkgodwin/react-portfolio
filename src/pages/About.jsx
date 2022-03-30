import React from "react";
import "./About.css";

//? Images
import me1 from "../assets/me1.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.svg";
import expressjs from "../assets/expressjs.svg";
import mongodb from "../assets/mongodb.png";

//?Components
import Button from "../components/buttons/Button";
import PageHeader from "../components/page-header/PageHeader";
import Card from "../components/cards/Card";

const aboutHeader = {
  title: "Gark Godwin Duque",
  subtitle:
    "I am a flexible programmer focusing on frontend development with the help of frameworks like ReactJs and VueJs.",
};
const hobbies = ["Chess", "Mobile Games", "Foodtrip", "Coding"];

const About = () => {
  const scrollBottom = () => {
    document.documentElement.scrollTo({
      top: document.documentElement.getBoundingClientRect().height,
      left: 0,
      behavior: "smooth",
    });
  };
  const goToGithub = () => {
    window.open("https://github.com/garkgodwin", "_blank");
  };
  return (
    <main className="Page page-about">
      <section className="section section-intro">
        <PageHeader title={aboutHeader.title} subtitle={aboutHeader.subtitle} />
      </section>
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">My hobbies</h2>
        </div>
        <div className="section-contents">
          <div className="section-content content-left">
            <p className="content-text">
              Hi there! My name is Gark and my family call MakMak. I enjoy
              recreating websites to enhance my designing expertise. My interest
              in web development started back in 2020 when I had to develop
              full-stack web applications for school requirements. I fell
              in-love with server-side development and currently flirting with
              front-end development.
            </p>
            <p className="content-text">
              I was also addicted with games for some time before. FPS games and
              mobile games are my favorites. Back to the topic, here are few of
              my hobbies.
            </p>
            <ul className="content-list">
              {hobbies.map((hobby, index) => {
                return (
                  <li key={index} className="list-item">
                    {hobby}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="section-content content-right">
            <div className="content-right-image">
              <img src={me1} alt="Me" className="image" />
            </div>
          </div>
        </div>
        <Button text="Check out my social links!" cb={scrollBottom} />
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">My skills</h2>
        </div>
        <div className="section-contents">
          <div className="section-content content-left">
            <div className="section-cards">
              <Card>
                <img className="card-image" src={reactjs} alt="ReactJs" />
                <p className="card-text">ReactJs</p>
              </Card>
              <Card cName="card-light">
                <img className="card-image" src={nodejs} alt="ReactJs" />
                <p className="card-text">NodeJs</p>
              </Card>
              <Card cName="card-light">
                <img className="card-image" src={expressjs} alt="ReactJs" />
                <p className="card-text">ExpressJs</p>
              </Card>
              <Card>
                <img className="card-image" src={mongodb} alt="ReactJs" />
                <p className="card-text">MongoDb</p>
              </Card>
            </div>
          </div>
          <div className="section-content content-right">
            <p className="content-text">
              Since 2020, I have been studying different frameworks for web
              development. My focus that year was with server-side application
              for a full-stack website project. NodeJs and ExpressJs helped me
              create server applications. With its over 1.3 million packages, I
              found some to be used for my applications such as jsonewebtoken
              which generages and decrypts tokens.
            </p>
            <p className="content-text">
              With ReactJs, I designed multiple client applications starting
              from my first todo-app to a simple project management system. This
              portfolio was built with ReactJs.
            </p>
            <p className="content-text">
              I had encountered finger-counted databases such as MySQL database
              and Mongo database. But, I found MongoDb to be more comfortable
              and easier to use.
            </p>
          </div>
        </div>
        <Button text="Check out my github profile!" cb={goToGithub} />
      </section>
    </main>
  );
};

export default About;
