import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Panel Administrativo</h2>

      <Link
        to="/admin/consultas"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          background: "#1F2839",
          color: "white",
          padding: "0.8rem 1.4rem",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Ver consultas de marcas
      </Link>
    </div>
  );
}

