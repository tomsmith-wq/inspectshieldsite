/**
 * InspectShield Testing - Schedule Page
 * Brand: Deep Navy (#0B1D3A) + Gold (#C5922E) from logo
 * Flow: Select service → Schedule via Calendly → Auto-redirect to Stripe payment
 */
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663633025930/ozyjLMaozcaVajCg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as const } },
};

type Step = "service" | "schedule" | "payment";

interface ServiceOption {
  id: string;
  name: string;
  price: string;
  desc: string;
  badge?: string;
  stripeLink: string;
}

const services: ServiceOption[] = [
  {
    id: "radon",
    name: "Radon Testing",
    price: "$225",
    desc: "48-hour continuous monitoring + detailed report",
    stripeLink: "https://buy.stripe.com/6oUeVf98X8eaeZt8Hg4c802",
  },
  {
    id: "mold",
    name: "Mold & Indoor Air Quality Testing",
    price: "$350",
    desc: "Lab-analyzed air & surface samples + report",
    stripeLink: "https://buy.stripe.com/00waEZcl97a62cH8Hg4c800",
  },
  {
    id: "package",
    name: "Healthy Home Package",
    price: "$525",
    desc: "Both services combined — save $50",
    badge: "Best Value",
    stripeLink: "https://buy.stripe.com/3cI5kFad1fGC7x1g9I4c801",
  },
];

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}

export default function Schedule() {
  const [currentStep, setCurrentStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState<string>("");
  const [calendlyScheduled, setCalendlyScheduled] = useState(false);

  const selectedServiceData = services.find((s) => s.id === selectedService);

  const steps: { key: Step; label: string; num: number }[] = [
    { key: "service", label: "Choose Service", num: 1 },
    { key: "schedule", label: "Schedule Appointment", num: 2 },
    { key: "payment", label: "Payment", num: 3 },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === currentStep);

  // Listen for Calendly event to know when scheduling is complete
  const handleCalendlyEvent = useCallback((e: MessageEvent) => {
    if (e.data?.event === "calendly.event_scheduled") {
      setCalendlyScheduled(true);
      // Auto-advance to payment after a brief delay
      setTimeout(() => {
        setCurrentStep("payment");
      }, 1500);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, [handleCalendlyEvent]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  // Initialize Calendly widget when step changes to "schedule"
  useEffect(() => {
    if (currentStep === "schedule" && window.Calendly) {
      const container = document.getElementById("calendly-inline-widget");
      if (container) {
        container.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: `https://calendly.com/tomsmith-getinspectshield/30min?hide_gdpr_banner=1&primary_color=c5922e`,
          parentElement: container,
          utm: {
            utmSource: "website",
            utmMedium: "schedule_page",
            utmContent: selectedService,
          },
        });
      }
    }
  }, [currentStep, selectedService]);

  const handlePayNow = () => {
    if (selectedServiceData) {
      window.open(selectedServiceData.stripeLink, "_blank");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fc]">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="InspectShield" className="h-12 w-auto" />
          </a>
          <a href="tel:6153307036" className="flex items-center gap-2 text-sm text-[#0B1D3A] hover:text-[#C5922E] transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">615-330-7036</span>
          </a>
        </div>
      </header>

      <main className="flex-1 py-10 md:py-16">
        <div className="container max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((step, i) => (
                <div key={step.key} className="flex items-center">
                  <div className={`flex items-center gap-2 ${i <= currentStepIndex ? "text-[#C5922E]" : "text-muted-foreground"}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      i < currentStepIndex
                        ? "bg-[#C5922E] text-white"
                        : i === currentStepIndex
                        ? "bg-[#C5922E]/20 text-[#C5922E] border-2 border-[#C5922E]"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {i < currentStepIndex ? <CheckCircle className="w-4 h-4" /> : step.num}
                    </div>
                    <span className="hidden md:inline text-sm font-medium">{step.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-12 md:w-24 h-0.5 mx-2 ${i < currentStepIndex ? "bg-[#C5922E]" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <motion.div key={currentStep} initial="hidden" animate="visible" variants={fadeUp}>
            {/* STEP 1: Choose Service */}
            {currentStep === "service" && (
              <div>
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-[#0B1D3A] mb-2">Choose your testing service</h1>
                <p className="text-muted-foreground mb-8">Select the service that best fits your needs, then schedule your appointment.</p>
                <div className="space-y-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                        selectedService === service.id
                          ? "border-[#C5922E] bg-[#C5922E]/5 shadow-md"
                          : "border-border bg-white hover:border-[#C5922E]/50 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-heading font-bold text-[#0B1D3A] text-lg">{service.name}</h3>
                            {service.badge && (
                              <span className="text-xs bg-[#C5922E]/20 text-[#0B1D3A] px-2 py-0.5 rounded-full font-bold">{service.badge}</span>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm mt-1">{service.desc}</p>
                        </div>
                        <span className="font-heading font-bold text-[#0B1D3A] text-xl">{service.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={() => setCurrentStep("schedule")}
                    disabled={!selectedService}
                    className="bg-[#C5922E] hover:bg-[#b07f26] text-white font-semibold px-8"
                  >
                    Continue to Schedule
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Calendly Scheduling */}
            {currentStep === "schedule" && (
              <div>
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-[#0B1D3A] mb-2">Schedule your appointment</h1>
                <p className="text-muted-foreground mb-2">
                  Select a date and time that works for you. After scheduling, you'll be directed to payment.
                </p>
                <p className="text-sm text-[#C5922E] font-medium mb-6 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Scheduling: {selectedServiceData?.name} ({selectedServiceData?.price})
                </p>

                {calendlyScheduled && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-5 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-green-800">Appointment scheduled!</p>
                      <p className="text-sm text-green-700">Redirecting you to payment...</p>
                    </div>
                  </div>
                )}

                {/* Calendly Inline Widget */}
                <div
                  id="calendly-inline-widget"
                  className="bg-white rounded-xl border border-border overflow-hidden"
                    style={{ minHeight: "900px", height: "900px" }}
                />

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => { setCurrentStep("service"); setCalendlyScheduled(false); }} className="font-semibold">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep("payment")}
                    variant="outline"
                    className="font-semibold border-[#0B1D3A]/20 text-[#0B1D3A]"
                  >
                    Skip to Payment
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Payment via Stripe */}
            {currentStep === "payment" && (
              <div>
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-[#0B1D3A] mb-2">Complete your payment</h1>
                <p className="text-muted-foreground mb-8">
                  Your appointment is confirmed. Complete payment securely through Stripe.
                </p>

                <div className="bg-white rounded-xl border border-border p-6 md:p-8">
                  {/* Order summary */}
                  <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Service selected</p>
                      <p className="font-heading font-bold text-[#0B1D3A] text-lg">{selectedServiceData?.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{selectedServiceData?.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="font-heading font-bold text-[#0B1D3A] text-2xl">{selectedServiceData?.price}</p>
                    </div>
                  </div>

                  {/* Payment button */}
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-[#C5922E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="w-8 h-8 text-[#C5922E]" />
                    </div>
                    <h3 className="font-heading font-bold text-[#0B1D3A] text-xl mb-2">Secure Payment via Stripe</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Click below to complete your payment securely. You'll be redirected to Stripe's payment page.
                    </p>
                    <Button
                      onClick={handlePayNow}
                      size="lg"
                      className="bg-[#C5922E] hover:bg-[#b07f26] text-white font-bold text-base px-10 shadow-lg"
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Pay {selectedServiceData?.price} Now
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      Powered by Stripe. Your payment information is encrypted and secure.
                    </p>
                  </div>
                </div>

                {/* Alternative payment info */}
                <div className="mt-6 bg-[#0B1D3A]/5 border border-[#0B1D3A]/10 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0B1D3A] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-[#0B1D3A]">Prefer to pay another way?</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        You can also pay by phone at <a href="tel:6153307036" className="text-[#C5922E] font-medium hover:underline">615-330-7036</a> or in person on the day of your test.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep("schedule")} className="font-semibold">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <a href="/">
                    <Button variant="outline" className="font-semibold border-[#0B1D3A]/20 text-[#0B1D3A]">
                      Return to Home
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-6">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} InspectShield Environmental Testing Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
