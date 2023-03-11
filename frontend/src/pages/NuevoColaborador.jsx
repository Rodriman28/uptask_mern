import { useEffect } from "react";
import FormularioColaborador from "../components/FormularioColaborador";
import useProyectos from "../hooks/useProyectos";
import { useParams } from "react-router-dom";

const NuevoColaborador = () => {
  const params = useParams();

  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  if (cargando) return "Cargando...";

  return (
    <>
      <h1 className="text-4xl font-black">
        Añadir Colaborador(a) al Proyecto: {proyecto.nombre}
      </h1>

      <div className="mt-10 flex justify-center">
        <FormularioColaborador />
      </div>
    </>
  );
};

export default NuevoColaborador;
