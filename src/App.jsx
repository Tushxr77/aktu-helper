import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Papers from "./pages/Papers";
import Upload from "./pages/Upload";
import About from "./pages/About";
import Footer from "./components/Footer";
import Notes from "./pages/Notes";
import Updates from "./pages/Updates";
import SubjectPage from "./pages/SubjectPage";
import PaperList from "./pages/PaperList";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
  <Navbar />
        
        <ScrollToTop />


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/papers" element={<Papers />} />
    <Route path="/upload" element={<Upload />} />
    <Route path="/about" element={<About />} />
    <Route path="/subject/:name/papers" element={<PaperList />} />
    <Route path="/notes" element={<Notes />} />
    <Route path="/updates" element={<Updates />} />
    <Route path="/subject/:name" element={<SubjectPage />} />
  </Routes>

  <Footer />
</>
  );
}

export default App;