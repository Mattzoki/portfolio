export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex">
        <span>© {new Date().getFullYear()} Nikhil Mathews</span>
        <span className="space" />
        <a
          className="badge"
          href="https://github.com/Mattzoki"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="badge"
          href="https://www.linkedin.com/in/nikhilmathews1997/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
