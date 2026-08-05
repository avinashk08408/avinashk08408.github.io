import "./Hero.css";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaDownload
} from "react-icons/fa";

import profile from "../../assets/images/profile.png";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-glow"></div>

      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <span className="hero-tag">
            SOFTWARE ENGINEER • CYBER SECURITY STUDENT
          </span>

          <h1>
            Designing
            <br />
            Premium Digital
            <br />
            Experiences.
          </h1>

          <p>
            I craft modern web experiences with clean architecture,
            beautiful interfaces and secure systems. Passionate about
            development, cybersecurity and building products that make
            an impact.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
            >
              Resume
              <FaDownload />
            </a>

          </div>

          <div className="hero-social">

            <a href="#">
              <FaGithub />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="profile-circle">

            <img
              src={profile}
              alt="Avinash"
            />

          </div>

          <div className="floating-card card-one">
            <h3>15+</h3>
            <span>Projects</span>
          </div>

          <div className="floating-card card-two">
            <h3>10+</h3>
            <span>Technologies</span>
          </div>

          <div className="floating-card card-three">
            <h3>2025</h3>
            <span>Journey Started</span>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;
