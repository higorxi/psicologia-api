import mongoose from "mongoose";

const consultaSchema = new mongoose.Schema(
  {
    pacienteID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Paciente',
      required: true,
    },
    pacienteNome:{
      type: String,
      require: true,
    },
    title: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    resourceId: {
      type: String,
      required: true,
    },
    frequencia: {
      type: String,
      required: true,
    },
    tipoDeConsulta: {
      type: String,
      required: true,
    },
    observacao: {
      type: String,
      required: true,
    },
    statusDaConsulta: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    alunoID:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aluno',
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Consulta", consultaSchema);