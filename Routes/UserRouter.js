const expresss = require('express');

const router = expresss.Router();
const {register,login} = require('../controller/logincontroller');




router.post('/register',register);
router.post('/login',login);




module.exports = router;