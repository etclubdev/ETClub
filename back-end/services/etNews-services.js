
import EtNews from '../models/schemas/et-news.chema.js';
import databaseService from '../utils/db.js';

import { ObjectId } from 'mongodb'


// export default {
//     getAll: async () => {
//         const result = await db.raw(`select * from et_news`);
//         return result[0];
//     },
//     getById: async (id) => {
//         const result = await db.raw(`select * from et_news where id = ${id}`);
//         return result[0];
//     },
//     getNewest: async () => {
//         const result = await db.raw(`select * from et_news order by created_at DESC LIMIT 1`)
//         return result[0]
//     },
//     addNews: async (data) => {
//         const result = await db.raw(`
//           INSERT INTO et_news (name, tiny_desc, full_news, image, link, category)
//           VALUES (?, ?, ?, ?, ?, ?)
//         `, [data.name, data.tiny_desc, data.full_news, data.image, data.link, data.category]);
//         return result[0];
//     },
//     delNews: async (id) => {
//         const result = await db.raw(`DELETE FROM et_news WHERE id= ${id}`);
//         return result[0];
//     },
//     updateNews: async (id, name, tiny_desc, full_news, link, category, image) => {
//         console.log('namedb', id)
//         const result = await db.raw(`update et_news set tiny_desc = '${tiny_desc}',name = '${name}',full_news='${full_news}', link = '${link}', category = ${category}, image ='${image}' where id = ${id}`);
//         return result[0];
//     }
// }
// enum category etnews
// 0 = All
// 1 = E-Government
// 2 = GlobalTechnology
// 3 = VNTechnology
// 4 = Influence
class EtNewsService {
    async createEtNews(body) {
        const result = await databaseService.etNews.insertOne(
            new EtNews({
                name: body.name,
                category: body.category,
                full_news: body.full_news,
                image: body.image,
                link: body.link,
                tiny_desc: body.tiny_desc,
            })
        )
        const etNews = await databaseService.etNews.findOne({ _id: result.insertedId })
        return etNews
    }
    async getById(id) {
        const result = await databaseService.etNews.findOne({ _id: new ObjectId(id) })
        return result
    }
    async getAllEtNews(sort, category, pageSize, page, title) {
        const query = {};
        if (category) {
            // Nếu có tham số category, thêm điều kiện lọc theo category
            query.category = category;
        }
        if (title) {
            query.name = new RegExp(title, 'i');
        }
        const skip = (page - 1) * pageSize;

        // Sort = 1 là newest , thì sắp xếp theo thời gian giảm dần và chỉ lấy 1 phần tử đầu tiên
        if (sort == 1) {

            const [data, total] = await Promise.all([
                // Thực hiện truy vấn với điều kiện lọc và giới hạn kết quả
                databaseService.etNews.find(query).sort({ created_at: -1 }).skip(skip).limit(pageSize).toArray(),

                // Đếm tổng số lượng tài liệu với cùng điều kiện lọc
                databaseService.etNews.countDocuments(query),
            ]);
            return data.length > 0 ? { data, total } : {};
        } else {
            // Nếu không có tham số newest, hoặc newest không phải là true, trả về toàn bộ danh sách

            const [data, total] = await Promise.all([
                // Thực hiện truy vấn với điều kiện lọc và giới hạn kết quả
                databaseService.etNews.find(query).skip(skip).limit(pageSize).toArray(),

                // Đếm tổng số lượng tài liệu với cùng điều kiện lọc
                databaseService.etNews.countDocuments(query),
            ]);
            return { data, total };
        }
    }
    async updateEtNews(data) {
        const etNews = await databaseService.etNews.findOneAndUpdate(
            {
                _id: new ObjectId(data.id)
            },
            {
                $set: {
                    ...data.payload,
                }
            },
            {
                returnDocument: 'after',
            }
        )
        return etNews
    }
    async deleteEtNews(id) {
        const result = await databaseService.etNews.deleteOne({
            _id: new ObjectId(id)
        })
        return result
    }
}

const etNewsService = new EtNewsService()
export default etNewsService