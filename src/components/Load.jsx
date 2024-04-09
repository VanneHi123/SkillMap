import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import "../assets/styles/load.css";
import { useNavigate } from "react-router-dom";

function Load() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1000); // Cambia este valor a la cantidad de segundos que desees esperar

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, [navigate]);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <h1>Ingresando...</h1>
          <BounceLoader color="#0033a0" size={120} loading={true} />
        </div>
      ) : null}
    </>
  );
}

export default Load;
