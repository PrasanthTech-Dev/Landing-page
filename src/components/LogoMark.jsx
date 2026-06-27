export default function LogoMark({ className = "", fill = "var(--blue)" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={{ width: 28, height: 28, fill }}>
      <path d="M2 14c4-2 6-10 12-10 6 0 8 6 8 6s-4 2-8 2c-3 0-5-1-6-2-1 3-3 4-6 4z" />
    </svg>
  );
}
