import axiosClient from "./axiosClient";

const competitionApi = {
  getAllCompetition(params) {
    const url = "/competition";
    return axiosClient.get(url, { params });
  },
  getByCompetitionId(id) {
    const url = `/competition/get-competition-by-id/${id}`;
    return axiosClient.get(url);
  },
  addCompetition(data) {
    const url = `/competition`;
    return axiosClient.post(url, data);
  },
  delCompetition(id) {
    const url = `/competition/delete-competition`;
    return axiosClient.post(url, id);
  },
  updateCompetition(data) {
    const url = `/competition/update-competition`;
    return axiosClient.post(url, data);
  },
};

export default competitionApi;
