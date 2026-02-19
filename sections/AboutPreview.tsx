import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Target, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -80, clipPath: 'inset(0 100% 0 0)' },
        {
          opacity: 1,
          x: 0,
          clipPath: 'inset(0 0% 0 0)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Content animations
      gsap.fromTo(
        '.about-pretitle',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.about-title',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.about-description',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.about-mission',
        { opacity: 0, rotateX: -30 },
        {
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.about-cta',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Parallax effect
      gsap.to(imageRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-blue/20 rounded-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="/about-image.jpg"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-yellow rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <span className="about-pretitle pre-title">Who We Are</span>
            <h2 className="about-title font-display font-bold text-brand-black mb-6">
              We're a Team of Professional Financial Experts
            </h2>
            <p className="about-description text-brand-gray-2 leading-relaxed mb-8">
              With years of experience serving businesses across Kenya, we provide tailored financial solutions that drive growth and ensure compliance. Our team of certified professionals brings deep industry knowledge and a commitment to excellence.
            </p>

            {/* Mission & Vision */}
            <div className="about-mission space-y-4 mb-8" style={{ perspective: '1000px' }}>
              <div className="flex items-start gap-4 p-4 bg-brand-gray-3 rounded-xl border-l-4 border-brand-blue transition-all duration-300 hover:translate-x-2 hover:bg-brand-blue/5">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black mb-1">Our Mission</h4>
                  <p className="text-sm text-brand-gray-2">
                    To empower businesses with accurate financial insights and strategic guidance for sustainable growth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-brand-gray-3 rounded-xl border-l-4 border-brand-yellow transition-all duration-300 hover:translate-x-2 hover:bg-brand-yellow/5">
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-brand-black" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-black mb-1">Our Vision</h4>
                  <p className="text-sm text-brand-gray-2">
                    To be the most trusted financial partner for businesses across East Africa.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="about-cta inline-flex items-center gap-2 text-brand-blue font-semibold group"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
