import axiosClient from "./axiosClient";
const bannerApi = {
    getAll(params){
        const url = '/banner';
        return axiosClient.get(url,{params})
    },
    addBanner(data){
        const url = `/banner`;
        return axiosClient.post(url,data)
    },
}
export default bannerApi