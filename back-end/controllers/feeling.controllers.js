import feelingsService from '../services/feeling-services.js'

export const createFeeling = async (req, res) => {

    try {
        const result = await feelingsService.createFeeling(req.body)
        return res.json({
            message: "Tạo mới cảm nghĩ thành công",
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const getFeelingById = async (req, res) => {
    const { id } = req.params
    try {
        const result = await feelingsService.getById(id)
        if (!result) {
            return res.status(404).json({
                message: "Không tìm thấy cảm nghĩ của bạn",
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

export const getAllFeelings = async (req, res) => {
    try {
        const result = await feelingsService.getAllFeelings();
        return res.json({
            message: 'OK',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateFeeling = async (req, res) => {
    const { id } = req.params
    const payload = req.body;
    try {
        const result = await feelingsService.updateFeeling({
            id,
            payload
        });
        return res.json({
            message: 'Cập nhật cảm nghĩ thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const deleteFeeling = async (req, res) => {
    const { id } = req.params
    try {
        const result = await feelingsService.deleteFeeling(id);

        console.log(result)
        return res.json({
            message: 'Xóa cảm nghĩ thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}