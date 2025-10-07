import { motion } from "framer-motion";
import Badge from "./Badge";

export default function ProjectCard({ p }) {
  return (
    <motion.article
      className="card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div style={{ padding: "18px 18px 0" }}>
        <div className="flex" style={{ alignItems: "baseline" }}>
          <h3 className="h3" style={{ margin: 0 }}>
            {p.title}
          </h3>
          <span className="space" />
          <span className="pill">{p.period}</span>
        </div>
        <p className="lead" style={{ marginTop: 8 }}>
          {p.desc}
        </p>
        <div className="flex" style={{ flexWrap: "wrap" }}>
          {p.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
      <hr className="sep" />
      <div
        style={{
          padding: "0 18px 18px",
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {p.links?.map((l) => (
          <a
            key={l.label}
            className="btn"
            href={l.href}
            target="_blank"
            rel="noreferrer"
          >
            {l.label}
          </a>
        ))}
      </div>
    </motion.article>
  );
}
