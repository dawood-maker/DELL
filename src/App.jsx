import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sideber from "./components/Sideber";
import Home from "./pages/Home";
import LinkPage from "./pages/LinkPage";
import DisabledPage from "./pages/DisabledPage";
import About from "./pages/About"; // Correct import
import Contact from "./pages/Contact"; // Correct import

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
            <Route path="/about" element={<About />} /> {/* Correct name */}
            <Route path="/contact" element={<Contact />} /> {/* Correct name */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
