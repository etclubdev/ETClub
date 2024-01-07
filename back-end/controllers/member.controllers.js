import membersService from '../services/member-services.js'


export const createMember = async (req, res) => {

    try {
        const result = await membersService.createMember(req.body)
        return res.json({
            message: "Tạo mới thành viên thành công",
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const getMemberById = async (req, res) => {
    const { id } = req.params
    try {
        const result = await membersService.getById(id)
        if (!result) {
            return res.status(404).json({
                message: "Không tìm thấy thành viên của bạn",
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

export const getAllMembers = async (req, res) => {
    const department = req.query.department
    const term = req.query.term
    const name = req.query.name
    try {
        const result = await membersService.getAllMember(department, term, name);
        return res.json({
            message: 'OK',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateMember = async (req, res) => {
    const { id } = req.params
    const payload = req.body;
    try {
        const result = await membersService.updateMember({
            id,
            payload
        });
        return res.json({
            message: 'Cập nhật thành viên thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const deleteMember = async (req, res) => {
    const { id } = req.params
    try {
        const result = await membersService.deleteMember(id);

        console.log(result)
        return res.json({
            message: 'Xóa cảm nghĩ thành công',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}