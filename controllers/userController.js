const { User } = require('../models');

module.exports = {
  // Obtener todos los usuarios
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Obtener un usuario por ID
  getUserById(req, res) {
    User.findOne({ _id: req.params.id })
      .populate('thoughts')
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found with the given ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Crear un usuario
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Actualizar un usuario
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found with the given ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Eliminar un usuario
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found with the given ID' })
          : res.json({ message: 'User deleted successfully!' })
      )
      .catch((err) => res.status(500).json(err));
  },

  // Agregar un amigo
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found with the given ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Eliminar un amigo
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'User not found with the given ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
