import etNewsService from '../services/etNews-services.js'

export const createEtNews = async (req, res) => {

    try {
        const result = await etNewsService.createEtNews(req.body)
        return res.json({
            message: "Tạo mới bản tin thành công",
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const getEtNewsById = async (req, res) => {
    const { id } = req.params
    try {
        const result = await etNewsService.getById(id)
        if (!result) {
            return res.status(404).json({
                message: "Không tìm thấy bản tin",
            })
        }

        return res.json({
            message: 'OK',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const getAllEtNews = async (req, res) => {
    const sort = (req.query.sort) ? parseInt(req.query.sort) : undefined
    const category = req.query.category ? parseInt(req.query.category) : undefined
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 9;
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const title = req.query.title ? req.query.title : undefined
    try {
        const { data, total } = await etNewsService.getAllEtNews(sort, category, pageSize, page, title);
        return res.json({
            message: 'OK',
            result: {
                data,
                total
            }
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateEtNews = async (req, res) => {
    const { id } = req.params
    const payload = req.body;
    try {
        const result = await etNewsService.updateEtNews({
            id,
            payload
        });
        return res.json({
            message: 'Cập nhật bản tin thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const deleteEtNews = async (req, res) => {
    const { id } = req.params
    try {
        const result = await etNewsService.deleteEtNews(id);
        if (result?.deletedCount > 0) {
            return res.json({
                message: 'Xóa bản tin thành công',
                result
            })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
