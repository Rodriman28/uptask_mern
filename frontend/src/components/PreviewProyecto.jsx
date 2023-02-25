import { Link } from "react-router-dom";

const PreviewProyecto = ({ proyecto }) => {
  const { nombre, _id, cliente } = proyecto;
  return (
    <div className="border-b p-5 flex">
      <p>{nombre}</p>

      <Link to={`${_id}`}>Ver Proyecto</Link>
    </div>
  );
};

export default PreviewProyecto;
