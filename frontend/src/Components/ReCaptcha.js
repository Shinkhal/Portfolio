import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptcha = ({ siteKey, onVerify }) => {
  const [verified, setVerified] = useState(false);

  const handleVerify = (token) => {
    setVerified(true);
    onVerify(token);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      {!verified ? (
        <div className="w-full max-w-md mx-auto">
          <ReCAPTCHA
            sitekey={"6LeeWvkpAAAAAJmoGf07vNw5sAoeL6CScCwTViMH"}
            onChange={handleVerify}
          />
        </div>
      ) : (
        <p className="text-white">Verification successful!</p>
      )}
    </div>
  );
};

export default ReCaptcha;
