import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params;
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  const projectImage = project.image;

  const getLiveLinkButton = () => {
    if (!project.deploymentUrl || project.deploymentUrl === '#') {
      return null;
    }
    const isInternal = project.deploymentUrl.startsWith('/');
    const buttonText = "View Live";

    if (isInternal) {
        return (
             <Button asChild>
                <Link href={project.deploymentUrl}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {buttonText}
                </Link>
            </Button>
        )
    }

    return (
        <Button asChild>
            <a href={project.deploymentUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                {buttonText}
            </a>
        </Button>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Button variant="outline" asChild>
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
        <Card>
          <CardHeader>
            {projectImage && (
              <div className="aspect-video overflow-hidden rounded-md border mb-6">
                <Image
                  src={projectImage}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                  data-ai-hint={projectImage}
                />
              </div>
            )}
            <CardTitle className="font-headline text-3xl">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{project.description}</p>
          </CardContent>
          <CardFooter className="flex justify-start gap-2">
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {getLiveLinkButton()}
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
