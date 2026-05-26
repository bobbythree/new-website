import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

