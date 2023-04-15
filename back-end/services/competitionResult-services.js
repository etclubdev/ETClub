import db from "../utils/db.js";

export default {
    getAll: async () => {
        const result = await db.raw(`select * from competition_result`);
        return result[0];
    },
    getById: async(id)=>{
        const result = await db.raw(`select * from competition_result where id = ${id}`)
        return result[0]
    },
    addCompetitionResult: async(id, competition_id ,name ,major, academic_year, team, rank)=>{
        const result = await db.raw(`INSERT INTO competition_result (id, competition_id ,name ,major, academic_year, team, rank) VALUES (${id}, "${competition_id}", "${name}", "${major}", "${academic_year}", ${team}, ${rank})`);
        return result[0];
    },
    delCompetitionResult: async(id)=>{
        const result = await db.raw(`DELETE FROM competition_result WHERE id= ${id}`);
        return result[0];
    },
    updateCompetitionResult: async(id, name ,major, academic_year, team, rank)=>{
        const result = await db.raw(`update competition_result set name = ${name},major= ${major}, academic_year= ${academic_year}, team= ${team}, rank= ${rank} where (${id}`);
        return result[0];
    }

}