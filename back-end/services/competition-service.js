import db from "../utils/db.js";

export default {
  getAllCompetition: async () => {
    const result = await db.raw(`select * from competition`);
    return result[0];
  },
  getCompetitionById: async (id) => {
    const result = await db.raw(`select * from competition where id = ${id}`);
    return result[0];
  },
  addCompetition: async (
    name,
    status,
    landscape_poster,
    portrait_poster,
    lookback_script,
    lookback_img
  ) => {
    const result = await db.raw(
      `INSERT INTO competition (name,status,landscape_poster,portrait_poster,lookback_script,lookback_img) VALUES ('${name}', '${status}', '${landscape_poster}', '${portrait_poster}', '${lookback_script}', '${lookback_img}')`
    );
    return result[0];
  },
  updateCompetition: async (
    id,
    name,
    status,
    landscape_poster,
    portrait_poster,
    lookback_script,
    lookback_img
  ) => {
    await db.raw(
      `UPDATE competition SET name = '${name}',status= '${status}',landscape_poster='${landscape_poster}', portrait_poster = '${portrait_poster}',lookback_script= '${lookback_script}',lookback_img='${lookback_img}' where id =${id}`
    );
  },
  removeCompiton: async (id) => {
    const result = await db.raw(`DELETE FROM competition WHERE id= ${id}`);
    return result[0];
  },
};
