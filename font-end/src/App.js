import { useEffect, useState } from "react";
import AppRoutes from "./routes";
import axios from "axios"
import basicInfoApi from "./api/basicInfoApi"

function App() {
  const [popular, setPopular] = useState([]);
  const [topViewer, setTopViewer] = useState([]);
  const [listNewest, setListNewest] = useState([]);
  const [topCateList, setTopCateList] = useState([]);

  useEffect(()=>{
    const fetchProduct = async ()=>{
      const basicInfoList = await basicInfoApi.get(1)
      console.log(basicInfoList)
    }
    fetchProduct()
  },[])

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
