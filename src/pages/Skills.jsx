import skills from "../data/skills";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  return (
    <section>
      <SectionTitle title="Skills" kicker="Stack" />
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
      >
        {skills.map((group) => (
          <div key={group.title} className="card" style={{ padding: 18 }}>
            <h3 className="h3" style={{ marginBottom: 8 }}>
              {group.title}
            </h3>
            <p className="lead">{group.notes}</p>
            <div className="flex" style={{ flexWrap: "wrap" }}>
              {group.items.map((i) => (
                <span key={i} className="badge">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
