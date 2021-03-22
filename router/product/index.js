const express = require('express');
const router = express.Router();

const {getAllProduct, getAllProductByID} = require('./controller');

router.get('/', getAllProduct);
router.get('/:id', getAllProductByID);

module.exports = router;