import { useState } from "react";

const Formulario = ({ agregarCita }) => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar datos
    if ([nombre, fecha, hora, sintomas].includes("")) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Confirmar agregar cita
    if (!window.confirm("¿Querés agregar esta cita?")) {
      return;
    }

    agregarCita({ nombre, fecha, hora, sintomas });

    // Resetear formulario
    setNombre("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <form onSubmit={handleSubmit} className="one-half formulario">
      <div className="campo-formulario">
        <label htmlFor="nombre" className="tituloCampo">
          Nombre Mascota
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Ingrese el nombre de la mascota"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo-formulario">
        <label htmlFor="fecha" className="tituloCampo">
          Fecha
        </label>
        <input
          id="fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <div className="campo-formulario">
        <label htmlFor="hora" className="tituloCampo">
          Hora
        </label>
        <input
          id="hora"
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </div>

      <div className="campo-formulario">
        <label htmlFor="sintomas" className="tituloCampo">
          Síntomas
        </label>
        <textarea
          id="sintomas"
          placeholder="Describa los síntomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />
      </div>

      <button type="submit" className="button-primary">
        Agregar Cita
      </button>
    </form>
  );
};

export default Formulario;
