import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CamperPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
