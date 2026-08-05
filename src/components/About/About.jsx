import "./About.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShieldAlt,
  FaServer,
  FaCode
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "Building responsive, modern and interactive web applications with React, HTML, CSS and JavaScript."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Creating scalable APIs and backend services using Python, Flask and FastAPI."
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Learning network security, Linux, OWASP Top 10 and ethical hacking fundamentals."
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      desc: "Improving logical thinking through DSA, LeetCode and real-world development projects."
    }
  ];

  return (
    <section className="about" id="about">

      <div className="container">

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="section-subtitle">
            ABOUT ME
          </span>

          <h2 className="section-title">
            Passionate Developer
            <br />
            Building Secure Solutions
          </h2>

          <p className="section-description">
            I'm Avinash, a Software Developer and Cyber Security student
            who enjoys transforming ideas into premium digital products.
            My focus is writing clean code, learning continuously,
            and creating applications that are both beautiful and secure.
          </p>

        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-left glass"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3>Who Am I?</h3>

            <p>
              Currently pursuing B.E. Cyber Security while exploring
              full-stack development, cloud technologies and software
              engineering.
            </p>

            <div className="about-stats">

              <div>
                <h2>15+</h2>
                <span>Projects</span>
              </div>

              <div>
                <h2>10+</h2>
                <span>Technologies</span>
              </div>

              <div>
                <h2>∞</h2>
                <span>Learning</span>
              </div>

            </div>

          </motion.div>

          <div className="about-right">

            {cards.map((card, index) => (

              <motion.div
                className="about-card glass"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .7,
                  delay: index * .15
                }}
                viewport={{ once: true }}
              >

                <div className="about-icon">
                  {card.icon}
                </div>

                <h3>{card.title}</h3>

                <p>{card.desc}</p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
