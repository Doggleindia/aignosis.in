const Trusted = () => {
  return (
    <div className="bg-[#1A0C25]">
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <h3 className="font-raleway text-[48px] text-[#F6E8FB] max-sm:text-[24px] md:mr-[20px]">
            Trusted by Experts in Autism Detection
          </h3>
        </div>
        <div className="flex flex-col gap-8">
          <div className="fle mx-auto items-center justify-center max-sm:w-full md:w-[800px]">
            <p className="text-center text-[#F6E8FB]">
              Hear how Aignosis has transformed early autism detection for healthcare professionals, improving accuracy
              and patient care in clinics worldwide.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="bg-gradient-radial flex items-center justify-center gap-6 from-[#1A0C25] to-[#43284C] max-sm:flex-col">
              <div
                className="w-full rounded-xl p-6 text-white shadow-lg md:w-[40vw]"
                style={{
                  background: 'radial-gradient(168.91% 101.44% at 50% 39.02%, #1A0C25 20%, #43284C 100%)',
                }}
              >
                <p className="mb-4 font-raleway text-lg leading-relaxed text-[#F6E8FB]">
                  "As a pediatrician with over 40 years of experience, I believe early detection of autism and
                  developmental disorders is critical. This test is a groundbreaking tool that allows us to detect early
                  signs with high accuracy. It empowers parents to take action sooner, improving outcomes for children."
                </p>
                <hr className="my-4 border-t border-[#811F67]" />
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Dr. V Ajay kumar</p>
                    <p className="text-sm text-gray-400"> Pediatrician & Developmental Expert</p>
                  </div>
                </div>
              </div>

              <div
                className="w-full rounded-xl p-6 text-white shadow-lg md:w-[40vw]"
                style={{
                  background: 'radial-gradient(168.91% 101.44% at 50% 39.02%, #1A0C25 20%, #43284C 100%)',
                }}
              >
                <p className="mb-4 font-raleway text-lg leading-relaxed text-[#F6E8FB]">
                  "The early autism detection test is a significant step forward in pediatric care. It offers a
                  non-invasive, cost-effective, and efficient way to screen children for neurodevelopmental disorders. I
                  wholeheartedly support this initiative, as it provides essential data for timely intervention."
                </p>
                <hr className="my-4 border-t border-[#811F67]" />
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Dr. Ramesh Agarwal</p>
                    <p className="text-sm text-gray-400">Head of Child Development, AIIMS Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
