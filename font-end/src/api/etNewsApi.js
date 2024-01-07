import axiosClient from "./axiosClient";
const etNewsApi = {
    getAll(params) {
        const url = '/et-news';
        return axiosClient.get(url, { params })
    },
    get(id) {
        const url = `/et-news/${id}`;
        return axiosClient.get(url)
    },
    // getDetailByAdmin(id) {
    //     const url = `/news/getDetailByAdmin/${id}`;
    //     return axiosClient.get(url)
    // },
    // getNewest() {
    //     const url = '/news/newest';
    //     return axiosClient.get(url)
    // },
    add(data) {
        const url = `/et-news`;
        return axiosClient.post(url, data)
    },
    update(data) {
        const url = `/et-news/${data.id}`;
        return axiosClient.patch(url, data.data)
    },
    remove(id) {

        const url = `/et-news/${id}`;
        return axiosClient.delete(url, id)
    },

}
export default etNewsApi