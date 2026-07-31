const cases = [
  {
    index: "01",
    eyebrow: "Legal Tech · Conversion",
    title: "The Trust Engine",
    premise: "Asked to refresh a review page.",
    reframe: "Reframed it as a ranking-to-conversion problem.",
    outcome:
      "Authored the north-star brief the team aligned on, targeting 2× organic CTR while replacing risky trust labels with platform-neutral signals.",
    tags: ["Problem framing", "Information architecture", "Trust"],
    href: "https://roywannago.com/legaltech-review-redesign.html",
    metric: "2×",
    metricLabel: "CTR target",
  },
  {
    index: "02",
    eyebrow: "Enterprise SaaS · Operations",
    title: "A portal for 300K+ law firms",
    premise: "Billing rescue lived in manual account-manager workflows.",
    reframe: "Turned billing from a support task into a self-serve system.",
    outcome:
      "Designed tokenized payment, line-item invoices, history, alerts, and graceful suspension states—freeing 200+ account-manager hours each month.",
    tags: ["B2B SaaS", "Systems design", "Complex states"],
    metric: "200+",
    metricLabel: "hours / month",
  },
  {
    index: "03",
    eyebrow: "Civic Tech · Product Strategy",
    title: "The $500K question",
    premise: "Asked to increase alumni-platform engagement.",
    reframe: "Asked whether the platform was creating value at all.",
    outcome:
      "The reframe surfaced the question leadership acted on when it sunset a low-usage third-party tool; an alpha staff dashboard shipped to seven global offices in two sprints.",
    tags: ["Research", "Product strategy", "Rapid validation"],
    href: "https://roywannago.com/masschallenge.html",
    metric: "7",
    metricLabel: "global offices",
  },
  {
    index: "04",
    eyebrow: "Digital Health · Behavior Change",
    title: "Quipital",
    premise: "Vaping apps depended on manual logging during cravings.",
    reframe: "Made behavior capture unobtrusive—and recovery rewarding.",
    outcome:
      "A wireless tracking and game loop extended vaping intervals 42.8% in a two-week simulated study and won an ACM CHI 2020 Student Design Competition award.",
    tags: ["Behavior design", "Prototyping", "HCI research"],
    metric: "42.8%",
    metricLabel: "longer intervals",
  },
];

const principles = [
  {
    number: "01",
    title: "Interrogate the brief",
    copy: "Before drawing the interface, I find the assumption hiding inside the request.",
  },
  {
    number: "02",
    title: "Make the system visible",
    copy: "I map roles, rules, edge cases, and constraints until complexity has a shape.",
  },
  {
    number: "03",
    title: "Build to learn",
    copy: "I use Figma and front-end code to test real interactions—not just static frames.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Roy Wang, home">
          RW<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:royflw@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          Senior Product Designer · Los Angeles
        </div>
        <h1>
          Reframe the problem.
          <br />
          <span>Design the system.</span>
        </h1>
        <div className="hero-lower">
          <p className="hero-intro">
            I turn ambiguous business problems into clear product systems—and
            use code to close the distance between an idea and the real
            interaction.
          </p>
          <a className="scroll-cue" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="system-sketch" aria-hidden="true">
          <div className="sketch-input">BRIEF</div>
          <div className="sketch-line" />
          <div className="sketch-node">?</div>
          <div className="sketch-path" />
          <div className="sketch-output">SYSTEM</div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div>
          <strong>5+</strong>
          <span>years designing products</span>
        </div>
        <div>
          <strong>4</strong>
          <span>design systems evolved</span>
        </div>
      </section>

      <section className="terrain-section" aria-labelledby="terrain-title">
        <div className="terrain-intro">
          <p className="section-label">Product terrain / A working vocabulary</p>
          <h2 id="terrain-title">The territory I work in.</h2>
          <p>
            The problems, systems, and practices I keep returning to—because
            that&apos;s where design can change more than the interface.
          </p>
        </div>
        <div className="terrain-grid">
          <article>
            <h3>Problems</h3>
            <ul>
              <li className="terrain-primary">Ambiguous briefs</li>
              <li>Complex workflows</li>
              <li>Trust systems</li>
              <li>Operational debt</li>
              <li>Accessibility gaps</li>
              <li>Conversion friction</li>
            </ul>
          </article>
          <article>
            <h3>Systems</h3>
            <ul>
              <li>AI-assisted workflows</li>
              <li>Enterprise SaaS</li>
              <li>LegalTech</li>
              <li className="terrain-primary">Design systems</li>
              <li>Marketplaces</li>
              <li>Digital health</li>
            </ul>
          </article>
          <article>
            <h3>Practice</h3>
            <ul>
              <li className="terrain-primary">Problem reframing</li>
              <li>Working prototypes</li>
              <li>Cross-functional delivery</li>
              <li>Information architecture</li>
              <li>User research</li>
              <li>WCAG 2.2</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-label">Selected work / 2020—Now</p>
          <h2>Proof, not process theater.</h2>
          <p>
            Four stories about changing the question, navigating constraints,
            and making the product more useful.
          </p>
        </div>

        <div className="case-list">
          {cases.map((item) => {
            const content = (
              <>
                <div className="case-topline">
                  <span>{item.index}</span>
                  <span>{item.eyebrow}</span>
                  <span className="case-arrow" aria-hidden="true">
                    {item.href ? "↗" : "→"}
                  </span>
                </div>
                <div className="case-body">
                  <div>
                    <h3>{item.title}</h3>
                    <div className="case-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="case-story">
                    <p className="case-premise">{item.premise}</p>
                    <p className="case-reframe">{item.reframe}</p>
                    <p className="case-outcome">{item.outcome}</p>
                  </div>
                  <div className="case-metric">
                    <strong>{item.metric}</strong>
                    <span>{item.metricLabel}</span>
                  </div>
                </div>
              </>
            );

            return item.href ? (
              <a
                className="case-card"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.title}
                aria-label={`${item.title}, open case study`}
              >
                {content}
              </a>
            ) : (
              <article className="case-card case-card-static" key={item.title}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="section-heading section-heading-light">
          <p className="section-label">How I work</p>
          <h2>Zoom out. Then all the way in.</h2>
        </div>
        <div className="principles">
          {principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
        <div className="quote-block">
          <p>
            “Most designers sit between user needs and Figma. I sit between
            business goals and production code.”
          </p>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="section-label">About Roy</p>
        <div className="about-grid">
          <h2>
            Product judgment,
            <br />
            systems thinking,
            <br />
            research rigor.
          </h2>
          <div className="about-copy">
            <p>
              I&apos;m a Senior Product Designer with 5+ years of experience
              across complex B2B SaaS, AI-assisted workflows, design systems,
              marketplaces, and behavior-informed products.
            </p>
            <p>
              My Health Informatics background trained me to look for the gap
              between what people say and what they do. My front-end fluency
              helps me turn that insight into something teams can actually
              touch, test, and ship.
            </p>
            <div className="about-links">
              <a
                href="https://linkedin.com/in/falinwang"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/falinwang"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a href="mailto:royflw@gmail.com">Email ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="footer-kicker">Have a complex problem?</p>
          <a href="mailto:royflw@gmail.com">Let&apos;s make it clear.</a>
        </div>
        <div className="footer-meta">
          <span>Roy Wang · Senior Product Designer</span>
          <span>Los Angeles, CA · 2026</span>
        </div>
      </footer>
    </main>
  );
}
