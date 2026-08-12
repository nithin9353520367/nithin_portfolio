import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";
import { profile, skills, projects, achievements, education } from "./data";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <motion.div
        className="section-heading"
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  const nav = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Contact", "contact"],
  ];

  return (
    <div className="site">
      <div className="noise" />

      <header className="nav-wrap">
        <nav className="nav">
          <a href="#" className="brand">NR<span>.</span></a>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-photo-wrap">
            <motion.img
              src={profile.profilePhoto}
              alt="Nithin R"
              className="hero-photo"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="patent-badge">
              <span>Published Patent</span>
              <strong>{profile.patentNumber}</strong>
            </div>
          </div>

          <div className="hero-copy">
            <motion.div variants={fade} initial="hidden" animate="show" className="location">
              <MapPin size={15} /> {profile.location}
            </motion.div>

            <motion.p
              className="kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {profile.name}<span>.</span>
            </motion.h1>

            <motion.div
              className="hero-role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              {profile.role}
            </motion.div>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              {profile.intro}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <a className="button primary" href="#projects">View my work <ArrowUpRight size={17} /></a>
            </motion.div>
          </div>

          <div className="hero-word">BUILD<br />BETTER.</div>
        </section>

        <Section id="about" eyebrow="01 — ABOUT" title="A little about me">
          <div className="about-grid">
            <motion.p className="big-copy" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
              I’m an Information Science Engineering student interested in building at the intersection of <strong>software, AI, data and emerging technology.</strong>
            </motion.p>
            <motion.div className="about-side" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p>
                I enjoy taking an idea from a problem statement to a working prototype. My work spans blockchain, machine learning, web development, cybersecurity and analytics.
              </p>
              <p>
                Outside technology, I’m passionate about sports and event management — experiences that have strengthened my teamwork, communication and leadership.
              </p>
            </motion.div>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 — TOOLKIT" title="Things I work with">
          <motion.div className="skills" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {skills.map((skill, i) => <span key={skill}><b>{String(i + 1).padStart(2, "0")}</b>{skill}</span>)}
          </motion.div>
        </Section>

        <Section id="projects" eyebrow="03 — SELECTED WORK" title="Projects I’m proud of">
          <div className="projects">
            {projects.map((project) => (
              <motion.article
                className="project"
                key={project.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-meta">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a href={project.link} className="project-link" aria-label={`Open ${project.title}`}>
                  <ExternalLink size={20} />
                </a>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="04 — JOURNEY" title="Experience & validation">
          <div className="timeline">
            {education.map((item) => (
              <motion.div className="timeline-row" key={item.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="timeline-year">{item.year}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
              </motion.div>
            ))}
            {achievements.map((item, i) => (
              <motion.div className="timeline-row" key={item.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="timeline-year">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <section id="contact" className="contact">
          <div className="contact-line" />
          <motion.p variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>HAVE A PROJECT IN MIND?</motion.p>
          <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
            LET'S BUILD<br /><em>something.</em>
          </motion.h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <Mail size={19} /> {profile.email}
          </a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Nithin R</span>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={18} /></a>
        </div>
        <span>Built with React</span>
      </footer>
    </div>
  );
}