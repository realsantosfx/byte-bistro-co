import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxImage from "@/components/ui/ParallaxImage";

const Projects = () => {
  return (
    <section id="referenzen" className="section bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-20">
            <p className="text-muted-foreground text-sm tracking-wide mb-4">
              Projekte
            </p>
            <h2 className="headline-lg text-foreground max-w-3xl mx-auto">
              Ausgewählte Arbeiten.
            </h2>
          </div>
        </FadeInSection>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.slice(0, 4).map((project, index) => (
            <FadeInSection key={project.id} delay={index * 50}>
              <Link 
                to={`/projekt/${project.id}`}
                className="group block"
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                  {/* Image with Parallax */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <ParallaxImage 
                      src={project.image} 
                      alt={project.title}
                      className="aspect-[16/10] rounded-2xl bg-secondary"
                      speed={0.2}
                      contain
                    />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <p className="text-muted-foreground text-sm tracking-wide mb-3">
                      {project.category}
                    </p>
                    <h3 className="headline-md text-foreground mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="body-md mb-6">
                      {project.shortDescription}
                    </p>
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

        {/* View All Link */}
        <FadeInSection delay={200}>
          <div className="text-center mt-24">
            <Link 
              to="/projekte" 
              className="inline-flex items-center gap-1 text-accent text-lg hover:gap-2 transition-all duration-300"
            >
              Alle Projekte
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Projects;
