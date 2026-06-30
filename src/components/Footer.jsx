import LogoMark from "./LogoMark";

const FOOTER_COLUMNS = [
  {
    title: "About",
    links: ["Company", "Leadership", "Jobs - HIRING!", "Pricing", "Press", "Investors"],
  },
  {
    title: "Solutions",
    links: ["At School", "At Work", "At Home"],
  },
  {
    title: "Resources",
    links: ["Study with Kurtis", "Blog", "Kurtis Certified", "Help Center", "Library", "Shop", "Safety center"],
  },
  {
    title: "Terms and conditions",
    links: [
      "Terms and Conditions",
      "Privacy Policy",
      "US Privacy Laws",
      "Children's Privacy Policy",
      "Inclusion and Accessibility policy",
    ],
  },
];

const SOCIALS = ["in", "f", "ig", "x", "tt"];

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo-white">
            <LogoMark fill="#fff" />
            Kurtis Classroom
          </div>
          <p>Get the app:</p>
          <div className="store-badges">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
          </div>
          <p style={{ marginTop: 14 }}>Follow us:</p>
          <div className="social-icons">
            {SOCIALS.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
        {FOOTER_COLUMNS.map((col, i) => (
          <div className="footer-col stagger-item" style={{ "--delay": `${i * 0.1}s` }} key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">Copyright © 2025. Kurtis. All rights reserved.</div>
    </footer>
  );
}
