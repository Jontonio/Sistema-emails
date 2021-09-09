const Router = require('express');
const router = Router();

const { sendEmail } = require('../controllers/emails');

router.post('/sendEmail', sendEmail);


module.exports = router;

