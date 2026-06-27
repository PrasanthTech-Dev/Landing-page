const STATS = [
  "More than 50% of US teachers use Kurtis",
  "Players in more than 200 countries",
  "Over 30 million public games available",
  "97% of the Fortune 500 use Kurtis",
];

export default function Stats() {
  return (
    <div className="stats-bar reveal">
      {STATS.map((stat) => (
        <div key={stat}>{stat}</div>
      ))}
    </div>
  );
}
