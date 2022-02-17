const express = require('express');
const router = express.Router();

const {addSubject, updateSubject, deleteUser} = require('../controllers/subject');


router.route('/subject/new').post(addSubject);
router.route('/subject/update').put(updateSubject);
router.route('/subject/delete').delete(deleteUser);

module.exports = router;