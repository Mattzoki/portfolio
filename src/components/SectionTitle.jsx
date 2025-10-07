export default function SectionTitle({ kicker, title, right }) {
  return (
    <div className="flex" style={{ alignItems: "baseline" }}>
      <div>
        {kicker && (
          <div className="pill" style={{ marginBottom: 8 }}>
            {kicker}
          </div>
        )}
        <h2 className="h2">{title}</h2>
      </div>
      <span className="space" />
      {right}
    </div>
  );
}
