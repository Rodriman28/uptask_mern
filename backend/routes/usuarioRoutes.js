import express from "express";
import {
  registrar,
  autenticar,
  confirmar,
  olvidePasword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

//* Autenticacion, Registro y confirmacion de Usuarios
router.post("/", registrar); // * Registrar nuevo usuario
router.post("/login", autenticar); // * Iniciar sesion
router.get("/confirmar/:token", confirmar); // * Confirmar cuenta
router.post("/olvide-password", olvidePasword); // * Olvide mi contraseña
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword); // * Comprobar token y nueva contraseña

router.get("/perfil", checkAuth, perfil); // * Confirmar autenticacion e ingresar el perfil

export default router;
