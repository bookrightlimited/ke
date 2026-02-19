import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Heart, Shield, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with deep industry knowledge and years of experience serving diverse businesses.',
  },
  {
    icon: Heart,
    title: 'Client Focus',
    description: 'Tailored solutions designed around your unique business needs and growth objectives.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Ethical practices and transparent communication in every engagement we undertake.',
  },
  {
    icon: TrendingUp,
    title: 'Results Driven',
    description: 'Measurable outcomes that drive business growth and ensure long-term success.',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        {
          opacity: 1,
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

      // Header animation
      gsap.fromTo(
        '.why-header',
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

      // Feature cards animation
      gsap.fromTo(
        '.feature-card',
        { opacity: 0, scale: 0.8, rotateY: -15 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Parallax for image
      gsap.to(imageRef.current, {
        y: -30,
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
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="why-header mb-10">
              <span className="pre-title">Why Choose Us</span>
              <h2 className="font-display font-bold text-brand-black mb-4">
                The Bookright Advantage
              </h2>
              <p className="text-brand-gray-2">
                We combine local expertise with international standards to deliver exceptional financial services that help your business thrive.
              </p>
            </div>

            {/* Features Grid */}
            <div className="features-grid grid sm:grid-cols-2 gap-5" style={{ perspective: '1000px' }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card group p-5 bg-brand-gray-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-card hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="w-6 h-6 text-brand-black" />
                  </div>
                  <h4 className="font-display font-bold text-brand-black mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-brand-gray-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/why-choose-us.jpg"
                alt="Professional team meeting"
                className="w-full h-auto object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent" />
            </div>
            
            {/* Decorative frame */}
            <svg
              className="absolute -top-4 -right-4 w-full h-full -z-10"
              viewBox="0 0 400 500"
              fill="none"
            >
              <rect
                x="10"
                y="10"
                width="380"
                height="480"
                rx="16"
                stroke="#1e3c8e"
                strokeWidth="2"
                strokeDasharray="8 8"
                opacity="0.3"
              />
            </svg>

            {/* Stats badge */}
            <div className="absolute -bottom-6 -left-6 bg-brand-blue text-white rounded-xl p-5 shadow-xl">
              <p className="text-3xl font-display font-bold mb-1">98%</p>
              <p className="text-sm text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
