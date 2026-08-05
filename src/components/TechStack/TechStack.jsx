import "./TechStack.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDocker,
  FaShieldAlt,
  FaDatabase
} from "react-icons/fa";

function TechStack() {

  const frontend = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" }
  ];

  const backend = [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "SQL" }
  ];

  const cyber = [
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FaShieldAlt />, name: "Cyber Security" }
  ];

  const tools = [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDocker />, name: "Docker" }
  ];

  return (

    <section className="tech" id="skills">

      <div className="container">

        <div className="about-header">

          <span className="section-subtitle">
            TECH STACK
          </span>

          <h2 className="section-title">
            Technologies
            <br />
            I Work With
          </h2>

          <p className="section-description">
            Technologies, frameworks and tools I use for creating
            modern applications and secure systems.
          </p>

        </div>

        <div className="tech-grid">

          <div className="tech-box glass large">

            <h3>Frontend</h3>

            <div className="skill-list">

              {frontend.map((item, index) => (

                <div className="skill-chip" key={index}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>

              ))}

            </div>

          </div>

          <div className="tech-box glass">

            <h3>Backend</h3>

            <div className="skill-list">

              {backend.map((item, index) => (

                <div className="skill-chip" key={index}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>

              ))}

            </div>

          </div>

          <div className="tech-box glass">

            <h3>Cyber Security</h3>

            <div className="skill-list">

              {cyber.map((item, index) => (

                <div className="skill-chip" key={index}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>

              ))}

            </div>

          </div>

          <div className="tech-box glass large">

            <h3>Developer Tools</h3>

            <div className="skill-list">

              {tools.map((item, index) => (

                <div className="skill-chip" key={index}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default TechStack;
