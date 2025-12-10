import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logo.png";

export default function ConsultasTable() {
  const [consultas, setConsultas] = useState([]);
  const [filtroMarca, setFiltroMarca] = useState("");
  const [editId, setEditId] = useState(null); // ID que está siendo editado
  const [editValues, setEditValues] = useState({}); // valores temporales de edición

  useEffect(() => {
    const fetchConsultas = async () => {
      const snapshot = await getDocs(collection(db, "consultas-marca"));
      const lista = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setConsultas(lista);
    };

    fetchConsultas();
  }, []);

  const getFiltradas = () => {
    return consultas.filter((c) =>
      c.marca?.toLowerCase().includes(filtroMarca.toLowerCase())
    );
  };

  const iniciarEdicion = (c) => {
    setEditId(c.id);
    setEditValues({
      estado: c.estado || "pendiente",
      mensaje: c.mensaje || "",
    });
  };

  const cancelarEdicion = () => {
    setEditId(null);
    setEditValues({});
  };

  const guardarEdicion = async (id) => {
    await updateDoc(doc(db, "consultas-marca", id), editValues);

    setConsultas((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, ...editValues } : c
      )
    );

    cancelarEdicion();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta consulta?")) return;

    await deleteDoc(doc(db, "consultas-marca", id));
    setConsultas((prev) => prev.filter((c) => c.id !== id));
  };

  const exportExcel = () => {
    const filtradas = getFiltradas();
    const ws = XLSX.utils.json_to_sheet(filtradas);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Consultas");
    XLSX.writeFile(wb, "consultas.xlsx");
  };

  const exportPDF = () => {
    const docPDF = new jsPDF({ orientation: "landscape" });

    docPDF.setFontSize(16);
    docPDF.text("Consultas Recibidas", 14, 18);

    autoTable(docPDF, {
      head: [
        ["Nombre", "Email", "WhatsApp", "Ciudad", "Marca", "Rubro", "Estado"],
      ],
      body: getFiltradas().map((c) => [
        c.nombre,
        c.email,
        c.whatsapp,
        c.ciudad,
        c.marca,
        c.rubro,
        c.estado || "-",
      ]),
      startY: 25,
    });

    docPDF.save("consultas.pdf");
  };

  return (
    <div className="admin-wrapper">

      <div className="admin-header">
        <h2 className="admin-title">Consultas Recibidas</h2>

        <div className="admin-brand">
          <img src={logo} alt="Marketing Legal" className="admin-brand-logo" />
          <span className="admin-brand-name">Marketing Legal</span>
        </div>
      </div>

      <input
        type="text"
        placeholder="Filtrar por marca..."
        value={filtroMarca}
        onChange={(e) => setFiltroMarca(e.target.value)}
        className="admin-search"
      />

      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button onClick={exportExcel} className="btn-export">📄 Excel</button>
        <button onClick={exportPDF} className="btn-export">📑 PDF</button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>WhatsApp</th>
              <th>Ciudad</th>
              <th>Marca</th>
              <th>Rubro</th>
              <th>Logo</th>
              <th>Identidad visual</th>
              <th>Meta Ads</th>
              <th>Mensaje</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {getFiltradas().map((c) => (
              <tr key={c.id}>
                <td>{c.nombre}</td>
                <td>{c.email}</td>
                <td>{c.whatsapp}</td>
                <td>{c.ciudad}</td>
                <td>{c.marca}</td>
                <td>{c.rubro}</td>
                <td>{c.logoUrl ? "Sí" : "-"}</td>
                <td>{c.disenio}</td>
                <td>{c.metaAds}</td>

                {/* MENSAJE - editable */}
                <td>
                  {editId === c.id ? (
                    <textarea
                      className="admin-textarea"
                      value={editValues.mensaje}
                      onChange={(e) =>
                        setEditValues((prev) => ({ ...prev, mensaje: e.target.value }))
                      }
                    />
                  ) : (
                    c.mensaje || "-"
                  )}
                </td>

                <td>{c.fecha ? new Date(c.fecha.toDate()).toLocaleDateString() : "-"}</td>

                {/* ESTADO - editable */}
                <td>
                  {editId === c.id ? (
                    <select
                      className="admin-select"
                      value={editValues.estado}
                      onChange={(e) =>
                        setEditValues((prev) => ({ ...prev, estado: e.target.value }))
                      }
                    >
                      <option value="pendiente">Pendiente</option>
                      <option value="en-tramite">En trámite</option>
                      <option value="terminado">Terminado</option>
                    </select>
                  ) : (
                    c.estado || "pendiente"
                  )}
                </td>

                {/* ACCIONES */}
                <td>
                  {editId === c.id ? (
                    <div className="table-actions">
                      <button className="btn-edit" onClick={() => guardarEdicion(c.id)}>💾</button>
                      <button className="btn-delete" onClick={cancelarEdicion}>✖️</button>
                    </div>
                  ) : (
                    <div className="table-actions">
                      <button className="btn-edit" onClick={() => iniciarEdicion(c)}>✏️</button>
                      <button className="btn-delete" onClick={() => handleDelete(c.id)}>🗑️</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


