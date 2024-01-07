import axiosClient from "./axiosClient";
const authApi = {

    login(data) {
        const url = `/user/login`;

        return axiosClient.post(url, data);
    },
    logout(data) {
        const url = `/user/logout`;

        return axiosClient.post(url, data);
    },

};
export default authApi;