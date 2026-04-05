import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import CareersPage from "./pages/CareersPage";
import SfsvcPage from "./pages/SfsvcPage";
import NermnPage from "./pages/NermnPage";
import NssimPage from "./pages/NssimPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/products/sfsvc" element={<SfsvcPage />} />
        <Route path="/products/nermn" element={<NermnPage />} />
        <Route path="/products/nssim" element={<NssimPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
