import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Users,
  Clock,
  CheckCircle2,
  Shield,
  DollarSign,
  HeartHandshake,
  Briefcase,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";

/*
  E3 ICHRA Landing Page
  Brand: E3 Advisors — Navy #1B2D5B | Blue #004C97 | Amber #F5A623
  All 9 sections per creative brief. Placeholder content where live assets are missing.
*/

const CALENDLY_URL = "#book"; // Placeholder — E3 to provide Calendly link

// Scroll-triggered fade-in hook
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// Sticky header with scroll-aware background
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(27,45,91,0.97)" : "rgba(27,45,91,0.0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        <img
          src="/manus-storage/e3_logo_b5d1d97b.png"
          alt="E3 Advisors"
          className="h-10 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <a
          href={CALENDLY_URL}
          className="e3-amber-btn px-5 py-2.5 rounded text-sm font-bold tracking-wide hidden sm:inline-flex items-center gap-2"
        >
          Book a Free Consultation
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

// Section 1 — Hero
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1B2D5B 0%, #004C97 60%, #0a1f45 100%)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#F5A623" }}>
              ICHRA Benefits Strategy
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white leading-none mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Stop Guessing What Benefits Are Going to Cost You Next Year.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-10 max-w-xl" style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
            E3 Advisors helps employers lock in predictable, flexible health benefits that employees actually want — without the annual renewal headaches.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={CALENDLY_URL}
              className="e3-amber-btn px-8 py-4 rounded text-base font-bold tracking-wide inline-flex items-center gap-2"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-3 pt-1">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#F5A623" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                No sales pressure. No obligation. Just clarity.
              </span>
            </div>
          </div>

          {/* Stat callout */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: "100%", label: "Cost predictability from day one" },
              { stat: "8–15%", label: "Avg. annual group premium increase" },
              { stat: "80%", label: "Reduction in admin burden" },
            ].map((item) => (
              <div key={item.stat}>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#F5A623" }}
                >
                  {item.stat}
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-xs text-white tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white animate-bounce" />
      </div>
    </section>
  );
}

// Section 2 — Problem Statement
function ProblemSection() {
  const ref = useFadeIn();
  const problems = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Costs you can't control",
      body: "Premiums go up 8–15% a year. You renew, you negotiate, you switch carriers, and the number still goes up.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Plans your employees don't use",
      body: "A one-size-fits-all group plan doesn't fit a 25-year-old and a 52-year-old the same way. People opt out, or they don't understand what they have.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Administration that never ends",
      body: "Open enrollment, carrier calls, billing disputes, compliance questions. It lands on whoever has the least time to deal with it.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#f7f8fa" }}>
      <div className="container">
        <div ref={ref} className="fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#004C97" }}>
              The Problem
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#1B2D5B",
              lineHeight: 1.05,
            }}
          >
            Group Health Insurance Was Built for a Different Era.
          </h2>
          <p className="text-lg mb-14 max-w-2xl" style={{ color: "#4a5568" }}>
            The model hasn't changed. Your costs have. Here's what most employers are dealing with every single year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <ProblemCard key={i} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ icon, title, body, delay }: { icon: React.ReactNode; title: string; body: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="fade-in-up bg-white rounded-lg p-8 border-t-4"
      style={{ borderTopColor: "#F5A623", boxShadow: "0 4px 24px rgba(27,45,91,0.07)" }}
    >
      <div className="mb-4 w-12 h-12 rounded flex items-center justify-center" style={{ backgroundColor: "#EEF3FA", color: "#004C97" }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: "#1B2D5B", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.4rem" }}>
        {title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: "#4a5568" }}>
        {body}
      </p>
    </div>
  );
}

// Section 3 — What ICHRA Is
function ExplainerSection() {
  const ref = useFadeIn();
  const steps = [
    { num: "01", title: "You set a monthly allowance", body: "You decide exactly how much to contribute per employee, per month. That number is fixed. It doesn't move." },
    { num: "02", title: "Employees pick their own plan", body: "Each employee shops for and selects the individual health plan that fits their life — any carrier, any network." },
    { num: "03", title: "You reimburse tax-free", body: "Employees submit their premium costs. You reimburse them tax-free up to the allowance you set. Done." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div ref={ref} className="fade-in-up mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#004C97" }}>
              How It Works
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#1B2D5B",
              lineHeight: 1.05,
            }}
          >
            There Is a Better Way.
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: "#4a5568" }}>
            ICHRA lets you give employees a set monthly benefit dollar amount. They choose their own health plan. You control the cost. They control the coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 z-0"
            style={{ backgroundColor: "#E2E8F0", top: "2.5rem" }}
          />
          {steps.map((s, i) => (
            <StepCard key={i} {...s} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ num, title, body, delay }: { num: string; title: string; body: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="fade-in-up relative z-10 text-center px-6 py-8">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-bold text-lg"
        style={{ backgroundColor: "#004C97", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.3rem" }}
      >
        {num}
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: "#1B2D5B", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.35rem" }}>
        {title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: "#4a5568" }}>
        {body}
      </p>
    </div>
  );
}

// Section 4 — Employer Benefits
function EmployerBenefitsSection() {
  const ref = useFadeIn();
  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, title: "100% cost predictability", body: "You set the number. It doesn't move. No surprise renewals, no mid-year increases." },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: "No minimum participation", body: "No more worrying if enough employees enroll. ICHRA works regardless of participation rate." },
    { icon: <Shield className="w-6 h-6" />, title: "Full risk transfer", body: "The health risk moves off your books entirely. Your exposure ends at the allowance you set." },
    { icon: <Briefcase className="w-6 h-6" />, title: "Dramatically reduced admin", body: "E3 manages the compliance, reimbursement processing, and employee support year-round." },
    { icon: <HeartHandshake className="w-6 h-6" />, title: "Employees keep coverage when they leave", body: "Portability removes a retention friction point. Their plan goes with them — not back to you." },
    { icon: <ArrowRight className="w-6 h-6" />, title: "Immediate Special Enrollment Period", body: "Launching ICHRA triggers a Special Enrollment Period — employees can enroll in coverage right away." },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#f7f8fa" }}>
      <div className="container">
        <div ref={ref} className="fade-in-up mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#004C97" }}>
              For Employers
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#1B2D5B",
              lineHeight: 1.05,
            }}
          >
            What Changes When You Switch to ICHRA.
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: "#4a5568" }}>
            Six things that look different on day one — and stay that way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, body, delay }: { icon: React.ReactNode; title: string; body: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="fade-in-up bg-white rounded-lg p-7 flex gap-5"
      style={{ boxShadow: "0 2px 16px rgba(27,45,91,0.06)" }}
    >
      <div
        className="w-11 h-11 rounded flex-shrink-0 flex items-center justify-center mt-0.5"
        style={{ backgroundColor: "#1B2D5B", color: "#F5A623" }}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-bold mb-2" style={{ color: "#1B2D5B", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>
          {body}
        </p>
      </div>
    </div>
  );
}

// Section 5 — Employee Benefits
function EmployeeBenefitsSection() {
  const ref = useFadeIn();
  const points = [
    "Choose a plan that fits their actual life and health situation — not a one-size-fits-all group policy.",
    "Keep their coverage even if they change jobs. Their plan is theirs.",
    "Tax-free reimbursement on qualified medical expenses up to the employer's set allowance.",
    "Access to any carrier, any network — no restrictions, no narrow networks.",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={ref} className="fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#004C97" }}>
                For Your Team
              </span>
            </div>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#1B2D5B",
                lineHeight: 1.05,
              }}
            >
              Your Employees Get More, Not Less.
            </h2>
            <p className="text-lg mb-8" style={{ color: "#4a5568" }}>
              The biggest concern employers have is whether their team will be okay. Here's the answer.
            </p>
            <ul className="space-y-4">
              {points.map((p, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#004C97" }} />
                  <span className="text-base leading-relaxed" style={{ color: "#374151" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual callout */}
          <div className="rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1B2D5B 0%, #004C97 100%)" }}>
            <div className="p-10">
              <div className="text-6xl font-bold mb-2 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                Any carrier.
              </div>
              <div className="text-6xl font-bold mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#F5A623" }}>
                Any network.
              </div>
              <p className="text-white/75 text-lg mb-8">
                Employees aren't locked into whatever carrier you negotiated with this year. They choose what works for their family.
              </p>
              <div className="border-t border-white/15 pt-8 space-y-4">
                {["No narrow networks", "No forced plan changes at renewal", "Coverage that travels with them"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#F5A623" }} />
                    <span className="text-white/85 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 6 — How E3 Makes This Easy
function E3ProcessSection() {
  const ref = useFadeIn();
  const steps = [
    {
      label: "Strategy",
      icon: <Briefcase className="w-8 h-8" />,
      body: "We assess your current benefits spend and design an ICHRA structure that fits your budget and workforce — before you commit to anything.",
    },
    {
      label: "Implementation",
      icon: <CheckCircle2 className="w-8 h-8" />,
      body: "We handle the setup, compliance, and employee communication from day one. You don't have to figure out the paperwork.",
    },
    {
      label: "Ongoing Support",
      icon: <HeartHandshake className="w-8 h-8" />,
      body: "We manage employee questions, reimbursement processing, and compliance oversight year-round. We don't hand you a platform and walk away.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#1B2D5B" }}>
      <div className="container">
        <div ref={ref} className="fade-in-up mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#F5A623" }}>
              Our Approach
            </span>
          </div>
          <h2
            className="mb-4 text-white"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.05,
            }}
          >
            We Do Not Hand You a Platform and Walk Away.
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.72)" }}>
            E3 is not an insurance company. We are your benefits execution partner — from the first conversation through every renewal cycle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <ProcessCard key={i} {...s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ label, icon, body, delay }: { label: string; icon: React.ReactNode; body: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="fade-in-up rounded-lg p-8"
      style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="mb-5 w-14 h-14 rounded flex items-center justify-center" style={{ backgroundColor: "#F5A623", color: "#1B2D5B" }}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
        {label}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
        {body}
      </p>
    </div>
  );
}

// Section 7 — Social Proof / Trust Signals
function TrustSection() {
  const ref = useFadeIn();
  const team = [
    { name: "Ryan Miller", role: "Partner, E3 Advisors", bio: "Sales strategist and benefits advisor with deep roots in the insurance and hospitality space." },
    { name: "Gene Erdman", role: "Partner, E3 Advisors", bio: "Benefits specialist with decades of experience helping employers navigate cost and compliance." },
    { name: "Dan Catanese", role: "Partner, E3 Advisors", bio: "Operations and compliance expert focused on building scalable benefits systems for growing businesses." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div ref={ref} className="fade-in-up mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#004C97" }}>
              The Team
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#1B2D5B",
              lineHeight: 1.05,
            }}
          >
            You're Working With People Who Know This Space.
          </h2>
        </div>

        {/* Testimonial placeholder */}
        <div
          className="rounded-xl p-10 mb-12"
          style={{ backgroundColor: "#f7f8fa", borderLeft: "4px solid #F5A623" }}
        >
          <p className="text-xl italic mb-4" style={{ color: "#1B2D5B", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "1.5rem" }}>
            "We cut our benefits spend by 22% in the first year and our employees actually have better coverage now. I wish we'd done this three years ago."
          </p>
          <p className="text-sm font-semibold" style={{ color: "#004C97" }}>
            [TESTIMONIAL — to be inserted by E3 team]
          </p>
        </div>

        {/* Stat callout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {[
            { stat: "80%", label: "Reduction in benefits admin time" },
            { stat: "$0", label: "Surprise renewal increases" },
            { stat: "100%", label: "Employee plan portability" },
          ].map((item) => (
            <div key={item.stat} className="text-center py-8 rounded-lg" style={{ backgroundColor: "#EEF3FA" }}>
              <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#1B2D5B" }}>
                {item.stat}
              </div>
              <div className="text-sm font-medium" style={{ color: "#004C97" }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <TeamCard key={i} {...member} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, bio, delay }: { name: string; role: string; bio: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="fade-in-up text-center">
      {/* Avatar placeholder */}
      <div
        className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
        style={{ backgroundColor: "#004C97", fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {name.split(" ").map((n) => n[0]).join("")}
      </div>
      <h3 className="font-bold text-xl mb-1" style={{ color: "#1B2D5B", fontFamily: "'Barlow Condensed', sans-serif" }}>
        {name}
      </h3>
      <p className="text-sm font-semibold mb-3" style={{ color: "#F5A623" }}>{role}</p>
      <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{bio}</p>
      <p className="text-xs mt-2 italic" style={{ color: "#9ca3af" }}>[Photo — to be inserted]</p>
    </div>
  );
}

// Section 8 — Self-Qualification
function QualificationSection() {
  const ref = useFadeIn();
  const checks = [
    "You currently offer group health insurance and want to control what it costs you.",
    "You have 1 or more W-2 employees.",
    "You want to offer a competitive benefit without unpredictable annual increases.",
    "You are tired of managing open enrollment and carrier relationships.",
    "Your employees have diverse health needs that a single group plan doesn't serve well.",
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#f7f8fa" }}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div ref={ref} className="fade-in-up mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#004C97" }}>
                Is This a Fit?
              </span>
            </div>
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#1B2D5B",
                lineHeight: 1.05,
              }}
            >
              ICHRA Works Best If...
            </h2>
          </div>

          <div className="space-y-4 mb-10">
            {checks.map((c, i) => (
              <CheckItem key={i} text={c} delay={i * 80} />
            ))}
          </div>

          <div
            className="rounded-lg p-8"
            style={{ backgroundColor: "#1B2D5B" }}
          >
            <p className="text-lg text-white leading-relaxed">
              If two or more of these describe your situation, it is worth a 30-minute conversation.{" "}
              <span style={{ color: "#F5A623" }}>That call is free and there is no obligation.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckItem({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="fade-in-up flex gap-4 items-start bg-white rounded-lg px-6 py-5"
      style={{ boxShadow: "0 2px 12px rgba(27,45,91,0.05)" }}
    >
      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#004C97" }} />
      <span className="text-base leading-relaxed" style={{ color: "#374151" }}>{text}</span>
    </div>
  );
}

// Section 9 — Final CTA
function FinalCTASection() {
  const ref = useFadeIn();
  return (
    <section
      id="book"
      className="py-28"
      style={{ background: "linear-gradient(135deg, #1B2D5B 0%, #004C97 100%)" }}
    >
      <div className="container">
        <div ref={ref} className="fade-in-up max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#F5A623" }}>
              Next Step
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "#F5A623" }} />
          </div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              lineHeight: 1.0,
            }}
          >
            Let's Find Out If ICHRA Is the Right Move for Your Business.
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.78)" }}>
            Book a free 30-minute consultation with the E3 team. We'll review your current benefits setup, walk you through what ICHRA would look like for your business, and give you a straight answer on whether it makes sense.
          </p>
          <a
            href={CALENDLY_URL}
            className="e3-amber-btn px-10 py-5 rounded text-lg font-bold tracking-wide inline-flex items-center gap-3 mx-auto"
          >
            Book My Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            No sales pressure. No obligation. Just clarity.
          </p>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: "#0d1a35", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/manus-storage/e3_logo_b5d1d97b.png"
            alt="E3 Advisors"
            className="h-8 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2025 E3 Advisors. All rights reserved.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>3920 Prospect Ave, Unit A, Yorba Linda, CA 92886</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:sales@e3-advisors.com" className="hover:text-white transition-colors">
              sales@e3-advisors.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:7146968796" className="hover:text-white transition-colors">
              714-696-8796
            </a>
          </div>
        </div>
        <a href="https://e3-advisors.com" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>
          ← Back to E3 Advisors
        </a>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ExplainerSection />
      <EmployerBenefitsSection />
      <EmployeeBenefitsSection />
      <E3ProcessSection />
      <TrustSection />
      <QualificationSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
