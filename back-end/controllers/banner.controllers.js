import bannersService from '../services/banner-services.js'

export const createBanner = async (req, res) => {

    try {
        const result = await bannersService.createBanner(req.body)
        return res.json({
            message: "Tạo mới banner thành công",
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const getBannerById = async (req, res) => {
    const { id } = req.params
    try {
        const result = await bannersService.getById(id)
        if (!result) {
            return res.status(404).json({
                message: "Không tìm thấy banner của bạn",
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

export const getAllBanners = async (req, res) => {
    try {
        const result = await bannersService.getAllBanners();
        return res.json({
            message: 'OK',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const updateBanner = async (req, res) => {
    const { id } = req.params
    const payload = req.body;
    try {
        const result = await bannersService.updateBanner({
            id,
            payload
        });
        return res.json({
            message: 'Cập nhật banner thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const deleteBanner = async (req, res) => {
    const { id } = req.params
    try {
        const result = await bannersService.deleteBanner(id);

        console.log(result)
        return res.json({
            message: 'Xóa banner thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}