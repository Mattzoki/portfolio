export default function Contact() {
  const email = "nikhil.mathews1997@gmail.com";
  return (
    <section>
      <h2 className="h2">Contact</h2>
      <p className="lead">Open to NLP research & hybrid AI×web roles.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          window.location.href = `mailto:${email}?subject=${encodeURIComponent(
            "Hello from " + (f.get("name") || "")
          )}&body=${encodeURIComponent(f.get("message") || "")}`;
        }}
        className="card"
        style={{ padding: 18 }}
      >
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <label>
            <span>Name</span>
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input
              name="from"
              type="email"
              required
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="What would you like to discuss?"
          />
        </label>
        <div className="flex" style={{ marginTop: 12 }}>
          <button className="btn primary" type="submit">
            Send Email
          </button>
          <a
            className="btn"
            href="https://github.com/Mattzoki"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/nikhilmathews1997/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </form>
    </section>
  );
}
