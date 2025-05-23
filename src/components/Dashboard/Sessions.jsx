import React from 'react';
import icon1 from '../../assets/factorimpacting/img1.png'; // Replace with actual paths
import icon2 from '../../assets/factorimpacting/img2.png';
import icon3 from '../../assets/factorimpacting/img3.png';
import icon4 from '../../assets/factorimpacting/img4.png';
import icon5 from '../../assets/factorimpacting/img5.png';
import icon6 from '../../assets/factorimpacting/img6.png';
import { Link } from 'react-router-dom';

const sessionsData = [
  {
    imageUrl: icon1,
    url: '/assessments-evaluation',
    title: 'Assessments & Evaluation',
    subtitle: 'Educational, Psychological & Social Skills Assessment',
  },
  {
    imageUrl: icon2,
    url: '/speech-language',
    title: 'Speech & Language',
    subtitle: 'Support for Speech Delays & Communication Needs',
  },
  {
    imageUrl: icon3,
    url: '/behaviour-therapy',
    title: 'Behaviour Therapy',
    subtitle: 'Guidance for Anxiety & Behavioral Health',
  },
  {
    imageUrl: icon4,
    url: '/occupational-therapy',
    title: 'Occupational Therapy',
    subtitle: 'Motor Skills, Independence & Confidence Building',
  },
  {
    imageUrl: icon5,
    url: '/special-education',
    title: 'Special Education',
    subtitle: 'Academic Support in Core Subjects',
  },
  // {
  //         imageUrl: icon6,
  //         title: "6. Irregular Routines",
  //         subtitle: "Inconsistent daily schedules can disrupt a child’s ability to develop structured habits and focus.",
  //     },
];

const Sessions = () => {
  return (
    <div className="w-full py-10 font-manrope md:px-5">
      <h2 className="mb-6 text-base font-semibold text-white">Sessions</h2>
      <div className="mx-auto grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {sessionsData.map((session, index) => (
          <Link
            key={index}
            to={session.url}
            className="rounded-md bg-[#43284C] bg-opacity-30 p-6 text-center shadow-lg"
          >
            <div className="mb-4 flex justify-center">
              <img src={session.imageUrl} alt={session.title} className="h-16 w-16" />
            </div>
            <h3 className="mb-2 text-xs font-semibold text-white md:text-base">{session.title}</h3>
            <p className="text-[8px] text-white md:text-xs">{session.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sessions;
