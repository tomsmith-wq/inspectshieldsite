/**
 * InspectShield Testing - Homepage
 * Brand: Deep Navy (#0B1D3A) + Gold (#C5922E) from official logo
 * Typography: DM Sans (headings) + Source Sans 3 (body)
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Shield,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  FlaskConical,
  Wind,
  Home as HomeIcon,
  ChevronDown,
  ChevronUp,
  Calendar,
  CreditCard,
  ArrowRight,
  MapPin,
} from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663633025930/ozyjLMaozcaVajCg.png";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633025930/GTpQYpWtrzNo9zuDxYgzHD/hero-bg-PkeRKEvbMXHc9d32uX2U3j.webp";
const TESTING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633025930/GTpQYpWtrzNo9zuDxYgzHD/testing-process-csM4EUz6GemuiEjv9KLPAB.webp";
const FAMILY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633025930/GTpQYpWtrzNo9zuDxYgzHD/family-home-necjWfHZszhf7cuJxDwxcw.webp";
const TENNESSEE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663633025930/GTpQYpWtrzNo9zuDxYgzHD/middle-tennessee-mnwcF2EMJebC2xYioNeiLb.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <DifferenceSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <ServiceAreaSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-[#0B1D3A] text-white/90 text-sm py-2.5">
      <div className="container flex justify-between items-center flex-wrap gap-2">
        <span className="text-white/70">Independent radon, mold, and indoor air quality testing across Middle Tennessee</span>
        <span className="flex items-center gap-4">
          <a href="tel:6153307036" className="flex items-center gap-1.5 hover:text-[#C5922E] transition-colors">
            <Phone className="w-3.5 h-3.5" />
            615-330-7036
          </a>
          <a href="mailto:tomsmith@getinspectshield.com" className="flex items-center gap-1.5 hover:text-[#C5922E] transition-colors hidden sm:flex">
            <Mail className="w-3.5 h-3.5" />
            tomsmith@getinspectshield.com
          </a>
        </span>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="InspectShield Home Inspection Services" className="h-14 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0B1D3A]">
          <a href="#services" className="hover:text-[#C5922E] transition-colors">Services</a>
          <a href="#process" className="hover:text-[#C5922E] transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-[#C5922E] transition-colors">Pricing</a>
          <a href="#areas" className="hover:text-[#C5922E] transition-colors">Service Areas</a>
          <a href="#faq" className="hover:text-[#C5922E] transition-colors">FAQ</a>
        </nav>
        <a href="/schedule">
          <Button className="bg-[#C5922E] hover:bg-[#b07f26] text-white font-semibold shadow-md">
            Schedule Now
          </Button>
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Modern Tennessee home interior with natural light" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D3A]/85 via-[#0B1D3A]/60 to-transparent" />
      </div>
      <div className="container relative z-10 py-24 md:py-36 lg:py-44">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.p variants={fadeUp} className="text-[#C5922E] font-semibold text-sm uppercase tracking-widest mb-4">
            Health-first &middot; Independent &middot; Local
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Know what you're breathing inside your home.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            Premium radon, mold, and indoor air quality testing for homeowners across Middle Tennessee. Independent testing only — no remediation upsells.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a href="/schedule">
              <Button size="lg" className="bg-[#C5922E] hover:bg-[#b07f26] text-white font-bold text-base px-8 shadow-lg">
                Schedule Your Test
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="tel:6153307036">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8">
                <Phone className="w-4 h-4 mr-2" />
                Call 615-330-7036
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Shield, text: "Independent Testing Only" },
    { icon: CheckCircle, text: "No Remediation Upsells" },
    { icon: Clock, text: "48-Hour Radon Testing" },
    { icon: FlaskConical, text: "Lab-Based Results" },
  ];
  return (
    <section className="bg-[#0B1D3A] py-5">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 justify-center text-white/90">
              <item.icon className="w-5 h-5 text-[#C5922E] shrink-0" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferenceSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={fadeUp}>
            <p className="text-[#C5922E] font-semibold text-sm uppercase tracking-widest mb-3">The InspectShield Difference</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B1D3A] leading-tight mb-6">
              Testing without the conflict of interest.
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-6">
              Many companies that test for mold or indoor air quality also sell remediation services. That can make homeowners wonder whether recommendations are completely objective.
            </p>
            <p className="text-slate text-lg leading-relaxed mb-8">
              <strong className="text-[#0B1D3A]">InspectShield is different.</strong> We focus on independent environmental testing only. You get clear results, practical explanations, and no pressure to purchase correction work from us.
            </p>
            <ul className="space-y-3">
              {[
                "Designed for homeowners who want honest answers",
                "Ideal for health concerns, odors, allergies, and peace of mind",
                "Clear testing process and transparent pricing",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C5922E] mt-0.5 shrink-0" />
                  <span className="text-[#0B1D3A] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="relative">
            <img
              src={FAMILY_IMG}
              alt="Happy family relaxing in their Tennessee home"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C5922E]/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#C5922E]" />
                </div>
                <div>
                  <p className="font-heading font-bold text-[#0B1D3A]">100% Independent</p>
                  <p className="text-sm text-muted-foreground">No remediation sales</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Wind,
      title: "Radon Testing",
      price: "$225",
      description: "Professional 48-hour continuous radon monitoring using calibrated equipment. Radon is the #1 cause of lung cancer among non-smokers.",
      includes: ["48-hour continuous monitoring", "Calibrated professional equipment", "Detailed results report", "Risk level explanation"],
    },
    {
      icon: FlaskConical,
      title: "Mold & Indoor Air Quality Testing",
      price: "$350",
      description: "Laboratory-analyzed air and surface samples to identify mold species, allergens, and air quality concerns in your home.",
      includes: ["Air sampling (multiple rooms)", "Surface sampling as needed", "Lab analysis with species ID", "Written report with findings"],
    },
    {
      icon: HomeIcon,
      title: "Healthy Home Package",
      price: "$525",
      badge: "Save $50",
      description: "Complete environmental assessment combining radon testing with mold and indoor air quality testing for comprehensive peace of mind.",
      includes: ["Everything in Radon Testing", "Everything in Mold/IAQ Testing", "Combined comprehensive report", "Priority scheduling"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-[#C5922E] font-semibold text-sm uppercase tracking-widest mb-3">Our Services</motion.p>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-[#0B1D3A] mb-4">
            Clear testing. Transparent pricing.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate text-lg max-w-2xl mx-auto">
            Each service is designed to give you actionable information about your home's environment. No hidden fees, no upsells.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative rounded-2xl border p-8 transition-all hover:shadow-xl ${
                i === 2 ? "border-[#C5922E] bg-[#C5922E]/5 shadow-lg" : "border-border bg-white hover:border-[#C5922E]/50"
              }`}
            >
              {service.badge && (
                <span className="absolute -top-3 right-6 bg-[#C5922E] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {service.badge}
                </span>
              )}
              <div className="w-12 h-12 bg-[#C5922E]/10 rounded-xl flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-[#C5922E]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0B1D3A] mb-2">{service.title}</h3>
              <p className="text-3xl font-heading font-bold text-[#0B1D3A] mb-4">{service.price}</p>
              <p className="text-slate text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2.5">
                {service.includes.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#C5922E] mt-0.5 shrink-0" />
                    <span className="text-[#0B1D3A]">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/schedule" className="block mt-8">
                <Button className={`w-full font-semibold ${
                  i === 2
                    ? "bg-[#C5922E] hover:bg-[#b07f26] text-white"
                    : "bg-[#0B1D3A] hover:bg-[#0B1D3A]/90 text-white"
                }`}>
                  Schedule This Test
                </Button>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: "1",
      icon: Calendar,
      title: "Schedule Your Test",
      description: "Choose your service and pick a time that works for you. Appointments typically fill 2-3 days in advance.",
    },
    {
      num: "2",
      icon: FlaskConical,
      title: "We Test Your Home",
      description: "Our technician arrives, sets up professional equipment, and collects samples. Radon monitors stay for 48 hours.",
    },
    {
      num: "3",
      icon: CheckCircle,
      title: "Get Clear Results",
      description: "Receive a detailed report with your results, what they mean, and practical next steps — all in plain language.",
    },
    {
      num: "4",
      icon: CreditCard,
      title: "Pay Securely Online",
      description: "After scheduling, you're directed to Stripe for secure payment. You can also pay by phone or on the day of service.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#f7f9fc]">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.p variants={fadeUp} className="text-[#C5922E] font-semibold text-sm uppercase tracking-widest mb-3">How It Works</motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-[#0B1D3A] leading-tight mb-6">
                Schedule first. Pay after.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate text-lg leading-relaxed mb-10">
                We believe in making the process easy. Book your appointment first, then complete payment securely through Stripe — or pay by phone or in person.
              </motion.p>
              <motion.div variants={stagger} className="space-y-8">
                {steps.map((step, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 bg-[#C5922E]/10 rounded-full flex items-center justify-center border-2 border-[#C5922E]/30">
                      <span className="font-heading font-bold text-[#C5922E]">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[#0B1D3A] text-lg mb-1">{step.title}</h3>
                      <p className="text-slate text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeUp}>
              <img
                src={TESTING_IMG}
                alt="Professional radon testing equipment set up in a home"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-[#C5922E] font-semibold text-sm uppercase tracking-widest mb-3">Pricing</motion.p>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-[#0B1D3A] mb-4">
            Simple, transparent pricing
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate text-lg mb-12">
            No hidden fees. No surprise charges. Every package includes a detailed written report with clear explanations.
          </motion.p>

          <motion.div variants={fadeUp} className="bg-[#f7f9fc] rounded-2xl p-8 md:p-10 border border-border">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 font-heading font-bold text-[#0B1D3A]">Service</th>
                  <th className="pb-4 font-heading font-bold text-[#0B1D3A] text-right">Price</th>
                </tr>
              </thead>
              <tbody className="text-slate">
                <tr className="border-b border-border/50">
                  <td className="py-4">
                    <p className="font-semibold text-[#0B1D3A]">Radon Testing</p>
                    <p className="text-sm text-muted-foreground">48-hour continuous monitoring + report</p>
                  </td>
                  <td className="py-4 text-right font-heading font-bold text-[#0B1D3A] text-xl">$225</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-4">
                    <p className="font-semibold text-[#0B1D3A]">Mold & Indoor Air Quality Testing</p>
                    <p className="text-sm text-muted-foreground">Lab-analyzed air & surface samples + report</p>
                  </td>
                  <td className="py-4 text-right font-heading font-bold text-[#0B1D3A] text-xl">$350</td>
                </tr>
                <tr>
                  <td className="py-4">
                    <p className="font-semibold text-[#0B1D3A]">Healthy Home Package <span className="text-xs bg-[#C5922E]/20 text-[#0B1D3A] px-2 py-0.5 rounded-full font-bold ml-2">Save $50</span></p>
                    <p className="text-sm text-muted-foreground">Both services combined — comprehensive assessment</p>
                  </td>
                  <td className="py-4 text-right font-heading font-bold text-[#0B1D3A] text-xl">$525</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  const cities = [
    "Lebanon", "Murfreesboro", "Smyrna", "Gallatin",
    "Mt. Juliet", "Hermitage", "Hendersonville", "Franklin",
    "Brentwood", "Spring Hill", "La Vergne", "Goodlettsville",
  ];

  return (
    <section id="areas" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={TENNESSEE_IMG} alt="Aerial view of Middle Tennessee neighborhoods" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0B1D3A]/85" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#C5922E] font-semibold text-sm uppercase tracking-widest mb-3">Service Areas</motion.p>
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Serving all of Middle Tennessee
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-2xl mb-10">
            We provide independent environmental testing services to homeowners throughout the greater Nashville area and surrounding Middle Tennessee communities.
          </motion.p>
          <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <MapPin className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-white font-medium text-sm">{city}, TN</span>
              </div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-white/50 text-sm mt-6">
            Don't see your city? Contact us — we likely serve your area too.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "How long does radon testing take?",
      answer: "Radon testing requires professional testing equipment to remain in the home for approximately 48 hours. We'll set up the monitor and return to collect it — minimal disruption to your daily routine.",
    },
    {
      question: "How long do mold and indoor air quality results take?",
      answer: "Mold and indoor air quality samples are sent to an accredited laboratory. Results are typically available in 2 to 3 business days after sample collection.",
    },
    {
      question: "Does InspectShield perform remediation?",
      answer: "No. InspectShield provides independent testing only and does not sell remediation services. This ensures our results and recommendations are completely objective and free from any conflict of interest.",
    },
    {
      question: "Can I schedule testing if I'm not buying or selling a home?",
      answer: "Absolutely. Many homeowners schedule testing for health concerns, allergies, persistent odors, basement moisture, or simply for peace of mind. You don't need to be in a real estate transaction.",
    },
    {
      question: "Do I need to pay upfront to schedule?",
      answer: "No. You schedule your appointment first through Calendly, then you're directed to pay securely via Stripe. You can also pay by phone or in person on the day of service.",
    },
    {
      question: "What areas do you serve?",
      answer: "We serve homeowners throughout Middle Tennessee, including Lebanon, Murfreesboro, Smyrna, Gallatin, Mt. Juliet, Hermitage, Hendersonville, Franklin, Brentwood, and surrounding communities.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#f7f9fc]">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-[#C5922E] font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B1D3A]">
              Common questions
            </h2>
          </motion.div>
          <motion.div variants={stagger} className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white rounded-xl border border-border overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f7f9fc] transition-colors"
      >
        <span className="font-heading font-semibold text-[#0B1D3A] pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#C5922E] shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate leading-relaxed">
          {answer}
        </div>
      )}
    </motion.div>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl font-bold text-[#0B1D3A] mb-4">
            Ready to know what's in your air?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate text-lg mb-8">
            Schedule your test today. Appointments typically fill 2-3 days in advance.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/schedule">
              <Button size="lg" className="bg-[#C5922E] hover:bg-[#b07f26] text-white font-bold text-base px-8 shadow-lg">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Online
              </Button>
            </a>
            <a href="tel:6153307036">
              <Button size="lg" variant="outline" className="border-[#0B1D3A]/20 text-[#0B1D3A] hover:bg-[#0B1D3A]/5 font-semibold text-base px-8">
                <Phone className="w-4 h-4 mr-2" />
                Call 615-330-7036
              </Button>
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="text-muted-foreground text-sm mt-6">
            Prefer to talk? Call us directly. We'll walk you through the process and find a time that works.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white/80 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO_URL} alt="InspectShield" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Independent environmental testing services for homeowners across Middle Tennessee. Health-first. No remediation upsells.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Radon Testing</li>
              <li>Mold & Indoor Air Quality Testing</li>
              <li>Healthy Home Package</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5922E]" />
                <a href="tel:6153307036" className="hover:text-white transition-colors">615-330-7036</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5922E]" />
                <a href="mailto:tomsmith@getinspectshield.com" className="hover:text-white transition-colors">tomsmith@getinspectshield.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5922E]" />
                <span>Middle Tennessee</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} InspectShield Environmental Testing Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
