import competitionsService from '../services/competition-service.js'
import competitionResultsService from '../services/competitionResult-services.js'



export const createCompetitionResult = async (req, res) => {

    try {
        const checkId = await competitionsService.getById(req.body.competition_id)
        if (!checkId) {
            return res.status(404).json({
                message: "Không tìm thấy id cuộc thi",
            })
        }
        const result = await competitionResultsService.createCompetitionResult(req.body)
        return res.json({
            message: "Tạo mới kết quả cuộc thi thành công",
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const getCompetitionResultById = async (req, res) => {
    const { id } = req.params
    try {
        const result = await competitionResultsService.getById(id)
        if (!result) {
            return res.status(404).json({
                message: "Không tìm thấy kết quả cuộc thi",
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
export const getAllCompetitionResults = async (req, res) => {
    const competition_id = req.query.competition_id ? (req.query.competition_id) : undefined

    try {
        const result = await competitionResultsService.getAllCompetitionResult(competition_id);
        return res.json({
            message: 'OK',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateCompetitionResult = async (req, res) => {
    const { id } = req.params
    const payload = req.body;
    try {
        const result = await competitionResultsService.updateCompetitionResult({
            id,
            payload
        });
        return res.json({
            message: 'Cập nhật kết quả cuộc thi thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const deleteCompetitionResult = async (req, res) => {
    const { id } = req.params
    try {
        const result = await competitionResultsService.deleteCompetitionResult(id);
        if (result?.deletedCount > 0) {
            return res.json({
                message: 'Xóa kết quả cuộc thi thành công',
                result
            })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
