const express = require('express')
const router = express.Router()
const inventoryController = require('../controllers/inventoryController')
const tokenValidation = require('../middleware/tokenValidation')



//inventory routes
router.post('/inventory', inventoryController.getInventory)


module.exports = router
