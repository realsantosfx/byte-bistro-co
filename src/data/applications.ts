import appPickpack from "@/assets/site/app-pickpack.jpg";
import appWareneingang from "@/assets/site/app-wareneingang.jpg";
import appQualitaet from "@/assets/site/app-qualitaet.jpg";
import appInventur from "@/assets/site/app-inventur.jpg";
import appVersand from "@/assets/site/app-versand.jpg";

export type Application = {
  slug: string;
  tag: string;
  title: string;
  titleAccent: string;
  titleSuffix?: string;
  intro: string;
  hero: string;
  problem: { headline: string; body: string };
  steps: { tag: string; title: string; desc: string }[];
  facts: { n: string; em: string; l: string }[];
  features: string[];
  related: { l: string; d: string; to: string }[];
};

export const applications: Record<string, Application> = {
  "pick-and-pack": {
    slug: "pick-and-pack",
    tag: "Anwendung — Lager & Logistik",
    title: "Pick & Pack,",
    titleAccent: "ohne Zettel",
    titleSuffix: "ohne Zuruf",
    intro:
      "Aufträge erscheinen direkt am Terminal. Wege sind optimiert, Mengen geprüft, Versandlabels erzeugt — bevor die nächste Hand zugreift.",
    hero: appPickpack,
    problem: {
      headline: "Picken auf Zuruf kostet jeden Tag Stunden.",
      body: "Lange Wege, doppelte Griffe, Korrekturen am Packtisch, verlorene Zettel. Jede Sekunde, die dein Team mit Suchen und Rückfragen verbringt, geht nicht in den Versand. Pick & Pack über SantosOS macht aus diesem Chaos einen messbaren Prozess.",
    },
    steps: [
      { tag: "01 — Auftrag", title: "Erscheint am Terminal — automatisch", desc: "Die Operative Software bündelt offene Aufträge, sortiert nach Route und priorisiert nach Versandzeit. Dein Team sieht nur, was als nächstes zu tun ist." },
      { tag: "02 — Weg", title: "Optimierte Pickroute, Schritt für Schritt", desc: "Das System schlägt den kürzesten Weg vor — über alle Auftragspositionen hinweg. Kein doppeltes Laufen, kein Suchen, kein Zettelvergleich." },
      { tag: "03 — Griff", title: "Scan bestätigt jeden Pick", desc: "Barcode oder Pick-by-Light. Falscher Artikel? Das Terminal meldet sofort. Richtige Menge? Bestand und Auftrag aktualisieren sich in Echtzeit." },
      { tag: "04 — Pack", title: "Verpacken & Label in einem Schritt", desc: "Am Packtisch erscheint der vollständige Auftrag, Versandklasse und Label werden automatisch erzeugt. Übergabe an den Versanddienstleister mit einem Klick." },
    ],
    facts: [
      { n: "60", em: "%", l: "weniger Laufwege\npro Auftrag" },
      { n: "0", em: "", l: "Papier — alles\nüber Terminal & Scan" },
      { n: "< 1", em: "Tag", l: "Einarbeitung\nfür neues Personal" },
      { n: "100", em: "%", l: "Bestand & Auftrag\nin Echtzeit synchron" },
    ],
    features: [
      "Auftragsbündelung & Multi-Order-Picking direkt im System",
      "Pickroute pro Lagerlayout — automatisch optimiert",
      "Pick-Bestätigung per Scan, Pick-by-Light oder Foto",
      "Echtzeit-Bestand: kein Überverkauf, keine Nachbuchung",
      "Versandlabel & Lieferschein direkt aus dem Auftrag",
      "Vollständige Nachverfolgbarkeit pro Mitarbeiter & Auftrag",
    ],
    related: [
      { l: "Operative Software", d: "Das System hinter jedem Pick", to: "/produkte/operative-software" },
      { l: "Terminals & Kameras", d: "Hardware an jeder Station", to: "/produkte/terminals-kameras" },
      { l: "Autonomer Roboter", d: "Übernimmt lange Lagergänge", to: "/produkte/autonomer-roboter" },
    ],
  },

  "wareneingang": {
    slug: "wareneingang",
    tag: "Anwendung — Lager & Logistik",
    title: "Wareneingang,",
    titleAccent: "der mitdenkt",
    intro:
      "Lieferung scannen, Kamera prüft Etikett, Menge und Schaden. System bucht automatisch ein, ordnet Stellplatz zu und meldet Abweichungen sofort.",
    hero: appWareneingang,
    problem: {
      headline: "Wareneingang ist der Punkt, an dem die meisten Bestandsfehler entstehen.",
      body: "Lieferscheine, die nicht passen. Mengen, die nachträglich korrigiert werden. Schäden, die niemand dokumentiert. Wir machen aus dem Wareneingang die zuverlässigste Station im Lager — nicht die fehleranfälligste.",
    },
    steps: [
      { tag: "01 — Ankunft", title: "Avise & Lieferung im System", desc: "Lieferungen sind bereits angekündigt, der Wareneingang weiß, was kommt. Avise-Abgleich passiert automatisch beim ersten Scan." },
      { tag: "02 — Erfassung", title: "Scanner & Kamera erfassen parallel", desc: "Barcode, QR oder Klartext — die Kamera liest Etiketten, prüft Mengen pro Palette und dokumentiert sichtbare Schäden im selben Vorgang." },
      { tag: "03 — Prüfung", title: "Lokale KI gleicht ab", desc: "Bestellung, Lieferschein und tatsächliche Ware werden verglichen. Abweichungen erscheinen am Terminal mit Foto-Beleg — keine Diskussion später." },
      { tag: "04 — Einlagerung", title: "Stellplatz vorgeschlagen, Buchung automatisch", desc: "Das System schlägt den optimalen Stellplatz vor (Fast Mover vs. Slow Mover) und bucht den Bestand direkt. Keine separate Nachpflege." },
    ],
    facts: [
      { n: "0", em: "", l: "Manuelle Nachbuchung\nnach Wareneingang" },
      { n: "100", em: "%", l: "Foto-Dokumentation\nbei Abweichungen" },
      { n: "~", em: "5 min", l: "pro Palette —\ninkl. Prüfung & Einlagerung" },
      { n: "1", em: "×", l: "scannen — und der\nBestand stimmt" },
    ],
    features: [
      "Avise- und Bestell-Abgleich automatisch",
      "Bilderkennung für Etikett, Menge und Schaden",
      "Sofortige Abweichungsmeldung mit Foto-Beleg",
      "Stellplatz-Vorschlag basierend auf Umschlagshäufigkeit",
      "Direkte Bestandsbuchung — keine Nachpflege",
      "Lückenlose Nachverfolgbarkeit für Reklamationen",
    ],
    related: [
      { l: "Lokale KI", d: "Erkennt Etiketten, Mengen, Schäden", to: "/produkte/lokale-ki" },
      { l: "Terminals & Kameras", d: "Scanner & Vision am Tor", to: "/produkte/terminals-kameras" },
      { l: "Operative Software", d: "Bestand & Buchung in Echtzeit", to: "/produkte/operative-software" },
    ],
  },

  "qualitaetskontrolle": {
    slug: "qualitaetskontrolle",
    tag: "Anwendung — Produktion & Qualität",
    title: "Qualitätskontrolle",
    titleAccent: "in Echtzeit",
    titleSuffix: "nicht nach Schluss",
    intro:
      "Kameras prüfen jedes Teil sofort. Lokale KI erkennt Abweichungen, dokumentiert sie und stoppt fehlerhafte Linien, bevor sie zum Problem werden.",
    hero: appQualitaet,
    problem: {
      headline: "Stichprobenprüfung ist Risiko mit Excel-Dokumentation.",
      body: "Wer am Ende der Schicht eine Charge zurückrufen muss, hat das Problem zu spät erkannt. Mit kamerabasierter QC prüfst du jedes Teil — automatisch, lokal, ohne Personal an der Linie zu binden.",
    },
    steps: [
      { tag: "01 — Erfassung", title: "Kamera über jeder kritischen Station", desc: "Industrie-Kameras erfassen jedes Teil im Takt der Produktion. Auflösung und Beleuchtung sind so gewählt, dass auch kleine Defekte sichtbar werden." },
      { tag: "02 — Modell", title: "Lokale KI, trainiert auf deine Teile", desc: "Wir trainieren das Erkennungsmodell mit deinen Gut- und Schlechtteilen. Es läuft auf einem Gerät vor Ort — keine Bilder gehen in die Cloud." },
      { tag: "03 — Entscheidung", title: "OK / NOK in Millisekunden", desc: "Die Auswertung passiert direkt an der Linie. Bei NOK: Stop-Signal, Auswurf oder Markierung — exakt nach deinem Prozess." },
      { tag: "04 — Reporting", title: "Trends, statt einzelner Stichproben", desc: "Jeder Prüfvorgang wird gespeichert. Du siehst Fehlerquoten pro Schicht, pro Charge, pro Maschine — und kannst eingreifen, bevor ein Trend zur Reklamation wird." },
    ],
    facts: [
      { n: "100", em: "%", l: "der Teile geprüft —\nstatt Stichprobe" },
      { n: "< 50", em: "ms", l: "Entscheidung pro\nPrüfvorgang" },
      { n: "0", em: "", l: "Bilder verlassen\nden Betrieb" },
      { n: "1", em: "×", l: "Modell trainieren —\nläuft 24/7" },
    ],
    features: [
      "100 %-Prüfung statt Stichprobe — ohne mehr Personal",
      "Lokale KI trainiert auf deine Gut-/Schlechtteile",
      "Echtzeit-Stopp bei kritischen Abweichungen",
      "Foto-Protokoll pro NOK für Reklamationen & Audit",
      "Fehlertrends pro Schicht, Maschine und Charge",
      "Integration in MES / ERP / Operative Software",
    ],
    related: [
      { l: "Lokale KI", d: "Modelle für Vision & Erkennung", to: "/produkte/lokale-ki" },
      { l: "Terminals & Kameras", d: "Industrie-Vision-Hardware", to: "/produkte/terminals-kameras" },
      { l: "Operative Software", d: "Protokolle & Auswertung", to: "/produkte/operative-software" },
    ],
  },

  "inventur": {
    slug: "inventur",
    tag: "Anwendung — Lager & Logistik",
    title: "Inventur,",
    titleAccent: "die nebenbei läuft",
    intro:
      "Permanente Inventur statt Jahres-Stopp. Roboter und Kameras zählen kontinuierlich, das System gleicht ab — der Betrieb läuft weiter.",
    hero: appInventur,
    problem: {
      headline: "Jahresinventur stoppt den Betrieb. Permanente Inventur muss laufen können — nebenbei.",
      body: "Ein Wochenende mit dem ganzen Team an den Zähllisten? Das war einmal. Mit Roboter-gestützter Erfassung und automatischem Abgleich läuft Inventur kontinuierlich im Hintergrund, ohne dass jemand zusätzlich arbeiten muss.",
    },
    steps: [
      { tag: "01 — Erfassung", title: "Roboter oder Drohne fährt die Gänge", desc: "Während der ruhigen Stunden zählt der autonome Roboter Stellplätze ab — Regal für Regal, Etage für Etage. Ohne Zählteam, ohne Stopp." },
      { tag: "02 — Vergleich", title: "Soll vs. Ist im Hintergrund", desc: "Die Operative Software vergleicht erfasste Mengen mit Buchbestand. Abweichungen werden geclustert und priorisiert nach Wert und Häufigkeit." },
      { tag: "03 — Korrektur", title: "Klärung nur, wo nötig", desc: "Statt jede Position zu prüfen, bekommt dein Team nur die Stellplätze mit echten Differenzen aufs Terminal. Klärung in Minuten, nicht Tagen." },
      { tag: "04 — Reporting", title: "Permanente Inventur — auditfähig", desc: "Lückenloses Protokoll pro Stellplatz, Zeitpunkt und Methode. Steuerlich anerkannte permanente Inventur ohne separaten Stichtag." },
    ],
    facts: [
      { n: "0", em: "", l: "Stillstand für\ndie Jahresinventur" },
      { n: "24/7", em: "", l: "Erfassung —\nauch außerhalb der Schicht" },
      { n: ">", em: "99 %", l: "Bestandsgenauigkeit\ndauerhaft" },
      { n: "1", em: "×", l: "einrichten —\nläuft permanent" },
    ],
    features: [
      "Roboter- oder kameragestützte Erfassung",
      "Soll/Ist-Abgleich automatisch im Hintergrund",
      "Priorisierte Klärung nur bei echten Differenzen",
      "Permanente Inventur — steuerlich anerkannt",
      "Lückenloses Audit-Log pro Stellplatz",
      "Optional: ABC-Klassifizierung & Bewegungsdaten",
    ],
    related: [
      { l: "Autonomer Roboter", d: "Erfasst Stellplätze autonom", to: "/produkte/autonomer-roboter" },
      { l: "Lokale KI", d: "Lesen von Etiketten & Mengen", to: "/produkte/lokale-ki" },
      { l: "Operative Software", d: "Soll/Ist-Abgleich & Protokoll", to: "/produkte/operative-software" },
    ],
  },

  "versandkontrolle": {
    slug: "versandkontrolle",
    tag: "Anwendung — Lager & Logistik",
    title: "Versandkontrolle,",
    titleAccent: "die Reklamationen verhindert",
    intro:
      "Letzte Prüfung vor dem Versand: Kamera erkennt Inhalt, Waage prüft Gewicht, System gleicht mit Auftrag ab. Falsche Sendung? Geht gar nicht erst raus.",
    hero: appVersand,
    problem: {
      headline: "Eine falsche Sendung kostet mehr als zehn richtige.",
      body: "Reklamationen, Retourenversand, verlorene Kunden — alles wegen einer falschen Position im Karton. Die letzte Prüfstation vor dem Versand ist der wichtigste Hebel deiner Kundenzufriedenheit.",
    },
    steps: [
      { tag: "01 — Übergabe", title: "Auftrag erscheint am Versandtisch", desc: "Sobald der Karton am Packtisch ankommt, zeigt das Terminal Soll-Inhalt, Soll-Gewicht und Versandziel an. Keine Zettel, keine Mappen." },
      { tag: "02 — Vision", title: "Kamera prüft Inhalt automatisch", desc: "Eine Kamera über dem Packtisch erkennt Artikel, Menge und korrekte Etikettierung. Lokale KI gleicht in Echtzeit mit dem Auftrag ab." },
      { tag: "03 — Gewicht", title: "Waage als zweiter Sicherheitsanker", desc: "Das System kennt das Soll-Gewicht pro Artikel. Abweicht — Stopp am Tisch. So fallen auch fehlende oder zusätzliche Teile sofort auf." },
      { tag: "04 — Freigabe", title: "Label erst nach OK", desc: "Das Versandlabel wird erst gedruckt, wenn Inhalt und Gewicht stimmen. Falsche Sendungen verlassen den Tisch nicht — Punkt." },
    ],
    facts: [
      { n: "> 90", em: "%", l: "weniger Reklamationen\nwegen Falschlieferung" },
      { n: "2", em: "×", l: "Prüfung — Vision\n& Gewicht" },
      { n: "0", em: "", l: "manuelle\nDoppelkontrolle nötig" },
      { n: "1", em: "Tisch", l: "Pack & Kontrolle\nin einem Vorgang" },
    ],
    features: [
      "Kamera-Erkennung pro Karton — Inhalt & Etikett",
      "Gewichtsprüfung als zweite Sicherheit",
      "Label-Druck erst nach erfolgreicher Prüfung",
      "Foto-Protokoll bei jeder Sendung — auditfähig",
      "Direkte Anbindung an alle Versanddienstleister",
      "Reklamations-Beleg per Klick aus dem System",
    ],
    related: [
      { l: "Lokale KI", d: "Erkennt Inhalt & Etikett", to: "/produkte/lokale-ki" },
      { l: "Terminals & Kameras", d: "Vision & Waage am Packtisch", to: "/produkte/terminals-kameras" },
      { l: "Operative Software", d: "Auftrag, Prüfung & Label", to: "/produkte/operative-software" },
    ],
  },
};

export const applicationOrder = [
  "pick-and-pack",
  "wareneingang",
  "qualitaetskontrolle",
  "inventur",
  "versandkontrolle",
];
