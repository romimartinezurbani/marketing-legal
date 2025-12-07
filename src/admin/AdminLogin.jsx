import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

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
      navigate("/admin");
    } catch (err) {
      console.error("❌ ERROR LOGIN:", err.code, err.message);
      setError("Credenciales incorrectas o error de autenticación");
    }
  };

  return (
    <div style={{ maxWidth: 350, margin: "4rem auto", textAlign: "center" }}>
      <h2>Ingreso Administrativo</h2>

      <form onSubmit={login} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button className="btn-accent" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

