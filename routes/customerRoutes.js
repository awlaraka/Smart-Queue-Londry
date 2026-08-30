const express = require('express');

const router = express.Router();

const CustomerController = require('../controllers/customerController');

router.get('/', CustomerController.index);

router.get('/create', CustomerController.showCreate);

router.post('/create', CustomerController.store);

module.exports = router;

router.get(
    '/edit/:id',
    CustomerController.showEdit
);

router.post(
    '/edit/:id',
    CustomerController.update
);

router.get(
    '/delete/:id',
    CustomerController.destroy
);