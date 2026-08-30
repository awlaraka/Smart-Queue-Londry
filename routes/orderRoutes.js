const express = require('express');

const router = express.Router();

const OrderController = require('../controllers/orderController');

router.get(
    '/',
    OrderController.index
);

router.get(
    '/create',
    OrderController.showCreate
);

router.post(
    '/create',
    OrderController.store
);

router.get(
    '/edit/:id',
    OrderController.showEdit
);

router.post(
    '/edit/:id',
    OrderController.update
);

router.get(
    '/delete/:id',
    OrderController.destroy
);

router.get(
    '/edit/:id',
    OrderController.showEdit
);

router.post(
    '/edit/:id',
    OrderController.update
);

router.get(
    '/delete/:id',
    OrderController.delete
);

module.exports = router;