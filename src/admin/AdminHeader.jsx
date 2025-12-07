import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="admin-header-inner">

        <div className="admin-logo-wrapper">
          <img src={logo} className="admin-logo" alt="logo" />
        </div>

        <nav className="admin-nav">
          <Link to="/admin/consultas">Consultas</Link>

          <button className="logout-btn" onClick={() => signOut(auth)}>
            Cerrar sesión
          </button>
        </nav>

      </div>
    </header>
  );
}
