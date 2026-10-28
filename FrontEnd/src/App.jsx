import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}