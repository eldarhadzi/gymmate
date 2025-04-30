import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="md:mx-10">
      <div className="flex flex-col gap-14 my-10 mt-40 text-sm lg:grid lg:grid-cols-[3fr_1fr_1fr_1fr]">
         {/* ----- GymMate General Information ----- */}
        <div>
          <img className="mb-2 w-46" src={assets.logo_footer} alt="GymMate Footer Logo" />
          <p className="w-full text-gray-600 leading-6">
            GymMate - Your ultimate fitness companion. Find the best trainers, 
            follow the right programs, and achieve your goals—all in one platform. 
            Join us today and take your fitness journey to the next level!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-10 lg:contents">

          {/* ----- Footer Search Section ----- */}
          <div className="flex flex-col items-start sm:items-center w-full sm:w-auto">
            <p className="text-xl font-medium mb-2 sm:text-left">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600 items-start sm:items-center">
              <li><button onClick={() => { navigate('/'); scrollTo(0, 0); }}>Home</button></li>
              <li><button onClick={() => { navigate('/about'); scrollTo(0, 0); }}>About Us</button></li>
              <li><button onClick={() => { navigate('/contact'); scrollTo(0, 0); }}>Contact Us</button></li>
              <li><button onClick={() => { navigate('/privacy-policy'); scrollTo(0, 0); }}>Privacy Policy</button></li>
            </ul>
          </div>

          {/* ----- Social Media Section ----- */}
          <div className="flex flex-col items-start sm:items-center w-full sm:w-auto">
            <p className="text-xl font-medium mb-2">SOCIAL MEDIA</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="flex items-center gap-2">
                <img src={assets.facebook_icon} alt="Facebook Icon" className="w-9 h-9" />
                <span>FACEBOOK</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={assets.instagram_icon} alt="Instagram Icon" className="w-9 h-9" />
                <span>INSTAGRAM</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={assets.twitter_icon} alt="Twitter Icon" className="w-9 h-9" />
                <span>TWITTER</span>
              </li>
            </ul>
          </div>

          {/* ----- GymMate Contact Information ----- */}
          <div className="flex flex-col items-start sm:items-center w-full sm:w-auto">
            <p className="text-xl font-medium mb-2">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="flex items-center gap-2 hover:text-gray-700">
                <Phone size={18} />
                +387 62 343 456
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:gymmate12@gmail.com" className="hover:text-gray-700">
                  gymmate12@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

       {/* ----- Copyright Text ----- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 GymMate - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;


