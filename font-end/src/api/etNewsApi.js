import axiosClient from "./axiosClient";
const etNewsApi = {
    getAll(params) {
        const url = '/news';
        return axiosClient.get(url, { params })
    },
    get(id) {
        const url = `/news/${id}`;
        return axiosClient.get(url)
    },
    getDetailByAdmin(id) {
        const url = `/news/getDetailByAdmin/${id}`;
        return axiosClient.get(url)
    },
    getNewest() {
        const url = '/news/newest';
        return axiosClient.get(url)
    },
    add(data) {
        const url = `/news`;
        return axiosClient.post(url, data)
    },
    update(data) {
        const url = `/news/update-etnews`;
        return axiosClient.post(url, data)
    },
    remove(id) {

        const url = `/news/delete`;
        return axiosClient.post(url, id)
    },

}
export default etNewsApi