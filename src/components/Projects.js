import React from 'react';
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assests/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "The Crystal Consultancy.com",
      description: "This site is created for the real estate to post the property on internet and people how find home can easily find it on the site",
      imgUrl: 'https://thecrystalconsultancy.com/css/background%20picture-min.png',
      linkurl: 'https://thecrystalconsultancy.com/'
    },
    {
      title: "The Royal Advisor.com",
      description: "This site is created for the real estate to post the property on internet and people how find home can easily find it on the site",
      imgUrl:'https://thecrystalconsultancy.com/css/background%20picture-min.png',
      linkurl: 'https://zaidgatta.github.io/theroyaladvitiser/'
    },
    {
      title: "Quiz.com",
      description: "This site is created for the student to prepair their test and teacher well add importent question.",
      imgUrl:'https://zaidgatta.github.io/zaid.html/background.jpg',
      linkurl: 'https://zaidgatta.github.io/zaid.html/'
    },
    {
      title: "Expence Tracker.com",
      description: "This site is created to track your expence",
      imgUrl:'https://zaidgatta.github.io/zaid.html/background.jpg',
      linkurl: 'https://zaidgatta.github.io/expence-tracker/'
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Browse through my portfolio to see a diverse collection of web development projects. From sleek websites to captivating branding, each project showcases my creativity and attention to detail. Let's connect and discuss how I can bring your ideas to life through custom design solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Shape" />
    </section>
  )
}
