// import db from "../utils/db.js";

// export default {
//   getAll: async () => {
//     const result = await db.raw(`select * from feeling`);
//     return result[0];
//   },
//   getById: async (id) => {
//     const result = await db.raw(`select * from feeling where id = ${id}`);
//     return result[0];
//   },
//   addFeeling: async (quote, author, department, avatar) => {
//     console.log(quote, author, department, avatar);
//     const result = await db.raw(
//       `INSERT INTO feeling ( quote, author, department, avatar) VALUES ( "${quote}", "${author}", "${department}", "${avatar}")`
//     );
//     return result[0];
//   },
//   delFeeling: async (id) => {
//     await db.raw(`DELETE FROM feeling WHERE id= ${id}`);
//   },
//   updateFeeling: async (id, quote, author, department, avatar) => {
//     await db.raw(
//       `update feeling set quote = '${quote}',author= '${author}',department= '${department}',avatar= '${avatar}' where id = ${id}`
//     );
//   },
// };
import Feeling from '../models/schemas/feeling.schema.js';
import databaseService from '../utils/db.js';

import { ObjectId } from 'mongodb'

class FeelingsService {
  async createFeeling(body) {
    const result = await databaseService.feelings.insertOne(
      new Feeling({
        author: body.author,
        avatar: body.avatar,
        department: body.department,
        quote: body.quote,
      })
    )
    const feeling = await databaseService.feelings.findOne({ _id: result.insertedId })
    return feeling
  }
  async getById(id) {
    const result = await databaseService.feelings.findOne({ _id: new ObjectId(id) })
    return result
  }
  async getAllFeelings() {
    const result = await databaseService.feelings.find({}).toArray();
    return result
  }
  async updateFeeling(data) {
    const banner = await databaseService.feelings.findOneAndUpdate(
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
  async deleteFeeling(id) {
    const result = await databaseService.feelings.deleteOne({
      _id: new ObjectId(id)
    })
    return result
  }
}

const feelingsService = new FeelingsService()
export default feelingsService
