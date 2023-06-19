import axiosClient from "./axiosClient";
const sponsorApi = {
  getAllsponsor(params) {
    const url = "/sponsor";
    return axiosClient.get(url, { params });
  },
  getBySponsorId(id) {
    const url = `/sponsor/get-sponsor-by-id/${id}`;
    return axiosClient.get(url);
  },
  addSponsor(data) {
    const url = `/sponsor`;
    return axiosClient.post(url, data);
  },
  delSponsor(id) {
    const url = `/sponsor/delete-sponsor`;
    return axiosClient.post(url, id);
  },
  updateSponsor(data) {
    const url = `/sponsor/update-sponsor`;
    return axiosClient.post(url, data);
  },
};
export default sponsorApi;
