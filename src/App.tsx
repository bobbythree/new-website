import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

