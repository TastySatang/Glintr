const express = require('express')
const asyncHandler = require('express-async-handler')

const router = express.Router();
const { Comment } = require('../../db/models')

//checking if stuff is set up properly
router.get('/health', asyncHandler(async (req, res) => {
  return res.json({ 'comments healthy': "yes" })
}))

// edit requests for comments
router.put('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { text } = req.body;
  const comment = text;
  console.log('insideapi', req.body)

  const upComment = await Comment.update(
    comment,
    { where: { id } }
  )

  return res.json(upComment);
}))

// delete requests for comments
router.delete('/:id', asyncHandler(async (req, res) => {
  const commentId = req.params.id

  const comment = await Comment.findByPk(commentId);
  if (!comment) throw new Error('Cannot find item');

  await Comment.destroy({ where: { id: commentId } })
  return res.json({ commentId })
}))

module.exports = router;
