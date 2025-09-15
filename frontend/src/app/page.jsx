'use client'
import React from 'react'
import { IconUser } from '@tabler/icons-react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <>
      {/* Navbar/Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* logo */}
          <a href="/" className="flex items-center gap-2 text-2xl font-bold text-black md:text-3xl">
            <img src="/realstate-removebg-preview.png" alt="Logo" className="h-16 w-auto" />
            <span className="text-2xl leading-tight">Property Wala</span>
          </a>

          {/* nav */}
          <nav className="hidden lg:flex gap-10">
            <a href="#" className="text-lg font-semibold text-indigo-500">Home</a>
            <a href="#" className="text-lg font-semibold text-gray-600 hover:text-indigo-500">Features</a>
            <a href="#" className="text-lg font-semibold text-gray-600 hover:text-indigo-500">Pricing</a>
            <a href="#" className="text-lg font-semibold text-gray-600 hover:text-indigo-500">About</a>
          </nav>

          {/* buttons */}
          <div className="flex items-center gap-4">
            <button className="rounded-lg border border-indigo-500 px-5 py-2 text-lg font-semibold text-indigo-600 hover:bg-indigo-50">
              Create Account
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-indigo-100 px-5 py-2 text-lg font-semibold text-indigo-600 hover:bg-indigo-200">
              <IconUser className="h-6 w-6" />
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section start */}
      <section className="relative w-full h-[90vh] flex items-center justify-center bg-gray-900">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&q=75&fit=crop&w=1600"
          alt="Luxury Apartments"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Darker Blue Overlay (better visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-900/70 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 text-white lg:px-12">
          <p className="mb-4 font-bold text-white md:mb-6 md:text-lg drop-shadow-lg">
            Welcome to Property Wala
          </p>

          <h1 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            Find Your Dream Property with Ease
          </h1>
          <p className="mb-8 text-gray-100 md:text-lg drop-shadow-md">
            Buy, sell, or rent flats, plots, and commercial spaces.
            Get verified listings with complete details including area, rooms, kitchens, bathrooms, and more.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-700 md:text-base"
            >
              Search Properties
            </a>
            <a
              href="#"
              className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-indigo-600 shadow-lg hover:bg-gray-100 md:text-base"
            >
              Find Flats & Apartments
            </a>
          </div>

        </div>
      </section>
      {/* Hero Section end */}

      {/* Property Search Section - Full Width Ribbon */}
      <section className="w-full bg-gray-100 py-6">
        <div className="w-full px-6">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Find Your Dream Property
          </h2>
          <div className="grid grid-cols-1 gap-4 rounded-xl bg-white p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-5">
            {/* Location */}
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />

            {/* Property Type */}
            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
              <option>Property Type</option>
              <option>Flat</option>
              <option>Apartment</option>
              <option>Plot</option>
              <option>Commercial</option>
            </select>

            {/* Price Range */}
            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
              <option>Price Range</option>
              <option>₹10L – ₹50L</option>
              <option>₹50L – ₹1Cr</option>
              <option>₹1Cr – ₹5Cr</option>
              <option>₹5Cr +</option>
            </select>

            {/* Bedrooms */}
            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-indigo-500 focus:ring focus:ring-indigo-200">
              <option>Bedrooms</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4+ BHK</option>
            </select>

            {/* Search Button */}
            <button className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>
      </section>
      {/* Property Search Section end*/}

      {/* Featured Properties Section start */}
      <section className="w-full bg-white py-8">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Featured Properties
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-xl border bg-white shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Luxury Apartment"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">Luxury Apartment</h3>
                <p className="text-sm text-gray-600">3 BHK · 1800 sq.ft · Mumbai</p>
                <p className="mt-3 text-xl font-bold text-indigo-600">₹1.2 Cr</p>
                <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border bg-white shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                alt="Modern Flat"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">Modern Flat</h3>
                <p className="text-sm text-gray-600">2 BHK · 1200 sq.ft · Delhi</p>
                <p className="mt-3 text-xl font-bold text-indigo-600">₹85 Lakh</p>
                <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border bg-white shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Residential Plot"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">Residential Plot</h3>
                <p className="text-sm text-gray-600">250 sq.yds · Noida</p>
                <p className="mt-3 text-xl font-bold text-indigo-600">₹70 Lakh</p>
                <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Properties Section end */}

      {/* Property Categories Section */}
      <section className="w-full bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Explore Property Types
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {/* Flats / Apartments */}
            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition">
              <img
                src="https://www.shutterstock.com/image-photo/part-modern-residential-apartment-flat-600nw-1544095958.jpg"
                alt="Flats & Apartments"
                className="h-40 w-full rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Flats & Apartments</h3>
              <p className="text-gray-600 text-center mt-2 text-sm">
                Browse a variety of flats and apartments in all major cities.
              </p>
            </div>

            {/* Plots */}
            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition">
              <img
                src="https://t3.ftcdn.net/jpg/06/29/77/62/240_F_629776270_D5wh0yAYyAbAmnhPjt97TfyLKIarkja3.jpg"
                alt="Plots"
                className="h-40 w-full rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Plots</h3>
              <p className="text-gray-600 text-center mt-2 text-sm">
                Find residential and commercial plots with verified details.
              </p>
            </div>

            {/* Villas */}
            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80"
                alt="Villas"
                className="h-40 w-full rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Villas</h3>
              <p className="text-gray-600 text-center mt-2 text-sm">
                Luxury villas in prime locations for premium living.
              </p>
            </div>

            {/* Commercial Spaces */}
            <div className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition">
              <img
                src="https://plus.unsplash.com/premium_photo-1664304066233-80febd2729b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tbWVyY2lhbCUyMHNwYWNlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Commercial Spaces"
                className="h-40 w-full rounded-lg object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">Commercial Spaces</h3>
              <p className="text-gray-600 text-center mt-2 text-sm">
                Offices, shops, and commercial properties for businesses.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Property Categories Section end */}

      {/* Why Choose Us Section */}
      <section className="w-full bg-gray-50 pt-6 pb-2">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Why Choose Property Wala
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Verified Listings */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Verified Listings"
                className="h-32 w-32 object-cover mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">Verified Listings</h3>
              <p className="text-gray-600 mt-2 text-sm">
                All properties are verified to ensure authenticity.
              </p>
            </div>

            {/* Easy Search */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1086/1086933.png"
                alt="Easy Search"
                className="h-32 w-32 object-cover mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">Easy Search</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Find your dream property quickly with advanced filters.
              </p>
            </div>

            {/* Best Prices */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="h-40 w-40 rounded-full bg-white flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src="https://t4.ftcdn.net/jpg/02/79/95/37/240_F_279953745_VjCCUq3EZDlNc4shp30ZrWbaHmcbDp9Y.jpg"
                  alt="Best Prices"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Best Prices</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Competitive pricing on all listed properties.
              </p>
            </div>




            {/* 24/7 Support */}
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                alt="24/7 Support"
                className="h-32 w-32 object-cover mb-4 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Our team is always ready to assist you with property queries.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}

      {/*  Testimonials Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Customer"
                className="h-20 w-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 text-center mb-3">
                "Property Wala helped me find my dream apartment in just a week!"
              </p>
              <h3 className="text-gray-800 font-semibold">Priya Sharma</h3>
            </div>
            {/* Testimonial 2 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="Customer"
                className="h-20 w-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 text-center mb-3">
                "Fast, reliable, and easy to use. Highly recommend Property Wala!"
              </p>
              <h3 className="text-gray-800 font-semibold">Rohit Mehta</h3>
            </div>
            {/* Testimonial 3 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Customer"
                className="h-20 w-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 text-center mb-3">
                "A seamless experience from searching to closing the deal!"
              </p>
              <h3 className="text-gray-800 font-semibold">Anita Kapoor</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ How It Works Section */}
      <section className="w-full bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            How It Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 text-indigo-600 text-4xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2">Search Property</h3>
              <p className="text-gray-600 text-sm">Find your ideal property using our filters and search tools.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 text-indigo-600 text-4xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2">Contact Seller / Agent</h3>
              <p className="text-gray-600 text-sm">Get in touch directly with the seller or agent to arrange a visit.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <div className="mb-4 text-indigo-600 text-4xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2">Close the Deal</h3>
              <p className="text-gray-600 text-sm">Finalize your property purchase or rental securely and easily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Call to Action Section */}
      <section className="w-full bg-indigo-600 py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to find your dream home?</h2>
          <p className="mb-8 text-lg md:text-xl">Sign up now and start exploring thousands of properties.</p>
          <a
            href="#"
            className="inline-block rounded-lg bg-white px-8 py-4 text-indigo-600 font-semibold text-lg hover:bg-gray-100 transition"
          >
            Create Account
          </a>
        </div>
      </section>

      {/* 8️⃣ Newsletter / Contact Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Stay Updated</h2>
          <p className="mb-6 text-gray-600">Get the latest property updates directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
            <button className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 9️⃣ Footer */}
      <footer className="w-full bg-gray-800 py-10 text-white">
        <div className="container mx-auto px-6 grid gap-10 sm:grid-cols-3">
          {/* Brand + Logo */}
          <div className="flex justify-between items-center">
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <img
                  src="/realstate-removebg-preview.png" // replace with your logo path
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
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Contact
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
        <p className="mt-8 text-center text-gray-500 text-sm">
          © 2025 Property Wala. All rights reserved.
        </p>
      </footer>

    </>
  )
}

export default Home;