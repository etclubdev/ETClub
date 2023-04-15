import db from "../utils/db.js";

export default {
  getAll: async () => {
    const result = await db.raw(`select * from banner`);

    return result[0];
  },
  getById: async (stt) => {
    const result = await db.raw(`select * from banner where stt = ${stt}`);
    return result[0];
  },
  addBanner: async (description, img, link) => {
    const result = await db.raw(
      `INSERT INTO banner (description, img, link) VALUES ('${description}', '${img}', '${link}')`
    );
    return result[0];
  },
  delBanner: async (stt) => {
    await db.raw(`DELETE FROM banner WHERE stt= ${stt}`);
  },
  updateBanner: async (stt, description, link) => {
    await db.raw(
      `UPDATE banner SET description = '${description}', link= '${link}' WHERE stt = ${stt}`
    );
  },
};
