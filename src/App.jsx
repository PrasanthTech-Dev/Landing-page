import { useEffect } from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal, .stagger-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
