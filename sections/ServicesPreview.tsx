import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, 
  FileText, 
  Calculator, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'audit',
    icon: ShieldCheck,
    title: 'Audit & Assurance',
    description: 'Comprehensive audit services to ensure compliance and build stakeholder confidence.',
    features: ['Statutory Audits', 'Internal Audits', 'Risk Assessment'],
  },
  {
    id: 'tax',
    icon: FileText,
    title: 'Tax Services',
    description: 'Expert tax planning and compliance services to optimize your tax position.',
    features: ['Tax Compliance', 'Tax Planning', 'VAT Advisory'],
  },
  {
    id: 'accounting',
    icon: Calculator,
    title: 'Accounting',
    description: 'Professional accounting services to keep your financial records accurate and up-to-date.',
    features: ['Bookkeeping', 'Financial Statements', 'Payroll Management'],
  },
  {
    id: 'consulting',
    icon: TrendingUp,
    title: 'Consulting',
    description: 'Strategic business advisory services to drive growth and improve performance.',
    features: ['Business Advisory', 'Financial Management', 'Start-up Services'],
  },
];

const ServicesPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('audit');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.services-header',
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

      // Tabs animation
      gsap.fromTo(
        '.services-tabs',
        { opacity: 0, y: 30, scaleX: 0.8 },
        {
          opacity: 1,
          y: 0,
          scaleX: 1,
          duration: 0.6,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 60, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.15,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="section-padding bg-brand-gray-3/50"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="services-header text-center max-w-2xl mx-auto mb-12">
          <span className="pre-title">Our Services</span>
          <h2 className="font-display font-bold text-brand-black mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-brand-gray-2">
            From audit and assurance to tax consulting, we offer a full spectrum of financial services tailored to your needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="services-tabs flex flex-wrap justify-center gap-2 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === service.id
                  ? 'bg-brand-blue text-white shadow-lg'
                  : 'bg-white text-brand-gray-2 hover:bg-brand-blue/10 hover:text-brand-blue'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1500px' }}>
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card group bg-white rounded-2xl p-6 border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:border-brand-blue/20 ${
                activeTab === service.id ? 'ring-2 ring-brand-blue ring-offset-2' : ''
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand-blue group-hover:scale-110">
                <service.icon className="w-7 h-7 text-brand-blue transition-colors duration-300 group-hover:text-white" />
              </div>
              
              <h3 className="font-display font-bold text-lg text-brand-black mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-brand-gray-2 mb-5 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-brand-gray-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPreview;
