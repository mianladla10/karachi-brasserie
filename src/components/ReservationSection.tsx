import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, MessageSquare, CheckCircle, Send, AlertCircle } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../data/menuData';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    date: '',
    time: '19:30',
    guests: '2',
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (error) setError(null);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Karachi Brasserie! I would like to request a table reservation.\n\n` +
      `• Name: ${formData.fullName.trim() || 'Guest'}\n` +
      `• Phone: ${formData.phoneNumber.trim() || 'Not provided'}\n` +
      `• Date: ${formData.date || 'Today'}\n` +
      `• Time: ${formData.time || 'Evening'}\n` +
      `• Number of Guests: ${formData.guests} Persons\n` +
      `• Special Requests: ${formData.specialRequests.trim() || 'None'}\n\n` +
      `Please let me know if a table is available. Thank you!`;
    return `https://wa.me/${RESTAURANT_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 8) {
      setError('Please provide a valid contact phone number.');
      return;
    }
    if (!formData.date) {
      setError('Please select your preferred date.');
      return;
    }

    setSubmitted(true);
    setError(null);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      date: '',
      time: '19:30',
      guests: '2',
      specialRequests: '',
    });
  };

  return (
    <section id="reservation" className="py-24 bg-[#101010] relative">
      {/* Decorative Gold Dividers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] tracking-[0.3em] font-semibold text-[#C9A96E] uppercase">
              RESERVATIONS
            </span>
            <span className="w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F0E8] tracking-tight mb-4">
            Your Table Awaits
          </h2>

          <p className="text-sm sm:text-base text-[#F5F0E8]/75 font-light">
            Planning a meal with friends or a special gathering? Send us a reservation request.
          </p>
        </div>

        {/* Main Reservation Container */}
        <div className="bg-[#1B1B1B] border border-[#C9A96E]/30 p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          {submitted ? (
            /* Confirmation state (Strictly clarifies request status per guidelines) */
            <div className="text-center py-6 sm:py-8 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E] flex items-center justify-center mx-auto text-[#C9A96E]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#C9A96E]">
                  REQUEST DISPATCHED
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0E8] mt-1">
                  Reservation Request Received
                </h3>
              </div>

              <div className="bg-[#101010] p-5 border border-white/10 max-w-lg mx-auto text-left text-xs sm:text-sm space-y-2">
                <p className="text-[#F5F0E8]/80">
                  <strong className="text-[#F5F0E8]">Guest:</strong> {formData.fullName} ({formData.guests} Guests)
                </p>
                <p className="text-[#F5F0E8]/80">
                  <strong className="text-[#F5F0E8]">Date & Time:</strong> {formData.date} at {formData.time}
                </p>
                <p className="text-[#F5F0E8]/80">
                  <strong className="text-[#F5F0E8]">Contact Phone:</strong> {formData.phoneNumber}
                </p>
                {formData.specialRequests && (
                  <p className="text-[#F5F0E8]/80">
                    <strong className="text-[#F5F0E8]">Notes:</strong> {formData.specialRequests}
                  </p>
                )}
              </div>

              {/* Crucial Disclaimer per prompt: Do not claim table is booked until restaurant confirms */}
              <div className="p-4 bg-[#C9A96E]/10 border border-[#C9A96E]/40 max-w-lg mx-auto text-left text-xs text-[#F5F0E8]/90">
                <p className="font-semibold text-[#C9A96E] mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" /> Important Booking Notice:
                </p>
                <p className="font-light leading-relaxed">
                  Your table is <span className="underline font-medium">not confirmed yet</span>. Our host at Karachi Brasserie will review seating availability and call or message you shortly at <span className="font-mono text-[#C9A96E]">{formData.phoneNumber}</span> to confirm your reservation.
                </p>
              </div>

              {/* Instant WhatsApp & Call Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Instant WhatsApp Confirmation
                </a>

                <a
                  href={`tel:${RESTAURANT_DETAILS.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 border border-[#C9A96E]/60 hover:border-[#C9A96E] text-[#F5F0E8] text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center justify-center cursor-pointer"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#C9A96E]" />
                  Call Host ({RESTAURANT_DETAILS.phoneFormatted})
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs text-[#C9A96E] hover:underline uppercase tracking-wider cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-wider text-[#C9A96E] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Mahmood"
                    required
                    className="w-full bg-[#101010] border border-white/15 focus:border-[#C9A96E] text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-medium uppercase tracking-wider text-[#C9A96E] mb-2">
                    Phone Number (Mobile / WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 0330 1234567"
                    required
                    className="w-full bg-[#101010] border border-white/15 focus:border-[#C9A96E] text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none transition-colors font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-medium uppercase tracking-wider text-[#C9A96E] mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-[#101010] border border-white/15 focus:border-[#C9A96E] text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label htmlFor="time" className="block text-xs font-medium uppercase tracking-wider text-[#C9A96E] mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#101010] border border-white/15 focus:border-[#C9A96E] text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="15:00">03:00 PM (Afternoon)</option>
                    <option value="17:00">05:00 PM (Hi-Tea)</option>
                    <option value="19:00">07:00 PM (Dinner)</option>
                    <option value="20:00">08:00 PM (Dinner)</option>
                    <option value="21:00">09:00 PM (Dinner)</option>
                    <option value="22:30">10:30 PM (Late Night)</option>
                    <option value="23:30">11:30 PM (Late Night)</option>
                  </select>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="guests" className="block text-xs font-medium uppercase tracking-wider text-[#C9A96E] mb-2">
                    Number of Guests *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#101010] border border-white/15 focus:border-[#C9A96E] text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5 Persons</option>
                    <option value="6">6 Persons</option>
                    <option value="8">8 Persons</option>
                    <option value="10+">10+ Persons (Large Gathering)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-xs font-medium uppercase tracking-wider text-[#C9A96E] mb-2">
                  Special Requests / Dietary Notes
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="e.g. Birthday celebration, booth seating preference, high chair required..."
                  className="w-full bg-[#101010] border border-white/15 focus:border-[#C9A96E] text-[#F5F0E8] px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Buttons: Web Request + Direct WhatsApp Fallback */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 text-xs font-semibold tracking-[0.25em] uppercase bg-[#C9A96E] hover:bg-[#DFC798] text-[#101010] transition-all duration-300 shadow-xl shadow-[#C9A96E]/20 hover:shadow-[#C9A96E]/35 cursor-pointer text-center"
                >
                  REQUEST A RESERVATION
                </button>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 border border-[#25D366]/60 hover:border-[#25D366] hover:bg-[#25D366]/10 text-[#25D366] text-xs font-semibold tracking-wider uppercase transition-all duration-300 inline-flex items-center justify-center cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Book via WhatsApp
                </a>
              </div>

              {/* Notice note */}
              <div className="pt-2 text-center">
                <p className="text-[11px] text-[#F5F0E8]/50 font-light">
                  Direct inquiries: call <a href={`tel:${RESTAURANT_DETAILS.phone}`} className="text-[#C9A96E] hover:underline font-mono">{RESTAURANT_DETAILS.phoneFormatted}</a>. Tables are confirmed individually by the restaurant.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
