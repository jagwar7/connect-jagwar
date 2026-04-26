import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <SectionHeading title="My Work" icon={Briefcase} subtitle="A selection of my projects that demonstrate my skills and passion for development."/>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
