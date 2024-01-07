
import Member from '../models/schemas/member.schema.js';
import databaseService from '../utils/db.js';

import { ObjectId } from 'mongodb'

class MembersService {
    async createMember(body) {
        const objectIdTerms = body.terms.map(item => {
            return new ObjectId(item)
        });

        const result = await databaseService.members.insertOne(
            new Member({
                department: [...body.department],
                image: body.image,
                name: body.name,
                terms: objectIdTerms,
                type: [...body.type],
            })
        )
        const member = await databaseService.members.findOne({ _id: result.insertedId })
        return member
    }
    async getById(id) {
        const result = await databaseService.members.findOne({ _id: new ObjectId(id) })
        return result
    }
    async getAllMember(department, term, name) {
        const query = {}
        if (department) {
            query.department = parseInt(department)
        }
        if (term) {
            query.terms = new ObjectId(term)
        }
        if (name) {
            query.name = new RegExp(name, 'i');
        }
        console.log(query)
        const result = await databaseService.members.find(query).toArray();
        return result
    }
    async updateMember(data) {
        const members = await databaseService.members.findOneAndUpdate(
            {
                _id: new ObjectId(data.id)
            },
            {
                $set: {
                    ...data.payload,
                    terms: [...data.payload.terms.map(item => new ObjectId(item))],
                    type: [...data.payload.type],
                    department: [...data.payload.department]
                }
            },
            {
                returnDocument: 'after',
            }
        )
        return members
    }
    async deleteMember(id) {
        const result = await databaseService.members.deleteOne({
            _id: new ObjectId(id)
        })
        return result
    }
}

const membersService = new MembersService()
export default membersService
