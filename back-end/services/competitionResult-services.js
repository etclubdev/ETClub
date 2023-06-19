import db from "../utils/db.js";

export default {
    getAll: async () => {
        const result = await db.raw(`select * from competition_result`);
        return result[0];
    },
    getById: async (id) => {
        const result = await db.raw(`select * from competition_result where id = ${id}`)
        return result[0]
    },
    addCompetitionResult: async (competition_id, name, major, academic_year, team, rank, school, type, avt, logo_team) => {
        if (avt) {
            const result = await db.raw(`INSERT INTO competition_result ( competition_id ,name ,major, academic_year, team, rank, school, type,avt) VALUES ( "${competition_id}", "${name}", "${major}", "${academic_year}", "${team}", "${rank}", "${school}", "${type}", "${avt}")`);
            return result[0];
        }
        if (logo_team) {
            const result = await db.raw(`INSERT INTO competition_result ( competition_id ,name ,major, academic_year, team, rank, school, type,logo_team) VALUES ( "${competition_id}", "${name}", "${major}", "${academic_year}", "${team}", "${rank}", "${school}", "${type}", "${logo_team}")`);
            return result[0];
        }
    },
    delCompetitionResult: async (id) => {
        const result = await db.raw(`DELETE FROM competition_result WHERE id= ${id}`);
        return result[0];
    },
    updateCompetitionResult: async (id, name, major, academic_year, team, rank, school, logo_team, avt) => {
        const result = await db.raw(`update competition_result set name = '${name}',major= '${major}', academic_year= '${academic_year}', team= '${team}', rank= ${rank}, school= '${school}', logo_team= '${logo_team}', avt='${avt}'  where id = ${id}`);
        return result[0];
    }

}