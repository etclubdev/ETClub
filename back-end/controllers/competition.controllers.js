import competitionsService from '../services/competition-service.js'
//enum status competition 
//  0: Sắp diễn ra 
//  1: Đang diễn ra 
//  2: Đã diễn ra

export const createCompetition = async (req, res) => {

    try {
        const result = await competitionsService.createCompetition(req.body)
        return res.json({
            message: "Tạo mới cuộc thi thành công",
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const getCompetitionById = async (req, res) => {
    const { id } = req.params
    try {
        const result = await competitionsService.getById(id)
        if (!result) {
            return res.status(404).json({
                message: "Không tìm thấy cuộc thi của bạn",
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
export const getAllCompetitions = async (req, res) => {
    const status = req.query?.status ? parseInt(req.query.status) : undefined;
    const pageSize = parseInt(req.query.pageSize) || 9;
    const page = parseInt(req.query.page) || 1;

    try {
        const { competitions, total } = await competitionsService.getAllCompetitions({ status, pageSize, page });
        return res.json({
            message: 'OK',
            result: {
                competitions,
                total_page: Math.ceil(total / pageSize)
            }
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateCompetition = async (req, res) => {
    const { id } = req.params
    const payload = req.body;
    try {
        const result = await competitionsService.updateCompetition({
            id,
            payload
        });
        return res.json({
            message: 'Cập nhật cuộc thi thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const deleteCompetition = async (req, res) => {
    const { id } = req.params
    try {
        const result = await competitionsService.deleteCompetition(id);
        if (result?.deletedCount > 0) {
            return res.json({
                message: 'Xóa cuộc thi thành công',
                result
            })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
