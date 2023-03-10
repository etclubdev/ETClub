import db from "../utils/db.js";

export default {
    getAll: async()=>{
        const result = await db.raw(`select * from banner`);
        return result[0];
    },
    
    addBanner: async(stt, description, img, link)=>{
        const result = await db.raw(`INSERT INTO banner (stt, description, img, link) VALUES (${stt}, "${description}", "${img}", "${link}")`);
        return result[0];
      }
      
}