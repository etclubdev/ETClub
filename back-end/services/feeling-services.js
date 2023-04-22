import db from "../utils/db.js";

export default {
  getAll: async () => {
    const result = await db.raw(`select * from feeling`);
    return result[0];
  },
  getById: async (id) => {
    const result = await db.raw(`select * from feeling where id = ${id}`);
    return result[0];
  },
  addFeeling: async (quote, author, department, avatar) => {
    console.log(quote, author, department, avatar);
    const result = await db.raw(
      `INSERT INTO feeling ( quote, author, department, avatar) VALUES ( "${quote}", "${author}", "${department}", "${avatar}")`
    );
    return result[0];
  },
  delFeeling: async (id) => {
    await db.raw(`DELETE FROM feeling WHERE id= ${id}`);
  },
  updateFeeling: async (id, quote, author, department, avatar) => {
    await db.raw(
      `update feeling set quote = '${quote}',author= '${author}',department= '${department}',avatar= '${avatar}' where id = ${id}`
    );
  },
};
