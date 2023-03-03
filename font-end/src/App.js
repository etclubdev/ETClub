import { useEffect } from "react";
import AppRoutes from "./routes";
import etNewsApi from "./api/etNewsApi";

function App() {
  useEffect(()=>{
    const fetchNews = async ()=>{
      const listNews = await etNewsApi.getAll()
      console.log(listNews)
      
    }
    fetchNews()
  },[])

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
