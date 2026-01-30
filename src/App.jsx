import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sideber from "./components/Sideber";
import Home from "./pages/Home";
import LinkPage from "./pages/LinkPage";
import DisabledPage from "./pages/DisabledPage";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sideber />
        <main className="flex-1 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/link" element={<LinkPage />} />
            <Route path="/disabled" element={<DisabledPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
