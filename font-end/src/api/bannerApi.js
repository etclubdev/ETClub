import axiosClient from "./axiosClient";
const bannerApi = {
  getAll(params) {
    const url = "/banner";
    return axiosClient.get(url, { params });
  },
  addBanner(data) {
    const url = `/banner`;

    return axiosClient.post(url, data);
  },
  delBanner(id) {
    const url = `/banner/${id}`;
    return axiosClient.delete(url);
  },
  getById(id) {
    const url = `/banner/${id}`;
    return axiosClient.get(url);
  },
  updateBanner(data) {
    const url = `/banner/${data.id}`;

    return axiosClient.patch(url, data.data);
  },
};
export default bannerApi;
