const Inventory = require('../database/models/inventoryModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.getInventory = async serviceData => {
  try {
    const inventorys = await Inventory.find({})    
    return inventorys
  } catch (error) {
    console.error('Error in inventoryService.js', error)
    throw new Error(error)
  }
}
