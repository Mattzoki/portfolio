export default function FilterBar({ filters, active, onChange }) {
  return (
    <div className="flex" role="tablist" aria-label="Project filters">
      {filters.map((f) => (
        <button
          key={f}
          role="tab"
          aria-selected={active === f}
          onClick={() => onChange(f)}
          className={`btn ${active === f ? "primary" : ""}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
