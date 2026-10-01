import React, { useRef, useState } from 'react';

// Formspree receives the submission and sends an email notification
// to the email configured and verified in the Formspree account.
const FORM_ENDPOINT = "https://formspree.io/f/xnpqkdjk";

export default function App() {
  // Contact Form State
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const submissionLock = useRef(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (formState === 'validation_error') {
      setFormState('idle');
      setErrorMessage('');
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent rapid/double submissions.
    if (submissionLock.current) return;

    // 1. Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormState('validation_error');
      setErrorMessage('Please fill in all fields with a valid email address.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormState('validation_error');
      setErrorMessage('Please enter a valid email address format.');
      return;
    }

    // 2. Lock while the request is being sent.
    submissionLock.current = true;
    setFormState('loading');
    setErrorMessage('');

    try {
      // 3. Send the complete form data to Formspree.
      // Formspree then delivers the submission to the email configured
      // for this form endpoint.
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `New Portfolio Contact — ${formData.name.trim()}`,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || 'Form submission failed.');
      }

      // 4. Only show success after Formspree accepts the submission.
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form submission error:', err);
      setFormState('submission_error');
      setErrorMessage(
        'We could not send your message right now. Please try again or email me directly.'
      );
    } finally {
      submissionLock.current = false;
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="app-container nav-container">
          <a href="#" className="nav-brand">
            <span className="monogram">KC</span>
            <span className="brand-name">Kanak Chaudhary</span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>

          <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="app-container">

        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <span className="hero-eyebrow">
            BACKEND DEVELOPMENT · DATA MODELING · AI-ASSISTED ENGINEERING
          </span>

          <h1 className="hero-title">
            Hi, I’m <br />Kanak Chaudhary.
          </h1>

          <p className="hero-subtitle">
            I build backend systems and data models designed for future features,
            not just current requirements. My projects show how technical decisions
            around databases, workflows, and system design support scalable and
            maintainable software.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <span className="section-eyebrow">BACKGROUND</span>
          <h2 className="section-title">About Me</h2>

          <p
            className="card-desc"
            style={{ maxWidth: '800px', fontSize: '1.05rem' }}
          >
            I am currently pursuing my Bachelor of Computer Applications (BCA).
            My technical focus is on practical software development, with a growing
            emphasis on backend logic, data modeling, and AI-assisted engineering.
            I work with Java, Python, JavaScript, SQL/MySQL, React.js, and core
            computer science concepts while building projects that demonstrate
            technical decisions rather than only technology usage.
          </p>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills">
          <span className="section-eyebrow">CAPABILITIES</span>
          <h2 className="section-title">Technical Skills</h2>

          <div className="grid-3">
            <div className="card">
              <h3 className="card-title">Languages</h3>
              <p className="card-desc">C, C++, Java, Python, JavaScript</p>
            </div>

            <div className="card">
              <h3 className="card-title">Web & Frontend</h3>
              <p className="card-desc">HTML5, CSS3, React.js</p>
            </div>

            <div className="card">
              <h3 className="card-title">Database</h3>
              <p className="card-desc">SQL, MySQL, DBMS</p>
            </div>

            <div className="card">
              <h3 className="card-title">Tools & Frameworks</h3>
              <p className="card-desc">
                Git, GitHub, VS Code, Streamlit, Java Swing, Excel, Tableau
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Core CS</h3>
              <p className="card-desc">
                Data Structures & Algorithms (DSA), OOP, DBMS, Operating Systems
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">Currently Learning</h3>
              <p className="card-desc">
                Artificial Intelligence, Machine Learning, Data Analytics
              </p>
            </div>
          </div>
        </section>

        {/* INTERNSHIP EXPERIENCE */}
        <section id="experience">
          <span className="section-eyebrow">WORK HISTORY</span>
          <h2 className="section-title">Internship Experience</h2>

          <div className="compact-list">
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h3 className="card-title">FlyRank — AI Intern</h3>
                <span className="card-subtitle">July 2026 Cohort</span>
              </div>

              <p className="card-subtitle">Frontend AI Engineering Track</p>

              <p className="card-desc">
                Selected for FlyRank's AI International Internship Program.
                Building frontend applications using React.js and JavaScript
                while exploring AI-assisted web development workflows.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">CodSoft — Web Development Intern</h3>

              <p className="card-desc">
                Completed three complete web development assignments including
                a personal portfolio, landing page, and functional calculator
                using responsive HTML, CSS, and JavaScript.
              </p>
            </div>

            <div className="card">
              <h3 className="card-title">
                BeeSkilled — Data Structures & Algorithms Intern (C++)
              </h3>

              <p className="card-desc">
                Completed a 4-week intensive algorithm program covering data
                structures from arrays and linked lists to graphs and dynamic
                programming. Built projects including a Student Marks Analyzer
                and Contact Directory.
              </p>
            </div>
          </div>

          <h3
            className="section-title"
            style={{ fontSize: '1.3rem', marginTop: '2.5rem', marginBottom: '1rem' }}
          >
            Virtual Experience Programs
          </h3>

          <div className="grid-3">
            <div className="card">
              <h4 className="card-title" style={{ fontSize: '1rem' }}>Deloitte</h4>
              <p className="card-desc">Data Analytics Job Simulation — Forage</p>
            </div>

            <div className="card">
              <h4 className="card-title" style={{ fontSize: '1rem' }}>Goldman Sachs</h4>
              <p className="card-desc">Operations Job Simulation — Forage</p>
            </div>

            <div className="card">
              <h4 className="card-title" style={{ fontSize: '1rem' }}>Data Labeling</h4>
              <p className="card-desc">Data Labeling Job Simulation</p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <span className="section-eyebrow">FEATURED WORK</span>
          <h2 className="section-title">Projects</h2>

          <div className="grid-2">

            {/* SPELLFORGE */}
            <div className="card">
              <h3 className="card-title">SpellForge</h3>

              <div className="tech-pills">
                <span className="pill">Data Modeling</span>
                <span className="pill">Database Design</span>
              </div>

              <div className="project-proof">
                <div className="project-proof-block">
                  <span className="project-proof-label">Problem</span>
                  <p className="project-proof-text">
                    The system needed to track user progression while keeping a reliable
                    record of how XP was earned.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">My Contribution</span>
                  <p className="project-proof-text">
                    I separated current progression from XP History, storing each XP gain
                    as an auditable event instead of relying only on a mutable total.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">Result</span>
                  <p className="project-proof-text">
                    This data model keeps progression observable and creates a foundation
                    for future analytics and achievement features.
                  </p>
                </div>
              </div>
            </div>

            {/* AI INTERNSHIP LANDING PAGE */}
            <div className="card">
              <h3 className="card-title">AI Internship Program Landing Page</h3>

              <div className="tech-pills">
                <span className="pill">HTML</span>
                <span className="pill">CSS</span>
                <span className="pill">JavaScript</span>
              </div>

              <div className="project-proof">
                <div className="project-proof-block">
                  <span className="project-proof-label">Problem</span>
                  <p className="project-proof-text">
                    The page needed to present an internship program through
                    a structured and responsive web experience.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">My Contribution</span>
                  <p className="project-proof-text">
                    I used responsive layouts and JavaScript interactions
                    across 4+ sections instead of relying on static content.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">Result</span>
                  <p className="project-proof-text">
                    A responsive landing page with interactive frontend
                    behaviour and structured sections.
                  </p>
                </div>
              </div>
            </div>

            {/* ADVANCED CALCULATOR */}
            <div className="card">
              <h3 className="card-title">Advanced Calculator</h3>

              <div className="tech-pills">
                <span className="pill">HTML</span>
                <span className="pill">CSS</span>
                <span className="pill">JavaScript</span>
              </div>

              <div className="project-proof">
                <div className="project-proof-block">
                  <span className="project-proof-label">Problem</span>
                  <p className="project-proof-text">
                    The project required a calculator interface supporting
                    multiple functions with an interactive user experience.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">My Contribution</span>
                  <p className="project-proof-text">
                    I implemented 10+ calculator functions with JavaScript
                    and added dark/light theme switching.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">Result</span>
                  <p className="project-proof-text">
                    A responsive calculator with multiple functions and
                    interactive theme behaviour.
                  </p>
                </div>
              </div>
            </div>

            {/* FINANCE INDIA */}
            <div className="card">
              <h3 className="card-title">Finance India — Personal Finance System</h3>

              <div className="tech-pills">
                <span className="pill">Java</span>
                <span className="pill">Swing</span>
                <span className="pill">MySQL</span>
              </div>

              <div className="project-proof">
                <div className="project-proof-block">
                  <span className="project-proof-label">Problem</span>
                  <p className="project-proof-text">
                    The application needed to manage income, expenses,
                    savings, and budgets across multiple finance workflows.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">My Contribution</span>
                  <p className="project-proof-text">
                    I built the desktop application with Java Swing and
                    integrated MySQL for transaction management across 5+
                    core modules.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">Result</span>
                  <p className="project-proof-text">
                    A desktop personal-finance system capable of handling
                    core income, expense, savings, and budget workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* STUDENT PERFORMANCE ANALYSIS */}
            <div className="card">
              <h3 className="card-title">Student Performance Analysis</h3>

              <div className="tech-pills">
                <span className="pill">Python</span>
                <span className="pill">Pandas</span>
                <span className="pill">SQL</span>
              </div>

              <div className="project-proof">
                <div className="project-proof-block">
                  <span className="project-proof-label">Problem</span>
                  <p className="project-proof-text">
                    Student data needed to be explored systematically to
                    identify patterns and generate useful insights.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">My Contribution</span>
                  <p className="project-proof-text">
                    I used Python, Pandas, Excel, and SQL to analyse a dataset
                    containing 500+ records.
                  </p>
                </div>

                <div className="project-proof-block">
                  <span className="project-proof-label">Result</span>
                  <p className="project-proof-text">
                    Data exploration and insights were produced using both
                    Pandas operations and SQL queries.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education">
          <div className="grid-2">

            <div>
              <span className="section-eyebrow">ACADEMICS</span>
              <h2 className="section-title">Education</h2>

              <div className="card">
                <h3 className="card-title">Bachelor of Computer Applications (BCA)</h3>
                <p className="card-subtitle">BSA College of Engineering & Technology</p>
                <p className="card-desc">Mathura, Uttar Pradesh</p>
                <p
                  className="card-desc"
                  style={{ marginTop: '0.5rem', color: 'var(--accent-powder)' }}
                >
                  2024 – 2027
                </p>
              </div>

              <h3
                className="section-title"
                style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}
              >
                Achievements
              </h3>

              <div className="compact-list">
                <div className="compact-item">
                  <span>Captain — Hackfest</span>
                  <small>GeeksforGeeks</small>
                </div>

                <div className="compact-item">
                  <span>Participant — Smart India Hackathon</span>
                  <small>SIH 2025</small>
                </div>

                <div className="compact-item">
                  <span>Participant — Elite Her Hackathon</span>
                </div>

                <div className="compact-item">
                  <span>Participant — AptiCode Arena</span>
                  <small>2026</small>
                </div>
              </div>
            </div>

            <div>
              <span className="section-eyebrow">CREDENTIALS</span>
              <h2 className="section-title">Certifications</h2>

              <div className="compact-list">
                <div className="compact-item">
                  <span>Web Development Certificate</span>
                  <small>CodSoft</small>
                </div>

                <div className="compact-item">
                  <span>AI Bootcamp Certificate</span>
                  <small>Intellipaat (2026)</small>
                </div>

                <div className="compact-item">
                  <span>Full Stack Workshop</span>
                  <small>GUVI x HCL</small>
                </div>

                <div className="compact-item">
                  <span>Industrial Visit Certificate</span>
                  <small>Network Bulls</small>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION (DYNAMIC FEATURE) */}
        <section id="contact">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2 className="section-title">Have something worth building?</h2>

          <div className="contact-container">
            <div>
              <p
                className="card-desc"
                style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}
              >
                Have a project, opportunity, or idea to discuss? Send a message
                directly using the form.
              </p>

              <div className="explainer-box">
                <h4>How this Contact Form Works (Backend Concept)</h4>

                <p>Your details are first validated in the browser. Once the form is valid, the complete submission is sent securely to the form processing service with your name, email, message, and contact subject. After the service accepts it, the submission is delivered to the email configured for this portfolio form.</p>
              </div>
            </div>

            <div>
              {formState === 'success' ? (
                <div
                  className="alert alert-success"
                  role="status"
                  aria-live="polite"
                  style={{ padding: '2rem', textAlign: 'center' }}
                >
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    Thanks for reaching out!
                  </h3>

                  <p style={{ marginBottom: '1.5rem' }}>
                    Your message was submitted successfully. I’ll receive your name, email, and message by email.
                  </p>

                  <button
                    onClick={() => setFormState('idle')}
                    className="btn btn-secondary"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="contact"
                  noValidate
                >

                  {(formState === 'validation_error' ||
                    formState === 'submission_error') && (
                    <div className="alert alert-error" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name">Name</label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      disabled={formState === 'loading'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      disabled={formState === 'loading'}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>

                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..."
                      disabled={formState === 'loading'}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    disabled={formState === 'loading'}
                  >
                    {formState === 'loading' ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="app-container footer-content">
          <div>
            <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>
              KC — Kanak Chaudhary
            </p>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Backend Development | Data Modeling | AI-Assisted Engineering
            </p>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Mathura, Uttar Pradesh, India
            </p>
          </div>

          <div className="footer-links">
            <a href="mailto:kanakchaudhary091107@gmail.com">Email</a>

            <a
              href="https://linkedin.com/in/kanak-chaudhary-8715b13b6"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/kanakchaudhary0911"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div
          className="app-container"
          style={{
            marginTop: '1.5rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          © 2026 Kanak Chaudhary
        </div>
      </footer>
    </div>
  );
}