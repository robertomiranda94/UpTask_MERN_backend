import mongoose from "mongoose";

const ProyectosSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true,
    },
    descripcion: {
      type: String,
      trim: true,
      required: true,
    },
    fechaEntrega: {
      type: Date,
      default: Date.now(),
    },
    cliente: {
      type: String,
      trim: true,
      required: true,
    },
    creador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    colaboradores: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
  },
  {
    timestamps: true,
  }
);

const Proyecto = mongoose.model("Proyecto", ProyectosSchema);
export default Proyecto;