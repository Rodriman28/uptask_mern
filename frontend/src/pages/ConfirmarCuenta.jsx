import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `http://localhost:4000/api/usuarios/confirmar/${id}`;
        const { data } = await axios(url);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    confirmarCuenta();
  }, []);

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirma tu cuenta y crea tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
    </>
  );
};

export default ConfirmarCuenta;
