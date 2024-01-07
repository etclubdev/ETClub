import Competition from '../models/schemas/competition.schema.js';


import databaseService from '../utils/db.js';

import { ObjectId } from 'mongodb'
// export default {
//   getAllCompetition: async () => {
//     const result = await db.raw(`select * from competition`);
//     return result[0];
//   },
//   getCompetitionById: async (id) => {
//     const result = await db.raw(`select * from competition where id = ${id}`);
//     return result[0];
//   },
//   addCompetition: async (
//     name,
//     status,
//     landscape_poster,
//     portrait_poster,
//     lookback_script,
//     content,

//   ) => {
//     const result = await db.raw(
//       `INSERT INTO competition (name,status,landscape_poster,portrait_poster,lookback_script,content) VALUES ('${name}', '${status}', '${landscape_poster}', '${portrait_poster}', '${lookback_script}', '${content}')`
//     );
//     return result[0];
//   },
//   updateCompetition: async (
//     id,
//     name,
//     status,
//     landscape_poster,
//     portrait_poster,
//     lookback_script,
//     content
//   ) => {

//     if (lookback_script != 'undefined' && content != 'undefined') {
//       await db.raw(
//         `UPDATE competition SET name = '${name}',status= '${status}',landscape_poster='${landscape_poster}', portrait_poster = '${portrait_poster}',lookback_script= '${lookback_script}', content = '${content}' where id =${id}`
//       );
//     }
//     else if (lookback_script != 'undefined' && !(content != 'undefined')) {
//       await db.raw(
//         `UPDATE competition SET name = '${name}',status= '${status}',landscape_poster='${landscape_poster}', portrait_poster = '${portrait_poster}',lookback_script= '${lookback_script}' where id =${id}`
//       );
//     }
//     else if (!(lookback_script != 'undefined') && content != 'undefined') {
//       await db.raw(
//         `UPDATE competition SET name = '${name}',status= '${status}',landscape_poster='${landscape_poster}', portrait_poster = '${portrait_poster}',content= '${content}' where id =${id}`
//       );
//     }
//     else {
//       await db.raw(
//         `UPDATE competition SET name = '${name}',status= '${status}',landscape_poster='${landscape_poster}', portrait_poster = '${portrait_poster}' where id =${id}`
//       );
//     }

//   },
//   removeCompiton: async (id) => {
//     const result = await db.raw(`DELETE FROM competition WHERE id= ${id}`);
//     return result[0];
//   },
// };
class CompetitionsService {
  async createCompetition(body) {
    const result = await databaseService.competitions.insertOne(
      new Competition({
        name: body.name,
        status: body.status,
        landscape_poster: body.landscape_poster,
        portrait_poster: body.portrait_poster,
        lookback_script: body.lookback_script,
        content: body.content,
        date: new Date(body.date),
        end_date: body.end_date != null ? new Date(body.end_date) : null
      })
    )
    const competition = await databaseService.competitions.findOne({ _id: result.insertedId })
    return competition
  }

  async getById(id) {
    const result = await databaseService.competitions.findOne({ _id: new ObjectId(id) })
    return result
  }
  async getAllCompetitions({ status, pageSize, page }) {
    let query = {};

    // Thêm điều kiện lọc nếu status không phải undefined
    if (status !== undefined) {
      query.status = status;
    }

    // Tính toán vị trí bắt đầu của kết quả dựa trên page và pageSize
    const skip = (page - 1) * pageSize;

    // Tạo một promise để đồng thời thực hiện truy vấn và đếm tổng số lượng tài liệu
    const [competitions, total] = await Promise.all([
      // Thực hiện truy vấn với điều kiện lọc và giới hạn kết quả
      databaseService.competitions
        .find(query)
        .skip(skip)
        .limit(pageSize)
        .toArray(),

      // Đếm tổng số lượng tài liệu với cùng điều kiện lọc
      databaseService.competitions.countDocuments(query),
    ]);

    return { competitions, total };
  }
  async updateCompetition(data) {
    const competition = await databaseService.competitions.findOneAndUpdate(
      {
        _id: new ObjectId(data.id)
      },
      {
        $set: {
          ...data.payload,
          date: new Date(data.payload.date),
          end_date: data.payload.end_date != null ? new Date(data.payload.end_date) : null
        }
      },
      {
        returnDocument: 'after',
      }
    )
    return competition
  }
  async deleteCompetition(id) {
    const result = await databaseService.competitions.deleteOne({
      _id: new ObjectId(id)
    })
    return result
  }
}

const competitionsService = new CompetitionsService()
export default competitionsService