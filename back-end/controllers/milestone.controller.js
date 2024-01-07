import competitionsService from '../services/competition-service.js'
import milestonesService from '../services/milestone-services.js'



export const createMilestone = async (req, res) => {

    try {
        const checkId = await competitionsService.getById(req.body.competition_id)
        if (!checkId) {
            return res.status(404).json({
                message: "Không tìm thấy id cuộc thi",
            })
        }
        const result = await milestonesService.createMilestone(req.body)
        return res.json({
            message: "Tạo mới thành công",
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const getMilestoneById = async (req, res) => {
    const { id } = req.params
    try {
        const result = await milestonesService.getById(id)
        if (!result) {
            return res.status(404).json({
                message: "Không tìm thấy milestone",
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

export const getAllMilestones = async (req, res) => {
    const competition_id = req.query.competition_id ? (req.query.competition_id) : undefined

    try {
        const result = await milestonesService.getAllMilestone(competition_id);
        return res.json({
            message: 'OK',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateMilestone = async (req, res) => {
    const { id } = req.params
    const payload = req.body;
    try {
        const result = await milestonesService.updateMilestone({
            id,
            payload
        });
        return res.json({
            message: 'Cập nhật milestone thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const deleteMilestone = async (req, res) => {
    const { id } = req.params
    try {
        const result = await milestonesService.deleteMilestone(id);

        console.log(result)
        return res.json({
            message: 'Xóa nhà milestone thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}