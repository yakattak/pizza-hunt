const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');


// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

router.route

module.exports = router;