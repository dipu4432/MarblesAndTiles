import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import HOME from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <NavBar />

      {/* Routes */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HOME />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
