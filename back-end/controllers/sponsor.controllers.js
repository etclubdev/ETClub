import competitionsService from '../services/competition-service.js'
import sponsorsService from '../services/sponsor-services.js'


export const createSponsor = async (req, res) => {

    try {
        const checkId = await competitionsService.getById(req.body.competition_id)
        if (!checkId) {
            return res.status(404).json({
                message: "Không tìm thấy id cuộc thi",
            })
        }
        const result = await sponsorsService.createSponsor(req.body)
        return res.json({
            message: "Tạo mới nhà tài trợ thành công",
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const getSponsorById = async (req, res) => {
    const { id } = req.params
    try {
        const result = await sponsorsService.getById(id)
        if (!result) {
            return res.status(404).json({
                message: "Không tìm thấy nhà tài trợ",
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

export const getAllSponsors = async (req, res) => {
    try {
        const result = await sponsorsService.getAllSponsors();
        return res.json({
            message: 'OK',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateSponsor = async (req, res) => {
    const { id } = req.params
    const payload = req.body;
    try {
        const result = await sponsorsService.updateSponsor({
            id,
            payload
        });
        return res.json({
            message: 'Cập nhật nhà tài trợ thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const deleteSponsor = async (req, res) => {
    const { id } = req.params
    try {
        const result = await sponsorsService.deleteSponsor(id);

        console.log(result)
        return res.json({
            message: 'Xóa nhà tài trợ thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}