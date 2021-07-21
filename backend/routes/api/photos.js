const express = require('express')
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth')
const { handleValidationErrors } = require('../../utils/validation')
const { Image } = require("../../db/models");
const {
  singleMulterUpload,
  singlePublicFileUpload,
} = require("../../awsS3");

const router = express.Router();

const validatePost = [
]

// to make sure environment is properly set up
router.get('/health', asyncHandler(async (req, res) => {
  return res.json({ 'photos healtily setup': 'yes' });
}))

// Post image
router.post('/', singleMulterUpload('image'), asyncHandler(async (req, res) => {
  // console.log('fokadebug2', req.user, req.body)
  const { userId, albumId, content } = req.body
  const imageUrl = await singlePublicFileUpload(req.file);
  const image = await Image.create({
    userId,
    albumId,
    imageUrl,
    content,
  });

  return res.json({ image });
}));

// Read image
router.get('/', asyncHandler(async (req, res) => {
  const images = await Image.findAll();

  console.log(images);
  res.json(images);
}))

// Update image
router.put('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const photo = await Image.findByPk(id);
  return res.json(photo);
}))

// Delete image
router.delete('/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { userId } = req.session.user;

  const photo = await Image.findOne({
    where: {
      id,
      userId,
    },
  });

  await photo.destroy();
}))

module.exports = router;
