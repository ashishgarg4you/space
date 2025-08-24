import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/hero/HeroSection";
import ProductsSection from "./components/Product/ProductsSection";
import Login from "./components/Login";
import PageWrapper from "./components/utils/PageWrapper"; // 👈 import wrapper

const HomePage = () => (
  <PageWrapper noPadding>   {/* hero needs no padding */}
    <HeroSection />
    <ProductsSection />
  </PageWrapper>
);

const ProductsPage = () => (
  <PageWrapper>
    <div className="container py-4">
      <h1 className="h3 mb-3">Our Products</h1>
      <ProductsSection />
    </div>
  </PageWrapper>
);

const ContactPage = () => (
  <PageWrapper>
    <div className="container py-4">
      <h1 className="h3 mb-3">Contact Us</h1>
    </div>
  </PageWrapper>
);

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <NavBar onLoginClick={() => setShowLogin(true)} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="*"
          element={
            <PageWrapper>
              <div className="container py-5">Not Found</div>
            </PageWrapper>
          }
        />
      </Routes>

      <Footer />

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLogin={async (form) => console.log("login", form)}
          onForgot={() => console.log("forgot")}
          onRegister={() => console.log("register")}
        />
      )}
    </>
  );
}
