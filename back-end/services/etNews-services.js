import db from "../utils/db.js";

export default {
    getAll: async()=>{
        const result = await db.raw(`select * from et_news`);
        return result[0];
    },
    getById: async(id)=>{
        const result = await db.raw(`select * from et_news where id = ${id}`);
        return result[0];
    },
    addNews: async(data)=>{
        const result = await db.raw(`INSERT INTO et_news (name, tiny_desc, full_news, create_time)
        VALUES (${data.name}, ${data.tiny_desc}, ${data.full_news}, ${data.create_time});`);
        return result[0];
    }
}