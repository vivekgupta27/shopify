import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between mb-10 border-b border-gray-600 pb-6">
        {/* Newsletter */}
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="font-semibold text-base mb-2">BE THE FIRST TO KNOW</h2>
          <p className="mb-4">Sign up for updates from mettā muse.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="w-full md:w-1/2 px-4 py-2 text-black"
            />
            <button className="ml-2 border px-4 py-2">SUBSCRIBE</button>
          </div>
        </div>

        {/* Contact & Currency */}
        <div className="md:w-1/2">
          <h2 className="font-semibold text-base mb-2">CONTACT US</h2>
          <p className="mb-1">+44 221 133 5360</p>
          <p className="mb-4">customercare@mettasmuse.com</p>

          <h2 className="font-semibold text-base mb-1">CURRENCY</h2>
          <div className="flex items-center mb-1">
            <span className="mr-2">🇺🇸 USD</span>
            <IoIosArrowDown />
          </div>
          <p className="text-xs">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: Brand */}
        <div>
          <h3 className="font-bold text-base mb-2">mettā muse</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-bold text-base mb-2">QUICK LINKS</h3>
          <ul className="space-y-1">
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 3: Social */}
        <div>
          <h3 className="font-bold text-base mb-2">FOLLOW US</h3>
          <div className="flex space-x-4 text-2xl">
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* Column 4: Payments */}
        <div>
          <h3 className="font-bold text-base mb-2">mettā muse ACCEPTS</h3>
          <div className="flex flex-wrap items-center gap-2">
            <img src="https://img.icons8.com/color/48/google-pay.png" alt="GPay" className="h-6" />
            <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="Mastercard" className="h-6" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-6" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" className="h-6" />
            <img src="https://img.icons8.com/ios-filled/50/apple-pay.png" alt="Apple Pay" className="h-6 bg-white rounded" />
            <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay Alt" className="h-6" />
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <p className="text-center text-xs text-gray-400 mt-10">Copyright © 2023 mettāmuse. All rights reserved.</p>
    </footer>
  );
}
