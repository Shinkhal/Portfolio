import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Confirmation from './Pages/Confirmation';
import Technologies from './Pages/Technologies';
import ReCaptcha from './Components/ReCaptcha';
import Loader from './Components/Loader'; // Import Loader component

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async (token) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://portfolio-production-18ef.up.railway.app/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      if (data.success) {
        setIsVerified(true);
      } else {
        alert('reCAPTCHA verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying reCAPTCHA:', error);
      alert('An error occurred while verifying reCAPTCHA. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Router>
        {isLoading ? (
          <Loader /> // Show Loader component while loading
        ) : !isVerified ? (
          <ReCaptcha siteKey="6LeeWvkpAAAAAJmoGf07vNw5sAoeL6CScCwTViMH" onVerify={handleVerify} />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
