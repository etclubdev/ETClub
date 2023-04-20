import db from "../utils/db.js";

export default {
  getAllsponsor: async () => {
    const result = await db.raw(`select * from sponsor`);
    return result[0];
  },
  getBySponsorId: async (id) => {
    const result = await db.raw(`select * from sponsor where id = ${id}`);
    return result[0];
  },
  addSponsor: async (name, logo, kind, competition_id) => {
    const result = await db.raw(
      `INSERT INTO sponsor (name,logo, kind,competition_id) VALUES ( '${name}', '${logo}', '${kind}', '${competition_id}')`
    );
    return result[0];
  },
  delSponsor: async (id) => {
    const result = await db.raw(`DELETE FROM sponsor WHERE id= ${id}`);
    return result[0];
  },
  updateSponsor: async (id, name, logo, kind) => {
    const result = await db.raw(
      `update sponsor set name = '${name}',logo= '${logo}',kind='${kind}'  where id = ${id}`
    );
    return result[0];
  },
};
