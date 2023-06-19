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
          INSERT INTO et_news (name, tiny_desc, full_news, image, link, category)
          VALUES (?, ?, ?, ?, ?, ?)
        `, [data.name, data.tiny_desc, data.full_news, data.image, data.link, data.category]);
        return result[0];
    },
    delNews: async (id) => {
        const result = await db.raw(`DELETE FROM et_news WHERE id= ${id}`);
        return result[0];
    },
    updateNews: async (id, name, tiny_desc, full_news, link, category, image) => {
        console.log('namedb', id)
        const result = await db.raw(`update et_news set tiny_desc = '${tiny_desc}',name = '${name}',full_news='${full_news}', link = '${link}', category = ${category}, image ='${image}' where id = ${id}`);
        return result[0];
    }
}