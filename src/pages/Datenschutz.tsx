import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container-narrow px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
            Datenschutzerklärung
          </h1>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-medium text-foreground mb-3">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                Santoslab<br />
                Max Mustermann<br />
                Musterstraße 123<br />
                12345 Musterstadt<br /><br />
                E-Mail: hello@santoslab.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-medium text-foreground mb-3">Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen 
                Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver 
                und sicherer zu machen.
              </p>

              <h3 className="text-lg font-medium text-foreground mb-3 mt-6">Server-Log-Dateien</h3>
              <p className="text-muted-foreground leading-relaxed">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:<br /><br />
                • Browsertyp und Browserversion<br />
                • Verwendetes Betriebssystem<br />
                • Referrer URL<br />
                • Hostname des zugreifenden Rechners<br />
                • Uhrzeit der Serveranfrage<br />
                • IP-Adresse
              </p>

              <h3 className="text-lg font-medium text-foreground mb-3 mt-6">Kontaktformular</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">4. Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder 
                Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
                können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Sie haben folgende Rechte:<br /><br />
                • Auskunftsrecht (Art. 15 DSGVO)<br />
                • Recht auf Berichtigung (Art. 16 DSGVO)<br />
                • Recht auf Löschung (Art. 17 DSGVO)<br />
                • Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)<br />
                • Recht auf Datenübertragbarkeit (Art. 20 DSGVO)<br />
                • Widerspruchsrecht (Art. 21 DSGVO)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">5. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum 
                Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. 
                TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers 
                von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">6. Analyse-Tools und Werbung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website nutzt derzeit keine Analyse-Tools oder Werbedienste von Drittanbietern. Sollte sich dies 
                ändern, werden wir diese Datenschutzerklärung entsprechend aktualisieren und Sie ggf. um Ihre 
                Einwilligung bitten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-foreground mb-4">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025. Durch die Weiterentwicklung 
                unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher 
                Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
