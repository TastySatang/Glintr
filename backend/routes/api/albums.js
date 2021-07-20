const express = require('express');
const asyncHandler = require('express-async-handler')
const { Album } = require('../../db/models')

const router = express.Router();

router.get('/:id/', asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const albums = await Album.findAll({
    where: {
      userId,
    },
  })

  res.json(albums);
}))
