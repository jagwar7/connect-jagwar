import { personalData, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="text-center md:text-left">
          <p className="font-headline text-lg font-medium">Connect Jagwar</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
