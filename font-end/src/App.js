import { useEffect } from "react";
import AppRoutes from "./routes";
import etNewsApi from "./api/etNewsApi";
import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./pages/admin";
import HomePageAdmin from "./pages/admin/homepage";
import Partner from "./pages/admin/partner";
import Thinking from "./pages/admin/thinking";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FilesUploadComponent from "./components/files-upload-component";
function App() {
  

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
