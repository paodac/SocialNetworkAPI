const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../controllers/thoughtController');

// Rutas de pensamientos
router.route('/').get(getThoughts).post(createThought);

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// Rutas para manejar reacciones
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
