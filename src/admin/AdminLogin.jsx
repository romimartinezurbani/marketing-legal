import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate("/admin/consultas");
    } catch (err) {
      console.error("❌ ERROR LOGIN:", err.code, err.message);
      setError("Credenciales incorrectas o error de autenticación");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* BRANDING */}
        <div className="login-brand">
          <img src={logo} alt="Marketing Legal" className="login-logo" />
          <h3 className="login-title">Marketing Legal</h3>
        </div>

        <h2 className="login-subtitle">Ingreso Administrativo</h2>

        <form onSubmit={login} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          {error && <p className="login-error">{error}</p>}

          <button className="btn-login" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}


