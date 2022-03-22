const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/solarsystem', meController.storedSolarsystem);
router.get('/trash/solarsystem', meController.trashSolarsystem);

module.exports = router;
