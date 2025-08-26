// App.js
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./components/Data/firebase";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/hero/HeroSection";
import ProductsSection from "./components/Product/ProductsSection";
import Login from "./components/Login";
import Register from "./components/Register";
import PageWrapper from "./components/utils/PageWrapper";

const HomePage = () => (
  <PageWrapper noPadding>
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
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Listen for login/logout changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <NavBar
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onLogoutClick={() => signOut(auth)}
      />

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
          onLogin={async () => setShowLogin(false)}
          onForgot={() => console.log("forgot")}
          onRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}
