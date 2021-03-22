const express = require('express');
const router = express.Router();

const {getAllOrders, getAllOrdersByID} = require('./controller');

router.get('/', getAllOrders);
router.get('/:id', getAllOrdersByID);

module.exports = router;