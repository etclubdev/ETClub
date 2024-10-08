import React, { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import AboutClb from "../pages/about-clb";
import LayoutAdmin from "../pages/admin";

import AllCompetitionPage from "../pages/all-competition";
import CompetitionCompilationPage from "../pages/competition-compilation";
import EtNews from "../pages/et-news";
import HomePage from "../pages/homepage";
import InfoContestPage from "../pages/info-contest";
import OrganizationalStructure from "../pages/organizational-structure";
import StringVideoPage from "../pages/string-video-page";
import Partner from "../pages/admin/partner";

import HomePageAdmin from "../pages/admin/homepage";
import ThinkingAdmin from "../pages/admin/thinking";
import EditBanner from "../pages/admin/homepage/Edit";
import EditPartner from "../pages/admin/partner/Edit";
import EditThinking from "../pages/admin/thinking/Edit";
import ETNewsAdmin from "../pages/admin/etnews";
import EditETNews from "../pages/admin/etnews/Edit";
import SponsorAdmin from "../pages/admin/sponsor";
import EditSponsor from "../pages/admin/sponsor/Edit";
import CompetitionAdmin from "../pages/admin/competition";
import EditCompetition from "../pages/admin/competition/Edit";
import DetailDepartment from '../pages/detail-department';
import DetailNews from '../pages/detail-news';
import PageNotFound from '../pages/404';
import DetailBoardMem from '../pages/detailBoardMem';
import ResultCompetitionAdmin from '../pages/admin/result-competition';
import EditCompetitionResults from '../pages/admin/result-competition/Edit';
import MileStoneAdmin from '../pages/admin/timeline-competition';
import EditMileStone from '../pages/admin/timeline-competition/Edit';
import { Navigate } from 'react-router-dom'
import MemberAdmin from '../pages/admin/member'
import EditMember from '../pages/admin/member/Edit';
import LoginPage from '../pages/login';

const AppRoutes = () => {
  const location = useLocation();

  const id = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
  const excludedPaths = ['/', '/introduce/about-clb', '/introduce/cocaunhansu', '/tech-corner', '/tech-corner/ban-tin-ET', '/tech-corner/chuoi-hoat-dong', '/tech-corner/cuoc-thi-cong-nghe', `/cuoc-thi/${id}`, `/introduce/cocaunhansu/${id}`, `/tech-corner/ban-tin-ET/${id}`, '/cuoc-thi/tat-ca-cuoc-thi', '/tuyen-ctv', `/tech-corner/cuoc-thi/${id}`];
  const shouldShowHeaderAndFooter = excludedPaths.includes(location.pathname);

  const ProtectedRoute = ({ element }) => {
    const access_token = localStorage.getItem('access_token');

    // Nếu đã xác thực, hiển thị element, ngược lại chuyển hướng đến trang login
    return access_token ? (
      element
    ) : (
      <Navigate to="/login" replace={true} state={{ from: '/admin' }} />
    );
  };

  const RejectedRoute = ({ element }) => {
    const access_token = localStorage.getItem('access_token');

    // Nếu đã xác thực, hiển thị element, ngược lại chuyển hướng đến trang login
    return !access_token ? (
      element
    ) : (
      <Navigate to="/admin" replace={true} state={{ from: '/login' }} />
    );
  };
  return (
    <Fragment>
      {shouldShowHeaderAndFooter && <Header></Header>}
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <HomePage />
            </>
          }
        ></Route>
        <Route
          path='/introduce/about-clb'
          element={<AboutClb></AboutClb>}
        ></Route>
        <Route
          path='/introduce/cocaunhansu'
          element={<OrganizationalStructure></OrganizationalStructure>}
        ></Route>
        <Route
          path='/tech-corner'
          element={
            <>
              <p>Góc công nghệ</p>
            </>
          }
        ></Route>
        <Route
          path='/tech-corner/ban-tin-ET'
          element={<EtNews></EtNews>}
        ></Route>
        <Route
          path='/tech-corner/chuoi-hoat-dong'
          element={<StringVideoPage></StringVideoPage>}
        ></Route>
        <Route
          path='/tech-corner/cuoc-thi-cong-nghe'
          element={<CompetitionCompilationPage></CompetitionCompilationPage>}
        ></Route>
        <Route
          path='/tech-corner/cuoc-thi/:id'
          element={<InfoContestPage></InfoContestPage>}
        ></Route>
        <Route
          path='/introduce/cocaunhansu/:department'
          element={<DetailDepartment></DetailDepartment>}
        ></Route>
        <Route
          path='/introduce/cocaunhansu/ban-chu-nhiem'
          element={<DetailBoardMem></DetailBoardMem>}
        ></Route>
        <Route
          path='/tech-corner/ban-tin-ET/:id'
          element={<DetailNews></DetailNews>}
        ></Route>
        <Route
          path='/cuoc-thi/tat-ca-cuoc-thi'
          element={<AllCompetitionPage></AllCompetitionPage>}
        ></Route>
        {/* <Route
          path='/tuyen-ctv'
          element={
            <>
              <p>Tuyển ctv</p>
            </>
          }
        ></Route> */}
        <Route path='/login' element={<RejectedRoute element={<LoginPage />} />}>

        </Route>
        <Route
          path="/admin/"
          element={<ProtectedRoute element={<LayoutAdmin />} />}
        >
          <Route index element={<HomePageAdmin />}></Route>
          <Route path='/admin/edit' element={<EditBanner />}></Route>
          <Route path='/admin/partner' element={<Partner />}></Route>
          <Route path='/admin/partner/edit' element={<EditPartner />}></Route>
          <Route path='/admin/feeling' element={<ThinkingAdmin />}></Route>
          <Route path='/admin/feeling/edit' element={<EditThinking />}></Route>
          <Route path='/admin/member' element={<MemberAdmin />}></Route>
          <Route path='/admin/member/edit' element={<EditMember />}></Route>
          <Route path='/admin/etnews' element={<ETNewsAdmin />}></Route>
          <Route path='/admin/etnews/edit' element={<EditETNews />}></Route>
          <Route path='/admin/sponsor' element={<SponsorAdmin />}></Route>
          <Route path='/admin/sponsor/edit' element={<EditSponsor />}></Route>
          <Route
            path='/admin/competition/Edit'
            element={<EditCompetition />}
          ></Route>
          <Route
            path='/admin/competition'
            element={<CompetitionAdmin />}
          ></Route>

          <Route
            path='/admin/competition-results'
            element={<ResultCompetitionAdmin />}
          ></Route>
          <Route
            path='/admin/competition-results/Edit'
            element={<EditCompetitionResults />}
          ></Route>
          <Route
            path='/admin/milestone'
            element={<MileStoneAdmin />}
          ></Route>
          <Route
            path='/admin/milestone/edit'
            element={<EditMileStone />}
          ></Route>
        </Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}>

        </Route>
      </Routes>
      {shouldShowHeaderAndFooter && <Footer></Footer>}
    </Fragment>
  );
};
export default AppRoutes;
