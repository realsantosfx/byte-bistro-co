import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container-narrow px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Impressum</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-muted-foreground leading-relaxed">
                SantosLab
                <br />
                Vertreten durch: Johannes Schaffer
                <br />
                Welserstraße 3<br />
                87463 Dietmannsried
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                E-Mail: hello@santoslab.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Johannes Schaffer
                <br />
                Welserstraße 3<br />
                87463 Dietmannsried
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">Streitschlichtung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">Haftung für Inhalte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
