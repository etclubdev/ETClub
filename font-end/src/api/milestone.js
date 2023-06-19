import axiosClient from "./axiosClient";

const mileStoneApi = {
    getAllMilestone(params) {
        const url = "/milestone";
        return axiosClient.get(url, { params });
    },
    addMileStone(data) {
        const url = `/milestone`;
        return axiosClient.post(url, data);
    },
    getById(id) {
        const url = `/milestone/getById/${id}`;
        return axiosClient.get(url)
    },
    update(data) {
        const url = `/milestone/update`;

        return axiosClient.post(url, data);
    },
    delete(id) {
        const url = `/milestone/delete`;
        return axiosClient.post(url, id);
    },

};

export default mileStoneApi;
