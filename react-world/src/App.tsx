import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/404/404";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
