import termsService from '../services/term-services.js';

export const getAllTerms = async (req, res) => {
    try {
        const result = await termsService.getAllTerms();
        return res.json({
            message: 'OK',
            result
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}