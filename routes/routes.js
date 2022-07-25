const express = require('express');
const router = express.Router();

const { getIndexPage } = require('../controllers/controller.js');

router.get('/', getIndexPage);

module.exports = router;