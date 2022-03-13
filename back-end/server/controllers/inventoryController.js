const inventoryService = require('../services/inventoryService')

module.exports.getInventory = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await inventoryService.getInventory()
    response.status = 200    
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in userController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}
