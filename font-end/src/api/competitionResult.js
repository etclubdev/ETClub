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
        const url = `/competition-result/${id}`;
        return axiosClient.get(url);
    },
    update(data) {
        const url = `/competition-result/${data.id}`;
        return axiosClient.patch(url, data.data);
    },
    delCompetitionResult(id) {
        const url = `/competition-result/${id}`;
        return axiosClient.delete(url, id);
    },
};

export default competitionResult;
