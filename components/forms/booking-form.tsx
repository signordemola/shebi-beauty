import React, { useState } from "react";

const BookingForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setFormData({ name: "", email: "", service: "", date: "", time: "" });
    onClose();
  };
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl animate-slide-up">
      <h2 className="text-2xl font-serif text-gray-900 mb-6">
        Book Your Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
          />
        </div>
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
          >
            <option value="">Select Service</option>
            <option value="hair">Hair Styling</option>
            <option value="facial">Facial Treatments</option>
            <option value="nails">Nail Art</option>
            <option value="makeup">Makeup Services</option>
          </select>
        </div>
        <div>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
          />
        </div>
        <div>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-linear-to-r from-rose-500 to-amber-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-rose-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
