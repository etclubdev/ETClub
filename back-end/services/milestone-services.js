// import db from "../utils/db.js";

// export default {
//     getAllMilestone: async () => {
//         const result = await db.raw(`select * from milestone`);
//         return result[0];
//     },
//     getByMilestoneId: async (id) => {
//         const result = await db.raw(`select * from milestone where id = ${id}`)
//         return result[0]
//     },
//     addMilestone: async (competition_id, name, start_date, end_date) => {
//         const result = await db.raw(`INSERT INTO milestone (competition_id,name,start_date,end_date) VALUES ( '${competition_id}', '${name}', '${start_date}', '${end_date}' )`);
//         return result[0];
//     },
//     delMilestone: async (id) => {
//         const result = await db.raw(`DELETE FROM milestone WHERE id= ${id}`);
//         return result[0];
//     },
//     updateMilestone: async (id, name, start_date, end_date) => {
//         const result = await db.raw(`update milestone set name= '${name}',start_date='${start_date}',end_date='${end_date}' where id = ${id}`);
//         return result[0];
//     }
// }
import Milestone from '../models/schemas/milestone.schema.js';
import databaseService from '../utils/db.js';

import { ObjectId } from 'mongodb'
class MilestonesService {
    async createMilestone(body) {
        const result = await databaseService.milestones.insertOne(
            new Milestone({
                competition_id: new ObjectId(body.competition_id),
                name: body.name,
                start_date: body.start_date !== null ? new Date(body.start_date) : null,
                end_date: body.end_date !== null ? new Date(body.end_date) : null
            })
        )
        const milestone = await databaseService.milestones.findOne({ _id: result.insertedId })
        return milestone
    }
    async getById(id) {
        const result = await databaseService.milestones.findOne({ _id: new ObjectId(id) })
        return result
    }
    async getAllMilestone(competition_id) {
        const query = {};
        if (competition_id) {

            query.competition_id = new ObjectId(competition_id);
        }
        const result = await databaseService.milestones.find(query).sort({ start_date: 1 }).toArray();
        return result
    }
    async updateMilestone(data) {
        const milestone = await databaseService.milestones.findOneAndUpdate(
            {
                _id: new ObjectId(data.id)
            },
            {
                $set: {
                    ...data.payload,
                    competition_id: new ObjectId(data.payload.competition_id),
                    start_date: data.payload.start_date !== null ? new Date(data.payload.start_date) : null,
                    end_date: data.payload.end_date !== null ? new Date(data.payload.end_date) : null
                }
            },
            {
                returnDocument: 'after',
            }
        )
        return milestone
    }
    async deleteMilestone(id) {
        const result = await databaseService.milestones.deleteOne({
            _id: new ObjectId(id)
        })
        return result
    }
}

const milestonesService = new MilestonesService()
export default milestonesService