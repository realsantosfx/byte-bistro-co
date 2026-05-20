

# Plan: CTA-Texte auf allen Demo-Detailseiten vereinheitlichen

## Problem
Die Änderung von „Live Demo öffnen" zu „System aufsetzen" wurde nur in `detailCta` (für `DemoDetail.tsx`) durchgeführt. Die 8 individuellen Demo-Seiten nutzen eigene Translation-Keys (`heroCta`, `ctaButton`), die noch auf „Live Demo öffnen" stehen.

## Änderungen

### 1. `src/i18n/translations.ts` — CTA-Texte aktualisieren

Für alle 7 Demo-Systeme (Restaurant, Barber, Studio, Business, Delivery, SalesSystem, GuestService):
- `heroCta`: „Live Demo öffnen" → **„System aufsetzen"** (DE) / **„Set up system"** (EN)
- `ctaButton`: „Live Demo öffnen" → **„System aufsetzen"** (DE) / **„Set up system"** (EN)

Für DealFlow / Enterprise:
- `heroCta` / `ctaButton`: → **„System besprechen"** (DE) / **„Discuss system"** (EN) — gemäß Enterprise-Strategie

### Betroffene Seiten
Keine Komponenten-Änderungen nötig — alle Seiten verlinken bereits auf `/kontakt`. Nur die Texte in den Translations werden angepasst.

