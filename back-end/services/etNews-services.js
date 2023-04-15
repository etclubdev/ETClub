import db from "../utils/db.js";

export default {
    getAll: async () => {
        const result = await db.raw(`select * from et_news`);
        return result[0];
    },
    getById: async (id) => {
        const result = await db.raw(`select * from et_news where id = ${id}`);
        return result[0];
    },
    addNews: async (data) => {
        const result = await db.raw(`INSERT INTO et_news (name, tiny_desc, full_news, create_time)
        VALUES (${data.name}, ${data.tiny_desc}, ${data.full_news}, ${data.create_time});`);
        return result[0];
    },
    delNews: async (id) => {
        const result = await db.raw(`DELETE FROM et_news WHERE id= ${id}`);
        return result[0];
    },
    updateNews: async (data) => {
        const result = await db.raw(`update et_news set tiny_desc = ${data.tiny_desc},name = ${data.name},full_news=${data.full_news}, img = ${data.img} where (${data.id}`);
        return result[0];
    }
}