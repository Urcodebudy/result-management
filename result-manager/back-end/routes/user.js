const express = require('express');
const router = express.Router();

const {addUser, login, updateUser, deleteUser} = require('../controllers/user');

router.route('/user/add').post(addUser);
router.route('/user/login').get(login);
router.route('/user/update').put(updateUser);
router.route('/user/delete').delete(deleteUser);

module.exports = router;