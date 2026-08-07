import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Clock,
  Users,
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
  ChevronUp,
  AlertTriangle,
} from "lucide-react";

/*
  E3 ICHRA — California Contractors & Manufacturers Landing Page
  Vertical: CA contractors and manufacturers, 50-99 employees
  Brand: E3 Advisors — Navy #0B1F3A | Blue #1B6FC9 | Amber #F0A202
  Booking: e3-advisors.com/calendar
*/

const BOOKING_URL = "https://calendly.com/ryanjamesmiller/e3-consultation";

// ─── Scroll-triggered fade-in ───────────────────────────────────────────────
function useFadeIn(delay = 0) {
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
  return ref;
}

// ─── Sticky Header ───────────────────────────────────────────────────────────
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
        backgroundColor: scrolled ? "rgba(11,31,58,0.97)" : "rgba(11,31,58,0.0)",
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
        <div className="flex items-center gap-3">
          <a
            href="#fit-check"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold tracking-wide border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            Take the Fit Check
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="e3-amber-btn px-5 py-2.5 rounded text-sm font-bold tracking-wide hidden sm:inline-flex items-center gap-2"
          >
            Book a Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1B6FC9 65%, #071527 100%)" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/5 to-transparent" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#F0A202" }}>
              California Contractors &amp; Manufacturers · 50–99 Employees
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            Your Team's Health Coverage Shouldn't Cost You the Job.
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl mb-10 max-w-xl" style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
            A 60-second check for California contractors and manufacturers with 50–99 employees. See how much room you have to cut group health costs without cutting what your team actually gets.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#fit-check"
              className="e3-amber-btn px-8 py-4 rounded text-base font-bold tracking-wide inline-flex items-center gap-2"
            >
              Take the ICHRA Fit Check
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded text-base font-bold tracking-wide inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Book a Call Directly
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs text-white tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white animate-bounce" />
      </div>
    </section>
  );
}

// ─── Section 2: Problem ───────────────────────────────────────────────────────
function ProblemSection() {
  const ref = useFadeIn();
  const problems = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Rising Costs",
      body: "Group premiums keep climbing and you're absorbing it, passing it to payroll, or watching people opt out entirely.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Admin Burden",
      body: "You don't have an HR department. You have a payroll person doing HR on the side, and open enrollment eats a month every year.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "One Option",
      body: "Your crew is stuck with whatever plan the broker set up years ago. Office staff want something different than field crews need.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="container">
        <div ref={ref} className="fade-in-up mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#1B6FC9" }}>
              The Problem
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#0B1F3A",
              lineHeight: 1.05,
            }}
          >
            Sound familiar?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div
              key={i}
              ref={useFadeIn(i * 100)}
              className="fade-in-up bg-white rounded-lg p-8 border-t-4"
              style={{ borderTopColor: "#F0A202", boxShadow: "0 4px 24px rgba(11,31,58,0.07)" }}
            >
              <div className="mb-4 w-12 h-12 rounded flex items-center justify-center" style={{ backgroundColor: "#EAF2FC", color: "#1B6FC9" }}>
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.4rem" }}>
                {p.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "#4a5568" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: What ICHRA Is ─────────────────────────────────────────────────
function ExplainerSection() {
  const ref = useFadeIn();
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={ref} className="fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#1B6FC9" }}>
                How It Works
              </span>
            </div>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#0B1F3A",
                lineHeight: 1.05,
              }}
            >
              A Different Way to Offer Health Coverage.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#374151" }}>
              ICHRA (Individual Coverage Health Reimbursement Arrangement) lets you set a fixed monthly amount per employee, and your team uses it to buy the individual health plan that actually fits them. You control the cost. They control the choice. No more one-size-fits-all group plan, no more guessing what next year's renewal will do to your budget.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#374151" }}>
              This isn't an all-or-nothing move. Most of our clients start with one of two paths:
            </p>
            <div className="space-y-4">
              {[
                { label: "Full transition", desc: "Move the whole company off group insurance and onto ICHRA." },
                { label: "Hybrid", desc: "Keep your current plan (often Kaiser) for the team that wants it, and offer ICHRA as an option alongside it." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start p-5 rounded-lg" style={{ backgroundColor: "#f7f9fc" }}>
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#1B6FC9" }} />
                  <div>
                    <span className="font-bold" style={{ color: "#0B1F3A" }}>{item.label} — </span>
                    <span style={{ color: "#374151" }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm mt-6" style={{ color: "#5B6472" }}>
              Both paths are compliant with ACA employer requirements for companies your size.
            </p>
          </div>

          {/* Visual */}
          <div
            ref={useFadeIn(150)}
            className="fade-in-up rounded-xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1B6FC9 100%)" }}
          >
            <div className="p-10">
              <div className="text-5xl font-bold mb-2 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                You set the budget.
              </div>
              <div className="text-5xl font-bold mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#F0A202" }}>
                They pick the plan.
              </div>
              <div className="space-y-5">
                {[
                  { step: "01", text: "You set a fixed monthly allowance per employee" },
                  { step: "02", text: "Each employee shops for the plan that fits their life" },
                  { step: "03", text: "You reimburse tax-free up to the amount you set" },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <div
                      className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: "#F0A202", color: "#0B1F3A" }}
                    >
                      {s.step}
                    </div>
                    <p className="text-white/85 text-base leading-relaxed pt-1">{s.text}</p>
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

// ─── Section 4: Why This Matters at Your Size ─────────────────────────────────
function SizeSection() {
  const ref = useFadeIn();
  return (
    <section className="py-24" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div ref={ref} className="fade-in-up mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#1B6FC9" }}>
                Your Situation
              </span>
            </div>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#0B1F3A",
                lineHeight: 1.05,
              }}
            >
              At 50–99 Employees, the Rules Are Different.
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#374151" }}>
              Once you cross 50 full-time employees, you're an Applicable Large Employer under the ACA. That means you're required to offer affordable coverage or face potential penalties. Group plans get more expensive precisely at the size where you need cost control the most. ICHRA is built to satisfy that requirement while giving you a fixed, predictable cost per employee instead of an unpredictable annual renewal.
            </p>
          </div>

          {/* Union/prevailing wage callout */}
          <div
            ref={useFadeIn(100)}
            className="fade-in-up rounded-lg p-7 flex gap-5 items-start"
            style={{ backgroundColor: "#FDF6E8", border: "1px solid #F3DFA8" }}
          >
            <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#C97F00" }} />
            <div>
              <h3 className="font-bold mb-2" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem" }}>
                Union or Prevailing Wage Crews?
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "#374151" }}>
                If any of your crews work under union contracts or prevailing wage jobs, this gets more nuanced. We'll flag that on the fit check and walk through it directly — it doesn't rule ICHRA out, it just changes how it's structured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Why E3 ────────────────────────────────────────────────────────
function WhyE3Section() {
  const ref = useFadeIn();
  const points = [
    { icon: <Briefcase className="w-6 h-6" />, title: "Simplified Administration", body: "We take the day-to-day off your plate. No more open enrollment chaos landing on your payroll person." },
    { icon: <DollarSign className="w-6 h-6" />, title: "Cost Management", body: "Smarter funding strategies, not just a lower quote this year. We build structures that hold." },
    { icon: <Users className="w-6 h-6" />, title: "Retention and Recruitment", body: "Better benefits experience for a workforce that's hard to replace. Give your crew more than the broker set up years ago." },
    { icon: <Shield className="w-6 h-6" />, title: "Compliance and Risk Management", body: "We keep you inside ACA and CA-specific requirements. You don't have to track what changed." },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#0B1F3A" }}>
      <div className="container">
        <div ref={ref} className="fade-in-up mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#F0A202" }}>
              Why E3
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.05,
            }}
          >
            We're Not Selling You a Policy.
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.72)" }}>
            E3 Advisors is an HR and benefits advisory and execution partner. We don't just place a plan and disappear until renewal. We help you decide if ICHRA is right for your company, build the structure, and manage the administration so it doesn't land back on your desk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              ref={useFadeIn(i * 80)}
              className="fade-in-up rounded-lg p-7 flex gap-5"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-11 h-11 rounded flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: "#F0A202", color: "#0B1F3A" }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold mb-2 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.2rem" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Proof ─────────────────────────────────────────────────────────
function ProofSection() {
  const ref = useFadeIn();
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div ref={ref} className="fade-in-up mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#1B6FC9" }}>
              Real Outcomes
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#0B1F3A",
              lineHeight: 1.05,
            }}
          >
            Real Outcomes for Employers Like You.
          </h2>
        </div>

        {/* Case study placeholder */}
        <div
          ref={useFadeIn(100)}
          className="fade-in-up rounded-xl p-10"
          style={{ backgroundColor: "#f7f9fc", borderLeft: "4px solid #F0A202" }}
        >
          <p className="text-xl italic mb-4" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "1.5rem" }}>
            "A specialty contractor in Southern California with 67 employees moved to a hybrid ICHRA structure and cut per-employee health costs by 28%, while giving their field crew more plan choices than they had under a single group plan."
          </p>
          <p className="text-sm font-semibold" style={{ color: "#1B6FC9" }}>
            [CASE STUDY — to be inserted by E3 team · recommend CA contractor or manufacturer, 50–99 employees]
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: FAQ ───────────────────────────────────────────────────────────
function FAQSection() {
  const ref = useFadeIn();
  const faqs = [
    {
      q: "Will my employees lose coverage during a transition?",
      a: "No. ICHRA is designed for continuity. Most employers run a defined transition window so no one goes without coverage.",
    },
    {
      q: "Do I have to move everyone off our current plan?",
      a: "No. The hybrid path lets you keep your current group plan in place for employees who want it, and offer ICHRA to others.",
    },
    {
      q: "Is this compliant with the ACA?",
      a: "Yes. ICHRA is a recognized, ACA-compliant way to satisfy employer coverage requirements for Applicable Large Employers.",
    },
    {
      q: "What if we have union or prevailing wage crews?",
      a: "It changes the structure but doesn't rule it out. We'll walk through your specific contracts on the call.",
    },
    {
      q: "What does this cost us to explore?",
      a: "Nothing. The Fit Check and the consultation call are both free, no obligation.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="container">
        <div ref={ref} className="fade-in-up mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#1B6FC9" }}>
              FAQ
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#0B1F3A",
              lineHeight: 1.05,
            }}
          >
            Common Questions.
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  const ref = useFadeIn(delay);
  return (
    <div
      ref={ref}
      className="fade-in-up bg-white rounded-lg overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(11,31,58,0.05)" }}
    >
      <button
        className="w-full flex items-center justify-between px-7 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-base pr-4" style={{ color: "#0B1F3A" }}>{q}</span>
        {open
          ? <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "#1B6FC9" }} />
          : <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "#1B6FC9" }} />
        }
      </button>
      {open && (
        <div className="px-7 pb-5">
          <p className="text-base leading-relaxed" style={{ color: "#374151" }}>{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Fit Check Tool (embedded inline) ────────────────────────────────────────
type Answer = { text: string; value: number; flag?: boolean };
type Question = { key: string; label: string; text: string; options: Answer[] };

const questions: Question[] = [
  {
    key: "headcount",
    label: "Question 1 of 5",
    text: "How many full-time employees do you have?",
    options: [
      { text: "Under 50", value: 0 },
      { text: "50 to 99", value: 3 },
      { text: "100 or more", value: 1 },
    ],
  },
  {
    key: "cost",
    label: "Question 2 of 5",
    text: "What do you pay per employee, per month, for health coverage today?",
    options: [
      { text: "Under $500", value: 0 },
      { text: "$500 to $700", value: 1 },
      { text: "$700 to $900", value: 2 },
      { text: "Over $900", value: 3 },
    ],
  },
  {
    key: "enrollment",
    label: "Question 3 of 5",
    text: "Roughly what share of your team actually enrolls in your group plan?",
    options: [
      { text: "Under 50%", value: 3 },
      { text: "50% to 75%", value: 2 },
      { text: "Over 75%", value: 1 },
    ],
  },
  {
    key: "options",
    label: "Question 4 of 5",
    text: "Right now, what does your plan lineup look like?",
    options: [
      { text: "One plan, take it or leave it", value: 3 },
      { text: "A couple of options", value: 2 },
      { text: "Honestly, whatever the broker set up years ago", value: 3 },
    ],
  },
  {
    key: "prevailing",
    label: "Question 5 of 5",
    text: "Do any of your crews work under union contracts or prevailing wage jobs?",
    options: [
      { text: "Yes", value: 0, flag: true },
      { text: "No", value: 1 },
      { text: "Not sure", value: 0.5 },
    ],
  },
];

function computeResult(answers: Record<string, Answer>) {
  let score = 0;
  Object.values(answers).forEach((a) => (score += a.value));
  const flagged = answers.prevailing?.flag;

  if (score >= 8) {
    return {
      tier: "Strong Fit",
      badgeStyle: { background: "#E4F6EC", color: "#1E824C" },
      headline: "You are a strong candidate for ICHRA.",
      sub: "Based on your answers, your current setup has real inefficiency in it. Most CA employers in your range see the biggest opportunity in exactly this profile.",
      low: 180, high: 340, flagged,
    };
  } else if (score >= 4) {
    return {
      tier: "Worth Exploring",
      badgeStyle: { background: "#FDF0DC", color: "#C97F00" },
      headline: "There is room to improve your setup.",
      sub: "You may not need a full overhaul, but a class-based approach — ICHRA alongside your current plan — could meaningfully lower your costs without disrupting what is already working.",
      low: 90, high: 200, flagged,
    };
  } else {
    return {
      tier: "Keep an Eye On It",
      badgeStyle: { background: "#EEF1F5", color: "#5B6472" },
      headline: "Your setup looks reasonably efficient today.",
      sub: "ICHRA may not move the needle much right now, but costs and workforce needs change fast. Worth a second look in the next renewal cycle.",
      low: 40, high: 110, flagged,
    };
  }
}

function FitCheckTool() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [gateUnlocked, setGateUnlocked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gateError, setGateError] = useState("");

  const totalSteps = questions.length + 1;
  const progress = step < questions.length
    ? ((step / totalSteps) * 100 + 12)
    : 100;

  const currentQ = questions[step];
  const result = computeResult(answers);

  function selectOption(opt: Answer) {
    setAnswers((prev) => ({ ...prev, [currentQ.key]: opt }));
  }

  function handleNext() {
    if (answers[currentQ.key]) setStep((s) => s + 1);
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  function handleUnlock() {
    if (!name.trim() || !email.trim() || !email.includes("@")) {
      setGateError("Please enter your name and a valid work email.");
      return;
    }
    setGateError("");
    setGateUnlocked(true);
  }

  const isResultStep = step >= questions.length;

  return (
    <section id="fit-check" className="py-24" style={{ backgroundColor: "#0B1F3A" }}>
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#F0A202" }}>
                60-Second Check
              </span>
              <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            </div>
            <h2
              className="text-white mb-3"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.05,
              }}
            >
              See Where You Stand in 60 Seconds.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)" }}>
              Take the Fit Check. Get your estimated savings range. Decide from there.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.25)" }}>
            {/* Card top */}
            <div
              className="px-8 py-7 text-center"
              style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #071527 100%)" }}
            >
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#F0A202" }}>
                60-second check
              </div>
              <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                The ICHRA Fit Check
              </h3>
              <p className="text-sm" style={{ color: "#C7D3E5" }}>
                See how much room you have to cut group health costs, without cutting coverage. Built for California contractors and manufacturers with 50–99 employees.
              </p>
            </div>

            {/* Progress bar */}
            <div className="h-1 w-full" style={{ backgroundColor: "#DDE3EC" }}>
              <div
                className="h-full transition-all duration-300"
                style={{ width: `${progress}%`, backgroundColor: "#F0A202" }}
              />
            </div>

            {/* Card body */}
            <div className="p-8">
              {!isResultStep ? (
                <>
                  <div className="text-xs font-bold tracking-wide uppercase mb-2" style={{ color: "#1B6FC9" }}>
                    {currentQ.label}
                  </div>
                  <p className="text-xl font-bold mb-5" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.3rem" }}>
                    {currentQ.text}
                  </p>
                  <div className="flex flex-col gap-3 mb-6">
                    {currentQ.options.map((opt, i) => {
                      const selected = answers[currentQ.key]?.text === opt.text;
                      return (
                        <button
                          key={i}
                          onClick={() => selectOption(opt)}
                          className="w-full text-left px-4 py-3.5 rounded-lg border-2 text-base transition-all"
                          style={{
                            borderColor: selected ? "#1B6FC9" : "#DDE3EC",
                            backgroundColor: selected ? "#EAF2FC" : "#fff",
                            fontWeight: selected ? 600 : 400,
                            color: "#10192B",
                          }}
                        >
                          {opt.text}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={handleBack}
                      disabled={step === 0}
                      className="text-sm px-2 py-1 disabled:invisible"
                      style={{ color: "#5B6472" }}
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!answers[currentQ.key]}
                      className="px-6 py-3 rounded-lg text-sm font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{ backgroundColor: "#F0A202", color: "#0B1F3A" }}
                    >
                      {step === questions.length - 1 ? "See my result" : "Next"}
                    </button>
                  </div>
                </>
              ) : !gateUnlocked ? (
                <>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4"
                    style={result.badgeStyle}
                  >
                    {result.tier}
                  </span>
                  <p className="text-xl font-bold mb-3" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {result.headline}
                  </p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#5B6472" }}>{result.sub}</p>
                  {result.flagged && (
                    <div className="rounded-lg px-4 py-3 mb-5 text-sm leading-relaxed" style={{ backgroundColor: "#FDF6E8", border: "1px solid #F3DFA8", color: "#C97F00" }}>
                      Heads up: union or prevailing wage crews change how ICHRA gets structured. Our team will walk you through what applies to your contracts specifically.
                    </div>
                  )}
                  <div className="border-t pt-5" style={{ borderColor: "#DDE3EC" }}>
                    <p className="text-sm font-semibold mb-3" style={{ color: "#10192B" }}>
                      Enter your name and email to see your estimated monthly savings range.
                    </p>
                    <input
                      className="w-full px-4 py-3 rounded-lg border text-base mb-3 focus:outline-none"
                      style={{ borderColor: "#DDE3EC", color: "#10192B" }}
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      className="w-full px-4 py-3 rounded-lg border text-base mb-3 focus:outline-none"
                      style={{ borderColor: "#DDE3EC", color: "#10192B" }}
                      placeholder="Work email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {gateError && <p className="text-sm mb-3" style={{ color: "#C97F00" }}>{gateError}</p>}
                    <button
                      onClick={handleUnlock}
                      className="w-full py-4 rounded-lg text-base font-bold"
                      style={{ backgroundColor: "#F0A202", color: "#0B1F3A" }}
                    >
                      Show My Savings Range
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4"
                    style={result.badgeStyle}
                  >
                    {result.tier}
                  </span>
                  <p className="text-xl font-bold mb-3" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {result.headline}
                  </p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#5B6472" }}>{result.sub}</p>
                  <div className="rounded-xl p-5 mb-5" style={{ backgroundColor: "#EAF2FC", border: "1px solid #CFE0F5" }}>
                    <div className="text-xs font-bold tracking-wide uppercase mb-1" style={{ color: "#1B6FC9" }}>
                      Estimated Savings Potential
                    </div>
                    <div className="text-3xl font-bold mb-1" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif" }}>
                      ${result.low} to ${result.high} / employee / month
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "#5B6472" }}>
                      Based on similarly sized CA contractors and manufacturers who moved to a class-based ICHRA strategy. Your exact number depends on your current plan and workforce mix — which is exactly what the call is for.
                    </p>
                  </div>
                  {result.flagged && (
                    <div className="rounded-lg px-4 py-3 mb-5 text-sm leading-relaxed" style={{ backgroundColor: "#FDF6E8", border: "1px solid #F3DFA8", color: "#C97F00" }}>
                      Heads up: union or prevailing wage crews change how ICHRA gets structured. Our team will walk you through what applies to your contracts specifically.
                    </div>
                  )}
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 rounded-lg text-center text-base font-bold mb-3"
                    style={{ backgroundColor: "#F0A202", color: "#0B1F3A" }}
                  >
                    Book My Free Cost Breakdown Call
                  </a>
                  <p className="text-center text-xs" style={{ color: "#5B6472" }}>
                    15 minutes. No obligation. We'll walk through your actual numbers, not estimates.
                  </p>
                </>
              )}
            </div>
          </div>

          <p className="text-center text-xs mt-5" style={{ color: "rgba(255,255,255,0.35)" }}>
            Estimates only, based on typical outcomes for similarly sized CA employers. Your actual numbers depend on your current plan, workforce mix, and location. E3 Advisors is an HR and benefits advisory partner, not a traditional insurance broker.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: Final CTA ─────────────────────────────────────────────────────
function FinalCTASection() {
  const ref = useFadeIn();
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div ref={ref} className="fade-in-up max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#1B6FC9" }}>
              Next Step
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
          </div>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "#0B1F3A",
              lineHeight: 1.0,
            }}
          >
            See Where You Stand in 60 Seconds.
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#374151" }}>
            Take the Fit Check. Get your estimated savings range. Decide from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#fit-check"
              className="e3-amber-btn px-8 py-4 rounded text-base font-bold tracking-wide inline-flex items-center justify-center gap-2"
            >
              Take the ICHRA Fit Check
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded text-base font-bold tracking-wide inline-flex items-center justify-center gap-2 border-2 transition-colors"
              style={{ borderColor: "#0B1F3A", color: "#0B1F3A" }}
            >
              Book a Call Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: "#071527", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Contractors() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ExplainerSection />
      <SizeSection />
      <WhyE3Section />
      <ProofSection />
      <FAQSection />
      <FitCheckTool />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
