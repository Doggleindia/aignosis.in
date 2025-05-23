import React from 'react';

const ErrorCameraMicAccess = () => {
  const errorStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1e0a2d', // Light red background
    color: '#f1f1f1', // Dark red text
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const errorTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const errorMessageStyle = {
    fontSize: '1.2rem',
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] text-center">
      {/* Step Progress Indicator */}
      {/* <StepProgress /> */}

      {/* Ai.gnosis Title with Glow Effect */}
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
        <h1 className="relative z-10 font-montserrat text-5xl font-semibold text-[#E3E2E5]">Ai.gnosis</h1>
      </div>

      {/* Big Thank You Message */}
      <div className="mt-4">
        <h2 className="font-manrope text-6xl font-bold text-[#FFFFFF]">Error</h2>
      </div>

      {/* Thank You Paragraph */}
      <div className="mt-6 max-w-2xl px-6 font-raleway text-[#F6E8FB]">
        <p className="text-center text-lg">
          We're having trouble accessing your webcam or microphone, which is required for this experience to work
          correctly. This issue is usually caused by browser permissions being denied, device settings blocking access,
          or another application using the camera or mic. Please ensure that you've granted the necessary permissions
          and try going back to the previous page.
        </p>
      </div>
    </div>
  );
};

export default ErrorCameraMicAccess;
