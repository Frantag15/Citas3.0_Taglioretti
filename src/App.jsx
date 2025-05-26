import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaCita from "./components/ListaCita";
import { useState, useEffect } from "react";

function App() {
  const [citas, setCitas] = useState([]);
  
  useEffect(() => {
    const citasGuardadas = localStorage.getItem("citas");
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter((cita) => cita.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <Formulario agregarCita={agregarCita} />
          <ListaCita citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  );
}

export default App;
