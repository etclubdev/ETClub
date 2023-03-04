import { useEffect } from "react";
import AppRoutes from "./routes";
import etNewsApi from "./api/etNewsApi";
import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./pages/admin";
import HomePageAdmin from "./pages/admin/homepage";
import Partner from "./pages/admin/partner";
import Thinking from "./pages/admin/thinking";

function App() {
  useEffect(() => {
    const fetchNews = async () => {
      const listNews = await etNewsApi.getAll();
      console.log(listNews);
    };
    fetchNews();
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
