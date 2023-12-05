import mongoose from "mongoose";

const consultaSchema = new mongoose.Schema(
  {
    paciente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Paciente',
      required: true,
    },
    tipoDeTratamento: {
      type: String,
      required: true,
    },
    horarioInicio: {
      type: String,
      required: true,
    },
    horarioFinal: {
      type: String,
      required: true,
    },
    local: {
      type: String,
      required: true,
    },
    dataDaConsulta: {
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
    alunos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Aluno",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Consulta", consultaSchema);