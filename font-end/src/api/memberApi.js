import axiosClient from "./axiosClient";
const memberApi = {
    getAll(params) {
        const url = "/member";
        return axiosClient.get(url, { params });
    },
    getAllTerms(params) {
        const url = "/term";
        return axiosClient.get(url, { params });
    },
    addMember(data) {
        const url = `/member`;

        return axiosClient.post(url, data);
    },
    delMember(id) {
        const url = `/member/${id}`;
        return axiosClient.delete(url, id);
    },
    getById(id) {
        const url = `/member/${id}`;
        return axiosClient.get(url);
    },
    updateMember(data) {
        const url = `/member/${data.id}`;

        return axiosClient.patch(url, data.data);
    },
};
export default memberApi;
