import Cita from "./Cita";
import "../styles/listacita.css";

function ListaCita({ citas, eliminarCita }) {
  return (
    <div className="one-half">
      <h2>{citas.length === 0 ? "No hay citas" : "Administra tus citas"}</h2>
      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
}

export default ListaCita;
