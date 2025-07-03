const Divider = ({ title, desc, subtitle }) => {
  return (
    <>
      <div className="hidden h-auto flex-col items-center justify-center px-4 md:flex md:h-[auto] md:px-0">
        {/* DIVIDER CODE */}
        <div className={`flex flex-row items-center justify-center space-x-4`}>
          <div className="flex flex-row items-center space-x-4">
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
              }}
            ></span>

            {/* Title */}
            <h3 className="text-[24px] font-medium text-[#F1C6FE] max-sm:text-sm">{title}</h3>
          </div>

          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
            }}
          ></span>
        </div>

        {/* Subtitle and Description */}
        <span className="p-2 font-raleway text-3xl font-bold text-[#F6E8FB] max-sm:text-xl">{subtitle}</span>
        <span className="font-inter text-1xl p-1 text-white">{desc}</span>
      </div>

      {/* Mobile Version */}
      <div className="m-[auto] mt-[10vw] flex h-auto flex-col items-center justify-center px-4 md:hidden md:h-[auto] md:px-0">
        {/* DIVIDER CODE */}
        <div
          className={`flex flex-row items-center justify-center ${
            title === 'Transformative' ? '-ml-[8vw]' : title === 'Know More' ? 'ml-[0vw]' : 'ml-[8vw]'
          } space-x-4`}
        >
          <div className="flex flex-row items-center space-x-2">
            {/* Image Before Title (if any) */}

            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
              }}
            ></span>

            {/* Wrapper for Title & Images */}

            {/* Title */}
            <h3 className="text-center text-[24px] font-medium text-[#F1C6FE] max-sm:text-sm">{title}</h3>

            {/* Image After Title (if any) */}
          </div>

          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
            }}
          ></span>
        </div>

        <span className="p-2 text-center font-raleway text-3xl font-bold text-[#F6E8FB] max-sm:text-xl">
          {subtitle}
        </span>
        <span className="font-inter text-1xl p-1 text-center text-white">{desc}</span>
      </div>
    </>
  );
};

export default Divider;
