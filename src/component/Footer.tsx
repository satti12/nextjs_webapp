import React from "react";

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-800 text-white">
      <div className="flex flex-wrap justify-between items-center gap-6">
        {/* About Section */}
        <div className="flex-1 text-center md:text-left ">
          <h3 className="text-lg font-semibold">Find Us</h3>
          <p className="text-sm mt-2">
            We are committed to delivering the best products and services to our
            customers worldwide.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex-1 text-center ">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="flex-1 text-center md:text-right">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li>
              <a href="#web-development" className="hover:underline">
                Web Development
              </a>
            </li>
            <li>
              <a href="#app-development" className="hover:underline">
                App Development
              </a>
            </li>
            <li>
              <a href="#seo-optimization" className="hover:underline">
                SEO Optimization
              </a>
            </li>
            <li>
              <a href="#digital-marketing" className="hover:underline">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex-1 text-center md:text-right">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li>Email: muqadsazaheen30@gmail.com</li>
            <li>Phone: +921333333284</li>
            <li>Address: 7 Street, Rawalpindi, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Logixsy Technology. All rights
        reserved.
      </div>
    </footer>
  );
}
