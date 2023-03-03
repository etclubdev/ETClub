import database from '../utils/db.js';
import db from '../utils/db.js';

export default{
    getAllInfomation: async(limit)=>{
        const list = await db.raw(/*sql code*/``);
        if(list)
            return list[0];
        return list;
    },
    
}