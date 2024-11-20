import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sell from "./Sell";
import Pricing from "./Componets/pricing/pricing";
import About from "./Componets/about/about";
import Story from "./Componets/story/story";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sell />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={<Story />} />
        <Route path="*" element={<h1>404 page not found :)</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
