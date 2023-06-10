import db from "../utils/db.js";
// enum category etnews
// 0 = All
// 1 = E-Government
// 2 = globalTechnology
// 3 = VNTechnology
// 4 = influence

export default {
    getAll: async () => {
        const result = await db.raw(`select * from et_news`);
        return result[0];
    },
    getById: async (id) => {
        const result = await db.raw(`select * from et_news where id = ${id}`);
        return result[0];
    },
    getNewest: async () => {
        const result = await db.raw(`select * from et_news order by created_at DESC LIMIT 1`)
        return result[0]
    },
    addNews: async (data) => {
        const result = await db.raw(`
          INSERT INTO et_news (name, tiny_desc, full_news, image, link)
          VALUES (?, ?, ?, ?, ?)
        `, [data.name, data.tiny_desc, data.full_news, data.image, data.link]);
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