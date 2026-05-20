import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxImage from "@/components/ui/ParallaxImage";

const Projekte = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-14">
        <section className="section">
          <div className="container-narrow">
            <FadeInSection>
              <div className="text-center mb-20">
                <p className="text-muted-foreground text-sm tracking-wide mb-4">
                  Portfolio
                </p>
                <h1 className="headline-xl text-foreground max-w-3xl mx-auto">
                  Alle Projekte.
                </h1>
              </div>
            </FadeInSection>

            <div className="space-y-24">
              {projects.map((project, index) => (
                <FadeInSection key={project.id} delay={index * 50}>
                  <Link
                    to={`/projekt/${project.id}`}
                    className="group block"
                  >
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                      <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                        <ParallaxImage
                          src={project.image}
                          alt={project.title}
                          className="aspect-[16/10] rounded-2xl bg-secondary"
                          speed={0.2}
                          contain
                        />
                      </div>

                      <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <p className="text-muted-foreground text-sm tracking-wide mb-3">
                          {project.category}
                        </p>
                        <h2 className="headline-md text-foreground mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                          {project.title}
                        </h2>
                        <p className="body-md mb-4">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-accent group-hover:gap-2 transition-all duration-300">
                          Case Study ansehen
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projekte;
