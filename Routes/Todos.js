const expresss = require('express');

const router = expresss.Router();
const {Todos,deletetodo,list,gettitle,edit,getuser} = require("../controller/Todo");




router.post('/:id/add',Todos);
router.get('/all',list);
router.delete('/delete/:id',deletetodo);
router.get('/gettitle/:id',gettitle);
router.patch('/update/:id',edit);
router.get('/:id/todos',getuser);




module.exports = router;