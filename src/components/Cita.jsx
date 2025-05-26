import "../styles/cita.css";

function Cita({ cita, eliminarCita }) {
  const { id, nombre, fecha, hora, sintomas } = cita;

  const manejarEliminar = () => {
    if (window.confirm("¿Querés eliminar esta cita?")) {
      eliminarCita(id);
    }
  };

  return (
    <div className="cita">
      <p>Nombre: <span>{nombre}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button className="eliminar" onClick={manejarEliminar}>Eliminar</button>
    </div>
  );
}

export default Cita;
