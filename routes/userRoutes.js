const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../controllers/userController');

// Rutas de usuarios
router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Rutas para manejar amigos
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
