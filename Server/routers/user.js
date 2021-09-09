const Router = require('express');
const router = Router();

const { getUser, getUsers, registerUser, deleteUser } = require('../controllers/users');
const validarJWT = require('../middlewares/validar-JWT');

router.get('/:id', getUser)
router.get('/', getUsers)
router.post('/register', registerUser)
router.delete('/delete/:id',[validarJWT], deleteUser)

module.exports = router;