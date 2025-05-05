import React from 'react';
import {FaWhatsapp} from "react-icons/fa"
import {SiLinphone } from 'react-icons/si';

const Contact = () => {
  const phoneNumber = '09165311630';
  const whatsappNumber = '2349165311630'; // International format without '+'

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-20 px-4 dark:bg-gray-900 dark:text-white bg-white text-black">
      <div className="max-w-xl w-full text-center space-y-10">

        <h1 className="text-4xl font-black">Contact Me</h1>
        <p className="text-gray-700 dark:text-gray-300">
          I'm open to collaborations, contracts, or technical consultations.
        </p>

        <div className="flex justify-center gap-10 mt-8">
          {/* Phone Call */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex flex-col items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 transition"
          >
            <SiLinphone className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-green-600 dark:text-green-400 hover:text-green-800 transition"
          >
            <FaWhatsapp className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
        </div>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Phone: <span className="font-medium">{phoneNumber}</span>
        </div>

      </div>
    </div>
  );
};

export default Contact;
