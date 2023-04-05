import db from "../utils/db.js";

export default {
    getAll: async () => {
        const result = await db.raw(`select * from feeling`);
        return result[0];
    },
    getById: async(id)=>{
        const result = await db.raw(`select * from feeling where id = ${id}`)
        return result[0]
    },
    addFeeling: async(id, quote, author)=>{
        const result = await db.raw(`INSERT INTO feeling (id, quote, author) VALUES (${id}, "${quote}", "${author}")`);
        return result[0];
    },
    delFeeling: async(id)=>{
        const result = await db.raw(`DELETE FROM feeling WHERE id= ${id}`);
        return result[0];
    },
    updateFeeling: async(id, quote, author)=>{
        const result = await db.raw(`update feeling set quote = ${quote},author= ${author} where (${id}`);
        return result[0];
    }

}