import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaWhatsapp, FaViber } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6">
      {/* Top Title */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-black font-semibold">US</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row mt-10 w-full max-w-6xl gap-10">
        {/* Left Side: Contact Info */}
        <div className="flex-1 p-6 pt-32 space-y-8">
          {/* Address */}
          <div className="flex items-center space-x-4">
            <MapPin className="text-primary" size={34} />
            <p>Fahri Korutürk, Natoyolu Caddesi No:6, <br /> 06285 Mamak/Ankara, Turkey</p>
          </div>
          <hr className="border-green-500" />

          {/* Email */}
          <div className="flex items-center space-x-4">
            <Mail className="text-primary" size={34} />
            <p>gymmate12@gmail.com</p>
          </div>
          <hr className="border-green-500" />

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <Phone className="text-primary" size={34} />
            <p>+387 62 343 456</p>
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-600" size={20} />
              <FaViber className="text-purple-600" size={20} />
            </div>
          </div>
        </div> {/* <-- this was missing before! closing left side properly */}

        {/* Right Side: Contact Form */}
        <div className="flex-1 p-6">
          <h2 className="text-3xl font-semibold mb-4">
            Have a question? <br /> We’d love to hear from you!
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Input the form below, and we will get back to you as soon as possible.
          </p>

          <form className="space-y-4">
            {/* First and Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 border border-green-500 p-2 rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 border border-green-500 p-2 rounded"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-green-500 p-2 rounded"
            />

            {/* Telephone */}
            <input
              type="tel"
              placeholder="Telephone (optional)"
              className="w-full border border-green-500 p-2 rounded"
            />

            {/* Topic Dropdown */}
            <select className="w-full border border-green-500 p-2 rounded text-gray-500">
              <option>Choose a topic...</option>
              <option>General Inquiry</option>
              <option>Membership Inquiry</option>
              <option>Support</option>
            </select>

            {/* Message */}
            <textarea
              placeholder="Write out your message here..."
              className="w-full h-52 border border-green-500 p-2 rounded"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className=" bg-primary text-white text-md px-28 py-4 rounded-full my-6 hover:bg-hover transition block mx-auto"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;


