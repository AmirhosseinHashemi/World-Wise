import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/FakeAuthContext";
import { CitiesProvider } from "./contexts/CitiesContext";

// import Homepage from "./pages/Homepage/Homepage";
// import Pricing from "./pages/Pricing&Product/Pricing";
// import Product from "./pages/Pricing&Product/Product";
// import Login from "./pages/Login/Login";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";
// import AppLayout from "./pages/AppLayout/AppLayout";

import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";

import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing&Product/Pricing"));
const Product = lazy(() => import("./pages/Pricing&Product/Product"));
const Login = lazy(() => import("./pages/Login/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="product" element={<Product />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
