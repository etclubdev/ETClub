// import { useEffect, useState } from "react";
// import axios from "axios"
// const productApi = {
//     getAll() {
//         const data = []
//         const fetchData = async () => {
//             const response = await fetch('http://localhost:3000/home');
//             const resdata = await response.json();
//             data.push(resdata)
//         };

//         fetchData();

//         return data
//     },
// }
// export default productApi
import axiosClient from "./axiosClient";
const uploadApi = {
    uploadImages(data) {
        const url = '/upload-images';
        return axiosClient.post(url, data)
    },
}
export default uploadApi
