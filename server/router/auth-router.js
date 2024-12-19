const express = require('express');
const router = express.Router();
const authcontrollers =  require('../controllers/auth-controller');
const {signupSchema,loginSchema} = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware');

// router.get('/',(req,res)=>{
//     res.status(200).send('Hello Server from router!');
// });

router.route('/').get(authcontrollers.home);
router.route('/register').post(validate(signupSchema),authcontrollers.register);
router.route('/login').post(validate(loginSchema),authcontrollers.login);

module.exports = router;