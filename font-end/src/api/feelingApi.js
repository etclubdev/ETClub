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
    const url = `/feeling/${id}`;
    return axiosClient.delete(url, id);
  },
  getById(id) {
    const url = `/feeling/${id}`;
    return axiosClient.get(url);
  },
  updateFeeling(data) {
    const url = `/feeling/${data.id}`;

    return axiosClient.patch(url, data.data);
  },
};
export default feelingApi;
