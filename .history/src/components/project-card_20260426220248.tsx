import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  deploymentUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectImage = project.image
  const isInternalLink = project.liveUrl.startsWith('/');

  return (
    <Card className="flex h-full transform-gpu flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <CardHeader>
        {projectImage && (
          <div className="aspect-video overflow-hidden rounded-md border">
            <Image
              src={projectImage.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={projectImage.imageHint}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="mb-2 font-headline text-xl">{project.title}</CardTitle>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-2">
        <Button variant="outline" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button asChild>
          {isInternalLink ? (
            <Link href={project.liveUrl}>
              <ExternalLink className="mr-2 h-4 w-4" />
              View
            </Link>
          ) : (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View
            </a>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
