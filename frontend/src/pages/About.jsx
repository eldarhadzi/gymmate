import React from 'react'
import { assets } from '../assets/assets'
import Gallery from '../components/Gallery'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-semibold'>US</span>
        </p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12 '>
          <img className='w-full md:max-w-[380px]' src={assets.about_image} alt="" />
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-sm text-gray-600'>
          <p>
            At GymMate, we are redefining the way people connect with personal trainers and exercise programs. Our platform is designed to help 
            clients find the perfect trainer based on their goals, preferred gym locations, and workout preferences. Whether you're looking for 
            strength training, weight loss, or specialized coaching, GymMate provides an easy-to-use solution that brings fitness professionals and 
            clients together in one place. We understand that every individual has unique needs, and our goal is to make high-quality training accessible, 
            flexible, and tailored to each persons journey.
          </p>
          <p>
            Beyond just matching clients with trainers, GymMate also offers personalized workout programs to ensure that each user follows the right 
            plan to achieve their goals. By leveraging a network of expert trainers across multiple gyms, we empower individuals to train smarter and more effectively. 
            Our mission is to create a dynamic fitness ecosystem where trainers grow their businesses, and clients gain the motivation, knowledge, and support they need 
            to succeed. With GymMate, fitness is no longer about guesswork—it is about real progress, real results, and a community that supports you every step of the way.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            To revolutionize the fitness industry by making expert training and personalized workout programs accessible to everyone. We aim to connect trainers and clients 
            seamlessly, creating a fitness experience that is flexible, effective, and results-driven.
          </p>
        </div>
      </div>
      <Gallery />
    </div>
  )
}

export default About
