## Ziel

Die SEO-Meta-Tags in `index.html` sind veraltet — sie sprechen noch von „Restaurants" und nennen den falschen Gründernamen („Johannes Schaffer"). Die aktuelle Positionierung (SantosOS, Robotik, lokale KI, operative Software für Mittelstand & Enterprise) fehlt komplett.

## Änderungen in `index.html`

**Title (Zeile 9)**
- Alt: `SantosLab — Boutique Software Studio`
- Neu: `SantosLab — Operative Software, Robotik & lokale KI für den Mittelstand`

**Description (Zeile 10, 47, 48)**
- Alt: „…digitale Geschäftssysteme für Restaurants, servicebasierte Unternehmen und Organisationen."
- Neu: „SantosLab baut SantosOS: operative Software, Robotik und lokale KI für Mittelstand und Enterprise. Ein Betriebssystem für Produktion, Logistik, Handel und Sanierung."

**Keywords (Zeile 12)**
- Neu: `SantosOS, operative Software, Robotik, lokale KI, Mittelstand, Enterprise Software, Automatisierung, Vision KI, Deutschland`

**OG-Title / Twitter-Title (Zeilen 45–46)**
- Neu: `SantosLab — Operative Software, Robotik & lokale KI`

**OG-Description / Twitter-Description (Zeilen 47–48)**
- Angeglichen an neue Description.

**JSON-LD Organization (Zeilen 27–40)**
- `description` auf neue Positionierung aktualisieren.
- `founder.name` von „Johannes Schaffer" → „Johannes Santos" korrigieren.

## Nicht Teil dieser Änderung

- Per-Route Meta (react-helmet-async) — hinzuzufügen wäre ein separater, größerer Schritt. Sag Bescheid, wenn du per-Seite SEO (Robotik, SantosOS, Enterprise, jede Branche/Anwendung eigene Title/Description) willst — dann plane ich das getrennt.
- `og:image` bleibt unverändert.
