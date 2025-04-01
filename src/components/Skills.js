import { Container, Row, Col } from "react-bootstrap";
import { FaCogs } from "react-icons/fa";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "C++", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/cplusplus.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg" }
      ]
    },
    {
      name: "Front End",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg" },
        { name: "ReactJS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg" }
      ]
    },
    {
      name: "Back End",
      skills: [
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/springboot.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg" }
      ]
    },
    {
      name: "Software Development",
      skills: [
        { name: "Object-Oriented Programming (OOP)" },
        { name: "Microservices" },
        { name: "Software Development Lifecycle" },
        { name: "Test-Driven Development (TDD)" },
        { name: "Microservices Architecture" }
      ]
    },
    {
      name: "Tools & Frameworks",
      skills: [
        { name: "JUnit", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/junit5.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kubernetes.svg" },
        { name: "Kafka", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/apachekafka.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/jenkins.svg" },
        { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/githubactions.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postman.svg" },
        { name: "SonarQube", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/sonarqube.svg" }
      ]
    },
    {
      name: "IDEs",
      skills: [
        { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/visualstudiocode.svg" },
        { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/intellijidea.svg" },
        { name: "Eclipse", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/eclipseide.svg" },
        { name: "Atom", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/atom.svg" }
      ]
    },
    {
      name: "Monitoring & Logging",
      skills: [
        { name: "Splunk", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/splunk.svg" },
        { name: "Kibana", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kibana.svg" },
        { name: "New Relic", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/newrelic.svg" },
        { name: "Lens", icon: "https://avatars.githubusercontent.com/u/62133242?s=200&v=4" }
      ]
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Problem Solving" },
        { name: "Troubleshooting" },
        { name: "Debugging" },
        { name: "Data Structures & Algorithms" },
        { name: "Database Management System" }
      ]
    }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className="section-title">
                <FaCogs className="icon" /> Skills
              </h2>
              <div className="skills-grid">
                {skillCategories.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h4>{category.name}</h4>
                    <ul>
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>
                          {skill.icon && (
                            <img 
                              src={skill.icon} 
                              alt={skill.name} 
                              className="skill-icon" 
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          )}
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};