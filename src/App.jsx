import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterLoginForm } from "./components/RegisterLoginForm";
import { AppContainer } from "./components/AppContainer";
import { Home } from "./components/Home";
import { Product } from "./components/Product";

function App() {
  return (
    <div className="bg-[#E2E4EB]">
      <AppContainer>
        <Navbar />
      </AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterLoginForm />} />
          <Route path="/login" element={<RegisterLoginForm isLogin />} />
          <Route path={`/product/:id`} element={<Product />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
