import db from "../utils/db.js";

export default {
    getAll: async()=>{
        const result = await db.raw(`select * from banner`);
        return result[0];
    },
    getById: async(stt)=>{
        const result = await db.raw(`select * from banner where stt = ${stt}`)
        return result[0]
    },
    addBanner: async(stt, description, img, link)=>{
        const result = await db.raw(`INSERT INTO banner (stt, description, img, link) VALUES (${stt}, '${description}', '${img}', '${link}')`);
        return result[0];
    },
    delBanner: async(stt)=>{
        const result = await db.raw(`DELETE FROM banner WHERE stt= ${stt}`);
        return result[0];
    },
    updateBanner: async(stt, description, img, link)=>{
        const result = await db.raw(`update banner set description = ${description},img= ${img},link=${link} where stt = ${stt}`);
        return result[0];
    }
}