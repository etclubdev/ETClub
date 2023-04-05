import db from "../utils/db.js";

export default {
    getAllsponsor: async()=>{
        const result = await db.raw(`select * from sponsor`);
        return result[0];
    },
    getBySponsorId: async(id)=>{
        const result = await db.raw(`select * from sponsor where stt = ${id}`)
        return result[0]
    },
    addSponsor: async(id, name,logo, kind, competition_id)=>{
        const result = await db.raw(`INSERT INTO sponsor (id, name,logo, kind, competition_id) VALUES (${id}, ${name}, ${logo}, ${kind}, ${competition_id})`);
        return result[0];
    },
    delSponsor: async(id)=>{
        const result = await db.raw(`DELETE FROM sponsor WHERE id= ${id}`);
        return result[0];
    },
    updateSponsor: async(id, name,logo, kind, competition_id)=>{
        const result = await db.raw(`update sponsor set name = ${name},logo= ${logo},kind=${kind}, competition_id=${competition_id}  where id = ${id}`);
        return result[0];
    }
}