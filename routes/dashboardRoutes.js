const express = require('express');

const router = express.Router();

const DashboardController = require('../controllers/dashboardController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get(
    '/dashboard',
    authMiddleware,
    DashboardController.index
);

module.exports = router;