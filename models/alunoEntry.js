const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema(
  {
    nomeAluno: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('alunoEntry.js', alunoSchema);