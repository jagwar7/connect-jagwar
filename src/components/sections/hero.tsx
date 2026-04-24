import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { personalData, socialLinks } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ShareButton } from '@/components/share-button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile');

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-red-900/10 to-background">
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 text-center md:px-6">
        <div className="relative mb-8">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={160}
              height={160}
              className="h-40 w-40 rounded-full border-4 border-primary object-cover shadow-lg"
              priority
              data-ai-hint={profileImage.imageHint}
            />
          )}
          <div className="absolute -bottom-2 -right-2 rounded-full bg-background p-1">
             <div className="h-6 w-6 animate-pulse rounded-full bg-green-500" />
          </div>
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {personalData.name}
        </h1>
        <p className="mt-3 text-lg text-primary md:text-xl">{personalData.title}</p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#projects">View My Work <ArrowDown className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
          <ShareButton />
        </div>
      </div>
    </section>
  );
}
