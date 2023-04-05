import database from '../utils/db.js';
import db from '../utils/db.js';

export default{
    Getbyoperating_year: async(operating_year)=>{
        const result = await db.raw(`select * from basic_info where operating_year = ${operating_year}`);
        return result[0];
    },
    Updateoperating_year: async(operating_year)=>{
        const result = await db.raw(`update basic_info set operating_year = ${operating_year}`);
        return result[0];   
    },
    Getbymedia_channel: async(media_channel)=>{
        const result = await db.raw(`select * from basic_info where media_channel = ${media_channel}`);
        return result[0];
    },
    Addmedia_channel: async(media_channel)=>{
        const result = await db.raw(`INSERT INTO basic_info (media_channel) VALUES (${media_channel})`);
        return result[0]; 
    },
    delmedia_channel: async(media_channel)=>{
        const result = await db.raw(`DELETE FROM basic_info WHERE media_channel= ${media_channel}`);
        return result[0];
    },
    updatebasic_info: async(media_channel)=>{
        const result = await db.raw(`update basic_info set media_channel = ${media_channel}`);
        return result[0];
    },
    Getbyworkshop_talkshow: async(workshop_talkshow)=>{
        const result = await db.raw(`select * from basic_info where workshop_talkshow = ${workshop_talkshow}`);
        return result[0];
    },
    Addworkshop_talkshow: async(workshop_talkshow)=>{
        const result = await db.raw(`INSERT INTO basic_info (workshop_talkshow) VALUES (${workshop_talkshow})`);
        return result[0]; 
    },
    delworkshop_talkshow: async(workshop_talkshow)=>{
        const result = await db.raw(`DELETE FROM basic_info WHERE workshop_talkshow= ${workshop_talkshow}`);
        return result[0];
    },
    Updateworkshop_talkshow: async(workshop_talkshow)=>{
        const result = await db.raw(`update basic_info set workshop_talkshow = ${workshop_talkshow}`);
        return result[0];
    },

}
   