import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { personalData, socialLinks } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Button } from "../ui/button";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <SectionHeading title="Get In Touch" icon={Mail} subtitle="Have a question or a project in mind? I'd love to hear from you." />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <Card className="p-2">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Direct Contact</h3>
            <p className="text-muted-foreground">You can also reach me directly through:</p>
            <a href={`mailto:${personalData.contact.email}`} className="mt-2 inline-block text-primary hover:underline">{personalData.contact.email}</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Socials</h3>
            <p className="text-muted-foreground">Connect with me on social media.</p>
            <div className="mt-2 flex items-center gap-2">
              {socialLinks.slice(1).map((link) => ( // Exclude email
                <Button key={link.name} variant="outline" size="icon" asChild>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
