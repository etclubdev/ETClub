import CompetitionResult from '../models/schemas/competion-result.schema.js';


// export default {
//     getAll: async () => {
//         const result = await db.raw(`select * from competition_result`);
//         return result[0];
//     },
//     getById: async (id) => {
//         const result = await db.raw(`select * from competition_result where id = ${id}`)
//         return result[0]
//     },
//     addCompetitionResult: async (competition_id, name, major, academic_year, team, rank, school, type, avt, logo_team) => {
//         if (avt) {
//             const result = await db.raw(`INSERT INTO competition_result ( competition_id ,name ,major, academic_year, team, rank, school, type,avt) VALUES ( "${competition_id}", "${name}", "${major}", "${academic_year}", "${team}", "${rank}", "${school}", "${type}", "${avt}")`);
//             return result[0];
//         }
//         if (logo_team) {
//             const result = await db.raw(`INSERT INTO competition_result ( competition_id ,name ,major, academic_year, team, rank, school, type,logo_team) VALUES ( "${competition_id}", "${name}", "${major}", "${academic_year}", "${team}", "${rank}", "${school}", "${type}", "${logo_team}")`);
//             return result[0];
//         }
//     },
//     delCompetitionResult: async (id) => {
//         const result = await db.raw(`DELETE FROM competition_result WHERE id= ${id}`);
//         return result[0];
//     },
//     updateCompetitionResult: async (id, name, major, academic_year, team, rank, school, logo_team, avt) => {
//         const result = await db.raw(`update competition_result set name = '${name}',major= '${major}', academic_year= '${academic_year}', team= '${team}', rank= ${rank}, school= '${school}', logo_team= '${logo_team}', avt='${avt}'  where id = ${id}`);
//         return result[0];
//     }

// }
import databaseService from '../utils/db.js';

import { ObjectId } from 'mongodb'
class CompetitionResultsService {
    async createCompetitionResult(body) {

        const result = await databaseService.competition_results.insertOne(
            new CompetitionResult({

                academic_year: body.academic_year,
                avt: body.avt,
                competition_id: new ObjectId(body.competition_id),
                logo_team: body.logo_team,
                major: body.major,
                name: body.name,
                rank: body.rank,
                school: body.school,
                team: body.team,
                type: body.type
            })
        )
        const competitionResult = await databaseService.competition_results.findOne({ _id: result.insertedId })
        return competitionResult
    }
    async getById(id) {
        const result = await databaseService.competition_results.findOne({ _id: new ObjectId(id) })
        return result
    }
    async getAllCompetitionResult(competition_id) {
        const query = {};
        if (competition_id) {

            query.competition_id = new ObjectId(competition_id);
        }

        const result = await databaseService.competition_results.find(query).toArray();

        return result
    }
    async updateCompetitionResult(data) {
        const competition = await databaseService.competition_results.findOneAndUpdate(
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
        return competition
    }
    async deleteCompetitionResult(id) {
        const result = await databaseService.competition_results.deleteOne({
            _id: new ObjectId(id)
        })
        return result
    }
}

const competitionResultsService = new CompetitionResultsService()
export default competitionResultsService