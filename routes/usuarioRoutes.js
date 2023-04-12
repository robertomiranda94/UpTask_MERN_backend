import express from "express"
import { registrar } from "../controllers/usuarioController.js";

const router = express.Router();

// Autenticacion, Registro y Confirmación de Usuarios
router.post("/", registrar); // crea un nuevo usuario

export default router;