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
    getNewest() {
        const url = '/news/newest';
        return axiosClient.get(url)
    },
    add(data) {
        const url = `/news`;
        return axiosClient.post(url, data)
    },
    update(data) {
        const url = `/news?id=${data.id}`;
        return axiosClient.patch(url, data)
    },
    remove(id) {
        const url = `/news?id=${id}`;
        return axiosClient.delete(url)
    },

}
export default etNewsApi