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
        const result = await db.raw(`INSERT INTO banner (stt, description, img, link) VALUES (${stt}, "${description}", "${img}", "${link}")`);
        return result[0];
    },
    delBanner: async(stt)=>{
        //...
    },
    updateBanner: async(stt, description, img, link)=>{
        //...
    }
      
}