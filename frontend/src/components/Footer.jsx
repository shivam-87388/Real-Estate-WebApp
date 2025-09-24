import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css' 

const Footer = () => {
  return (
   
    <footer className="w-full bg-gray-800 py-10 text-white">
  <div className="container mx-auto px-6 grid gap-10 sm:grid-cols-4">
    {/* Logo */}
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <img
          src="/realstate-removebg-preview.png" 
          alt="Property Wala Logo"
          className="h-12 w-auto"
        />
        <h3 className="font-bold text-lg">Property Wala</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
        Your trusted real estate platform for buying, selling, and renting
        properties across India.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="font-bold text-lg mb-4">Links</h3>
      <ul className="text-gray-400 space-y-2 text-sm">
        <li>
          <a href="/about-us" className="hover:text-white transition-colors duration-200">
            About
          </a>
        </li>
        <li>
          <a href="/contact-us" className="hover:text-white transition-colors duration-200">
            Contact-us
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Terms
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Privacy
          </a>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="font-bold text-lg mb-4">Contact</h3>
      <ul className="text-gray-400 space-y-3 text-sm">
        <li className="flex items-center gap-2">
          <i className="fa-solid fa-phone text-green-500"></i>
          <span>+91 98765 43210</span>
        </li>
        <li className="flex items-center gap-2">
          <i className="fa-solid fa-envelope text-blue-400"></i>
          <span>support@propertywala.com</span>
        </li>
        <li className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot text-red-500"></i>
          <span>New Delhi, India</span>
        </li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="font-bold text-lg mb-4">Follow Us</h3>
      <ul className="space-y-3 text-sm">
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-green-500 transition-transform transform hover:scale-105"
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            <span className="ml-2">WhatsApp</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-pink-500 transition-transform transform hover:scale-105"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram text-2xl"></i>
            <span className="ml-2">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-blue-600 transition-transform transform hover:scale-105"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook text-2xl"></i>
            <span className="ml-2">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-105"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin text-2xl"></i>
            <span className="ml-2">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-sky-500 transition-transform transform hover:scale-105"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-twitter text-2xl"></i>
            <span className="ml-2">Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Copyright */}
  <p className="mt-8 text-center text-gray-500 text-sm ">
    © 2025 Property Wala. All rights reserved.
  </p>
</footer>

  )
}

export default Footer;