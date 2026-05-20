import brHandel from "@/assets/site/branche-handel.jpg";
import brProduktion from "@/assets/site/branche-produktion.jpg";
import brLogistik from "@/assets/site/branche-logistik.jpg";
import brSanierung from "@/assets/site/branche-sanierung.jpg";

export type Branche = {
  slug: string;
  tag: string;
  title: string;
  titleAccent: string;
  titleSuffix?: string;
  intro: string;
  hero: string;
  problem: { headline: string; body: string };
  pains: { tag: string; title: string; desc: string }[];
  facts: { n: string; em: string; l: string }[];
  applications: { l: string; d: string; to: string }[];
  related: { l: string; d: string; to: string }[];
};

export const branchen: Record<string, Branche> = {
  "handel-distribution": {
    slug: "handel-distribution",
    tag: "Branche — Handel & Distribution",
    title: "Handel & Distribution,",
    titleAccent: "in einem System",
    intro:
      "Vom Wareneingang bis zum Versandlabel — ein Prozess, eine Wahrheit. SantosOS verbindet ERP, Lager und Versand, damit nichts zwischen den Systemen verloren geht.",
    hero: brHandel,
    problem: {
      headline: "Im Handel entstehen Fehler nicht im Verkauf, sondern zwischen den Systemen.",
      body: "Webshop, ERP, Lagerverwaltung, Versanddienstleister — vier Tools, vier Wahrheiten. Wer Bestände, Aufträge und Lieferungen manuell synchronisiert, verliert Stunden pro Tag und macht Kunden unglücklich. SantosOS ersetzt den Flickenteppich durch ein gemeinsames Betriebssystem.",
    },
    pains: [
      { tag: "01 — Bestand", title: "Über- und Unterverkauf gleichzeitig", desc: "Der Webshop kennt den Bestand erst nach dem nächtlichen Sync. Das Lager weiß nicht, was online verkauft wurde. Wir machen Bestand zur Echtzeit-Wahrheit über alle Kanäle." },
      { tag: "02 — Auftrag", title: "Picken, Packen, Versenden — fragmentiert", desc: "Pick-Listen aus Excel, Packtisch auf Zuruf, Label-Druck im separaten Tool. Jeder Wechsel kostet Zeit und produziert Fehler. Wir bringen alles auf eine Oberfläche." },
      { tag: "03 — Reklamation", title: "Kein Foto-Beleg, kein Gegenbeweis", desc: "Kunde sagt: Karton war leer. Du sagst: war voll. Ohne lückenlose Foto-Dokumentation pro Sendung verlierst du jeden Streitfall." },
      { tag: "04 — Skalierung", title: "Mehr Aufträge bedeuten mehr Personal", desc: "Solange der Prozess manuell läuft, skaliert nur über Köpfe. Mit Automation skalierst du über System — bei konstantem Team." },
    ],
    facts: [
      { n: "1", em: "×", l: "Bestand —\nüber alle Kanäle" },
      { n: ">", em: "90 %", l: "weniger Reklamationen\nwegen Falschlieferung" },
      { n: "60", em: "%", l: "weniger Laufwege\nim Pick-Prozess" },
      { n: "0", em: "", l: "Papier zwischen\nERP und Lager" },
    ],
    applications: [
      { l: "Pick & Pack", d: "Routen, Scan, Label — in einem Fluss", to: "/anwendung/pick-and-pack" },
      { l: "Wareneingang", d: "Avise, Vision, Buchung automatisch", to: "/anwendung/wareneingang" },
      { l: "Versandkontrolle", d: "Letzte Prüfung vor dem Versand", to: "/anwendung/versandkontrolle" },
      { l: "Inventur", d: "Permanent statt Jahres-Stopp", to: "/anwendung/inventur" },
    ],
    related: [
      { l: "Operative Software", d: "Das System hinter Bestand & Auftrag", to: "/produkte/operative-software" },
      { l: "Terminals & Kameras", d: "Hardware an jeder Station", to: "/produkte/terminals-kameras" },
      { l: "SantosOS", d: "Das Ökosystem hinter allem", to: "/santosos" },
    ],
  },

  "produktion": {
    slug: "produktion",
    tag: "Branche — Produktion",
    title: "Produktion,",
    titleAccent: "die sich selbst prüft",
    intro:
      "Vision, lokale KI und Echtzeit-Auswertung an jeder kritischen Station. Kein Excel, keine Stichprobe — sondern 100 %-Qualität, dokumentiert für Audit und Kunde.",
    hero: brProduktion,
    problem: {
      headline: "In der Produktion wird Qualität gemessen, wenn es zu spät ist.",
      body: "Stichproben am Schichtende, Excel-Protokolle, manuelle Rückrufaktionen. Wer Abweichungen erst nach 8 Stunden erkennt, hat 8 Stunden Ausschuss. SantosOS bringt Qualitätskontrolle und Prozessdaten in den Takt der Maschine — nicht der Schicht.",
    },
    pains: [
      { tag: "01 — QC", title: "Stichprobe statt 100 %-Prüfung", desc: "Personal an der Linie zu binden ist teuer — also wird stichprobenartig geprüft. Bilderkennung mit lokaler KI prüft jedes Teil, ohne mehr Personal zu kosten." },
      { tag: "02 — Daten", title: "Maschinendaten im Stillen, MES weit weg", desc: "SPS-Daten liegen auf der Maschine, das MES sieht sie nur teilweise. Wir holen die Daten lokal ab und machen Trends pro Linie und Schicht sichtbar." },
      { tag: "03 — Rückverfolgbarkeit", title: "Charge zurückrufen — wer hat was wann?", desc: "Ohne lückenloses Protokoll pro Teil bedeutet Reklamation: ganze Charge zurück. Mit Vision-Log pro Teil reklamierst du exakt die richtigen Einheiten." },
      { tag: "04 — Umrüsten", title: "Neues Produkt — neue Konfiguration", desc: "Jeder Produktwechsel kostet Stunden. Wir bauen Profile, die per Klick laden — von Kamera-Setup bis Sollwerten." },
    ],
    facts: [
      { n: "100", em: "%", l: "Prüfung —\nstatt Stichprobe" },
      { n: "< 50", em: "ms", l: "Entscheidung\npro Teil" },
      { n: "0", em: "", l: "Daten verlassen\nden Betrieb" },
      { n: "1", em: "×", l: "Modell trainieren —\nläuft 24/7" },
    ],
    applications: [
      { l: "Qualitätskontrolle", d: "Vision-basierte 100 %-Prüfung", to: "/anwendung/qualitaetskontrolle" },
      { l: "Wareneingang", d: "Roh-/Halbzeug automatisch erfasst", to: "/anwendung/wareneingang" },
      { l: "Inventur", d: "WIP & Lagerbestand permanent", to: "/anwendung/inventur" },
    ],
    related: [
      { l: "Lokale KI", d: "Modelle, trainiert auf deine Teile", to: "/produkte/lokale-ki" },
      { l: "Terminals & Kameras", d: "Industrie-Vision-Hardware", to: "/produkte/terminals-kameras" },
      { l: "SantosOS", d: "Das Ökosystem hinter allem", to: "/santosos" },
    ],
  },

  "logistik": {
    slug: "logistik",
    tag: "Branche — Logistik",
    title: "Logistik,",
    titleAccent: "die durchläuft",
    titleSuffix: "ohne Excel-Brücken",
    intro:
      "Sendungserfassung, Tour, Avise, POD — alles in einem System. SantosOS macht aus fragmentierten TMS-, WMS- und Telematik-Inseln einen durchgehenden Prozess.",
    hero: brLogistik,
    problem: {
      headline: "In der Logistik vergehen Stunden mit Daten, die ein System hätte weitergeben müssen.",
      body: "TMS, WMS, Telematik, Versanddienstleister, Frachtbrief-PDF — fünf Tools, eine Sendung. Disponenten sind die menschliche Schnittstelle. Das skaliert nicht. SantosOS bündelt Stammdaten, Aufträge und Status in einem operativen System.",
    },
    pains: [
      { tag: "01 — Sendung", title: "Avise erstellen — manuell, 12× pro Tag", desc: "Aus dem ERP exportieren, ins Portal des Dienstleisters einkippen, Kunden eine Mail schreiben. Wir automatisieren die Übergabe an jedes wichtige Carrier-Portal." },
      { tag: "02 — Tour", title: "Disponent denkt, Excel rechnet", desc: "Tourenplanung im Kopf eines Disponenten ist ein Risiko. Wir bringen Stopps, Zeitfenster und Restriktionen in ein Planungs-Modul mit Vorschlag." },
      { tag: "03 — POD", title: "Lieferbeleg per Foto — aber nirgends gespeichert", desc: "Fahrer macht Foto auf privatem Handy. Foto verschwindet. Wir sammeln POD, Foto, Unterschrift und Geokoordinate pro Stopp in der Auftragshistorie." },
      { tag: "04 — Reklamation", title: "Wer hat was wann wo entladen?", desc: "Ohne lückenloses Protokoll pro Sendung verlierst du jede Diskussion. Wir machen jede Übergabe nachvollziehbar — bis auf die Sekunde." },
    ],
    facts: [
      { n: "0", em: "", l: "manuelle Avise\nan Carrier" },
      { n: "100", em: "%", l: "POD-Beleg pro\nStopp im System" },
      { n: "1", em: "×", l: "Stammdaten —\nin einem System" },
      { n: "24/7", em: "", l: "Tracking & Status\nin Echtzeit" },
    ],
    applications: [
      { l: "Wareneingang", d: "Lieferung scannen, Schaden dokumentieren", to: "/anwendung/wareneingang" },
      { l: "Versandkontrolle", d: "Letzte Prüfung vor Abfahrt", to: "/anwendung/versandkontrolle" },
      { l: "Pick & Pack", d: "Kommissionieren ohne Zettel", to: "/anwendung/pick-and-pack" },
    ],
    related: [
      { l: "Operative Software", d: "Auftrag, Tour, POD in einem System", to: "/produkte/operative-software" },
      { l: "Autonomer Roboter", d: "Innerbetriebliche Transporte", to: "/produkte/autonomer-roboter" },
      { l: "SantosOS", d: "Das Ökosystem hinter allem", to: "/santosos" },
    ],
  },

  "sanierung": {
    slug: "sanierung",
    tag: "Branche — Sanierung & Bau",
    title: "Sanierung,",
    titleAccent: "die sich selbst dokumentiert",
    intro:
      "Foto, Messwert, Geräteprotokoll — direkt am Objekt erfasst und automatisch im Auftrag. SantosOS gibt deinem Sanierer-Betrieb das Werkzeug, das die Versicherung später lückenlos sehen will.",
    hero: brSanierung,
    problem: {
      headline: "Sanierung scheitert nicht an der Arbeit — sondern an der Dokumentation danach.",
      body: "Trockner laufen, Messprotokolle landen auf Zetteln, Fotos auf privaten Handys, Rechnungen werden Wochen später zusammengeklaubt. Versicherer kürzen, weil Belege fehlen. SantosOS macht die Dokumentation zum Nebenprodukt der Arbeit — nicht zur Nachtschicht.",
    },
    pains: [
      { tag: "01 — Objekt", title: "Fotos verschwinden, Notizen sind unleserlich", desc: "Jedes Foto, jeder Messwert, jede Bemerkung gehört zum Auftrag — nicht auf das Handy eines Mitarbeiters. Wir geben dir eine App, die das automatisch zuordnet." },
      { tag: "02 — Geräte", title: "Trockner laufen — wo, wie lange, mit welcher Leistung?", desc: "Geräte-Einsatzprotokolle sind die Grundlage jeder Abrechnung. Wir erfassen Standzeiten, Laufzeiten und Energie pro Gerät und Auftrag." },
      { tag: "03 — Aufmaß", title: "Aufmaße auf Papier, Übertrag fehleranfällig", desc: "Tablet-basiertes Aufmaß mit Foto und Skizze direkt im Auftrag — ohne nachträgliches Übertragen in Excel oder Branchensoftware." },
      { tag: "04 — Abrechnung", title: "Versicherer kürzt, weil ein Beleg fehlt", desc: "Ohne lückenlose, zeitlich gestempelte Doku gibt es Kürzungen. Mit SantosOS schickst du den Vorgang als auditierbares Paket — und bekommst, was du abrechnest." },
    ],
    facts: [
      { n: "100", em: "%", l: "Foto-Doku\npro Objekt" },
      { n: "1", em: "×", l: "Aufmaß —\nim Auftrag" },
      { n: "0", em: "", l: "Papier zwischen\nObjekt und Büro" },
      { n: ">", em: "30 %", l: "weniger Kürzungen\ndurch Versicherer" },
    ],
    applications: [
      { l: "Qualitätskontrolle", d: "Übergabe-Prüfung mit Foto-Beleg", to: "/anwendung/qualitaetskontrolle" },
      { l: "Inventur", d: "Geräte- & Materialbestand permanent", to: "/anwendung/inventur" },
      { l: "Wareneingang", d: "Material auf Baustelle dokumentiert", to: "/anwendung/wareneingang" },
    ],
    related: [
      { l: "Operative Software", d: "Auftrag, Geräte, Aufmaß, Rechnung", to: "/produkte/operative-software" },
      { l: "Terminals & Kameras", d: "Tablets & Vision am Objekt", to: "/produkte/terminals-kameras" },
      { l: "SantosOS", d: "Das Ökosystem hinter allem", to: "/santosos" },
    ],
  },
};

export const brancheOrder = [
  "handel-distribution",
  "produktion",
  "logistik",
  "sanierung",
];
