import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Arrow = ({ stroke = "white" }: { stroke?: string }) => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke={stroke} strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-5">{children}</p>
);

export interface CaseStudyContent {
  backLabel: string;
  eyebrow: string;
  heroHeadline: string;
  heroHeadlineAccent?: string; // optional teal-highlighted tail of headline
  heroSub: string;
  heroCta: string;
  contextLabel: string;
  contextTitle: string;
  contextBody1: string;
  contextBody2: string;
  problemLabel: string;
  problemTitle: string;
  problems: string[];
  solutionLabel: string;
  solutionTitle: string;
  solutionBody1: string;
  solutionBody2: string;
  processLabel: string;
  processTitle: string;
  steps: string[];
  backendLabel: string;
  backendTitle: string;
  backendItems: string[];
  resultLabel: string;
  resultTitle: string;
  metrics: { value: string; label: string }[];
  quoteLabel: string;
  quote: string;
  quoteAuthor: string;
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}

interface Props {
  r: CaseStudyContent;
  heroGradient: string;
}

const CaseStudyLayout = ({ r, heroGradient }: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero — dark band, matches site dark sections */}
        <section
          className="relative pt-32 md:pt-40 pb-20 md:pb-28 section-x container-shell text-white overflow-hidden"
          style={{ background: heroGradient }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-[140px]" style={{ background: "rgba(47,184,198,0.18)" }} />
          </div>

          <div className="relative z-10">
            <Link to="/projekte" className="inline-flex items-center gap-2 text-white/55 hover:text-white transition-colors text-[13px] mb-10">
              ← {r.backLabel}
            </Link>

            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 mb-6">{r.eyebrow}</p>

            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-end">
              <h1 className="display text-white text-[36px] md:text-[54px] leading-[1.05] font-semibold tracking-[-0.02em]">
                {r.heroHeadline}
              </h1>
              <div>
                <p className="text-white/75 text-[15px] md:text-[16px] leading-relaxed mb-8">{r.heroSub}</p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-white text-[#0f0f0f] text-[13.5px] font-medium px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  {r.heroCta} <Arrow stroke="#0f0f0f" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Context */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <Eyebrow>{r.contextLabel}</Eyebrow>
              <h2 className="hl-lg">{r.contextTitle}</h2>
            </div>
            <div className="space-y-4 pt-1.5">
              <p className="bd">{r.contextBody1}</p>
              <p className="bd">{r.contextBody2}</p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="pb-20 md:pb-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <Eyebrow>{r.problemLabel}</Eyebrow>
              <h2 className="hl-lg">{r.problemTitle}</h2>
            </div>
            <ul className="space-y-3 pt-1.5">
              {r.problems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground text-[12px] mt-1 tabular-nums">0{i + 1}</span>
                  <span className="bd">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution — dark band */}
        <section
          className="py-20 md:py-24 section-x container-shell text-white"
          style={{ background: "#0a0f18" }}
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 mb-5">{r.solutionLabel}</p>
              <h2 className="hl-lg text-white">
                {r.solutionTitle.split(" AI").length > 1 ? (
                  <>
                    {r.solutionTitle.split(" AI")[0]}{" "}
                    <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>AI{r.solutionTitle.split(" AI")[1]}</em>
                  </>
                ) : (
                  r.solutionTitle
                )}
              </h2>
            </div>
            <div className="space-y-4 pt-1.5">
              <p className="text-white/75 text-[15px] leading-relaxed">{r.solutionBody1}</p>
              <p className="text-white/75 text-[15px] leading-relaxed">{r.solutionBody2}</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-12">
            <div>
              <Eyebrow>{r.processLabel}</Eyebrow>
              <h2 className="hl-lg">{r.processTitle}</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {r.steps.map((step, i) => (
              <div
                key={i}
                className="rounded-[18px] border border-border bg-card p-7 flex items-start gap-5 min-h-[140px]"
              >
                <span
                  className="display text-[28px] font-semibold leading-none shrink-0"
                  style={{ color: "hsl(var(--teal))" }}
                >
                  0{i + 1}
                </span>
                <span className="bd pt-1">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Backend / What's in the system */}
        <section className="pb-20 md:pb-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <Eyebrow>{r.backendLabel}</Eyebrow>
              <h2 className="hl-lg">{r.backendTitle}</h2>
            </div>
            <ul className="pt-1.5">
              {r.backendItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b border-border first:border-t"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                    style={{ background: "hsl(var(--teal))" }}
                  />
                  <span className="bd">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Result / Metrics — dark */}
        <section
          className="py-20 md:py-24 section-x container-shell text-white"
          style={{ background: "#0a0f18" }}
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 mb-5">{r.resultLabel}</p>
              <h2 className="hl-lg text-white">{r.resultTitle}</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {r.metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-[18px] border border-white/10 bg-white/[0.03] p-7 min-h-[150px] flex flex-col justify-between"
              >
                <span
                  className="display text-[32px] md:text-[40px] font-semibold leading-none tracking-[-0.02em]"
                  style={{ color: "hsl(var(--teal))" }}
                >
                  {m.value}
                </span>
                <span className="text-[12.5px] text-white/65 leading-snug mt-6">{m.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-8">{r.quoteLabel}</p>
            <p className="display text-foreground text-[24px] md:text-[32px] leading-[1.3] font-medium mb-8">
              „{r.quote}"
            </p>
            <p className="text-[13px] text-muted-foreground">{r.quoteAuthor}</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-24 md:pb-32 section-x container-shell">
          <div
            className="rounded-[18px] p-12 md:p-20 text-center text-white relative overflow-hidden"
            style={{ background: "linear-gradient(145deg,#111827 0%,#1e3a5f 50%,#0f2a4a 100%)" }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full blur-[120px]" style={{ background: "rgba(47,184,198,0.25)" }} />
            </div>
            <div className="relative z-10">
              <h2 className="display text-white text-[28px] md:text-[40px] leading-[1.1] font-semibold tracking-[-0.02em] mb-6 max-w-2xl mx-auto">
                {r.ctaTitle}
              </h2>
              <p className="text-white/75 text-[15px] md:text-[16px] leading-relaxed max-w-lg mx-auto mb-10">{r.ctaBody}</p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-white text-[#0f0f0f] text-[13.5px] font-medium px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                {r.ctaButton} <Arrow stroke="#0f0f0f" />
              </Link>
            </div>
          </div>
        </section>

        {/* CRA compliance note */}
        <section className="section-x container-shell pb-16 -mt-4">
          <div className="rounded-[14px] border border-border bg-muted/30 px-6 py-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[13px] text-muted-foreground max-w-[520px]">
              Dieses Projekt wurde nach unseren <Link to="/cra" className="text-foreground underline decoration-[hsl(var(--teal))] decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">CRA-ready Standards</Link> gebaut — Secure by Design, SBOM und Vulnerability Management inklusive.
            </p>
            <Link to="/cra" className="text-[12px] font-medium uppercase tracking-[0.14em] text-foreground border border-foreground/20 rounded-full px-3.5 py-1.5 hover:bg-foreground hover:text-background transition-colors">
              Cyber Resilience Act →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
