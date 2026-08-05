import "./Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="container">

        <div className="about-header">

          <span className="section-subtitle">
            CONTACT
          </span>

          <h2 className="section-title">
            Let's Build Something
            <br />
            Amazing Together
          </h2>

          <p className="section-description">
            Whether it's a project, internship, collaboration or just a
            conversation about technology, I'm always happy to connect.
          </p>

        </div>

        <div className="contact-container">

          <div className="contact-info">

            <div className="contact-card glass">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>avinash@email.com</p>
              </div>

            </div>

            <div className="contact-card glass">

              <div className="contact-icon">
                <FaGithub />
              </div>

              <div>
                <h3>GitHub</h3>
                <p>github.com/yourusername</p>
              </div>

            </div>

            <div className="contact-card glass">

              <div className="contact-icon">
                <FaLinkedin />
              </div>

              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/yourusername</p>
              </div>

            </div>

            <div className="contact-card glass">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>Chennai, India</p>
              </div>

            </div>

          </div>

          <form className="contact-form glass">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button
              type="submit"
              className="btn-primary"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;
