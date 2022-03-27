const express = require('express');
const router = express.Router();

const constellationController = require('../app/controllers/ConstellationController');

router.post('/store', constellationController.store);
router.get('/create', constellationController.create);
router.get('/:id/edit', constellationController.edit);
router.put('/:id', constellationController.update);
router.patch('/:id/restore', constellationController.restore);
router.delete('/:id', constellationController.destroy);
router.delete('/:id/force', constellationController.forceDestroy);
router.get('/:slug', constellationController.show);
router.get('/', constellationController.index);

module.exports = router;
