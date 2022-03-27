const express = require('express');
const router = express.Router();

const galleryController = require('../app/controllers/GalleryController');

router.get('/create', galleryController.create);
router.post('/store', galleryController.store);
router.get('/', galleryController.index);

module.exports = router;
