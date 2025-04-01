import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2>Professional Experience</h2>
        
        <div className="job">
          <h3>Senior Software Engineer 
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} /> March 2025 – Present
            </span>
          </h3>
          <div className="job-details">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Optum Global Solutions (UHG) | Noida, Uttar Pradesh, India
          </div>
          <ul>
            <li><strong>API Optimization:</strong> Enhanced the Kafka streams and RESTful architecture, leading to a <strong>10% improvement</strong> in API performance times through effective code refactoring.</li>
            <li><strong>System Uptime Maintenance:</strong> Resolved critical high-priority ServiceNow incidents, maintaining a <strong>99.95% system uptime</strong> by bolstering security protocols and system stability.</li>
            <li><strong>Full-Stack Development Impact:</strong> Spearheaded the refactoring of the Provider Digital Security Application, facilitated the integration of frontend and backend APIs using <strong>React.js</strong>, <strong>Abyss</strong>, and <strong>MongoDB</strong>. Successfully eliminated critical and high vulnerabilities, improved code quality and migrated the code to the latest version of Spring and Java 21, thereby enhancing ticket resolution time by <strong>20%</strong>.</li>
            <li><strong>Advanced Monitoring Solutions & Code Review:</strong> Developed new dashboards for <strong>Splunk</strong>, <strong>Kibana</strong>, and <strong>New Relic</strong>. Established war room alerts and pager notifications for quicker issue resolution. Conducted code reviews to ensure the merging of high-quality, secure, and bug-free code.</li>
            <li><strong>Leadership & Team Building:</strong> Mentored new graduates and streamlined the onboarding process for new hires, reducing onboarding time by <strong>30%</strong>. Conducted daily scrum meetings to monitor progress and fostered a high-performing, collaborative team environment.</li>
          </ul>
          <div className="tools-tech">
            <strong>Key Tools & Technologies:</strong> Java, Spring Boot, React.js, Kafka, GraphQL, JUnit, CodeQL, Splunk, Kibana, ServiceNow, MongoDB, Git, Kubernetes, JMeter, OpenLens
          </div>
        </div>

        <div className="job">
          <h3>Software Engineer 
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} /> July 2022 – February 2025
            </span>
          </h3>
          <div className="job-details">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Optum Global Solutions (UHG) | Noida, Uttar Pradesh, India
          </div>
          <ul>
            <li><strong>Database Performance Enhancement:</strong> Created and ran multiple database migration scripts to update the database, optimizing our <strong>MongoDB</strong> database to accelerate performance.</li>
            <li><strong>Incident Resolution:</strong> Successfully resolved over <strong>200 high-priority incidents</strong> on ServiceNow, maintaining a <strong>99.9% system uptime</strong> and bolstering security protocols.</li>
            <li><strong>Software Development:</strong> Participated in the design and integration of frontend and backend APIs for the Digital Security Helpdesk Portal. Utilized technologies like <strong>React.js</strong>, <strong>Abyss</strong>, and <strong>MongoDB</strong>, which improved ticket resolution time by <strong>15%</strong>.</li>
            <li><strong>Monitoring Solutions:</strong> Assisted in the deployment of production monitoring systems using tools like <strong>Splunk</strong>, <strong>Kibana</strong>, and <strong>New Relic</strong>. Automated database maintenance was achieved through cron jobs, reducing system downtime by <strong>10%</strong>.</li>
            <li><strong>Team Collaboration:</strong> Played an instrumental role in the onboarding process of new team members, fostering a collaborative and productive team environment.</li>
          </ul>
          <div className="tools-tech">
            <strong>Key Tools & Technologies:</strong> Java, Spring Boot, React.js, Kafka, GraphQL, JUnit, CodeQL, Splunk, Kibana, ServiceNow, MongoDB, Git, Kubernetes, JMeter
          </div>
        </div>

        <div className="job">
          <h3>Teaching Assistant 
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} /> January 2022 - May 2022
            </span>
          </h3>
          <div className="job-details">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Indian Institute of Information Technology | Gwalior, Madhya Pradesh, India
          </div>
          <ul>
            <li>Assisted students in C Programming Lab for 1st-year B.Tech students and AI Lab for 2nd-year B.Tech students, helping with C programming and AI-related coding questions, provided live coding classes, and promptly answered students' queries.</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};