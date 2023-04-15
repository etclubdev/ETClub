import axiosClient from "./axiosClient";

const competitionApi = {
    getAllCompetition(params){
        const url = '/competition';
        return axiosClient.get(url,{params})
    },
    getCompetitionById(id){
        const url = `/competition?id=${id}`;
        return axiosClient.get(url)
    },
    addCompetition(data){
        const url = `/competition`;
        return axiosClient.post(url,data)
    },
    updateCompetition(data){
        const url = `/competition?id=${data.id}`;
        return axiosClient.post(url, data)
    },
    removeCompiton(id){
        const url = `/competition?id=${id}`;
        return axiosClient.post(url)
    },
   //the same for milestone

   //competition result 

   //sponsor
}
export default competitionApi