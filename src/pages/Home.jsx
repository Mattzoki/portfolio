import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <section className="section">
      <div className="hero">
        <div>
          <div
            className="pill"
            style={{ display: "inline-block", marginBottom: 12 }}
          >
            Amsterdam, NL • NLP + Frontend
          </div>
          <h1 className="h1">NLP Researcher & Ex‑Frontend Lead</h1>
          <p className="lead">
            I bridge applied NLP (BERT, XLM‑R, spaCy, HF) with production web
            engineering (React, Angular, Node). I love building hybrid AI × Web
            systems.
          </p>
          <div className="flex" style={{ marginTop: 16 }}>
            <a
              className="btn primary"
              href="/resume/nikhil-mathews-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
            <a className="btn" href="/projects">
              See Projects
            </a>
          </div>
        </div>
        <div className="card heroCard">
          <SectionTitle title="At a glance" />
          <ul>
            <li>MA Linguistics: Text Mining (VU Amsterdam)</li>
            <li>Senior Frontend (React/Angular) → NLP Research</li>
            <li>
              Interests: NER generalisation, annotation tooling, hybrid
              interfaces
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
