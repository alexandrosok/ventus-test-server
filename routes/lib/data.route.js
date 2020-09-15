const express = require('express');
const router = express.Router();
const DataController = require('../../controllers/data.controller');
//message api

router.get('/get', DataController.actions.GetData);

module.exports = router;
