import db from "../utils/db.js";

export default {
    getAllMilestone: async () => {
        const result = await db.raw(`select * from milestone`);
        return result[0];
    },
    getByMilestoneId: async (id) => {
        const result = await db.raw(`select * from milestone where id = ${id}`)
        return result[0]
    },
    addMilestone: async (competition_id, name, start_date, end_date) => {
        const result = await db.raw(`INSERT INTO milestone (competition_id,name,start_date,end_date) VALUES ( '${competition_id}', '${name}', '${start_date}', '${end_date}' )`);
        return result[0];
    },
    delMilestone: async (id) => {
        const result = await db.raw(`DELETE FROM milestone WHERE id= ${id}`);
        return result[0];
    },
    updateMilestone: async (id, name, start_date, end_date) => {
        const result = await db.raw(`update milestone set name= '${name}',start_date='${start_date}',end_date='${end_date}' where id = ${id}`);
        return result[0];
    }
}