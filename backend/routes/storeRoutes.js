const express = require('express');
const { addStore, getStores, submitRating } = require('../controllers/storeController');
const router = express.Router();

router.post('/add-store', addStore);
router.get('/stores', getStores);
router.post('/submit-rating', submitRating);

module.exports = router;
