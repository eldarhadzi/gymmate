import React from 'react';
import { assets } from '../assets/assets';

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-[50px] py-10">
      <h2 className="text-center text-gray-700 font-bold text-3xl tracking-wide">
        GALLERY
      </h2>
      <p className="text-center text-gray-500 text-sm mt-1 mb-8 font-light">
        Come See What We’re About
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="col-span-2 border-2 border-secondary p-2 hover:border-primary transition duration-300">
          <div className="overflow-hidden relative">
            <img
              src={assets.gallery5}
              alt="Man and woman working out with battle ropes in gym"
              className="w-full h-[200px] object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="border-2 border-secondary p-2 hover:border-primary transition duration-300">
          <div className="overflow-hidden relative">
            <img
              src={assets.gallery13}
              alt="Man running on treadmill near window"
              className="w-full h-[200px] object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="border-2 border-secondary p-2 row-span-2 h-full hover:border-primary transition duration-300">
          <div className="overflow-hidden relative">
            <img
              src={assets.gallery7}
              alt="Close up of stacked dumbbells in gym"
              className="w-full h-[440px] object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="border-2 border-secondary p-2 row-span-2 h-full hover:border-primary transition duration-300">
          <div className="overflow-hidden relative">
            <img
              src={assets.gallery6}
              alt="Man climbing rope in gym"
              className="w-full h-[440px] object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="border-2 border-secondary p-2 hover:border-primary transition duration-300">
          <div className="overflow-hidden relative">
            <img
              src={assets.gallery2}
              alt="Black punching bag hanging in gym"
              className="w-full h-[200px] object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="border-2 border-secondary p-2 hover:border-primary transition duration-300">
          <div className="overflow-hidden relative">
            <img
              src={assets.gallery9}
              alt="Man and woman boxing training with pads"
              className="w-full h-[200px] object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="border-2 border-secondary p-2 hover:border-primary transition duration-300">
          <div className="overflow-hidden relative">
            <img
              src={assets.gallery4}
              alt="Man doing lunge with dumbbells in gym"
              className="w-full h-[200px] object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="border-2 border-secondary p-2 hover:border-primary transition duration-300">
          <div className="overflow-hidden relative">
            <img
              src={assets.gallery10}
              alt="Close up of barbell weight on floor"
              className="w-full h-[200px] object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
        <div className="border-2 border-secondary p-2 hover:border-primary transition duration-300">
          <div className="overflow-hidden relative">
            <img
              src={assets.gallery1}
              alt="Man working out with battle ropes near window"
              className="w-full h-[200px] object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

