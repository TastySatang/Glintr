const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users');
const photosRouter = require('./photos.js');
const commentsRouter = require('./comments.js')
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');
const { setTokenCookie } = require('../../utils/auth.js');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/photos', photosRouter);
router.use('/comments', commentsRouter);

// GET /api/set-token-cookie
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    },
  })
  setTokenCookie(res, user);
  return res.json({ user });
}));

// GET /api/restore-user
router.get('/restore-user', restoreUser, (req, res) => {
  return res.json(req.user);
});

router.post('/test', function (req, res) {
  res.json({ requestBody: req.body })
});

// GET /api/require-auth
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

module.exports = router;
