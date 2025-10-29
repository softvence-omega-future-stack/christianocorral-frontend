"use client";
import Wrapper from "../layout/Wrapper";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <Wrapper className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col justify-between bg-gray-50 rounded-2xl p-6 h-full">
          <div className="space-y-6">
            <p className="text-gray-600">
              Have questions, suggestions, or want to sell your Apple device?  
              Get in touch with us using the details below or send us a message.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <span>+1 (800) 555-1234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span>support@appletrade.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                <span>123 Apple Road, Cupertino, CA</span>
              </div>
            </div>
          </div>

          {/* Map stays at the bottom */}
          <div className="mt-8 flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1104039050226!2d-122.03254898468155!3d37.32299897984211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a5e5a6a4bb%3A0x7d0a17c5d9a1b17f!2sApple%20Park!5e0!3m2!1sen!2sus!4v1697127392000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="rounded-lg border h-64 md:h-full"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col h-full">
          <form className="bg-white shadow-lg rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F3290] text-white py-2 rounded-lg hover:bg-blue-800 mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
