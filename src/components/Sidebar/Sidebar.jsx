import "./Sidebar.css";
import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaTimeline,
  FaCertificate,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-top">

        <div className="logo">
          <div className="logo-box">A</div>

          <div className="logo-text">
            <h2>Avinash</h2>
            <span>Software Engineer</span>
          </div>
        </div>

        <nav>

          <a href="#hero" className="active">
            <FaHome />
            <span>Home</span>
          </a>

          <a href="#about">
            <FaUser />
            <span>About</span>
          </a>

          <a href="#skills">
            <FaCode />
            <span>Tech Stack</span>
          </a>

          <a href="#projects">
            <FaFolderOpen />
            <span>Projects</span>
          </a>

          <a href="#journey">
            <FaTimeline />
            <span>Journey</span>
          </a>

          <a href="#certificates">
            <FaCertificate />
            <span>Certificates</span>
          </a>

          <a href="#contact">
            <FaEnvelope />
            <span>Contact</span>
          </a>

        </nav>

      </div>

      <div className="sidebar-bottom">

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="/resume.pdf" download>
          <FaFileDownload />
        </a>

      </div>

    </aside>
  );
}

export default Sidebar;
