import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thomas Neuberger",
    role: "Head of Operations",
    company: "Matecra",
    text: "SantosLab hat unser Dispositionssystem mit aktiver AI-Schicht neu aufgebaut. Sie zeigt uns inzwischen, wo Kapazität verloren geht – bevor wir es selbst sehen würden.",
    rating: 5,
  },
  {
    name: "Daniel Tinz",
    role: "CFO",
    company: "Zasilkovna",
    text: "Unsere Pick & Pack Prozesse liefen lange auf Zuruf und Excel. SantosLab hat ein System gebaut, das unsere Lagerhaltung wirklich abbildet, weniger Fehler, schnellere Durchlaufzeiten und ein Team, das endlich weiß was als nächstes zu tun ist.",
    rating: 5,
  },
  {
    name: "Geschäftsführer",
    role: "Chemievertrieb Mittelstand",
    company: "Anonymisiert",
    text: "Unser Außendienst hat jahrelang auf Zuruf und Bauchgefühl gearbeitet. SantosLab hat ein System gebaut das unseren Außendienst wirklich abbildet, nach jedem Besuch wird automatisch erfasst was besprochen wurde, jeder im Team sieht den aktuellen Stand, und wir erkennen jetzt frühzeitig wenn ein Kunde abzuspringen droht. Zum ersten Mal haben wir einen echten Überblick über unsere Pipeline.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-narrow px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Kundenstimmen
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-accent mb-6 opacity-40" />
                <p className="text-foreground/90 leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
