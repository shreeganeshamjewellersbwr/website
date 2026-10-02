import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageSquare } from 'lucide-react';

export default function ShowroomMap() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-[#F8F9FA] text-slate-900 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[3px] text-[#C5A059] font-bold mb-2">
            Visit Our Flagship
          </p>
          <h2 className="serif text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Experience SGJ in Beawar
          </h2>
          <p className="text-xs text-slate-500 font-light">
            Step into our showroom for personalized bridal consultation, complimentary karatmeter testing, and bespoke silver & gold trials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card (6 cols) */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5 text-xs text-slate-600">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full p-1 bg-slate-900 border border-[#C5A059]/40 flex items-center justify-center">
                  <img src="/assets/logo.png" alt="SGJ Emblem" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="serif text-base font-bold text-slate-900">SHREE GANESHAM JEWELLERS</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Osatwal Square • Beawar</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-bold">Complete Address:</strong>
                  <p className="text-slate-600 leading-relaxed">
                    Osatwal Square, Near Rathi ji ki haveli, Sanatan School, Charkhi Gali, near Rathi Ji Ki Haveli, Beawar, Rajasthan 305901
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-bold">Landmarks:</strong>
                  <p className="text-slate-600 leading-relaxed">
                    • Located at Osatwal Square • Walking distance from Sanatan School in Charkhi Gali • Adjacent to historic Rathi Ji Ki Haveli
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-slate-400 text-[10px] uppercase font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C5A059]" /> Timings
                  </div>
                  <div className="text-slate-800 font-bold mt-1 text-xs">10:30 AM – 8:30 PM</div>
                  <div className="text-[10px] text-emerald-600">Open 7 Days a Week</div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="text-slate-400 text-[10px] uppercase font-semibold flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#C5A059]" /> Direct Helpline
                  </div>
                  <a href="tel:+919414000000" className="text-[#8F6B1E] font-bold mt-1 text-xs block hover:underline">
                    +91 94140 00000
                  </a>
                  <div className="text-[10px] text-slate-400">Valet & VIP Viewing</div>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
              <a
                href="https://maps.google.com/?q=Osatwal+Square+Beawar+Rajasthan+305901"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#C5A059] hover:bg-[#b08d47] text-white font-bold text-xs uppercase tracking-wider text-center shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                Get Directions
              </a>

              <a
                href="https://wa.me/919414000000?text=Namaste%20Shree%20Ganesham%20Jewellers%20(Beawar),%20I%20am%20planning%20to%20visit%20your%20showroom%20at%20Osatwal%20Square."
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>

          </div>

          {/* Interactive Google Map (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[360px] bg-slate-100 flex flex-col">
            <div className="bg-white px-4 py-3 border-b border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Beawar Showroom Navigation
              </span>
              <span className="text-[#C5A059] font-bold">Osatwal Square, Beawar 305901</span>
            </div>

            <iframe
              title="Shree Ganesham Jewellers Beawar Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14342.348633785725!2d74.3160!3d26.1030!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39691b0000000001%3A0x0!2sBeawar%2C%20Rajasthan%20305901!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full flex-grow border-0 min-h-[320px]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
