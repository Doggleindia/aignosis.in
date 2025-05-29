import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import laptop from '../../assets/laptop l1.png';

gsap.registerPlugin(ScrollTrigger);

const stepData = [
  {
    bgColor: '#43284C4D',
    step: 'Step 1',
    title: 'Quick Screening Process',
    description:
      'In just 5 mins, you child watches a video and with all the comfort we rule out any possibilites of developmental delay',
    image1: laptop,
    image2: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/aboutus.png',
  },
  {
    bgColor: '#5d15758c',
    step: 'Step 2',
    title: 'Detailed Assessment',
    description:
      "We blend state-of-the-art technology with real understanding of child development. While your little one enjoys playful moments on screen, our smart tools observe key milestones naturally - turning friendly interactions into meaningful guidance for your family's journey.",
    image1: laptop,
    image2: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/2.jpg',
  },
  {
    bgColor: '#2e093a8c',
    step: 'Step 3',
    title: 'A Complete Picture',
    description:
      "We believe in combining the best of both worlds - our advanced screening tools and expert human insight. After the initial assessment, a qualified psychologist reviews your child's interactions and provides professional observations. This dual approach helps create a thorough understanding of your child's developmental path.",
    image1: laptop,
    image2: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/3.jpg',
  },
  {
    bgColor: '#5E3C69',
    step: 'Step 4',
    title: 'Your Path Forward',
    description:
      "Based on your child's unique assessment, our expert team designs a personalized blend of therapies and support strategies. From early intervention and behavioural guidance to occupational training, we create a comprehensive approach that grows with your child, ensuring they receive the right support at the right time.",
    image1: laptop,
    image2: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/4.jpg',
  },
  {
    bgColor: '#952981',
    step: 'Step 5',
    title: 'Growth & Progress',
    description:
      "Our commitment doesn't end with the assessment. We provide continuous guidance, track progress milestones, and adjust support strategies as your child grows. Regular check-ins ensure the plan evolves with your child's changing needs.",
    image1: laptop,
    image2: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/5.jpg',
  },
];

const Endrosed = () => {
  const horizontalScrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateScrollTrigger = () => {
      const horizontalScroll = horizontalScrollRef.current;
      const container = containerRef.current;

      if (!horizontalScroll || !container) return;

      const totalWidth = stepData.length * window.innerWidth;

      gsap.set(horizontalScroll, {
        width: `${totalWidth}px`, // Ensure width is set properly
      });

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clear old triggers

      gsap.to(horizontalScroll, {
        x: () => -(totalWidth - window.innerWidth), // Scroll the exact width
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${totalWidth}`, // Set exact scroll length
          pin: true,
          scrub: 1, // Smooth scrolling
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalculate on resize
        },
      });
    };

    updateScrollTrigger();
    window.addEventListener('resize', updateScrollTrigger);

    return () => {
      window.removeEventListener('resize', updateScrollTrigger);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} className="h-screen w-full overflow-hidden">
        <div ref={horizontalScrollRef} className="flex h-screen overflow-hidden">
          {stepData.map((step, index) => (
            <div
              key={index}
              className="flex h-screen w-screen flex-shrink-0 flex-col items-center justify-center"
              style={{ backgroundColor: step.bgColor }}
            >
              <span className="font-raleway text-sm font-semibold text-[#B740A1]">{step.step}</span>
              <h2 className="text-center font-manrope text-3xl font-bold text-white md:text-5xl">{step.title}</h2>
              <div className="relative flex h-[50vw] w-full items-center justify-center md:h-[30vw]">
                <img src={step.image1} className="relative h-full w-full object-contain" alt="Laptop" />
                <div className="absolute top-[4vw] h-[41vw] w-[60vw] md:h-[21.5vw] md:w-[35vw]">
                  <img className="h-full w-full object-cover" src={step.image2} alt="Screen Content" />
                </div>
              </div>
              <h4 className="mt-2 px-[15vw] text-center font-manrope text-sm leading-6 text-white md:text-base">
                {step.description}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Endrosed;
