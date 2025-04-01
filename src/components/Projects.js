import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Provider Digital Security",
      description: "Developed and implemented a robust digital security system for the UnitedHealthcare (UHC) Provider Portal, enabling authorization for over 1.4 million users and processing 1.2 billion+ transactions annually. The system protects sensitive data from unauthorized internal and external access while facilitating seamless user and provider interactions.",
      technologies: "Java Spring Boot, React.js, MongoDB, Spring Security, JWT, RESTful APIs, Chart.js",

    },
    {
      title: "Enhanced Provider Validation (EPV) Portal",
      description: "Developed the Enhanced Provider Validation (EPV) portal, a web application for Out Of Network (OON) providers to register their Taxpayer Identification Number (TIN) and manage their credentialing information. This portal streamlines the process of validating and maintaining provider data, ensuring compliance and ease of use for healthcare providers.",
      technologies: "Java Spring Boot, MongoDB, Spring Security, JWT, RESTful APIs",

    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Professional Projects</h2>
                  <p>Key projects that I worked on during my tenure at Optum Global Solutions</p>
                  
                  <Row>
                    {projects.map((project, index) => (
                      <Col md={6} key={index}>
                        <div className="proj-imgbx">
                          <div className="project-content">
                            <h3>{project.title}</h3>
                            <p><strong>Description:</strong> {project.description}</p>
                            <div className="project-tech">
                              <strong>Technologies:</strong> {project.technologies}
                            </div>
                          </div>
                          <div className="proj-txtx">
                            <h4>{project.title}</h4>
                            <span>{project.role}</span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}