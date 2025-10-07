import { useMemo, useState } from "react";
import projects from "../data/projects";
import FilterBar from "../components/FilterBar";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  const filters = ["All", "NLP", "Frontend", "Full‑stack"];
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => projects.filter((p) => active === "All" || p.type === active),
    [active]
  );

  return (
    <section>
      <SectionTitle
        title="Projects"
        kicker="Selected work"
        right={
          <FilterBar filters={filters} active={active} onChange={setActive} />
        }
      />
      <div className="grid projects">
        {visible.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
