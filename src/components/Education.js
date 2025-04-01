import { Container } from "react-bootstrap";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import colorSharp from "../assets/img/color-sharp.png";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <h2 className="section-title">
          <FaGraduationCap className="icon" /> Education
        </h2>
        
        <div className="education-grid">
          <div className="education-card">
            <div className="education-content">
              <h3>Master of Technology (M.Tech) in Information Security</h3>
              <div className="education-meta">
                <span className="date">
                  <FaCalendarAlt /> July 2020 – June 2022
                </span>
                <span className="institution">
                  <FaUniversity /> Indian Institute of Information Technology, Gwalior, Madhya Pradesh, India
                </span>
              </div>
            </div>
          </div>

          <div className="education-card">
            <div className="education-content">
              <h3>Bachelor of Technology (B.Tech) in Computer Science & Engineering</h3>
              <div className="education-meta">
                <span className="date">
                  <FaCalendarAlt /> June 2015 – July 2019
                </span>
                <span className="institution">
                  <FaUniversity /> West Bengal University of Technology, Kolkata, West Bengal, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};