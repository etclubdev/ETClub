import db from "../utils/db.js";

export default {
    getAll: async()=>{
        const result = await db.raw()
        return result[0];
    }
}