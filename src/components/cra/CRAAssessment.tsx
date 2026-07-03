import { useState } from "react";
import { ArrowUpRight, Check, Loader2, RotateCcw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Level = "gap" | "basic" | "advanced";

type Option = {
  label: string;
  hint?: string;
  level: Level;
};

type Question = {
  id: string;
  label: string;
  question: string;
  options: Option[];
};

const questions: Question[] = [
  {
    id: "product",
    label: "Produkt",
    question: "Was für ein digitales Produkt bringen Sie in den EU-Markt?",
    options: [
      { label: "Web-App oder SaaS mit Nutzerkonten & API", level: "basic" },
      { label: "IoT-Gerät, Embedded System oder industrielle Steuerung", hint: "Klasse-II-Kandidat", level: "basic" },
      { label: "KI-Anwendung / Backend-Service für ein Produkt", level: "basic" },
      { label: "Reine statische Website ohne Produktcharakter", hint: "vermutlich nicht CRA-pflichtig", level: "advanced" },
    ],
  },
  {
    id: "sbom",
    label: "SBOM",
    question: "Existiert eine Software Bill of Materials (SBOM) für Ihr Produkt?",
    options: [
      { label: "Ja — automatisch generiert, signiert, mit jedem Release", level: "advanced" },
      { label: "Ja — manuell gepflegte Liste, unregelmäßig aktualisiert", level: "basic" },
      { label: "Nein, aber wir könnten sie auf Anfrage zusammenstellen", level: "basic" },
      { label: "Wir wissen nicht, was das genau ist", level: "gap" },
    ],
  },
  {
    id: "vuln",
    label: "Vulnerability Management",
    question: "Wie erfahren Sie von neuen Schwachstellen in Ihren Abhängigkeiten?",
    options: [
      { label: "24/7-Monitoring mit CVE-Abgleich & automatischen Alerts", level: "advanced" },
      { label: "Dependabot / GitHub-Alerts laufen im Repo", level: "basic" },
      { label: "Wir aktualisieren Abhängigkeiten bei Bedarf", level: "gap" },
      { label: "Wir haben keinen definierten Prozess", level: "gap" },
    ],
  },
  {
    id: "pipeline",
    label: "Pipeline",
    question: "Welche Security-Checks laufen in Ihrer CI/CD-Pipeline?",
    options: [
      { label: "SAST, DAST, Secret-, Dependency- & Container-Scans — Merge-Block bei Findings", level: "advanced" },
      { label: "Ein oder zwei Scans (z. B. nur SAST oder nur Dependency-Scan)", level: "basic" },
      { label: "Linter & Tests, aber keine Security-Gates", level: "gap" },
      { label: "Keine automatisierte Pipeline im Einsatz", level: "gap" },
    ],
  },
  {
    id: "docs",
    label: "Dokumentation",
    question: "Wie steht es um Ihre technische Dokumentation nach CRA Annex I?",
    options: [
      { label: "Vollständig: Risikoanalyse, Architektur, Testreports, Update-Policy — versioniert", level: "advanced" },
      { label: "Teile davon existieren, aber verteilt & unvollständig", level: "basic" },
      { label: "Wenig bis nichts Formalisiertes vorhanden", level: "gap" },
      { label: "Kenne den Anforderungskatalog von Annex I noch nicht", level: "gap" },
    ],
  },
  {
    id: "support",
    label: "Support & Updates",
    question: "Wie lange garantieren Sie Sicherheits-Updates für Ihr Produkt?",
    options: [
      { label: "5+ Jahre, mit signierten Updates & Rollback-Fähigkeit", level: "advanced" },
      { label: "Ja, informell — aber nicht vertraglich zugesichert", level: "basic" },
      { label: "Bis das nächste Major-Release erscheint", level: "gap" },
      { label: "Keine definierte Update-Politik", level: "gap" },
    ],
  },
  {
    id: "incident",
    label: "Meldepflicht",
    question: "Können Sie eine schwerwiegende Schwachstelle binnen 24h an ENISA/BSI melden?",
    options: [
      { label: "Ja — dokumentierte Meldekette, quartalsweise geübt", level: "advanced" },
      { label: "Wir wüssten grob, wen wir kontaktieren müssen", level: "basic" },
      { label: "Nein — dieser Prozess existiert noch nicht", level: "gap" },
      { label: "Uns war die 24h-Frist nicht bewusst", level: "gap" },
    ],
  },
];

type Result = {
  headline: string;
  verdict: string;
  bucket: "critical" | "gap" | "aligned" | "leader";
  score: number;
  gap: number;
  basic: number;
  advanced: number;
};

const buildResult = (levels: Level[]): Result => {
  const gap = levels.filter((l) => l === "gap").length;
  const basic = levels.filter((l) => l === "basic").length;
  const advanced = levels.filter((l) => l === "advanced").length;
  const score = Math.round(((basic * 1 + advanced * 2) / (levels.length * 2)) * 100);

  if (gap >= 3) {
    return {
      score,
      gap,
      basic,
      advanced,
      bucket: "critical",
      headline: "Kritische CRA-Lücken",
      verdict:
        "Mehrere Kern-Anforderungen des CRA sind bei Ihnen aktuell nicht erfüllt. Ohne Nachrüstung besteht ein reales Risiko, ab 12/2027 nicht mehr in Verkehr bringen zu dürfen. Wir empfehlen eine strukturierte Gap-Analyse als ersten Schritt.",
    };
  }
  if (gap >= 1 || advanced <= 2) {
    return {
      score,
      gap,
      basic,
      advanced,
      bucket: "gap",
      headline: "Zwischen Mindeststandard und CRA-Anforderung",
      verdict:
        "Sie haben Basiselemente etabliert, aber wichtige CRA-Bausteine — SBOM, dokumentierte Meldeketten oder Security-Gates — fehlen noch. Ein gezieltes Readiness-Assessment schließt diese Lücken planbar.",
    };
  }
  if (advanced >= 5) {
    return {
      score,
      gap,
      basic,
      advanced,
      bucket: "leader",
      headline: "SantosLab-Niveau",
      verdict:
        "Ihr Setup entspricht in vielen Bereichen dem, was wir bei SantosLab als Standard fahren. Wir helfen Ihnen, die letzten Lücken zu schließen und Ihre Compliance auditfest zu dokumentieren.",
    };
  }
  return {
    score,
    gap,
    basic,
    advanced,
    bucket: "aligned",
    headline: "CRA-Mindeststandard erreicht",
    verdict:
      "Sie erfüllen wesentliche Mindestanforderungen, gehen aber noch nicht überall über das gesetzliche Minimum hinaus. Wir zeigen, wo sich mit überschaubarem Aufwand echter Sicherheitsgewinn erzielen lässt.",
  };
};

const bucketAccent: Record<Result["bucket"], string> = {
  critical: "#e05a3f",
  gap: "#d9a441",
  aligned: "hsl(var(--teal))",
  leader: "hsl(var(--teal))",
};

const CRAAssessment = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Option>>({});
  const [started, setStarted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const total = questions.length;
  const done = step >= total;
  const levels = questions.map((q) => answers[q.id]?.level).filter(Boolean) as Level[];
  const result = done ? buildResult(levels) : null;

  const pick = (opt: Option) => {
    const q = questions[step];
    setAnswers((a) => ({ ...a, [q.id]: opt }));
    setTimeout(() => setStep((s) => s + 1), 180);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setShowForm(false);
    setSent(false);
    setName("");
    setEmail("");
    setCompany("");
    setNote("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !result) return;
    setSending(true);

    const summary = questions
      .map((q) => {
        const a = answers[q.id];
        const marker = a.level === "advanced" ? "✓" : a.level === "basic" ? "○" : "✗";
        return `${marker} ${q.label} — ${q.question}\n   → ${a.label}`;
      })
      .join("\n\n");

    const message = `
=== CRA-SCHNELL-ASSESSMENT ===

Ergebnis: ${result.headline}
Score: ${result.score}/100
Verteilung: ${result.advanced}× SantosLab-Level · ${result.basic}× Mindeststandard · ${result.gap}× Lücke

${result.verdict}

--- Antworten ---
${summary}

${company ? `\nUnternehmen: ${company}` : ""}
${note ? `\nZusätzliche Anmerkung:\n${note}` : ""}
    `.trim();

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: name.trim(),
          email: email.trim(),
          message,
          sendCraChecklist: true,
        },
      });
      if (error) throw error;
      setSent(true);
      toast({
        title: "CRA-Anfrage erhalten",
        description: "Wir melden uns innerhalb von 24 Stunden mit einer ersten Einordnung.",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Senden fehlgeschlagen",
        description: "Bitte versuchen Sie es erneut oder schreiben Sie an hello@santoslab.de.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  // ─── Intro ─────────────────────────────────────────
  if (!started) {
    return (
      <div className="rounded-[18px] border border-border bg-card p-8 md:p-12">
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] mb-3" style={{ color: "hsl(var(--teal))" }}>
          Interaktiv · ~90 Sekunden
        </div>
        <h3 className="display text-[26px] md:text-[34px] font-bold leading-tight mb-4 max-w-[640px]">
          Wo stehen Sie zwischen{" "}
          <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Mindeststandard</em>{" "}
          und SantosLab-Level?
        </h3>
        <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[620px] mb-8">
          7 kurze Fragen zu SBOM, Vulnerability Management, Pipeline, Dokumentation und Meldepflicht.
          Danach erhalten Sie eine ehrliche Einordnung — plus unsere <strong className="text-foreground">30-Punkte CRA-Checkliste als PDF per E-Mail</strong>.
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="inline-flex items-center gap-3 bg-foreground text-background text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Assessment starten
          <span className="w-[32px] h-[32px] bg-background rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-foreground" />
          </span>
        </button>
      </div>
    );
  }

  // ─── Result & Contact ──────────────────────────────
  if (done && result) {
    const accent = bucketAccent[result.bucket];
    return (
      <div className="rounded-[18px] border border-border bg-card overflow-hidden">
        <div className="p-8 md:p-12 border-b border-border">
          <div className="text-[11px] font-medium uppercase tracking-[0.18em] mb-3" style={{ color: accent }}>
            Ihr Ergebnis
          </div>
          <div className="flex items-baseline gap-5 mb-5 flex-wrap">
            <h3 className="display text-[28px] md:text-[38px] font-bold leading-tight">
              {result.headline}
            </h3>
            <div className="display text-[36px] md:text-[44px] font-bold leading-none">
              {result.score}
              <span className="text-[18px] text-muted-foreground font-normal">/100</span>
            </div>
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[720px] mb-6">
            {result.verdict}
          </p>

          {/* distribution bar */}
          <div className="mb-6">
            <div className="flex h-2.5 rounded-full overflow-hidden bg-muted">
              {result.advanced > 0 && (
                <div
                  style={{ width: `${(result.advanced / total) * 100}%`, background: "hsl(var(--teal))" }}
                  title={`${result.advanced}× SantosLab-Level`}
                />
              )}
              {result.basic > 0 && (
                <div
                  style={{ width: `${(result.basic / total) * 100}%`, background: "#d9a441" }}
                  title={`${result.basic}× Mindeststandard`}
                />
              )}
              {result.gap > 0 && (
                <div
                  style={{ width: `${(result.gap / total) * 100}%`, background: "#e05a3f" }}
                  title={`${result.gap}× Lücke`}
                />
              )}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-[12px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--teal))" }} />{result.advanced}× SantosLab-Level</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: "#d9a441" }} />{result.basic}× Mindeststandard</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: "#e05a3f" }} />{result.gap}× Lücke</span>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            {!showForm && !sent && (
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-3 bg-foreground text-background text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Detaillierte Einordnung anfragen
                <span className="w-[32px] h-[32px] bg-background rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-foreground" />
                </span>
              </button>
            )}
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground px-5 py-3.5 rounded-full border border-border hover:bg-muted/40 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Neu starten
            </button>
          </div>
        </div>

        {/* answers recap */}
        <details className="group">
          <summary className="cursor-pointer list-none px-8 md:px-12 py-5 flex items-center justify-between text-[13.5px] font-medium text-muted-foreground hover:bg-muted/30 transition-colors border-b border-border">
            <span>Alle 7 Antworten im Detail</span>
            <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-lg leading-none group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div className="px-8 md:px-12 py-6 space-y-4">
            {questions.map((q) => {
              const a = answers[q.id];
              const dot =
                a.level === "advanced" ? "hsl(var(--teal))" : a.level === "basic" ? "#d9a441" : "#e05a3f";
              return (
                <div key={q.id} className="grid grid-cols-[auto_1fr] gap-3.5">
                  <span className="w-2.5 h-2.5 rounded-full mt-2" style={{ background: dot }} />
                  <div>
                    <div className="text-[13px] text-muted-foreground mb-0.5">{q.label} — {q.question}</div>
                    <div className="text-[14px] font-medium">{a.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </details>

        {/* form */}
        {showForm && !sent && (
          <form onSubmit={submit} className="p-8 md:p-12 border-t border-border bg-muted/20 space-y-4">
            <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-1">
              Kontakt
            </div>
            <p className="text-[14px] text-muted-foreground mb-4 max-w-[560px]">
              Ihre Antworten werden mitgesendet. Wir liefern innerhalb von 24 Stunden eine erste Einordnung —
              Gap-Report auf Wunsch in 48 Stunden. <strong className="text-foreground">Zusätzlich erhalten Sie sofort per E-Mail unsere 30-Punkte CRA-Checkliste als PDF.</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-[12px] text-muted-foreground">Name *</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-[10px] border border-border bg-background px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))]/40"
                />
              </label>
              <label className="block">
                <span className="text-[12px] text-muted-foreground">E-Mail *</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-[10px] border border-border bg-background px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))]/40"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-[12px] text-muted-foreground">Unternehmen (optional)</span>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1 w-full rounded-[10px] border border-border bg-background px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))]/40"
              />
            </label>
            <label className="block">
              <span className="text-[12px] text-muted-foreground">Anmerkung zum Produkt (optional)</span>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="mt-1 w-full rounded-[10px] border border-border bg-background px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))]/40 resize-none"
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 bg-foreground text-background text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:opacity-90 disabled:opacity-60 transition-opacity"
            >
              {sending ? (
                <>
                  Wird gesendet <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  Anfrage senden
                  <span className="w-[32px] h-[32px] bg-background rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </span>
                </>
              )}
            </button>
          </form>
        )}

        {sent && (
          <div className="p-8 md:p-12 border-t border-border bg-muted/20">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--teal))" }}>
                <Check className="w-5 h-5 text-white" />
              </span>
              <div className="flex-1">
                <div className="display text-[20px] font-bold mb-1">Anfrage erhalten — Checkliste unterwegs</div>
                <p className="text-[14px] text-muted-foreground max-w-[560px] mb-5">
                  Ihre 30-Punkte CRA-Checkliste wurde soeben an <strong className="text-foreground">{email}</strong> gesendet.
                  Wir melden uns innerhalb von 24 Stunden mit einer ersten Einordnung und Terminvorschlägen für die Gap-Analyse.
                </p>
                <a
                  href="/downloads/santoslab-cra-checkliste.pdf"
                  download
                  className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-5 py-2.5 text-[13px] font-medium hover:border-foreground/40 transition-colors"
                >
                  Checkliste direkt herunterladen (PDF)
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ─── Question ─────────────────────────────────────
  const q = questions[step];
  const progress = ((step) / total) * 100;

  return (
    <div className="rounded-[18px] border border-border bg-card p-8 md:p-12">
      {/* progress */}
      <div className="flex items-center justify-between mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        <span>Frage {step + 1} von {total}</span>
        <span>{q.label}</span>
      </div>
      <div className="h-1 rounded-full bg-muted overflow-hidden mb-8">
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${progress}%`, background: "hsl(var(--teal))" }}
        />
      </div>

      <h3 className="display text-[22px] md:text-[28px] font-bold leading-snug mb-7 max-w-[720px]">
        {q.question}
      </h3>

      <div className="grid gap-2.5">
        {q.options.map((opt, i) => {
          const selected = answers[q.id]?.label === opt.label;
          return (
            <button
              key={i}
              type="button"
              onClick={() => pick(opt)}
              className={`text-left rounded-[12px] border p-5 transition-all hover:border-foreground/30 hover:bg-muted/30 ${
                selected ? "border-foreground bg-muted/40" : "border-border bg-background"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <span
                  className={`w-5 h-5 rounded-full border-2 mt-0.5 flex-shrink-0 flex items-center justify-center transition-colors ${
                    selected ? "border-foreground" : "border-border"
                  }`}
                >
                  {selected && <span className="w-2 h-2 rounded-full bg-foreground" />}
                </span>
                <div>
                  <div className="text-[15px] font-medium leading-snug">{opt.label}</div>
                  {opt.hint && (
                    <div className="text-[12.5px] text-muted-foreground mt-1">{opt.hint}</div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {step > 0 && (
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="mt-6 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Zurück
        </button>
      )}
    </div>
  );
};

export default CRAAssessment;
