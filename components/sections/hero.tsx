"use client";

import { services } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import BookingForm from "../forms/booking-form";

const Hero = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] sm:h-screen overflow-hidden bg-background text-foreground">
      {/* Image Layer */}
      <div className="absolute inset-0 lg:static lg:w-1/2 h-full">
        <Image
          src={services[currentSlide].image || "/placeholder.svg"}
          alt={services[currentSlide].title}
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
        />
        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/40 to-transparent lg:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center lg:text-left lg:absolute lg:right-0 lg:w-1/2 h-full px-6 sm:px-10 lg:px-20 py-16 bg-background/90 backdrop-blur-sm lg:bg-background">
        <div className="space-y-6 max-w-lg animate-fade-in">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">
            Find & Book
          </p>

          <h1 className="text-4xl sm:text-5xl font-serif leading-tight">
            <span className="block text-primary">
              {services[currentSlide].title}
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {services[currentSlide].description}
          </p>

          <p className="uppercase tracking-widest text-xs sm:text-sm text-secondary-foreground/70">
            Anywhere. Anytime.
          </p>

          <button
            onClick={() => setShowBooking(true)}
            className="mt-6 px-8 py-3 rounded-lg border-2 border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-background transition-all duration-300"
          >
            Make Reservation
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="group w-10 h-10 rounded-full border border-foreground/40 hover:border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary/10"
        >
          <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary" />
        </button>
        <button
          onClick={nextSlide}
          className="group w-10 h-10 rounded-full border border-foreground/40 hover:border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary/10"
        >
          <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 right-6 sm:right-12 lg:right-16 flex gap-2 z-20">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide
                ? "w-6 h-2 bg-primary"
                : "w-2 h-2 bg-foreground/30 hover:bg-primary/60"
            }`}
          />
        ))}
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <BookingForm onClose={() => setShowBooking(false)} />
        </div>
      )}
    </section>
  );
};

export default Hero;
