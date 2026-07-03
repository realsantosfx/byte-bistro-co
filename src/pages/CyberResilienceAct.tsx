import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, ShieldCheck, FileCode2, Bug, GitBranch, ClipboardCheck, RefreshCw, Check, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import CRAAssessment from "@/components/cra/CRAAssessment";

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const pillars = [
  { icon: ShieldCheck, tag: "01 — Secure by Design", title: "Sicherheit ist Architektur, kein Feature", desc: "Bedrohungsmodellierung nach STRIDE vor der ersten Codezeile. Zero-Trust als Default, Least-Privilege auf jeder Ebene, Defense-in-Depth über mehrere unabhängige Schichten." },
  { icon: FileCode2, tag: "02 — SBOM & Supply Chain", title: "Jede Abhängigkeit auf dem Tisch", desc: "Software Bill of Materials im CycloneDX- und SPDX-Format für jede Lieferung — automatisch generiert, kryptografisch signiert. SLSA Level 3 für Build-Provenienz." },
  { icon: Bug, tag: "03 — Vulnerability Management", title: "24/7-Monitoring auf neue CVEs", desc: "Kontinuierliches Scanning mit Trivy, Grype und Dependabot. Kritische Schwachstellen innerhalb von 72 Stunden gepatcht — mit vollständiger Dokumentation und Kundenbenachrichtigung." },
  { icon: GitBranch, tag: "04 — Secure Development Lifecycle", title: "Security-Gates in der Pipeline", desc: "SAST (Semgrep, CodeQL), Secret Scanning (Gitleaks), Dependency- und Container-Scans. Kein Merge in den Hauptzweig ohne bestandenen Security-Check." },
  { icon: ClipboardCheck, tag: "05 — Dokumentation & Konformität", title: "Auditsicher nach CRA Annex I", desc: "Strukturierte Risikoanalyse, Sicherheitsarchitektur mit Datenflussdiagrammen, Testreports, SBOM, Update-Policy. EU-Konformitätserklärung für jedes Produkt." },
  { icon: RefreshCw, tag: "06 — Update & Support", title: "5+ Jahre Support, signierte Updates", desc: "Definierte Support-Zeiträume (10+ Jahre für kritische Systeme). Signierte Update-Kanäle mit Rollback-Fähigkeit. Klare EOL-Kommunikation mit Übergangspfad." },
];

const timeline = [
  { date: "10. Dez 2024", done: true, title: "Inkrafttreten & 24h-Meldepflicht", body: "CRA wird EU-Recht. Schwerwiegende Schwachstellen und aktiv ausgenutzte Vorfälle müssen binnen 24 Stunden an ENISA/BSI gemeldet werden. SantosLab hat interne Meldeketten etabliert und testet sie quartalsweise." },
  { date: "11. Dez 2025", done: true, title: "Benannte Stellen nehmen Arbeit auf", body: "Notifizierte Konformitätsbewertungsstellen starten. Für kritische Produkte der Klasse II wird externe Prüfung verpflichtend. Wir bereiten alle Projekte nach Klasse-II-Standard vor." },
  { date: "11. Jun 2026", done: false, title: "Notifizierungspflicht kritische Produkte", body: "Hersteller kritischer Systeme müssen eine notifizierte Stelle einbeziehen. SantosLab-Projekte sind mit der erforderlichen Dokumentationstiefe entwickelt und prüfungsbereit." },
  { date: "11. Dez 2027", done: false, title: "Vollständige Durchsetzung", body: "Alle CRA-Anforderungen gelten vollständig. Keine CE-Kennzeichnung ohne CRA-Konformitätsnachweis. Wer bis dahin nicht compliant ist, darf in der EU nicht mehr in Verkehr bringen." },
];

const process = [
  { n: "1", t: "Threat Modeling & Risikoanalyse", d: "Strukturierte Bedrohungsmodellierung nach STRIDE, Risikobewertung gemäß CRA Annex I, Einstufung der Schutzbedarfsklasse — bevor eine Zeile Code geschrieben wird." },
  { n: "2", t: "Secure Architecture Design", d: "Zero-Trust-Netzwerkdesign mit Mikrosegmentierung. Verschlüsselung at rest (AES-256-GCM) und in transit (TLS 1.3). Architektur-Review gegen 84 Prüfpunkte." },
  { n: "3", t: "Security-Gated Development", d: "Pre-Commit-Hooks, CI/CD mit SAST, Dependency-Scan, Container-Scan, IaC-Scan. Kein Merge ohne grüne Pipeline — enforced auf Branch-Protection-Ebene." },
  { n: "4", t: "SBOM-Generierung & Signierung", d: "Automatisierte SBOM (Syft/Trivy) im CycloneDX- und SPDX-Format. Kryptografische Signierung mit Cosign. Abgleich mit CVE-Datenbanken (Grype)." },
  { n: "5", t: "Dynamic Testing & Pentesting", d: "OWASP ZAP, Nuclei — plus manuelles Penetration Testing durch externe zertifizierte Tester bei jedem Major Release." },
  { n: "6", t: "CRA-Dokumentation & Konformitätserklärung", d: "Vollständiges Compliance-Paket: EU-Konformitätserklärung, technische Dokumentation nach Annex I, Testreports, Update-Policy — versioniert und timestamped." },
  { n: "7", t: "Laufende Überwachung & Updates", d: "24/7 Vulnerability Monitoring. Reaktionszeiten: kritisch ≤24h, hoch ≤72h. Jeder Patch durchläuft denselben Security-Gate-Prozess." },
];

const services = [
  { title: "CRA-Gap-Analyse & Readiness-Assessment", body: "Wir analysieren bestehende Produkte, Entwicklungsprozesse und Lieferketten. Sie erhalten in 48 Stunden einen detaillierten Gap-Report mit priorisierten Handlungsempfehlungen — von Bedrohungsmodellierung über SBOM-Integration bis zur Dokumentation.", who: "Software-Hersteller, KMU mit digitalen Produkten, Industrieunternehmen mit Embedded Systems" },
  { title: "CRA-konforme Softwareentwicklung", body: "Neue Software von Grund auf CRA-konform — mit eingebautem Secure-by-Design, automatischer SBOM-Generierung und vollständiger Dokumentation nach Annex I. Jedes Produkt verlässt uns mit EU-Konformitätserklärung.", who: "Unternehmen, die neue digitale Produkte auf den EU-Markt bringen oder bestehende Produkte CRA-fit machen" },
  { title: "CRA-Monitoring & Vulnerability Management", body: "Unsere Monitoring-Plattform überwacht Ihre Software rund um die Uhr. Automatisierte SBOM-Aktualisierung, CVE-Abgleich in Echtzeit, binnen 24 Stunden Patch-Vorschlag mit Risikobewertung.", who: "Betreiber digitaler Produkte mit laufendem Vulnerability-Management-Bedarf" },
  { title: "CRA-Beratung & Prozess-Transformation", body: "Aufbau eines Secure Development Lifecycle, Integration von Security-Gates in Ihre CI/CD-Pipeline, Schulung Ihrer Entwickler. Sie bekommen direkt anwendbare Templates, Checklisten und Pipeline-Konfigurationen.", who: "Unternehmen, die CRA-Compliance inhouse sicherstellen wollen" },
];

const facts = [
  { n: "100", em: "%", l: "aller neuen Projekte\nmit SBOM seit 2024" },
  { n: "<24", em: "h", l: "Reaktionszeit auf\nkritische CVEs" },
  { n: "5", em: "+", l: "Jahre garantierte\nUpdate-Pflege" },
  { n: "0", em: "", l: "ungepatchte Criticals\nin Produktivsystemen" },
];

const comparison = [
  { req: "Schwachstellen-Meldung", min: "24h an ENISA/BSI", ours: "24h Meldung + sofortige Kundenbenachrichtigung + priorisierter Patch-Plan" },
  { req: "SBOM", min: "Auf Anfrage", ours: "Mit jedem Release, signiert, CycloneDX + SPDX + optional VEX" },
  { req: "Support-Dauer", min: "Mind. 5 Jahre", ours: "5 Jahre Minimum, 10+ für kritische Systeme, EOL-Strategie inklusive" },
  { req: "Security-Testing", min: "Risikobasiert, Art offen", ours: "SAST + DAST + Container-Scan + manuelles Pentest bei jedem Major Release" },
  { req: "Konformitätsbewertung", min: "Selbsterklärung (Klasse I)", ours: "Standardmäßig vorbereitet für Klasse II (externe Prüfung)" },
  { req: "Supply Chain", min: "Dokumentation Lieferkette", ours: "SLSA Level 3 Provenienz + signierte SBOM + CVE-Monitoring" },
  { req: "Update-Mechanismus", min: "Sicherer Kanal", ours: "Signierte Updates + automatische Rollback-Fähigkeit + A/B-Deployments" },
  { req: "Sicherheitsarchitektur", min: "Angemessene Maßnahmen", ours: "Zero-Trust + Defense-in-Depth + Least Privilege + STRIDE vorab" },
];

const faqs = [
  { q: "Muss ich als KMU mit einer Web-App den CRA beachten?", a: "Sehr wahrscheinlich ja. Der CRA gilt für alle Produkte mit digitalen Elementen im EU-Markt, unabhängig von Unternehmensgröße. Reine Websites ohne Produktcharakter sind ausgenommen — sobald Ihre Web-App Nutzerkonten, Datenverarbeitung oder API-Zugriff bietet, sind Sie betroffen." },
  { q: "Was kostet die CRA-Umsetzung?", a: "Eine Gap-Analyse startet ab 1.500 €. Bei neuen Projekten entstehen keine Mehrkosten — CRA ist unser Standard. Für Bestandsprodukte rechnen wir mit 5–15 Personentagen, abhängig von Komplexität und vorhandener Dokumentation." },
  { q: "Was passiert, wenn ich den CRA ignoriere?", a: "Ab dem 11. Dezember 2027 dürfen nicht-konforme Produkte in der EU nicht mehr in Verkehr gebracht werden. Bußgelder bis 15 Mio. € oder 2,5 % des weltweiten Jahresumsatzes, dazu Marktrückrufe und zivilrechtliche Haftung." },
  { q: "Wie unterscheidet sich der CRA von der DSGVO?", a: "Die DSGVO schützt personenbezogene Daten. Der CRA regelt die Cybersicherheit digitaler Produkte. Ein Produkt kann DSGVO-konform sein und trotzdem gegen den CRA verstoßen — und umgekehrt." },
  { q: "Gilt der CRA auch für Open-Source-Software?", a: "OSS ist ausgenommen, solange sie nicht kommerziell angeboten wird. Sobald Sie OSS in ein kommerzielles Produkt integrieren, greift der CRA. Ihre OSS-Abhängigkeiten müssen in der SBOM dokumentiert und auf CVEs überwacht werden — Teil unserer Standard-Pipeline." },
  { q: "Was ist eine SBOM und warum ist sie wichtig?", a: "Eine Software Bill of Materials ist ein maschinenlesbares Inventar aller Komponenten, Bibliotheken und Abhängigkeiten inklusive Versionen und Lizenzen. Bei einer neu entdeckten Schwachstelle wie Log4Shell sehen Sie sofort, ob Ihr Produkt betroffen ist." },
  { q: "Kann SantosLab bestehende Produkte CRA-fit machen?", a: "Ja. Gap-Analyse, SBOM-Generierung, Security-Gates in Ihrer Pipeline, Dokumentation nach Annex I, CVE-Monitoring. Der Aufwand hängt vom Zustand der Codebasis ab — wir haben für jedes Projekt einen Weg gefunden." },
];

const Page = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://santoslab.de/" },
      { "@type": "ListItem", position: 2, name: "Cyber Resilience Act", item: "https://santoslab.de/cra" },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Cyber Resilience Act (CRA) — Umsetzung für Software-Hersteller",
    description:
      "Wie SantosLab den EU Cyber Resilience Act (Verordnung 2024/2847) in Software-Projekten umsetzt: Secure by Design, SBOM, Vulnerability Management, 24h-/72h-Meldepflichten und Konformität nach Anhang I.",
    author: { "@type": "Organization", name: "SantosLab" },
    publisher: {
      "@type": "Organization",
      name: "SantosLab",
      url: "https://santoslab.de",
    },
    inLanguage: "de-DE",
    about: [
      { "@type": "Thing", name: "Cyber Resilience Act" },
      { "@type": "Thing", name: "EU-Verordnung 2024/2847" },
      { "@type": "Thing", name: "Software Bill of Materials" },
    ],
    mainEntityOfPage: "https://santoslab.de/cra",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cyber Resilience Act umsetzen — CRA-konforme Software | SantosLab</title>
        <meta
          name="description"
          content="CRA-Umsetzung nach EU-Verordnung 2024/2847: Secure by Design, SBOM, Vulnerability Management, 24h-/72h-Meldepflichten. SantosLab liefert CRA-ready Software für Mittelstand & Enterprise."
        />
        <meta
          name="keywords"
          content="Cyber Resilience Act, CRA, EU 2024/2847, SBOM, Secure by Design, Vulnerability Management, CRA Umsetzung, CRA Compliance, CRA Checkliste, Software-Hersteller CRA"
        />
        <link rel="canonical" href="https://santoslab.de/cra" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cyber Resilience Act umsetzen — CRA-konforme Software | SantosLab" />
        <meta
          property="og:description"
          content="Wie SantosLab den EU Cyber Resilience Act umsetzt: Secure by Design, SBOM, Vulnerability Management, Meldepflichten. Plus kostenloses CRA-Schnell-Assessment und PDF-Checkliste."
        />
        <meta property="og:url" content="https://santoslab.de/cra" />
        <meta property="og:site_name" content="SantosLab" />
        <meta property="og:locale" content="de_DE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cyber Resilience Act umsetzen | SantosLab" />
        <meta
          name="twitter:description"
          content="CRA-Umsetzung für Software-Hersteller: Secure by Design, SBOM, Meldepflichten. Kostenloses Schnell-Assessment + PDF-Checkliste."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <Header />


      <main>
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[640px] flex items-end" style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 45%,#06182e 100%)" }}>
          <div
            className="hidden md:block absolute right-[8%] top-[20%] w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(47,184,198,0.28) 0%,transparent 70%)" }}
          />
          <div
            className="absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(46,107,158,0.25) 0%,transparent 70%)" }}
          />

          <div className="relative z-[2] px-6 md:px-14 pt-32 md:pt-40 pb-20 md:pb-24 max-w-[900px] container-shell w-full">
            <div className="inline-flex items-center gap-2 text-[11px] font-medium text-white/60 uppercase tracking-[0.18em] mb-6 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "hsl(var(--teal))" }} />
              EU-Verordnung 2024/2847 · In Kraft seit 10.12.2024
            </div>
            <h1 className="display text-white mb-5" style={{ fontSize: "clamp(44px, 7vw, 84px)", lineHeight: 1.04 }}>
              Cyber Resilience Act umsetzen.<br />
              <span style={{ color: "hsl(var(--teal))" }}>CRA-ready seit Tag 1.</span>
            </h1>
            <p className="text-[15px] font-medium text-white/80 uppercase tracking-[0.12em] max-w-[640px] mb-6">
              Praxis-Leitfaden für Software-Hersteller · EU-Verordnung 2024/2847
            </p>
            <p className="text-[17px] font-light text-white/65 leading-relaxed max-w-[640px]">
              Der <strong className="text-white/85 font-medium">EU Cyber Resilience Act (CRA)</strong> verpflichtet Hersteller
              von Produkten mit digitalen Elementen ab dem 11.12.2027 zu durchgängiger Cybersicherheit —
              inklusive <strong className="text-white/85 font-medium">SBOM, Vulnerability Management, 24h-Meldepflicht</strong> und
              CE-Kennzeichnung. SantosLab baut CRA-Konformität von der ersten Zeile Code an ein — und macht Bestandsprodukte
              in 48 Stunden analysierbar.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                CRA-Check anfragen
                <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                  <Arrow />
                </span>
              </Link>
              <a
                href="#framework"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-6 py-3.5 rounded-full transition-colors"
              >
                So setzen wir den CRA um
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section id="ueberblick" className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-4">
                Überblick
              </div>
              <h2 className="hl-lg">
                Was der CRA{" "}
                <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>
                  für Software-Hersteller
                </em>{" "}
                bedeutet
              </h2>
            </div>
            <div className="space-y-5">
              <p className="bd pt-1.5">
                Der Cyber Resilience Act (EU 2024/2847) führt verbindliche Cybersicherheitsanforderungen
                für alle <strong>Produkte mit digitalen Elementen</strong> ein, die im EU-Markt angeboten werden —
                unabhängig davon, wo sie hergestellt werden. Er deckt den gesamten Produktlebenszyklus ab.
              </p>
              <ul className="space-y-2.5 text-[15px] text-muted-foreground leading-relaxed">
                <li className="flex gap-3"><span style={{ color: "hsl(var(--teal))" }}>—</span> <span><strong className="text-foreground">Hardware mit digitalen Elementen</strong> — IoT, Embedded Systems, industrielle Steuerungen</span></li>
                <li className="flex gap-3"><span style={{ color: "hsl(var(--teal))" }}>—</span> <span><strong className="text-foreground">Software-Produkte</strong> — Web-Apps, Cloud-Software, KI-Anwendungen, APIs</span></li>
                <li className="flex gap-3"><span style={{ color: "hsl(var(--teal))" }}>—</span> <span><strong className="text-foreground">Remote-Datenverarbeitungslösungen</strong> — mobile Apps für IoT, Backend-Services</span></li>
                <li className="flex gap-3"><span style={{ color: "hsl(var(--teal))" }}>—</span> <span><strong className="text-foreground">Komponenten & Bibliotheken</strong> — Open-Source-Abhängigkeiten, Frameworks, SDKs</span></li>
              </ul>
              <p className="bd">
                Sobald Ihre Software Teil eines digitalen Produkts ist oder eines steuert — <strong>sind Sie betroffen</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* NUMBERS */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-border container-shell">
          {[
            { n: "3", em: " Jahre", l: "Übergangsfrist\nbis Dez 2027" },
            { n: "24", em: "h", l: "Meldefrist für\nSchwachstellen" },
            { n: "5", em: "+ Jahre", l: "Verpflichtender\nSupport-Zeitraum" },
            { n: "15", em: " Mio €", l: "Maximales Bußgeld\noder 2,5 % Umsatz" },
          ].map((x, i) => (
            <div key={i} className={`px-8 md:px-12 py-10 ${i < 3 ? "md:border-r border-border" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""}`}>
              <div className="display text-[38px] md:text-[48px] font-bold leading-none mb-1.5">
                {x.n}<em className="not-italic text-[22px] md:text-[26px]" style={{ color: "hsl(var(--teal))" }}>{x.em}</em>
              </div>
              <div className="text-[13.5px] text-muted-foreground whitespace-pre-line leading-snug">{x.l}</div>
            </div>
          ))}
        </div>

        {/* TIMELINE */}
        <section id="zeitplan" className="py-20 md:py-24 section-x container-shell">
          <div className="mb-14">
            <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-3">
              Zeitplan
            </div>
            <h2 className="hl-lg max-w-[780px]">
              Der Weg zur{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>vollständigen</em>{" "}
              CRA-Durchsetzung
            </h2>
          </div>

          <div className="relative pl-10 md:pl-14 border-l border-border">
            {timeline.map((t, i) => (
              <div key={i} className="relative pb-10 last:pb-0">
                <div
                  className="absolute -left-[46px] md:-left-[62px] top-1 w-4 h-4 rounded-full border-2"
                  style={{
                    background: t.done ? "hsl(var(--teal))" : "hsl(var(--background))",
                    borderColor: t.done ? "hsl(var(--teal))" : "hsl(var(--border))",
                  }}
                />
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] mb-2" style={{ color: t.done ? "hsl(var(--teal))" : "hsl(var(--muted-foreground))" }}>
                  {t.date} {t.done && "· erfüllt"}
                </div>
                <h3 className="display text-[20px] md:text-[24px] font-bold leading-snug mb-2">{t.title}</h3>
                <p className="text-[14.5px] text-muted-foreground leading-relaxed max-w-[720px]">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SIX PILLARS - dark section */}
        <section id="framework" className="py-20 md:py-24 section-x" style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 45%,#06182e 100%)" }}>
          <div className="container-shell">
            <div className="mb-14">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] mb-3" style={{ color: "hsl(var(--teal))" }}>
                SantosLab CRA-Framework
              </div>
              <h2 className="display text-white text-[32px] md:text-[46px] font-bold leading-tight max-w-[820px] mb-5">
                Sechs Säulen der <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Cyber Resilience</em>
              </h2>
              <p className="text-[16px] text-white/60 leading-relaxed max-w-[720px]">
                Unser CRA-Framework ist kein nachträglich aufgeklebtes Compliance-Label — es ist in unseren
                Entwicklungsprozess eingewoben. Jede Codezeile, jedes Deployment folgt diesen sechs Prinzipien.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-[16px] p-7 border border-white/10 bg-white/[0.03]">
                  <div className="w-11 h-11 rounded-[10px] flex items-center justify-center mb-5" style={{ background: "rgba(47,184,198,0.12)" }}>
                    <p.icon className="w-5 h-5" style={{ color: "hsl(var(--teal))" }} />
                  </div>
                  <div className="text-[10.5px] font-medium text-white/45 uppercase tracking-[0.16em] mb-2">
                    {p.tag}
                  </div>
                  <h3 className="display text-white text-[18px] font-bold leading-snug mb-2.5">{p.title}</h3>
                  <p className="text-[13.5px] text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS - 7 steps */}
        <section id="prozess" className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
            <div className="md:sticky md:top-24 md:self-start">
              <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-3">
                Entwicklungsprozess
              </div>
              <h2 className="hl-lg mb-5">
                Von der Idee zum{" "}
                <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>CRA-konformen</em>{" "}
                Produkt
              </h2>
              <p className="bd">
                So sieht ein SantosLab-Projekt unter dem CRA aus — jeder Schritt mit eingebauter Security,
                dokumentiert und nachvollziehbar.
              </p>
            </div>

            <div className="space-y-2.5">
              {process.map((s) => (
                <div key={s.n} className="grid grid-cols-[auto_1fr] gap-5 rounded-[14px] p-6 border border-border bg-card">
                  <div className="display text-[28px] font-bold leading-none" style={{ color: "hsl(var(--teal))" }}>
                    {s.n.padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="display text-[17px] font-bold leading-snug mb-1.5">{s.t}</h3>
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="leistungen" className="py-20 md:py-24 section-x" style={{ background: "hsl(var(--muted) / 0.4)" }}>
          <div className="container-shell">
            <div className="mb-14 max-w-[820px]">
              <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-3">
                CRA-Leistungen
              </div>
              <h2 className="hl-lg mb-5">
                Maßgeschneiderte Lösungen für Ihre{" "}
                <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>CRA-Compliance</em>
              </h2>
              <p className="bd">
                Als Software-Hersteller, der selbst CRA-compliant entwickelt, kennen wir beide Seiten:
                die regulatorischen Anforderungen und die praktische Umsetzung im Code.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3.5">
              {services.map((s) => (
                <div key={s.title} className="rounded-[16px] p-8 border border-border bg-background flex flex-col">
                  <h3 className="display text-[20px] md:text-[22px] font-bold leading-snug mb-3">{s.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">{s.body}</p>
                  <div className="text-[12.5px] text-muted-foreground/80 mb-6 pt-4 border-t border-border">
                    <strong className="text-foreground">Für:</strong> {s.who}
                  </div>
                  <Link
                    to="/kontakt"
                    className="mt-auto inline-flex items-center gap-2.5 text-[13px] font-medium self-start"
                    style={{ color: "hsl(var(--teal))" }}
                  >
                    Anfragen
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED — internal linking */}
        <section className="section-x container-shell pb-4">
          <div className="rounded-[18px] border border-border bg-muted/30 p-8 md:p-10">
            <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-4">
              Wie wir das im Betrieb umsetzen
            </div>
            <h2 className="hl-md mb-6 max-w-[680px]">
              CRA in der Praxis — vernetzt mit unseren Leistungen und Referenzen.
            </h2>
            <div className="grid md:grid-cols-3 gap-3.5">
              <Link
                to="/produkte/operative-software"
                className="group rounded-[14px] border border-border bg-background p-6 hover:border-foreground/40 transition-colors flex flex-col"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground mb-2">Leistung</div>
                <div className="display text-[17px] font-bold leading-snug mb-2">Operative Software</div>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
                  ERP, WMS und CRM-Systeme, die von Tag 1 nach CRA-Standards gebaut werden — inkl. SBOM und Security-Gates.
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12.5px] font-medium" style={{ color: "hsl(var(--teal))" }}>
                  Zur Leistung <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                to="/enterprise"
                className="group rounded-[14px] border border-border bg-background p-6 hover:border-foreground/40 transition-colors flex flex-col"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground mb-2">Leistung</div>
                <div className="display text-[17px] font-bold leading-snug mb-2">Enterprise-Software</div>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
                  Große Systeme für Konzern-Umgebungen: Zero-Trust-Architektur, SBOM-Pflege im Betrieb, dokumentierte Meldeketten.
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12.5px] font-medium" style={{ color: "hsl(var(--teal))" }}>
                  Zur Leistung <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                to="/projekte"
                className="group rounded-[14px] border border-border bg-background p-6 hover:border-foreground/40 transition-colors flex flex-col"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground mb-2">Referenzen</div>
                <div className="display text-[17px] font-bold leading-snug mb-2">Alle Case Studies</div>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
                  Ausgelieferte Systeme im Mittelstand — jedes Projekt nach CRA-ready Standards gebaut und dokumentiert.
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[12.5px] font-medium" style={{ color: "hsl(var(--teal))" }}>
                  Referenzen ansehen <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-3.5">
              <Link
                to="/case/mittelstand-erp"
                className="group rounded-[14px] border border-border bg-background p-6 hover:border-foreground/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Case Study · ERP</div>
                    <div className="display text-[15.5px] font-bold leading-snug">Mittelstand-ERP mit AI-Layer</div>
                    <p className="text-[12.5px] text-muted-foreground leading-relaxed mt-1.5">
                      7 M € Umsatz, CRA-konform ausgeliefert — Fehlerquote −80 % in zwei Monaten.
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                </div>
              </Link>
              <Link
                to="/case/chemievertrieb-crm"
                className="group rounded-[14px] border border-border bg-background p-6 hover:border-foreground/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground mb-1.5">Case Study · CRM</div>
                    <div className="display text-[15.5px] font-bold leading-snug">Chemievertrieb-CRM mit AI-Layer</div>
                    <p className="text-[12.5px] text-muted-foreground leading-relaxed mt-1.5">
                      Außendienst-Pipeline sichtbar gemacht — SBOM, Vulnerability Management und Meldeketten von Anfang an.
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                </div>
              </Link>
            </div>
          </div>
        </section>


        {/* NUMBERS 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-border container-shell">
          {facts.map((x, i) => (
            <div key={i} className={`px-8 md:px-12 py-10 ${i < 3 ? "md:border-r border-border" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""}`}>
              <div className="display text-[44px] md:text-[52px] font-bold leading-none mb-1.5">
                {x.n}<em className="not-italic" style={{ color: "hsl(var(--teal))" }}>{x.em}</em>
              </div>
              <div className="text-[13.5px] text-muted-foreground whitespace-pre-line leading-snug">{x.l}</div>
            </div>
          ))}
        </div>

        {/* COMPARISON */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="mb-12 max-w-[820px]">
            <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-3">
              Der Unterschied
            </div>
            <h2 className="hl-lg mb-5">
              CRA-Mindeststandard vs. SantosLab —{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>wo wir weiter gehen</em>
            </h2>
            <p className="bd">
              Der CRA definiert Mindestanforderungen. SantosLab geht in jeder Disziplin darüber hinaus —
              weil Sicherheit nicht an der gesetzlichen Untergrenze enden darf.
            </p>
          </div>

          <div className="rounded-[16px] border border-border overflow-hidden bg-card">
            <div className="hidden md:grid grid-cols-[1.1fr_1.3fr_1.6fr] text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground border-b border-border">
              <div className="px-6 py-4">Anforderung (CRA)</div>
              <div className="px-6 py-4 border-l border-border">Gesetzliches Minimum</div>
              <div className="px-6 py-4 border-l border-border">SantosLab Standard</div>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className={`grid md:grid-cols-[1.1fr_1.3fr_1.6fr] ${i !== comparison.length - 1 ? "border-b border-border" : ""}`}>
                <div className="px-6 py-5 font-medium text-[14px]">{row.req}</div>
                <div className="px-6 py-5 border-t md:border-t-0 md:border-l border-border flex items-start gap-2.5 text-[13.5px] text-muted-foreground">
                  <X className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-50" />
                  <span>{row.min}</span>
                </div>
                <div className="px-6 py-5 border-t md:border-t-0 md:border-l border-border flex items-start gap-2.5 text-[13.5px]">
                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "hsl(var(--teal))" }} />
                  <span>{row.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ASSESSMENT */}
        <section id="assessment" className="py-20 md:py-24 section-x container-shell">
          <div className="mb-10 max-w-[820px]">
            <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-3">
              CRA-Schnell-Assessment
            </div>
            <h2 className="hl-lg mb-5">
              7 Fragen. Eine ehrliche{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Standortbestimmung</em>.
            </h2>
            <p className="bd">
              Beantworten Sie in unter zwei Minuten, wo Sie zwischen Mindeststandard und SantosLab-Niveau stehen — und
              starten Sie direkt aus dem Ergebnis eine Detailanfrage.
            </p>
          </div>
          <CRAAssessment />
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16">
            <div>
              <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-3">
                FAQ
              </div>
              <h2 className="hl-lg">
                Häufige Fragen{" "}
                <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>zum CRA</em>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group rounded-[14px] border border-border bg-card overflow-hidden">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-6 hover:bg-muted/40 transition-colors">
                    <span className="display text-[16px] md:text-[17px] font-bold leading-snug">{f.q}</span>
                    <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0 text-lg leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-[14px] text-muted-foreground leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="section-x pb-20 container-shell">
          <div className="relative rounded-[18px] overflow-hidden p-10 md:p-16" style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 45%,#06182e 100%)" }}>
            <div
              className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full blur-[60px] pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(47,184,198,.22) 0%,transparent 65%)" }}
            />
            <div className="relative z-[2] max-w-[680px]">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] mb-4" style={{ color: "hsl(var(--teal))" }}>
                Ihr CRA-Check
              </div>
              <h2 className="display text-white mb-5" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.1 }}>
                Ist Ihre Software bereit für den CRA?
              </h2>
              <p className="text-[15px] text-white/60 leading-[1.8] mb-9">
                In 48 Stunden liefern wir Ihnen einen strukturierten Gap-Report mit priorisierten
                Handlungsempfehlungen — für Bestandsprodukte oder neue Projekte.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                CRA-Check anfragen
                <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
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

export default Page;
