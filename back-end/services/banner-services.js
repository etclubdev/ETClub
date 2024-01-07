import Banner from '../models/schemas/banner.schema.js';
import databaseService from '../utils/db.js';

import { ObjectId } from 'mongodb'

class BannersService {
  async createBanner(body) {
    const result = await databaseService.banners.insertOne(
      new Banner({
        description: body.description,
        img: body.img,
        link: body.link
      })
    )
    const banner = await databaseService.banners.findOne({ _id: result.insertedId })
    return banner
  }
  async getById(id) {
    const result = await databaseService.banners.findOne({ _id: new ObjectId(id) })
    return result
  }
  async getAllBanners() {
    const result = await databaseService.banners.find({}).toArray();
    return result
  }
  async updateBanner(data) {
    const banner = await databaseService.banners.findOneAndUpdate(
      {
        _id: new ObjectId(data.id)
      },
      {
        $set: {
          ...data.payload
        }
      },
      {
        returnDocument: 'after',
      }
    )
    return banner
  }
  async deleteBanner(id) {
    const result = await databaseService.banners.deleteOne({
      _id: new ObjectId(id)
    })
    return result
  }
}

const bannersService = new BannersService()
export default bannersService
