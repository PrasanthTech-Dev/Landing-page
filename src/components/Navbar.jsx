import { useEffect, useRef, useState } from "react";
import LogoMark from "./LogoMark";

const MENU_ITEMS = [
  { icon: "📖", label: "School" },
  { icon: "💼", label: "Work" },
  { icon: "🏠", label: "Home" },
  { icon: "📱", label: "Learning apps" },
  { icon: "⏱", label: "Self study" },
  { icon: "📰", label: "News", badge: 5 },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        e.target !== btnRef.current
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <LogoMark />
          Kurtis Classroom
        </div>
        <nav>
          <span className="lang">EN ▾</span>
          <a className="btn btn-primary" href="#">Sign up</a>
          <a className="btn btn-outline" href="#">Log in</a>
          <div className="burger-menu">
            <span
              className="menu-icon"
              ref={btnRef}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((o) => !o);
              }}
            >
              ☰
            </span>
            <div className={`burger-panel ${open ? "open" : ""}`} ref={panelRef}>
              {MENU_ITEMS.map((item) => (
                <a href="#" key={item.label}>
                  {item.icon} {item.label}
                  {item.badge && <span className="badge-new">{item.badge}</span>}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
