import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import { applications, applicationOrder } from "@/data/applications";

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const AnwendungPage = () => {
  const { slug } = useParams();
  const app = slug ? applications[slug] : undefined;

  if (!app) return <Navigate to="/" replace />;

  const currentIndex = applicationOrder.indexOf(app.slug);
  const next = applications[applicationOrder[(currentIndex + 1) % applicationOrder.length]];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[640px] flex items-end">
          <img
            src={app.hero}
            alt={app.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right,rgba(8,10,18,0.95) 0%,rgba(8,10,18,0.7) 45%,rgba(8,10,18,0.3) 100%), linear-gradient(to top,rgba(8,10,18,0.92) 0%,rgba(8,10,18,0.2) 60%,rgba(8,10,18,0.5) 100%)",
            }}
          />
          <div
            className="hidden md:block absolute right-[8%] bottom-[20%] w-[320px] h-[320px] rounded-full blur-[90px] pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(47,184,198,0.25) 0%,transparent 70%)" }}
          />

          <div className="relative z-[2] px-6 md:px-14 pb-16 md:pb-20 max-w-[800px] container-shell w-full">
            <div className="text-[11px] font-medium text-white/55 uppercase tracking-[0.18em] mb-6">
              {app.tag}
            </div>
            <h1 className="display text-white mb-6" style={{ fontSize: "clamp(44px, 6.5vw, 76px)", lineHeight: 1.04 }}>
              {app.title}<br />
              <span style={{ color: "hsl(var(--teal))" }}>{app.titleAccent}</span>
              {app.titleSuffix && (<><br />{app.titleSuffix}</>)}
            </h1>
            <p className="text-[17px] font-light text-white/65 leading-relaxed max-w-[560px]">
              {app.intro}
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Demo anfragen
                <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                  <Arrow />
                </span>
              </Link>
              <a
                href="#prozess"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-6 py-3.5 rounded-full transition-colors"
              >
                Wie es läuft
              </a>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="hl-lg">{app.problem.headline}</h2>
            <p className="bd pt-1.5">{app.problem.body}</p>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section id="prozess" className="pb-24 section-x container-shell">
          <div className="mb-10">
            <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-3">
              So läuft es
            </div>
            <h2 className="display text-[32px] md:text-[44px] font-bold leading-tight max-w-[640px]">
              Vier Schritte. Ein Prozess.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {app.steps.map((s) => (
              <div
                key={s.title}
                className="relative rounded-[14px] p-6 border border-border bg-card hover-lift"
              >
                <div className="text-[10.5px] font-medium text-muted-foreground uppercase tracking-[0.16em] mb-3">
                  {s.tag}
                </div>
                <h3 className="display text-[18px] font-bold leading-snug mb-2">{s.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NUMBERS */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-border container-shell">
          {app.facts.map((x, i) => (
            <div key={i} className={`px-8 md:px-12 py-10 ${i < 3 ? "md:border-r border-border" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""}`}>
              <div className="display text-[44px] md:text-[52px] font-bold leading-none mb-1.5">
                {x.n}<em className="not-italic" style={{ color: "hsl(var(--teal))" }}>{x.em}</em>
              </div>
              <div className="text-[13.5px] text-muted-foreground whitespace-pre-line leading-snug">{x.l}</div>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
            <h2 className="hl-lg">
              Was du{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>konkret bekommst</em>
            </h2>
            <p className="bd pt-1.5">
              Kein Konzeptpapier, kein „könnte man machen". Das ist der Funktionsumfang,
              den wir in dieser Anwendung gemeinsam mit dir scharf schalten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {app.features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-border pb-5">
                <span className="display text-[18px] font-bold text-muted-foreground/60 mt-0.5 min-w-[28px]">
                  0{i + 1}
                </span>
                <span className="text-[15.5px] leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* RELATED PRODUCTS STRIP */}
        <section className="pb-24 section-x container-shell">
          <div
            className="relative rounded-[18px] overflow-hidden min-h-[320px] grid md:grid-cols-2 gap-0"
            style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 45%,#06182e 100%)" }}
          >
            <div
              className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full blur-[60px] pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(47,184,198,.22) 0%,transparent 65%)" }}
            />
            <div className="relative z-[2] p-10 md:p-14">
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.18em] mb-5">
                Im System
              </div>
              <h3 className="display text-white text-[28px] md:text-[34px] font-bold leading-tight mb-4">
                Diese Anwendung steht nicht allein.
              </h3>
              <p className="text-[15px] text-white/60 leading-[1.8]">
                Sie läuft auf SantosOS — und nutzt Software, KI und Hardware aus einem Guss.
                Das macht den Unterschied zwischen Insel-Tool und Betriebssystem.
              </p>
              <Link
                to="/santosos"
                className="inline-flex items-center gap-2.5 mt-7 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-[13px] font-medium pl-5 pr-3 py-2.5 rounded-full transition-colors"
              >
                SantosOS entdecken
                <span className="w-[26px] h-[26px] bg-white rounded-full flex items-center justify-center">
                  <svg width="9" height="9" viewBox="0 0 11 11">
                    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="#111" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="relative z-[2] p-10 md:p-14 flex flex-col justify-center gap-3">
              {app.related.map((x) => (
                <Link
                  key={x.l}
                  to={x.to}
                  className="flex items-center justify-between border-t border-white/10 pt-3 group"
                >
                  <div>
                    <div className="text-white text-[15px] font-medium">{x.l}</div>
                    <div className="text-white/45 text-[12.5px]">{x.d}</div>
                  </div>
                  <span className="w-[30px] h-[30px] bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + NEXT APP */}
        <div className="section-x pb-20 container-shell">
          <div className="relative rounded-[18px] overflow-hidden p-10 md:p-16" style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 45%,#06182e 100%)" }}>
            <div
              className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full blur-[60px] pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(47,184,198,.22) 0%,transparent 65%)" }}
            />
            <div className="relative z-[2] grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
              <div>
                <h2 className="display text-white mb-5" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.1 }}>
                  Bereit, das in deinem Betrieb zu testen?
                </h2>
                <p className="text-[15px] text-white/55 leading-[1.8] mb-9 max-w-[520px]">
                  Wir schauen uns deinen aktuellen Prozess an und zeigen, wo der größte
                  Hebel liegt — konkret, mit Zahlen, ohne PowerPoint-Marathon.
                </p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors"
                >
                  Kostenloses Erstgespräch
                  <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </Link>
              </div>
              <Link
                to={`/anwendung/${next.slug}`}
                className="block border border-white/10 rounded-[14px] p-6 hover:bg-white/5 transition-colors group"
              >
                <div className="text-[10.5px] font-medium text-white/45 uppercase tracking-[0.16em] mb-3">
                  Nächste Anwendung
                </div>
                <div className="display text-white text-[22px] font-bold leading-tight mb-2">
                  {next.title} <span style={{ color: "hsl(var(--teal))" }}>{next.titleAccent}</span>
                </div>
                <div className="flex items-center gap-2 text-white/55 text-[13px]">
                  Weiterlesen
                  <span className="w-[26px] h-[26px] bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <Arrow />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AnwendungPage;
