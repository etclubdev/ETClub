import axiosClient from "./axiosClient";
const feelingApi = {
  getAll(params) {
    const url = "/feeling";
    return axiosClient.get(url, { params });
  },
  addFeeling(data) {
    const url = `/feeling`;

    return axiosClient.post(url, data);
  },
  delFeeling(id) {
    const url = `/feeling/delete-feeling`;
    return axiosClient.post(url, id);
  },
  getById(id) {
    const url = `/feeling/get-feeling-by-id/${id}`;
    return axiosClient.get(url);
  },
  updateFeeling(data) {
    const url = `/feeling/update-feeling`;

    return axiosClient.post(url, data);
  },
};
export default feelingApi;
