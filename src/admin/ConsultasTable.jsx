import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ConsultasTable() {
  const [consultas, setConsultas] = useState([]);
  const [filtroMarca, setFiltroMarca] = useState("");
  const [editData, setEditData] = useState(null); // Datos que se editan

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

  const handleSaveEdit = async () => {
    const { id, ...data } = editData;

    await updateDoc(doc(db, "consultas-marca", id), data);

    setConsultas((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...data } : c))
    );

    setEditData(null);
  };

  return (
    <div className="admin-wrapper">

      <h2 className="admin-title">Consultas Recibidas</h2>

      {/* FILTRO */}
      <input
        type="text"
        placeholder="Filtrar por marca..."
        value={filtroMarca}
        onChange={(e) => setFiltroMarca(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "1.2rem",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      {/* BOTONES */}
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <button onClick={exportExcel} className="btn-export">
          📄 Exportar Excel
        </button>
        <button onClick={exportPDF} className="btn-export">
          📑 Exportar PDF
        </button>
      </div>

      {/* TABLA */}
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
                <td>
                  {c.logoUrl ? (
                    <a href={c.logoUrl} target="_blank" rel="noreferrer">
                      Ver logo
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td>{c.disenio || "-"}</td>
                <td>{c.metaAds || "-"}</td>
                <td>{c.mensaje || "-"}</td>
                <td>
                  {c.fecha ? new Date(c.fecha.toDate()).toLocaleDateString() : "-"}
                </td>
                <td>{c.estado || "pendiente"}</td>

                <td>
                  <div className="table-actions">
                    <button className="btn-edit" onClick={() => setEditData(c)}>
                      ✏️
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(c.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL DE EDICIÓN */}
      {editData && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Editar Consulta</h3>

            <label>Estado:</label>
            <select
              value={editData.estado || "pendiente"}
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, estado: e.target.value }))
              }
            >
              <option value="pendiente">Pendiente</option>
              <option value="en-tramite">En trámite</option>
              <option value="terminado">Terminado</option>
            </select>

            <label>Mensaje:</label>
            <textarea
              value={editData.mensaje || ""}
              onChange={(e) =>
                setEditData((prev) => ({ ...prev, mensaje: e.target.value }))
              }
            />

            <div className="modal-buttons">
              <button className="btn-save" onClick={handleSaveEdit}>
                Guardar
              </button>
              <button className="btn-cancel" onClick={() => setEditData(null)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


