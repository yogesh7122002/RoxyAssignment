const express = require('express');
const { addUser, getUsers, changePassword } = require('../controllers/userController');
const router = express.Router();

router.post('/add-user', addUser);
router.get('/users', getUsers);
router.post('/change-password', changePassword);

module.exports = router;
