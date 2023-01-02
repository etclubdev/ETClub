import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import AboutClb from "../pages/about-clb";
import AllCompetitionPage from "../pages/all-competition";
import CompetitionCompilationPage from "../pages/competition-compilation";
import EtNews from "../pages/et-news";
import HomePage from "../pages/homepage";
import InfoContestPage from "../pages/info-contest";
import OrganizationalStructure from "../pages/organizational-structure";
import StringVideoPage from "../pages/string-video-page";

const AppRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Header></Header>}>
          <Route
            exact
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          ></Route>
          <Route
            path="/introduce/about-clb"
            element={<AboutClb></AboutClb>}
          ></Route>
          <Route
            path="/introduce/cocaunhansu"
            element={<OrganizationalStructure></OrganizationalStructure>}
          ></Route>
          <Route
            path="/tech-corner"
            element={
              <>
                <p>Góc công nghệ</p>
              </>
            }
          ></Route>
          <Route
            path="/tech-corner/ban-tin-ET"
            element={<EtNews></EtNews>}
          ></Route>
          <Route
            path="/tech-corner/chuoi-hoat-dong"
            element={<StringVideoPage></StringVideoPage>}
          ></Route>
          <Route
            path="/tech-corner/cuoc-thi-cong-nghe"
            element={<CompetitionCompilationPage></CompetitionCompilationPage>}
          ></Route>
          <Route
            path="/cuoc-thi/techconomy"
            element={<InfoContestPage></InfoContestPage>}
          ></Route>
          <Route
            path="/cuoc-thi/tat-ca-cuoc-thi"
            element={<AllCompetitionPage></AllCompetitionPage>}
          ></Route>
          <Route
            path="/tuyen-ctv"
            element={
              <>
                <p>Tuyển ctv</p>
              </>
            }
          ></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </Fragment>
  );
};
export default AppRoutes;
