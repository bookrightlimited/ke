import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animations
      gsap.fromTo(
        '.hero-pretitle',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-title span',
        { opacity: 0, y: 60, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.08,
          delay: 0.5,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        '.hero-description',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 1,
          ease: 'back.out(1.7)',
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          delay: 0.4,
          ease: 'power3.out',
        }
      );

      // Shape animation
      gsap.fromTo(
        shapeRef.current,
        { opacity: 0, scale: 0, rotate: -10 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          delay: 0.2,
          ease: 'back.out(1.7)',
        }
      );

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Shape pulse
      gsap.to(shapeRef.current, {
        scale: 1.02,
        rotate: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-white via-brand-gray-3/30 to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-blue/5 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <span className="hero-pretitle inline-block text-sm font-semibold uppercase tracking-wider text-brand-blue mb-4">
              Welcome to Bookright
            </span>
            
            <h1 className="hero-title font-display font-bold text-brand-black mb-6" style={{ perspective: '1000px' }}>
              <span className="inline-block">Trusted</span>{' '}
              <span className="inline-block">Financial</span>{' '}
              <span className="inline-block">Expertise</span>{' '}
              <span className="inline-block">for</span>{' '}
              <span className="inline-block text-brand-blue">Sustainable</span>{' '}
              <span className="inline-block text-brand-blue">Growth</span>
            </h1>
            
            <p className="hero-description text-lg text-brand-gray-2 leading-relaxed mb-8 max-w-xl">
              Delivering reliable audit, tax, accounting, and consulting services in Nairobi and beyond. Partner with us for financial excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="hero-cta btn-primary group"
              >
                Request Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="hero-cta btn-secondary group"
              >
                Our Services
                <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <span className="text-brand-blue font-bold text-sm">10+</span>
                </div>
                <span className="text-sm text-brand-gray-2">Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                  <span className="text-brand-black font-bold text-sm">500+</span>
                </div>
                <span className="text-sm text-brand-gray-2">Clients Served</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div
              ref={shapeRef}
              className="absolute -top-8 -left-8 w-full h-full bg-brand-blue rounded-3xl -z-10"
              style={{ transform: 'rotate(-3deg)' }}
            />
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src="/hero-image.jpg"
                alt="Professional financial consultant"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-brand-black">4.9/5 Rating</p>
                  <p className="text-sm text-brand-gray-2">From 200+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
