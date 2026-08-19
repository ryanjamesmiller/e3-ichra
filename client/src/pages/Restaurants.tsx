import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock3,
  DollarSign,
  FileCheck2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

/*
  E3 ICHRA — Restaurant & Multi-Site Franchise Landing Page
  Same E3 visual system: Navy #0B1F3A | Blue #1B6FC9 | Amber #F0A202.
  Positioning: Margin protection, compliance confidence, and a stronger employee experience.
*/

const BOOKING_URL = "https://calendly.com/ryanjamesmiller/e3-consultation";

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => element.classList.add("visible"), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(11,31,58,0.97)" : "rgba(11,31,58,0)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.08)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        <img
          src="https://e3-advisors.com/wp-content/uploads/2025/03/Group-288.png"
          alt="E3 Advisors"
          className="h-10 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="e3-amber-btn hidden items-center gap-2 rounded px-5 py-2.5 text-sm font-bold tracking-wide sm:inline-flex"
        >
          Book a Free Consultation <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1B6FC9 63%, #071527 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/5 to-transparent" />

      <div className="container relative z-10 pb-20 pt-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F0A202" }}>
              Restaurants · Hospitality · Multi-Site Franchise Groups
            </span>
          </div>
          <h1
            className="mb-6 text-white"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Your Benefits Strategy Should Protect Your Margins. Not Create More Work.
          </h1>
          <p className="mb-10 max-w-2xl text-lg md:text-xl" style={{ color: "rgba(255,255,255,.82)", lineHeight: 1.6 }}>
            E3 helps restaurant and hospitality operators lower healthcare costs, stay ahead of California compliance, and build a benefits experience your people actually value.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#restaurant-fit-check"
              className="e3-amber-btn inline-flex items-center gap-2 rounded px-8 py-4 text-base font-bold tracking-wide"
            >
              Take the Restaurant Fit Check <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-white/30 px-8 py-4 text-base font-bold tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 opacity-40">
        <span className="text-xs uppercase tracking-widest text-white">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-white" />
      </div>
    </section>
  );
}

function ChallengeCard({ icon, title, body, delay }: { icon: React.ReactNode; title: string; body: string; delay: number }) {
  const ref = useFadeIn(delay);
  return (
    <div
      ref={ref}
      className="fade-in-up rounded-lg border-t-4 bg-white p-8"
      style={{ borderTopColor: "#F0A202", boxShadow: "0 4px 24px rgba(11,31,58,.07)" }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded" style={{ backgroundColor: "#EAF2FC", color: "#1B6FC9" }}>
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.4rem" }}>
        {title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: "#4a5568" }}>{body}</p>
    </div>
  );
}

function Challenges() {
  const ref = useFadeIn();
  const cards = [
    {
      icon: <DollarSign className="h-7 w-7" />,
      title: "High Labor Costs",
      body: "Rising wages and tight margins leave little room for another double-digit benefits increase. You need a cost you can actually plan around.",
    },
    {
      icon: <FileCheck2 className="h-7 w-7" />,
      title: "Regulation That Keeps Moving",
      body: "Employee classification, wage and hour rules, ACA requirements, I-9s. California operators cannot afford to miss what changed.",
    },
    {
      icon: <UsersRound className="h-7 w-7" />,
      title: "Retention Gets More Expensive",
      body: "When good people leave, every location feels it. Better benefits and a stronger HR experience give your team a reason to stay.",
    },
  ];
  return (
    <section className="py-24" style={{ backgroundColor: "#F7F9FC" }}>
      <div className="container">
        <div ref={ref} className="fade-in-up mb-14 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1B6FC9" }}>The Reality</span>
          </div>
          <h2 style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, lineHeight: 1.05 }}>
            Every Location Has a Margin Problem. Benefits Shouldn't Be Another One.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => <ChallengeCard key={card.title} {...card} delay={index * 90} />)}
        </div>
      </div>
    </section>
  );
}

function ICHRAExplainer() {
  const ref = useFadeIn();
  return (
    <section className="bg-white py-24">
      <div className="container grid items-center gap-16 md:grid-cols-2">
        <div ref={ref} className="fade-in-up">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1B6FC9" }}>A Better Structure</span>
          </div>
          <h2 className="mb-5" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.05 }}>
            Give Your Team Better Choice. Give Your Business a Fixed Cost.
          </h2>
          <p className="mb-5 text-base leading-relaxed" style={{ color: "#374151" }}>
            An ICHRA lets you set a defined monthly health benefit amount. Employees use it to choose the individual coverage that fits their life, their doctors, and their family. You stop carrying an open-ended group renewal risk.
          </p>
          <p className="mb-8 text-base leading-relaxed" style={{ color: "#374151" }}>
            For restaurant groups, that can mean a more flexible benefit for a workforce that looks different at every location — while protecting the financial discipline the business needs.
          </p>
          <div className="space-y-4">
            {[
              "Set a predictable monthly benefit amount by employee class or location.",
              "Give office staff, managers, and frontline team members more relevant plan choice.",
              "Keep the administrative burden off the people already running payroll and operations.",
            ].map((point) => (
              <div className="flex items-start gap-3" key={point}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#1B6FC9" }} />
                <p className="leading-relaxed" style={{ color: "#374151" }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
        <div ref={useFadeIn(140)} className="fade-in-up overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1B6FC9 100%)" }}>
          <div className="p-10">
            <p className="mb-2 text-5xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Your cost.</p>
            <p className="mb-8 text-5xl font-bold" style={{ color: "#F0A202", fontFamily: "'Barlow Condensed', sans-serif" }}>Your call.</p>
            <div className="space-y-5">
              {[
                ["01", "Define the monthly amount your business can sustain."],
                ["02", "Build a compliant plan around your locations and workforce."],
                ["03", "Let E3 manage implementation, employee support, and the details."],
              ].map(([number, copy]) => (
                <div className="flex items-start gap-4" key={number}>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold" style={{ backgroundColor: "#F0A202", color: "#0B1F3A" }}>{number}</span>
                  <p className="pt-1 text-base leading-relaxed text-white/85">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatE3Does() {
  const ref = useFadeIn();
  const pillars = [
    { icon: <BriefcaseBusiness className="h-6 w-6" />, title: "Benefits Strategy", text: "A plan built around your operation, location mix, and labor realities — not a generic quote." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Compliance & Risk", text: "Practical support for ACA, wage and hour, classification, I-9, and California-specific requirements." },
    { icon: <Clock3 className="h-6 w-6" />, title: "Administration", text: "We take day-to-day benefits and HR process work off your team's plate so it does not come back to operations." },
    { icon: <UsersRound className="h-6 w-6" />, title: "Retention & Engagement", text: "A better employee experience, cleaner onboarding, and benefits that help you compete for people worth keeping." },
  ];
  return (
    <section className="py-24" style={{ backgroundColor: "#0B1F3A" }}>
      <div className="container">
        <div ref={ref} className="fade-in-up mb-14 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F0A202" }}>What E3 Handles</span>
          </div>
          <h2 className="mb-4 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, lineHeight: 1.05 }}>
            One Partner for the Work That Keeps Landing on Your Desk.
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,.72)" }}>
            E3 is not a policy vendor that shows up at renewal. We help you put a real HR and benefits operating system in place — then help carry it.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => <PillarCard key={pillar.title} {...pillar} delay={index * 70} />)}
        </div>
      </div>
    </section>
  );
}

function PillarCard({ icon, title, text, delay }: { icon: React.ReactNode; title: string; text: string; delay: number }) {
  const ref = useFadeIn(delay);
  return (
    <div ref={ref} className="fade-in-up flex gap-5 rounded-lg p-7" style={{ backgroundColor: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)" }}>
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded" style={{ backgroundColor: "#F0A202", color: "#0B1F3A" }}>{icon}</div>
      <div>
        <h3 className="mb-2 text-xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.68)" }}>{text}</p>
      </div>
    </div>
  );
}

function CaseStudy() {
  const ref = useFadeIn();
  const outcomes = [
    ["35%", "Reduction in healthcare costs"],
    ["0", "Compliance violations in 12 months"],
    ["20%", "Reduction in turnover rate"],
    ["50%", "Less HR administration time"],
  ];
  return (
    <section id="case-study" className="bg-white py-24">
      <div className="container">
        <div ref={ref} className="fade-in-up mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1B6FC9" }}>Restaurant Group Case Study</span>
          </div>
          <h2 style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, lineHeight: 1.05 }}>
            The Result Was Not Just a Lower Benefits Bill.
          </h2>
        </div>
        <div className="overflow-hidden rounded-xl" style={{ backgroundColor: "#F7F9FC", borderLeft: "4px solid #F0A202" }}>
          <div className="grid gap-10 p-10 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="mb-5 text-xl italic" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 }}>
                "A mid-sized California restaurant group was facing 17% annual health-cost increases, mounting compliance pressure, and a turnover problem that traditional group benefits were not solving."
              </p>
              <p className="mb-5 leading-relaxed" style={{ color: "#374151" }}>
                E3 redesigned the group’s HR and benefits strategy around a more flexible benefits offer, ongoing compliance support, and cleaner administration. The business gave employees a better experience while taking recurring operational work off the internal team.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "#1B6FC9" }}>
                Talk through what this could look like for your group <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 self-center">
              {outcomes.map(([stat, label]) => (
                <div key={label} className="rounded-lg p-5" style={{ backgroundColor: "#EAF2FC" }}>
                  <p className="mb-1 text-4xl font-bold" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif" }}>{stat}</p>
                  <p className="text-sm font-medium" style={{ color: "#1B6FC9" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-lg bg-white" style={{ boxShadow: "0 2px 12px rgba(11,31,58,.05)" }}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-7 py-5 text-left">
        <span className="pr-4 text-base font-bold" style={{ color: "#0B1F3A" }}>{question}</span>
        {open ? <ChevronUp className="h-5 w-5 flex-shrink-0" style={{ color: "#1B6FC9" }} /> : <ChevronDown className="h-5 w-5 flex-shrink-0" style={{ color: "#1B6FC9" }} />}
      </button>
      {open && <p className="px-7 pb-5 leading-relaxed" style={{ color: "#374151" }}>{answer}</p>}
    </div>
  );
}

function FAQ() {
  const ref = useFadeIn();
  const questions = [
    ["Can this work across multiple locations?", "Yes. The structure can be designed around a multi-site workforce, including different job roles, locations, and employee classes."],
    ["Will this create more work for our payroll or operations team?", "No. E3 manages the strategy, implementation, employee support, and ongoing administration so the benefit does not become another operations project."],
    ["What about California compliance?", "That is a core part of the work. We help keep the benefits and HR structure aligned with ACA requirements and California-specific employment considerations."],
    ["Do we have to move everyone off our current group plan?", "Not necessarily. We can evaluate a full transition or a hybrid structure that keeps an existing plan available while adding a more flexible option."],
    ["What does it cost to explore this?", "The consultation is free. We will review your current setup, point out where the real opportunities and constraints are, and give you a straight answer about whether it makes sense."],
  ];
  return (
    <section className="py-24" style={{ backgroundColor: "#F7F9FC" }}>
      <div className="container">
        <div ref={ref} className="fade-in-up mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1B6FC9" }}>FAQ</span>
          </div>
          <h2 style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800, lineHeight: 1.05 }}>
            Questions Restaurant Operators Usually Ask.
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-3">
          {questions.map(([question, answer]) => <FAQItem key={question} question={question} answer={answer} />)}
        </div>
      </div>
    </section>
  );
}

type FitAnswer = { text: string; value: number };
type FitQuestion = { key: string; label: string; text: string; options: FitAnswer[] };

const restaurantFitQuestions: FitQuestion[] = [
  {
    key: "locations",
    label: "Question 1 of 5",
    text: "How many locations are you responsible for?",
    options: [
      { text: "One location", value: 0 },
      { text: "Two to five locations", value: 2 },
      { text: "Six or more locations", value: 3 },
    ],
  },
  {
    key: "costTrend",
    label: "Question 2 of 5",
    text: "What has happened to your health-benefit costs in the last year?",
    options: [
      { text: "They have been mostly stable", value: 0 },
      { text: "They went up 5% to 10%", value: 2 },
      { text: "They went up more than 10%, or we are bracing for renewal", value: 3 },
    ],
  },
  {
    key: "spend",
    label: "Question 3 of 5",
    text: "Roughly what do you contribute per employee each month today?",
    options: [
      { text: "Under $500", value: 0 },
      { text: "$500 to $700", value: 1 },
      { text: "$700 to $900", value: 2 },
      { text: "Over $900", value: 3 },
    ],
  },
  {
    key: "turnover",
    label: "Question 4 of 5",
    text: "How would you describe turnover across your team?",
    options: [
      { text: "Lower than we would expect in restaurants", value: 0 },
      { text: "It is a constant but manageable problem", value: 2 },
      { text: "It is hurting consistency, recruiting, or manager bandwidth", value: 3 },
    ],
  },
  {
    key: "hrLoad",
    label: "Question 5 of 5",
    text: "Who is carrying HR, benefits, and compliance work today?",
    options: [
      { text: "A dedicated internal HR team", value: 0 },
      { text: "An HR or payroll person with several other priorities", value: 2 },
      { text: "Operations leaders or owners are handling it on the side", value: 3 },
    ],
  },
];

function getRestaurantFitResult(answers: Record<string, FitAnswer>) {
  const score = Object.values(answers).reduce((total, answer) => total + answer.value, 0);
  if (score >= 10) {
    return {
      tier: "Strong Fit",
      badge: { background: "#E4F6EC", color: "#1E824C" },
      headline: "You have a real opportunity to reset your benefits strategy.",
      body: "Your answers point to the exact mix of cost pressure, workforce complexity, and HR load where a defined contribution benefits structure can create more control.",
      focus: ["Locking in a predictable benefits budget", "Giving different employee groups more relevant choice", "Taking recurring administration away from operations"],
    };
  }
  if (score >= 5) {
    return {
      tier: "Worth Exploring",
      badge: { background: "#FDF0DC", color: "#C97F00" },
      headline: "There is likely room to improve without disrupting what works.",
      body: "You may not need a full overhaul. A hybrid or class-based ICHRA structure could be a practical way to protect margin while improving the employee experience.",
      focus: ["Finding which employee classes need a different option", "Comparing renewal exposure with a fixed monthly structure", "Reducing the internal HR burden"],
    };
  }
  return {
    tier: "Keep an Eye On It",
    badge: { background: "#EEF1F5", color: "#5B6472" },
    headline: "Your current setup may be working for now.",
    body: "Even efficient groups need a plan before the next renewal or growth phase changes the math. A short review can give you a benchmark and a clearer next move.",
    focus: ["Benchmarking your current spend", "Stress-testing the next renewal", "Making sure benefits are still supporting retention"],
  };
}

function RestaurantFitCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, FitAnswer>>({});
  const isResult = step >= restaurantFitQuestions.length;
  const currentQuestion = restaurantFitQuestions[step];
  const progress = isResult ? 100 : ((step / (restaurantFitQuestions.length + 1)) * 100 + 12);
  const result = getRestaurantFitResult(answers);

  return (
    <section id="restaurant-fit-check" className="py-24" style={{ backgroundColor: "#0B1F3A" }}>
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F0A202" }}>60-Second Check</span>
              <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            </div>
            <h2 className="mb-3 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.05 }}>
              The Restaurant Benefits Fit Check.
            </h2>
            <p style={{ color: "rgba(255,255,255,.65)" }}>
              Five quick questions to see whether there is a stronger path for your cost, compliance, and team.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white" style={{ boxShadow: "0 8px 48px rgba(0,0,0,.25)" }}>
            <div className="px-8 py-7 text-center" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #071527 100%)" }}>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#F0A202" }}>Restaurant &amp; Multi-Site Operators</p>
              <h3 className="mb-2 text-2xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Where Is Benefits Costing You More Than It Should?</h3>
              <p className="text-sm" style={{ color: "#C7D3E5" }}>Built for restaurant, hospitality, and franchise groups balancing margin, people, and California compliance.</p>
            </div>
            <div className="h-1" style={{ backgroundColor: "#DDE3EC" }}>
              <div className="h-full transition-all duration-300" style={{ width: `${progress}%`, backgroundColor: "#F0A202" }} />
            </div>

            <div className="p-8">
              {!isResult ? (
                <>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide" style={{ color: "#1B6FC9" }}>{currentQuestion.label}</p>
                  <p className="mb-5 text-xl font-bold" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.35rem" }}>{currentQuestion.text}</p>
                  <div className="mb-6 flex flex-col gap-3">
                    {currentQuestion.options.map((option) => {
                      const selected = answers[currentQuestion.key]?.text === option.text;
                      return (
                        <button
                          key={option.text}
                          onClick={() => setAnswers((current) => ({ ...current, [currentQuestion.key]: option }))}
                          className="w-full rounded-lg border-2 px-4 py-3.5 text-left text-base transition-all"
                          style={{ borderColor: selected ? "#1B6FC9" : "#DDE3EC", backgroundColor: selected ? "#EAF2FC" : "#FFFFFF", color: "#10192B", fontWeight: selected ? 600 : 400 }}
                        >
                          {option.text}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between">
                    <button onClick={() => setStep((current) => Math.max(current - 1, 0))} disabled={step === 0} className="px-2 py-1 text-sm disabled:invisible" style={{ color: "#5B6472" }}>← Back</button>
                    <button
                      onClick={() => setStep((current) => current + 1)}
                      disabled={!answers[currentQuestion.key]}
                      className="rounded-lg px-6 py-3 text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-40"
                      style={{ backgroundColor: "#F0A202", color: "#0B1F3A" }}
                    >
                      {step === restaurantFitQuestions.length - 1 ? "See My Result" : "Next"}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide" style={result.badge}>{result.tier}</span>
                  <h3 className="mb-3 text-2xl font-bold" style={{ color: "#0B1F3A", fontFamily: "'Barlow Condensed', sans-serif" }}>{result.headline}</h3>
                  <p className="mb-6 leading-relaxed" style={{ color: "#5B6472" }}>{result.body}</p>
                  <div className="mb-6 rounded-xl p-5" style={{ backgroundColor: "#EAF2FC", border: "1px solid #CFE0F5" }}>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: "#1B6FC9" }}>What We Would Look At First</p>
                    <div className="space-y-3">
                      {result.focus.map((item) => (
                        <div className="flex items-start gap-3" key={item}>
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#1B6FC9" }} />
                          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="e3-amber-btn block w-full rounded-lg py-4 text-center text-base font-bold">
                    Book My Free Benefits Breakdown Call
                  </a>
                  <p className="mt-3 text-center text-xs" style={{ color: "#5B6472" }}>15 minutes. Bring your current setup. We will give you a straight answer about the next right move.</p>
                </>
              )}
            </div>
          </div>
          <p className="mt-5 text-center text-xs" style={{ color: "rgba(255,255,255,.35)" }}>
            This is a directional check, not a benefit quote. Your exact opportunity depends on your workforce, current plan, locations, and compliance structure.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useFadeIn();
  return (
    <section className="py-28" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #1B6FC9 100%)" }}>
      <div ref={ref} className="container fade-in-up text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F0A202" }}>Next Step</span>
            <span className="h-px w-8" style={{ backgroundColor: "#F0A202" }} />
          </div>
          <h2 className="mb-6 text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(2.3rem,5vw,4rem)", fontWeight: 800, lineHeight: 1 }}>
            Find Out What a Better Benefits Strategy Could Give Back to Your Business.
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg" style={{ color: "rgba(255,255,255,.78)" }}>
            Bring us your current setup. We will look at the cost, the compliance exposure, and the employee experience — then give you a straight answer on the next right move.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#restaurant-fit-check" className="e3-amber-btn inline-flex items-center justify-center gap-3 rounded px-8 py-5 text-lg font-bold tracking-wide">
              Take the Restaurant Fit Check <ArrowRight className="h-5 w-5" />
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded border border-white/30 px-8 py-5 text-lg font-bold tracking-wide text-white transition-colors hover:bg-white/10">
              Book a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: "#071527", borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <img src="https://e3-advisors.com/wp-content/uploads/2025/03/Group-288.png" alt="E3 Advisors" className="h-8 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
          <span className="text-sm" style={{ color: "rgba(255,255,255,.4)" }}>© 2025 E3 Advisors. All rights reserved.</span>
        </div>
        <div className="flex flex-col items-center gap-4 text-sm sm:flex-row sm:gap-6" style={{ color: "rgba(255,255,255,.45)" }}>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />3920 Prospect Ave, Unit A, Yorba Linda, CA 92886</span>
          <a href="mailto:sales@e3-advisors.com" className="flex items-center gap-2 transition-colors hover:text-white"><Mail className="h-4 w-4" />sales@e3-advisors.com</a>
          <a href="tel:7146968796" className="flex items-center gap-2 transition-colors hover:text-white"><Phone className="h-4 w-4" />714-696-8796</a>
        </div>
      </div>
    </footer>
  );
}

export default function Restaurants() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Challenges />
      <ICHRAExplainer />
      <WhatE3Does />
      <CaseStudy />
      <FAQ />
      <RestaurantFitCheck />
      <FinalCTA />
      <Footer />
    </div>
  );
}
