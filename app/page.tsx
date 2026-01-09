export default function Home() {
  const skills = [
    { name: "Python", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "Spring", category: "Framework" },
    { name: ".NET", category: "Framework" },
    { name: "React", category: "Framework" },
    { name: "HTML", category: "Web" },
    { name: "CSS", category: "Web" },
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-accent font-semibold text-lg tracking-tight">
            O.
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-muted hover:text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl text-center">
          <p className="text-accent text-sm tracking-widest uppercase mb-4 animate-fade-in">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in animate-delay-100">
            Olga
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 animate-fade-in animate-delay-200">
            Data Science Engineer{" "}
            <span className="text-accent">|</span> ML{" "}
            <span className="text-accent">|</span> DevOps
          </p>
          <p className="text-muted max-w-lg mx-auto mb-12 animate-fade-in animate-delay-300">
            Building intelligent systems and scalable solutions. 
            Passionate about transforming data into actionable insights.
          </p>
          <div className="flex items-center justify-center gap-4 animate-fade-in animate-delay-400">
            <a
              href="#contact"
              className="px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm text-accent tracking-widest uppercase mb-2">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Who I Am</h3>
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              I&apos;m a Data Science Engineer with a strong foundation in machine learning, 
              DevOps practices, and full-stack development. My approach combines analytical 
              thinking with practical implementation to deliver solutions that make a real impact.
            </p>
            <p>
              With hands-on experience in building data pipelines, deploying ML models, 
              and developing web applications, I bridge the gap between data science 
              and production-ready software.
            </p>
            <p>
              I thrive in collaborative environments where I can contribute to innovative 
              projects while continuously learning and growing as a professional.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm text-accent tracking-widest uppercase mb-2">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Technical Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card p-4 bg-card border border-border rounded-lg text-center"
              >
                <p className="font-medium mb-1">{skill.name}</p>
                <p className="text-xs text-muted">{skill.category}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-accent text-2xl mb-3">📊</div>
              <h4 className="font-semibold mb-2">Data Science</h4>
              <p className="text-sm text-muted">
                Data analysis, visualization, and building predictive models
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-accent text-2xl mb-3">🤖</div>
              <h4 className="font-semibold mb-2">Machine Learning</h4>
              <p className="text-sm text-muted">
                Model development, training, and deployment pipelines
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="text-accent text-2xl mb-3">⚙️</div>
              <h4 className="font-semibold mb-2">DevOps</h4>
              <p className="text-sm text-muted">
                CI/CD, containerization, and infrastructure automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm text-accent tracking-widest uppercase mb-2">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Work History</h3>
          <div className="relative pl-8 border-l-2 border-border">
            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-accent rounded-full" />
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-semibold">Software Engineering Intern</h4>
                <span className="text-sm text-accent">Feb 2025 - June 2025</span>
              </div>
              <p className="text-muted mb-4">Innovation DOOEL</p>
              <ul className="space-y-2 text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5">▹</span>
                  <span>Developed and maintained data processing pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5">▹</span>
                  <span>Collaborated with cross-functional teams on ML projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5">▹</span>
                  <span>Implemented DevOps practices for automated deployments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5">▹</span>
                  <span>Contributed to full-stack web application development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm text-accent tracking-widest uppercase mb-2">Education</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">Academic Background</h3>
          <div className="p-6 bg-card border border-border rounded-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Faculty of Computer Science and Engineering
                </h4>
                <p className="text-muted mb-2">FINKI - Ss. Cyril and Methodius University</p>
                <p className="text-muted">Skopje, North Macedonia</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  Class of 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm text-accent tracking-widest uppercase mb-2">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Connect</h3>
          <p className="text-muted max-w-lg mx-auto mb-12">
            I&apos;m currently open to new opportunities and collaborations. 
            Feel free to reach out if you&apos;d like to discuss a project or just say hello!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:your.email@example.com"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              Send an Email
            </a>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Olga. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
