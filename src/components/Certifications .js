import { Container } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";


export const Certifications = () => {
  const certifications = [
    {
      title: "React - The Complete Guide 2024 (Incl. React Router & Redux)",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-c1382b60-775e-4ed0-a988-68856bd119f7/"
    },
    {
      title: "Core Java - Full Course",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-7967db37-7322-4c3e-be14-d5b41f7c5c33/"
    },
    {
      title: "Programming Foundations: Secure Coding",
      issuer: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/3ea82b8ea8e97c950d6f44143bbe317f3a1d911a17fdb8dfa6df3bec311c8b1a"
    },
    {
      title: "Blockchain Basics",
      issuer: "University at Buffalo and The State University of New York | Coursera",
      link: "https://www.coursera.org/verify/NNSN6HC6FJTE"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <Container>
        <h2 className="section-title">
          <FaCertificate className="icon" /> Certifications
        </h2>
        <div className="certification-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="certification-link"
              >
                <h3>{cert.title}</h3>
              </a>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};