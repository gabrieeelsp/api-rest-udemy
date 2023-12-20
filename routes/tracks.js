const express = require('express');
const router = express.Router();
const { getItems, createItem } = require('../controllers/tracks');
//TODO hhtp://localhost/tracks GET, POST, DELETE, UP

router.get('/', getItems);
router.post('/', createItem);

module.exports = router;