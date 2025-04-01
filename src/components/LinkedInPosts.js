import { Container } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import colorSharp from "../assets/img/color-sharp.png";

export const LinkedInPosts = () => {
  return (
    <section className="linkedin" id="linkedin">
      <Container>
        <h2 className="section-title">
          <FaLinkedin className="icon" /> LinkedIn Posts
        </h2>
        
        <div className="linkedin-grid">
          <div className="linkedin-card">
            <div className="linkedin-content">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7289242306015064064" 
                height="399" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded LinkedIn Post 1">
              </iframe>
            </div>
          </div>

          <div className="linkedin-card">
            <div className="linkedin-content">
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7203817732360880129" 
                height="399" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen 
                title="Embedded LinkedIn Post 2">
              </iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};