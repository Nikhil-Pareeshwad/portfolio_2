import "./App.css";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "Attendance Management System",
      description:
        "A full-stack MERN application for managing daily student attendance. Built using React, Node.js, Express.js, MongoDB, HTML, and CSS. Features attendance tracking, attendance records management, and a responsive user interface.",
      link: "https://attendance-system-kec-frontend.onrender.com/",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React and Vite showcasing skills and projects.",
      link: "#",
    },
    {
      title: "MERN Blog App",
      description:
        "Full-stack blog application with authentication and CRUD functionality.",
      link: "#",
    },
    {
      title: "Task Manager",
      description:
        "CRUD task management application using the MERN stack.",
      link: "#",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Nikhil</h1>

          <h2>Full Stack MERN Developer</h2>

          <p>
            I build responsive web applications using React, Node.js,
            Express.js, and MongoDB.
          </p>

          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I'm a passionate MERN Stack Developer who enjoys creating modern,
          responsive, and user-friendly web applications. I love solving
          problems, learning new technologies, and building real-world
          projects.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>

        <div className="contact-container">
          <p>Email: yourmail@gmail.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>

          <div className="socials">
            <a
              href="https://github.com/Nikhil-Pareeshwad"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;