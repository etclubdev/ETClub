
import databaseService from '../utils/db.js';

import { ObjectId } from 'mongodb'
class TermsService {

    async getAllTerms() {
        const result = await databaseService.terms.find({}).toArray();
        return result
    }

}

const termsService = new TermsService()
export default termsService
