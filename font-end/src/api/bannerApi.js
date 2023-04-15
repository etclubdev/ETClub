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
  delBanner(stt) {
    const url = `/banner/delete-banner`;
    return axiosClient.post(url, stt);
  },
  getById(stt) {
    const url = `/banner/get-banner-by-id/${stt}`;
    return axiosClient.get(url);
  },
  updateBanner(data) {
    const url = `/banner/update-banner`;

    return axiosClient.post(url, data);
  },
};
export default bannerApi;
