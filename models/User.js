const { Schema, model } = require('mongoose');

// Define el esquema de Usuario
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Por favor, ingresa un email válido'],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

// Virtual para contar los amigos
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
