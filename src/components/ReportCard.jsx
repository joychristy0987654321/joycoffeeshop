export default function ReportCard({ title, value, description, icon, color }) {
  return (
    <div className="report-card">
      <div
        className="report-icon"
        style={{ background: color || "#f4e9dc" }}
      >
        {icon}
      </div>

      <p>{title}</p>
      <h2>{value}</h2>
      <small>{description}</small>
    </div>
  );
}