import "./Journey.css";
import { FaGraduationCap, FaCode, FaShieldAlt, FaRocket } from "react-icons/fa";

function Journey() {

  const timeline = [

    {
      year: "2025",
      icon: <FaGraduationCap />,
      title: "Started B.E Cyber Security",
      description:
        "Began my journey in Cyber Security while strengthening programming and software development fundamentals."
    },

    {
      year: "2025",
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Focused on HTML, CSS, JavaScript, React, Python and building full-stack applications."
    },

    {
      year: "2026",
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description:
        "Learning Linux, Networking, OWASP Top 10, penetration testing and secure software practices."
    },

    {
      year: "Future",
      icon: <FaRocket />,
      title: "Industry Ready",
      description:
        "Building innovative products, contributing to open source and becoming a professional Software Engineer."
    }

  ];

  return (

    <section className="journey" id="journey">

      <div className="container">

        <div className="about-header">

          <span className="section-subtitle">
            MY JOURNEY
          </span>

          <h2 className="section-title">
            Growth Timeline
          </h2>

          <p className="section-description">
            Every milestone represents continuous learning, practical
            experience and progress toward becoming a professional
            software engineer.
          </p>

        </div>

        <div className="timeline">

          {timeline.map((item, index) => (

            <div className="timeline-item" key={index}>

              <div className="timeline-icon">
                {item.icon}
              </div>

              <div className="timeline-card glass">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Journey;
