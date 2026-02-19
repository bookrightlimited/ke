import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Award, Users, Shield, Heart, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const coreValues = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our engagements, ensuring transparency and honesty.',
  },
  {
    icon: Award,
    title: 'Professionalism',
    description: 'Our team maintains the utmost professionalism, delivering services with competence and diligence.',
  },
  {
    icon: Users,
    title: 'Confidentiality',
    description: 'We protect our clients\' information with strict confidentiality protocols and security measures.',
  },
  {
    icon: CheckCircle2,
    title: 'Excellence',
    description: 'We strive for excellence in every task, continuously improving our skills and processes.',
  },
  {
    icon: Heart,
    title: 'Client-Centered',
    description: 'Our clients\' success is our priority. We tailor solutions to meet their unique needs.',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        '.about-hero-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-hero',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Story section
      gsap.fromTo(
        '.story-image',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.story-section',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.story-content',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.story-section',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Values cards
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.values-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Team section
      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-section',
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="about-hero relative py-20 lg:py-28 bg-gradient-to-br from-brand-blue to-brand-blue/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="about-hero-content text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-yellow mb-4">
              About Us
            </span>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6">
              Building Trust Through Excellence
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              For over a decade, Bookright Limited has been the trusted financial partner for businesses across Kenya and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="story-image relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-brand-yellow/20 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/about-image.jpg"
                  alt="Our team at work"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="story-content">
              <span className="pre-title">Our Story</span>
              <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl mb-6">
                A Legacy of Financial Excellence
              </h2>
              <div className="space-y-4 text-brand-gray-2 leading-relaxed">
                <p>
                  Founded in 2014, Bookright Limited emerged from a vision to provide world-class financial services tailored to the unique needs of Kenyan businesses. What started as a small audit firm has grown into a comprehensive financial services provider.
                </p>
                <p>
                  Our journey has been marked by continuous growth, learning, and an unwavering commitment to our clients' success. Today, we serve over 500 clients across various industries, from startups to established enterprises.
                </p>
                <p>
                  Led by CPA Dingili Calvince, our team of certified professionals brings together decades of combined experience in audit, tax, accounting, and business consulting.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-brand-gray-3">
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-brand-blue">10+</p>
                  <p className="text-sm text-brand-gray-2 mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-brand-blue">500+</p>
                  <p className="text-sm text-brand-gray-2 mt-1">Clients Served</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-brand-blue">25+</p>
                  <p className="text-sm text-brand-gray-2 mt-1">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-gray-3/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-black mb-4">
                Our Mission
              </h3>
              <p className="text-brand-gray-2 leading-relaxed">
                To empower businesses with accurate financial insights, strategic guidance, and compliant practices that drive sustainable growth. We are committed to delivering excellence through integrity, professionalism, and a deep understanding of our clients' needs.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card">
              <div className="w-14 h-14 bg-brand-yellow/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-brand-black" />
              </div>
              <h3 className="font-display font-bold text-2xl text-brand-black mb-4">
                Our Vision
              </h3>
              <p className="text-brand-gray-2 leading-relaxed">
                To be the most trusted financial partner for businesses across East Africa, recognized for our excellence, integrity, and commitment to client success. We aim to set the standard for professional financial services in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="pre-title">Our Principles</span>
            <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl mb-4">
              Core Values
            </h2>
            <p className="text-brand-gray-2">
              These principles guide everything we do, from client interactions to internal operations.
            </p>
          </div>

          <div className="values-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="value-card group bg-brand-gray-3 rounded-xl p-6 transition-all duration-300 hover:bg-white hover:shadow-card hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand-blue">
                  <value.icon className="w-6 h-6 text-brand-blue transition-colors duration-300 group-hover:text-white" />
                </div>
                <h4 className="font-display font-bold text-lg text-brand-black mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-brand-gray-2 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - CPA Dingili */}
      <section className="team-section section-padding bg-brand-gray-3/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="pre-title">Leadership</span>
            <h2 className="font-display font-bold text-brand-black text-3xl md:text-4xl mb-4">
              Meet Our Senior Consultant
            </h2>
          </div>

          <div className="team-card max-w-4xl mx-auto bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-brand-blue p-8 md:p-10 flex items-center justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-brand-yellow shadow-xl">
                  <img
                    src="/hero-image.jpg"
                    alt="CPA Dingili Calvince"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display font-bold text-2xl text-brand-black mb-1">
                  CPA Dingili Calvince
                </h3>
                <p className="text-brand-blue font-medium mb-4">Senior Consultant & Founder</p>
                <div className="space-y-3 text-brand-gray-2 text-sm leading-relaxed">
                  <p>
                    CPA Dingili is a seasoned financial expert with over 15 years of experience in audit, tax advisory, and business consulting. He holds certifications from leading professional bodies and has advised numerous organizations across East Africa.
                  </p>
                  <p>
                    His expertise spans statutory audits, tax planning, financial management, and business advisory services. Under his leadership, Bookright has grown to become a trusted name in Kenya's financial services sector.
                  </p>
                  <p>
                    Calvince is passionate about helping businesses achieve their full potential through sound financial practices and strategic guidance.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-medium rounded-full">
                    CPA(K)
                  </span>
                  <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-medium rounded-full">
                    ACCA
                  </span>
                  <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-medium rounded-full">
                    Tax Expert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
