import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeInSection from "@/components/ui/FadeInSection";
import { getProjectById, projects } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="headline-md text-foreground mb-6">Projekt nicht gefunden</h1>
          <Link to="/#referenzen">
            <Button variant="apple">Zurück</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];
  
  // Use gallery if available, otherwise use the main image
  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-14">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container-narrow">
            <FadeInSection>
              <Link 
                to="/#referenzen" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück
              </Link>
            </FadeInSection>

            <FadeInSection delay={100}>
              <p className="text-muted-foreground text-sm tracking-wide mb-4">
                {project.category}
              </p>
            </FadeInSection>

            <FadeInSection delay={150}>
              <h1 className="headline-xl text-foreground mb-8">
                {project.title}
              </h1>
            </FadeInSection>

            <FadeInSection delay={200}>
              <p className="body-lg max-w-3xl">
                {project.fullDescription}
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Image Gallery / Carousel */}
        <FadeInSection delay={250}>
          <section className="px-6 md:px-8 pb-20">
            <div className="max-w-6xl mx-auto">
              {galleryImages.length > 1 ? (
                <div className="space-y-6">
                  <Carousel 
                    className="w-full"
                    opts={{
                      align: "center",
                      loop: true,
                    }}
                  >
                    <CarouselContent>
                      {galleryImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="rounded-2xl overflow-hidden bg-secondary flex items-center justify-center" style={{ minHeight: '400px' }}>
                            <img 
                              src={image} 
                              alt={`${project.title} Screenshot ${index + 1}`}
                              className="max-w-full max-h-[70vh] object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
                    <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-border hover:bg-background" />
                  </Carousel>
                  
                  {/* Thumbnail indicators */}
                  <div className="flex justify-center gap-3">
                    {galleryImages.map((image, index) => (
                      <button
                        key={index}
                        className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          index === activeIndex 
                            ? "border-foreground opacity-100" 
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <img 
                          src={image} 
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden bg-secondary flex items-center justify-center" style={{ minHeight: '400px' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                </div>
              )}
            </div>
          </section>
        </FadeInSection>

        {/* Case Study */}
        <section className="section bg-secondary">
          <div className="container-narrow">
            <div className="grid md:grid-cols-3 gap-12 md:gap-16">
              <FadeInSection>
                <div>
                  <p className="text-sm text-muted-foreground tracking-wide mb-3">
                    Herausforderung
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={100}>
                <div>
                  <p className="text-sm text-muted-foreground tracking-wide mb-3">
                    Lösung
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div>
                  <p className="text-sm text-muted-foreground tracking-wide mb-3">
                    Ergebnis
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section bg-background">
          <div className="container-narrow">
            <FadeInSection>
              <p className="text-muted-foreground text-sm tracking-wide mb-4 text-center">
                Technologie
              </p>
              <h2 className="headline-md text-foreground mb-16 text-center">
                Tech Stack
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {project.techStack.map((tech, index) => (
                <FadeInSection key={tech.name} delay={index * 50}>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section bg-secondary">
          <div className="container-narrow">
            <FadeInSection>
              <p className="text-muted-foreground text-sm tracking-wide mb-4 text-center">
                Features
              </p>
              <h2 className="headline-md text-foreground mb-16 text-center">
                Kernfunktionen
              </h2>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <FadeInSection key={feature} delay={index * 50}>
                  <div className="flex items-center gap-3 py-4">
                    <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="section bg-background border-t border-border">
          <div className="container-narrow text-center">
            <FadeInSection>
              <p className="text-muted-foreground text-sm tracking-wide mb-4">
                Nächstes Projekt
              </p>
              <Link 
                to={`/projekt/${nextProject.id}`}
                className="group inline-block"
              >
                <h2 className="headline-md text-foreground group-hover:text-muted-foreground transition-colors duration-300 mb-4">
                  {nextProject.title}
                </h2>
                <span className="inline-flex items-center gap-1 text-accent group-hover:gap-2 transition-all duration-300">
                  Ansehen
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </FadeInSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-secondary">
          <div className="container-narrow text-center">
            <FadeInSection>
              <h2 className="headline-md text-foreground mb-6">
                Ähnliches Projekt?
              </h2>
              <p className="body-md mb-10 max-w-xl mx-auto">
                Lass uns über deine Anforderungen sprechen.
              </p>
              <Button variant="apple" size="lg">
                Gespräch buchen
                <ChevronRight className="w-4 h-4" />
              </Button>
            </FadeInSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
