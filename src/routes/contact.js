const express = require('express');
const router = express.Router();

const contactController = require('../app/controllers/ContactController');

router.get('/create', contactController.create);
router.post('/store', contactController.store);
router.get('/:slug', contactController.show);

module.exports = router;
