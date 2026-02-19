import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'James Mwangi',
    role: 'CEO, TechSolutions Kenya',
    image: '/client-1.jpg',
    quote: 'Bookright transformed our financial processes completely. Their team\'s expertise in tax planning and compliance has saved us both time and money. Their dedication to client success is truly unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Ochieng',
    role: 'Finance Director, Apex Holdings',
    image: '/client-2.jpg',
    quote: 'Professional, reliable, and always available when we need them. Bookright has been instrumental in our company\'s growth over the past three years. Their audit services are thorough and insightful.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Kariuki',
    role: 'Founder, StartupHub East Africa',
    image: '/client-3.jpg',
    quote: 'The best financial decision we made was partnering with Bookright for our audit and tax needs. Their consulting services helped us secure funding and scale our operations effectively.',
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.testimonials-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Slider animation
      gsap.fromTo(
        '.testimonials-slider',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-brand-gray-3/50 overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="testimonials-header text-center max-w-2xl mx-auto mb-12">
          <span className="pre-title">Testimonials</span>
          <h2 className="font-display font-bold text-brand-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-brand-gray-2">
            Hear from businesses that have transformed their financial operations with our help.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="testimonials-slider relative max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-card">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center animate-float">
              <Quote className="w-6 h-6 text-brand-black" />
            </div>

            {/* Content */}
            <div
              key={currentTestimonial.id}
              className="transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Client Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-brand-yellow shadow-lg">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Quote Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <span key={i} className="text-brand-yellow text-lg">★</span>
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-brand-gray-1 leading-relaxed mb-6">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  <div>
                    <p className="font-display font-bold text-brand-black">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-sm text-brand-gray-2">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center transition-all duration-300 hover:bg-brand-blue hover:text-white hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-brand-blue'
                      : 'w-2 bg-brand-gray-2/30 hover:bg-brand-gray-2/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center transition-all duration-300 hover:bg-brand-blue hover:text-white hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
