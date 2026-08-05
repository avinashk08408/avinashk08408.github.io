import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-left">

          <h2>Avinash</h2>

          <p>
            Software Engineer • Cyber Security Student
          </p>

        </div>

        <div className="footer-center">

          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Tech Stack</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-right">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaEnvelope />
          </a>

          <a href="#hero" className="scroll-top">
            <FaArrowUp />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Avinash. Designed & Developed with ❤️ using React.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
