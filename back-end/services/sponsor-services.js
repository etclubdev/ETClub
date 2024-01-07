// import db from "../utils/db.js";

// export default {
//   getAllsponsor: async () => {
//     const result = await db.raw(`select * from sponsor`);
//     return result[0];
//   },
//   getBySponsorId: async (id) => {
//     const result = await db.raw(`select * from sponsor where id = ${id}`);
//     return result[0];
//   },
//   addSponsor: async (name, logo, kind, competition_id) => {
//     const result = await db.raw(
//       `INSERT INTO sponsor (name,logo, kind,competition_id) VALUES ( '${name}', '${logo}', '${kind}', '${competition_id}')`
//     );
//     return result[0];
//   },
//   delSponsor: async (id) => {
//     const result = await db.raw(`DELETE FROM sponsor WHERE id= ${id}`);
//     return result[0];
//   },
//   updateSponsor: async (id, name, logo, kind) => {
//     const result = await db.raw(
//       `update sponsor set name = '${name}',logo= '${logo}',kind='${kind}'  where id = ${id}`
//     );
//     return result[0];
//   },
// };
import Sponsor from '../models/schemas/sponsor.schema.js';
import databaseService from '../utils/db.js';

import { ObjectId } from 'mongodb'
// enum kind of sponsor
// 0 = All
// 1 = diamond_sponsors
// 2 = gold_sponsors
// 3 = sliver_sponsors
// 4 = brozen_sponsors
// 5 = media_sponsors
// 6 = marketing_sponsors
class SponsorsService {
  async createSponsor(body) {
    const result = await databaseService.sponsors.insertOne(
      new Sponsor({
        competition_id: new ObjectId(body.competition_id),
        kind: body.kind,
        logo: body.logo,
        name: body.name,
      })
    )
    const sponsor = await databaseService.sponsors.findOne({ _id: result.insertedId })
    return sponsor
  }
  async getById(id) {
    const result = await databaseService.sponsors.findOne({ _id: new ObjectId(id) })
    return result
  }
  async getAllSponsors() {
    const result = await databaseService.sponsors.find({}).toArray();
    return result
  }
  async updateSponsor(data) {
    const sponsor = await databaseService.sponsors.findOneAndUpdate(
      {
        _id: new ObjectId(data.id)
      },
      {
        $set: {
          ...data.payload,
          competition_id: new ObjectId(data.payload.competition_id)
        }
      },
      {
        returnDocument: 'after',
      }
    )
    return sponsor
  }
  async deleteSponsor(id) {
    const result = await databaseService.sponsors.deleteOne({
      _id: new ObjectId(id)
    })
    return result
  }
}

const sponsorsService = new SponsorsService()
export default sponsorsService
