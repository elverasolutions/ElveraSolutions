import { Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Industries } from "./pages/Industries";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0A]" style={{ overflowX: "clip" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div className="relative z-[7] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <Footer />
      </div>
    </div>
  );
}