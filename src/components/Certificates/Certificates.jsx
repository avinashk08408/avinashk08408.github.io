import "./Certificates.css";
import {
  FaGoogle,
  FaMicrosoft,
  FaCertificate,
  FaExternalLinkAlt
} from "react-icons/fa";

function Certificates() {

  const certificates = [

    {
      icon: <FaGoogle />,
      title: "Google Cybersecurity",
      issuer: "Google",
      date: "2026",
      link: "#"
    },

    {
      icon: <FaMicrosoft />,
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2026",
      link: "#"
    },

    {
      icon: <FaCertificate />,
      title: "Cisco Networking Basics",
      issuer: "Cisco",
      date: "2026",
      link: "#"
    },

    {
      icon: <FaCertificate />,
      title: "TryHackMe Learning Path",
      issuer: "TryHackMe",
      date: "2026",
      link: "#"
    }

  ];

  return (

    <section className="certificates" id="certificates">

      <div className="container">

        <div className="about-header">

          <span className="section-subtitle">
            CERTIFICATES
          </span>

          <h2 className="section-title">
            Certifications &
            <br />
            Achievements
          </h2>

          <p className="section-description">
            Professional certifications and continuous learning
            that strengthen my development and cybersecurity skills.
          </p>

        </div>

        <div className="certificate-grid">

          {certificates.map((certificate,index)=>(

            <div
              className="certificate-card glass"
              key={index}
            >

              <div className="certificate-icon">

                {certificate.icon}

              </div>

              <h3>

                {certificate.title}

              </h3>

              <p>

                {certificate.issuer}

              </p>

              <span>

                {certificate.date}

              </span>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
              >

                Verify

                <FaExternalLinkAlt />

              </a>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Certificates;
