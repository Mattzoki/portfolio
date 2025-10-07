import xp from "../data/experience";

export default function Experience() {
  return (
    <section>
      <h2 className="h2">Experience</h2>
      <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
        {xp.map((role) => (
          <article key={role.company} className="card" style={{ padding: 18 }}>
            <div className="flex" style={{ alignItems: "baseline" }}>
              <h3 className="h3" style={{ margin: 0 }}>
                {role.role} — {role.company}
              </h3>
              <span className="space" />
              <span className="pill">{role.period}</span>
            </div>
            <p className="lead">{role.stack}</p>
            <ul>
              {role.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
