import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Welcome to Property Wala – Your trusted partner in finding dream homes and investment opportunities.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
              alt="About Property Wala"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Property Wala, we aim to simplify real estate for everyone. Whether you are buying, selling, or renting, 
              our platform provides verified listings, transparent pricing, and expert support.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With years of experience, we have built trust among thousands of happy customers across India by 
              connecting people to their perfect homes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Mission & Vision</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To make property buying and selling easier, faster, and more transparent by providing the 
                best technology and customer service.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To become India’s most trusted real estate platform, empowering millions to achieve their dream 
                of owning a property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose Property Wala?</h2>
        <div className="grid gap-8 md:grid-cols-4">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Verified Listings</h3>
            <p className="text-gray-600 text-sm">All properties are checked and verified for authenticity.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Best Prices</h3>
            <p className="text-gray-600 text-sm">We ensure you get the most competitive prices in the market.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Easy Search</h3>
            <p className="text-gray-600 text-sm">Find your dream property with powerful filters and quick results.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">Our team is available round the clock to help you.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to know more?</h2>
        <p className="mb-6">Join Property Wala today and start your property journey with us.</p>
        <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  )
}

export default About;