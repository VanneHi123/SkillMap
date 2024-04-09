import React, { useState } from "react";
import basedatosrutas from "../utils/basedatosrutas.json";
import Swal from "sweetalert2";
import "../assets/styles/Home.css";

function Home() {
  const [usuario, setUsuario] = useState("");
  console.log(basedatosrutas);

  const mostrarModalBienvenida = () => {
    Swal.fire({
      title: `¡Bienvenido, ${usuario}!`,
      text: "Gracias por iniciar sesión",
      icon: "success",
      confirmButtonText: "Cerrar",
    });
  };

  const letra = {
    fontFamily: "Titan One, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    color: "white fw-bold",
    fontSize: "400%",
  };

  return (
    <>
      <div className="banner text-white">
        {/* Aplica el estilo usando la variable "letra" */}
        <h1 style={letra}>SkillMap</h1>
        <h3>Alternativas de aprendizaje para tu equipo</h3>
      </div>

      <section className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h5>
              A continuación encontrarás las experiencias de aprendizaje activas
              para tu equipo, define los objetivos de aprendizaje que quieres
              lograr y selecciona una alternativa. ¡INSCRÍBETE!
            </h5>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {basedatosrutas.alternativas_aprendizaje.map((ruta, index) => (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body text-white bg-primary">
                  <h5 className="card-title">{ruta.nombre}</h5>
                  <p className="card-text">{ruta.descripcion}</p>
                  <p>Tipo: {ruta.tipo}</p>
                  <p>Tiempo: {ruta.tiempo} horas</p>
                  <p>Competencias:</p>
                  <ul>
                    {ruta.competencias.map((competencia, idx) => (
                      <li key={idx}>{competencia}</li>
                    ))}
                  </ul>
                  <br></br>
                  <p>
                    <button
                      className="btn btn-success"
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Inscríbete
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Llama a la función mostrarModalBienvenida */}
      {mostrarModalBienvenida()}
    </>
  );
}

export default Home;
