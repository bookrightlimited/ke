import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Rattansi Educational Trust Building, Koinange Street, Nairobi, Kenya',
    link: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+254 714 126 920',
    link: 'tel:+254714126920',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@bookright.co.ke',
    link: 'mailto:info@bookright.co.ke',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 8:00 AM - 5:00 PM',
    link: null,
  },
];

const ContactPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.contact-header',
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

      // Form card animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 80, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
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

      // Info cards animation
      gsap.fromTo(
        '.info-card',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Parallax for form
      gsap.to(formRef.current, {
        y: -40,
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
        {/* Header */}
        <div className="contact-header text-center max-w-2xl mx-auto mb-12">
          <span className="pre-title">Get In Touch</span>
          <h2 className="font-display font-bold text-brand-black mb-4">
            Let's Discuss Your Financial Needs
          </h2>
          <p className="text-brand-gray-2">
            Ready to take your business to the next level? Contact us for a free consultation and discover how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div
            ref={formRef}
            className="lg:col-span-3 bg-white rounded-2xl shadow-card p-8 md:p-10"
            style={{ perspective: '1000px' }}
          >
            <h3 className="font-display font-bold text-xl text-brand-black mb-6">
              Send Us a Message
            </h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-brand-gray-1 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-brand-gray-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-gray-1 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-brand-gray-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-brand-gray-1 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 714 126 920"
                    className="w-full px-4 py-3 rounded-lg border border-brand-gray-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-gray-1 mb-2">
                    Service Required
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-brand-gray-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all duration-300 bg-white">
                    <option value="">Select a service</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="tax">Tax Services</option>
                    <option value="accounting">Accounting</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-gray-1 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="w-full px-4 py-3 rounded-lg border border-brand-gray-3 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all duration-300 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                Send Message
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="info-card group bg-brand-gray-3 rounded-xl p-5 transition-all duration-300 hover:bg-white hover:shadow-card hover:translate-x-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-brand-blue">
                    <info.icon className="w-5 h-5 text-brand-blue transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-brand-black mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm text-brand-gray-2 hover:text-brand-blue transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-brand-gray-2">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="info-card bg-brand-blue rounded-xl p-6 text-white">
              <h4 className="font-display font-bold text-lg mb-2">
                Need Urgent Assistance?
              </h4>
              <p className="text-sm text-white/80 mb-4">
                Our team is ready to help you with any urgent financial matters.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white"
              >
                Contact Us Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
