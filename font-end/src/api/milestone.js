import axiosClient from "./axiosClient";

const mileStoneApi = {
    getAllMilestone(params) {
        const url = "/milestone";
        return axiosClient.get(url, { params });
    },
    getByMilestoneId(id) {
        const url = `/milestone/${id}`;
        return axiosClient.get(url);
    },
    addMilestone(data) {
        const url = `/milestone`;
        return axiosClient.post(url, data);
    },
    delMilestone(id) {
        const url = `/milestone/${id}`;
        return axiosClient.delete(url);
    },
    updateMilestone(data) {
        const url = `/milestone/${data.id}`;
        return axiosClient.patch(url, data.data);
    },

};

export default mileStoneApi;
