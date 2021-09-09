const Router = require('express');
const router = Router();

const { login, isActive } = require('../controllers/auth');
const validarJWT = require('../middlewares/validar-JWT');

router.post('/login', login)
router.get('/isActive',[validarJWT], isActive)

module.exports = router;