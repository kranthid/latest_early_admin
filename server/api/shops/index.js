'use strict';

var express = require('express');
var controller = require('./shops.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.put('/custom/:id', controller.customUpdate);
router.get('/custom/search', controller.getShopsList);

module.exports = router;
