import React from 'react';
import Image from 'next/image';

export default function PortfolioContent() {
  return (
    <div>
      {/* Home Section */}
      <section className="home" id="home">
        <h3 className="greeting">Hi there!</h3>
        <h1>
          I&#39;m <span className="highlight">Muhammad Ubaid</span>
        </h1>
        <Image
          src="/imag.png" // Path to your image (must be in the 'public' directory for Next.js)
          alt="Muhammad Ubaid Profile"
          width={150}
          height={150}
          className="profile-img"
        />
        <p>
          I&#39;m a web developer and graphic designer with over a year of experience. I&#39;m looking for a role where I can apply my skills and grow under the mentorship of a respected organization.
        </p>
        <h3 className="career-objective">Career Objective</h3>
        <p className="lead">
          I&#39;m eager to face challenges and grow my skills as a developer.
        </p>
        <a href="#about">
          <button className="btn">
            About Me <i className="fas fa-user"></i>
          </button>
        </a>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h1 className="heading"><span>About</span> Me</h1>
        <div className="about-content">
          <div className="personal-info">
            <h3><span>Name:</span> Muhammad Ubaid</h3>
            <h3><span>Age:</span> 21</h3>
            <h3><span>Qualification:</span> Intermediate, Gov-National College (2020-2022)</h3>
            <h3><span>Post:</span> Web Developer</h3>
            <h3><span>Languages:</span> Urdu, English</h3>
          </div>
          <div className="skills">
            <div className="skill-box"><span>HTML</span></div>
            <div className="skill-box"><span>CSS</span></div>
            <div className="skill-box"><span>NextJs</span></div>
            <div className="skill-box"><span>TypeScript</span></div>
            <div className="skill-box"><span>UI/UX</span></div>
            <div className="skill-box"><span>Graphic designing</span></div>
            <div className="skill-box"><span>2D Animation</span></div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <h1 className="heading">My <span>Education & Courses</span></h1>
        <div className="education-list">
          <div className="education-item">
            <i className="fas fa-graduation-cap"></i>
            <span>2020</span>
            <h3>Matriculation</h3>
            <p>Mama Baby Care School | Computer Science</p>
          </div>
          <div className="education-item">
            <i className="fas fa-graduation-cap"></i>
            <span>2022</span>
            <h3>Intermediate</h3>
            <p>Gov-National College | Pre-engineering</p>
          </div>
          <div className="education-item">
            <i className="fas fa-graduation-cap"></i>
            <span>2020 - 2023</span>
            <h3>Aptech Garden Center</h3>
            <p>IT (3 Year Diploma)</p>
          </div>
          <div className="education-item">
            <i className="fas fa-graduation-cap"></i>
            <span>2022</span>
            <h3>Frontend Development</h3>
            <p>Aptech Computer Education</p>
          </div>
          <div className="education-item">
            <i className="fas fa-graduation-cap"></i>
            <span>2021</span>
            <h3>2D Animation</h3>
            <p>QF Network</p>
          </div>
          <div className="education-item">
            <i className="fas fa-graduation-cap"></i>
            <span>2022</span>
            <h3>Graphic Design</h3>
            <p>Memon Federation</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h1 className="heading"><span>Contact</span> Me</h1>
        <div className="contact-info">
          <h3 className="title">Contact Info</h3>
          <div className="contact-details">
            <h3><i className="fas fa-envelope"></i> ubaid2010b@aptechgdn.net</h3>
            <h3>
              <a href="https://www.linkedin.com/in/dayyan-rizwan-56995723b">
                <i className="fa-brands fa-linkedin-in"></i> Muhammad Ubaid
              </a>
            </h3>
            <h3>
              <a href="https://www.fiverr.com/users/vyondanimator2d">
                <i>Fiverr</i> Muhammad Ubaid
              </a>
            </h3>
            <h3><i className="fas fa-phone"></i> 03313859625</h3>
            <h3><i className="fas fa-map-marker-alt"></i> Garden East, Karachi</h3>
          </div>

          <form action="">
            <input type="text" placeholder="Name" className="box" />
            <input type="email" placeholder="Email" className="box" />
            <input type="text" placeholder="Project" className="box" />
            <textarea className="box message" placeholder="Message"></textarea>
            <button type="submit" className="btn">
              Send <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <a href="#home" className="scroll-top">
        <i className="fa-solid fa-rocket"></i>
      </a>
    </div>
  );
}