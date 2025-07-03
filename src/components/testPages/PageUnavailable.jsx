const PageUnavailable = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] text-center">
      {/* Step Progress Indicator */}
      {/* <StepProgress /> */}

      {/* Aignosis Title with Glow Effect */}
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
        <h1 className="relative z-10 font-montserrat text-5xl font-semibold text-[#E3E2E5]">Aignosis</h1>
      </div>

      {/* Big Thank You Message */}
      <div className="mt-4">
        <h2 className="font-manrope text-6xl font-bold text-[#FFFFFF]">License Required</h2>
      </div>

      {/* Thank You Paragraph */}
      <div className="mt-6 max-w-2xl px-6 font-raleway text-[#F6E8FB]">
        <p className="text-center text-lg">
          This page is currently unavailable for you. Please acquire a license with Aignosis to access this page. We
          sincerely apologize for the inconvenience.
        </p>
      </div>
    </div>
  );
};

export default PageUnavailable;
