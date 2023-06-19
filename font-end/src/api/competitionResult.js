import axiosClient from "./axiosClient";

const competitionResult = {
    getAllCompetitionResult(params) {
        const url = "/competition-result";
        return axiosClient.get(url, { params });
    },
    addCompetitionResult(data) {
        const url = `/competition-result`;
        return axiosClient.post(url, data);
    },
    getById(id) {
        const url = `/competition-result/getById/${id}`;
        return axiosClient.get(url);
    },
    update(data) {
        const url = `/competition-result/update`;
        return axiosClient.post(url, data);
    },
    delCompetitionResult(id) {
        const url = `/competition-result/delete`;
        return axiosClient.post(url, id);
    },
};

export default competitionResult;
