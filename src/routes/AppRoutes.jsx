import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import LoanApplicationPage from "../pages/LoanApplicationPage";
import SuccessPage from "../pages/SuccessPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/loan-form"
            element={<LoanApplicationPage />}
          />

          <Route
            path="/success"
            element={<SuccessPage />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRoutes;