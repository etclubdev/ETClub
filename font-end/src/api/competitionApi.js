import axiosClient from "./axiosClient";

const competitionApi = {
  getAllCompetition(params) {
    const url = "/competition";
    return axiosClient.get(url, { params });
  },
  getByCompetitionId(id) {
    const url = `/competition/${id}`;
    return axiosClient.get(url);
  },
  addCompetition(data) {
    const url = `/competition`;
    return axiosClient.post(url, data);
  },
  delCompetition(id) {
    const url = `/competition/${id}`;
    return axiosClient.delete(url);
  },
  updateCompetition(data) {
    const url = `/competition/${data.id}`;
    return axiosClient.patch(url, data.data);
  },
};

export default competitionApi;
