// frontend/src/components/Confirmation.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Confirmation() {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(timer);
      navigate('/');
    }

    return () => clearInterval(timer);
  }, [seconds, navigate]);

  return (
    <main className="container mx-auto max-width pt-10 pb-20  bg-white dark:bg-dark-mode">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-dark-heading dark:text-light-heading font-semibold md:font-bold mb-8">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
          Thank you for reaching out. Your message has been successfully sent. We will get back to you shortly.
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
          You will be redirected to the home page in {seconds} seconds.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </main>
  );
}

export default Confirmation;
