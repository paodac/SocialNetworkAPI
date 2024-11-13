const { Schema, model } = require('mongoose');

// Define el esquema de Reacción
const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // Opcional: Formateo de fecha
    get: (timestamp) => new Date(timestamp).toLocaleDateString(),
  },
},
{
  toJSON: {
    getters: true,
  },
  id: false,
});

// Define el esquema de Pensamiento
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toLocaleDateString(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
});

// Virtual para contar reacciones
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
