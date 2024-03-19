import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignInPage } from "./pages/SignInPage/SignInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Layout } from "./components/Layout/Layout";

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
