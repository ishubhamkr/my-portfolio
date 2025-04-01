import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Experience } from './components/Experience';
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Certifications } from './components/Certifications ';
import { Education } from './components/Education';
import { LinkedInPosts } from './components/LinkedInPosts';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      {/* Main Sections */}
      <Banner />

      {/* <section id="instagram" className="social-embed">
        <div className="container">
          <h2>Instagram</h2>
          <div className="instagram-placeholder">
            <p>Instagram feed will be embedded here</p>
          </div>
        </div>
      </section> */}
      
      <section id="linkedin">
        <LinkedInPosts/>
      </section>
      
      <section id="experience">
      <Experience/>
      </section>

      <section id="education">
        <Education/>
      </section>
      

      <section id="skills">
        <Skills />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="publications" className="section">
        <div className="container">
          <h2>Publications</h2>
          <div className="publication-item">
            <h3>Securing IoT with Blockchain: Detecting Malicious Nodes with TLS Certificates</h3>
            <p>International Conference on Computer, Electronics & Electrical Engineering & their Applications (IC2E3), June 8, 2023</p>
            <a href="https://ieeexplore.ieee.org/document/10262746" className="publication-link">Read Publication</a>
          </div>
        </div>
      </section>

      <section id="certifications">
        <Certifications/>
      </section>
      
      <section id="achievements" className="section">
        <div className="container">
          <h2>Achievements</h2>
          <ul className="achievements-list">
            <li>Qualified GATE-CS in 2020 and 2022.</li>
            <li>Achieved Global Rank: 148 in September Challenge 2021 Division 3 on CodeChef.</li>
            <li>Earned a 5-star rating in C++ Programming on HackerRank.</li>
          </ul>
        </div>
      </section>
    
      <Footer />
    </div>
  );
}

export default App;