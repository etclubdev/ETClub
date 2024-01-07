import axiosClient from "./axiosClient";
const sponsorApi = {
  getAllsponsor(params) {
    const url = "/sponsor";
    return axiosClient.get(url, { params });
  },
  getBySponsorId(id) {
    const url = `/sponsor/${id}`;
    return axiosClient.get(url);
  },
  addSponsor(data) {
    const url = `/sponsor`;
    return axiosClient.post(url, data);
  },
  delSponsor(id) {
    const url = `/sponsor/${id}`;
    return axiosClient.delete(url);
  },
  updateSponsor(data) {
    const url = `/sponsor/${data.id}`;
    return axiosClient.patch(url, data.data);
  },
};
export default sponsorApi;
