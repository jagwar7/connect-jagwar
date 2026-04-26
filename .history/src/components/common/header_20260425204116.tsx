'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/data';
import { Code, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { useAuth } from '@/context/AuthContext';
import FlashAuthClient from 'flashauthbyjagwar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {setUser} = useAuth();
  const [client, setClient] = useState<any>(null);

  

  useEffect(() => {
    const flashauthClient = new FlashAuthClient("FAwoNltHJUmVTG-0ZAEZ");
    if(!flashauthClient){
      window.alert("Failed to initialize FlashAuth");
      return;
    }

    setClient(flashauthClient);
  }, []);



  const handleGoogleSignIn=async()=>{
    if(!client) {
      throw new Error("FlashAuth havent initialized");
    }

    
  }
  

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
          <Code className="h-6 w-6 text-primary" />
          <span>CodeFolio</span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Button key={link.label} variant="link" asChild>
              <Link href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
                    <Code className="h-6 w-6 text-primary" />
                    <span>CodeFolio</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="mt-6 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.href}
                        className="rounded-md p-2 text-lg font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
