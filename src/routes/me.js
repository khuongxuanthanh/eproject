const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
const guideController = require('../app/controllers/GuideController');

router.get('/stored/solarsystem', meController.storedSolarsystems);
router.get('/trash/solarsystem', meController.trashSolarsystems);

router.get('/stored/constellation', guideController.storedConstellations);
router.get('/trash/constellation', guideController.trashConstellations);

module.exports = router;
