import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio!!!</span>
                  <h1>
                    {`Hi! I'm Shubham Kumar`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Full Stack Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Highly motivated Senior Software Engineer at Optum Global
                    Solutions (UHG), specializing in API optimization, security
                    enhancements, and scalable backend development. Proficient
                    in Java, Spring Boot, ReactJS, Kafka, and Kubernetes, with a
                    strong foundation in information security backed by a Master
                    of Technology in Information Security. Demonstrated
                    expertise in resolving critical incidents, implementing
                    test-driven development, and developing robust digital
                    solutions. Adept at leveraging microservices architecture
                    and modern tools to deliver efficient, secure, and
                    high-quality software solutions and committed to continuous
                    learning and excellence in software development.
                  </p>
                  <div className="header-icons">
                    {/* Call Icon */}
                    <a href="tel:+918002887706" aria-label="Call Phone Number">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                      </svg>
                      <span className="icon-tooltip">Call</span>
                    </a>
                    {/* Email Icon */}
                    <a
                      href="mailto:mshubham0309@gmail.com"
                      aria-label="Send Email"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7 .3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 .4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                      </svg>
                      <span className="icon-tooltip">Email</span>
                    </a>
                    {/* LinkedIn Icon */}
                    <a
                      href="https://www.linkedin.com/in/imshubhamkumar/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                      <span className="icon-tooltip">LinkedIn</span>
                    </a>
                    {/* GitHub Icon */}
                    <a
                      href="https://github.com/ishubhamkr"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.373 0 12C0 17.303 3.438 21.8 8.205 23.385C8.805 23.495 9.025 23.14 9.025 22.81C9.025 22.5 9.015 21.807 9.01 21.11C5.672 21.823 4.968 19.534 4.968 19.534C4.422 18.18 3.633 17.845 3.633 17.845C2.546 17.135 3.72 17.15 3.72 17.15C4.922 17.235 5.555 18.414 5.555 18.414C6.633 20.29 8.396 19.785 9.081 19.485C9.189 18.7 9.496 18.18 9.83 17.905C7.14 17.625 4.305 16.605 4.305 11.995C4.305 10.694 4.77 9.61 5.572 8.765C5.444 8.477 5.07 7.31 5.68 5.605C5.68 5.605 6.705 5.29 9 6.56C9.957 6.28 11.035 6.14 12.115 6.14C13.195 6.14 14.273 6.28 15.23 6.56C17.523 5.29 18.548 5.605 18.548 5.605C19.16 7.31 18.788 8.477 18.66 8.765C19.462 9.61 19.923 10.694 19.923 11.995C19.923 16.615 17.084 17.62 14.388 17.885C14.82 18.245 15.21 19.02 15.21 20.185C15.21 21.81 15.195 22.88 15.195 22.81C15.195 23.14 15.405 23.495 16.005 23.385C20.77 21.8 24.21 17.303 24.21 12C24.21 5.373 18.627 0 12 0Z" />
                      </svg>
                      <span className="icon-tooltip">GitHub</span>
                    </a>
                    {/* HackerRank Icon */}
                    <a
                      href="https://www.hackerrank.com/profile/_mshubham"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="HackerRank Profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M477.5 128C463 103.1 285.1 0 256.2 0S49.3 102.8 34.8 128s-14.5 230.8 0 256 192.4 128 221.3 128S463 409.1 477.5 384s14.5-231 0-256zM316.1 414.2c-4 0-40.9-35.8-38-38.7 .9-.9 6.3-1.5 17.6-1.8 0-26.2 .6-68.6 .9-86.3 0-2-.4-3.4-.4-5.9h-79.9c0 7.1-.5 36.2 1.4 72.9 .2 4.5-1.6 6-5.7 5.9-10.1 0-20.3-.1-30.4-.1-4.1 0-5.9-1.5-5.7-6.1 .9-33.4 3-84-.2-212.7v-3.2c-9.7-.4-16.4-1-17.3-1.8-2.9-2.9 34.5-38.7 38.5-38.7s41.2 35.8 38.3 38.7c-.9 .9-7.9 1.5-16.8 1.8v3.2c-2.4 25.8-2 79.6-2.6 105.4h80.3c0-4.6 .4-34.7-1.2-83.6-.1-3.4 1-5.2 4.2-5.2 11.1-.1 22.2-.1 33.2-.1 3.5 0 4.6 1.7 4.5 5.4C333 354.6 336 341.3 336 373.7c8.9 .4 16.8 1 17.7 1.8 2.9 2.9-33.6 38.7-37.6 38.7z" />
                      </svg>
                      <span className="icon-tooltip">HackerRank</span>
                    </a>
                    {/* Download Resume Icon */}
                    <a
                      href="https://raw.githubusercontent.com/ishubhamkr/Resume/main/Shubham_Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Download Resume"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                      </svg>
                      <span className="icon-tooltip">Download Resume</span>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="header-image"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
