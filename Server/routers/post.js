const Router = require('express');
const router = Router();

const { newPost } = require('../controllers/post');

router.post('/newPost', newPost);


module.exports = router;
