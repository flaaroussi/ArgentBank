const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    amont: Number,
    date: Date
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

module.exports = mongoose.model('inventorys', inventorySchema)
