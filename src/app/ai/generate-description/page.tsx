"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleGenerateDescription } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2, Clipboard } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Description
        </>
      )}
    </Button>
  );
}

export default function GenerateDescriptionPage() {
  const [state, formAction] = useFormState(handleGenerateDescription, initialState);
  const { toast } = useToast();

  const copyToClipboard = () => {
    if (state.data) {
      navigator.clipboard.writeText(state.data);
      toast({ description: "Description copied to clipboard!" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
            <Wand2 className="h-6 w-6 text-primary" />
            <span>AI Project Describer</span>
          </Link>
          <Button variant="outline" asChild>
            <Link href="/">Back to Portfolio</Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Generate Project Description</CardTitle>
            <CardDescription>
              Input your project details below, and our AI will craft a compelling description for your portfolio.
            </CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name</Label>
                <Input id="projectName" name="projectName" placeholder="e.g., E-commerce Platform" />
                {state.errors?.projectName && <p className="text-sm text-destructive">{state.errors.projectName[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="technologiesUsed">Technologies Used</Label>
                <Input id="technologiesUsed" name="technologiesUsed" placeholder="e.g., Next.js, TypeScript, Stripe" />
                <p className="text-sm text-muted-foreground">Enter a comma-separated list.</p>
                {state.errors?.technologiesUsed && <p className="text-sm text-destructive">{state.errors.technologiesUsed[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="keyAchievements">Key Achievements</Label>
                <Textarea id="keyAchievements" name="keyAchievements" placeholder="e.g.,- Implemented a secure payment gateway&#10;- Reduced page load time by 30%" className="min-h-[120px]"/>
                <p className="text-sm text-muted-foreground">List each achievement on a new line.</p>
                {state.errors?.keyAchievements && <p className="text-sm text-destructive">{state.errors.keyAchievements[0]}</p>}
              </div>
            </CardContent>
            <CardFooter className="flex-col items-stretch gap-4">
              <SubmitButton />
              {state.message && state.message !== "Success" && (
                 <Alert variant="destructive">
                   <AlertTitle>Error</AlertTitle>
                   <AlertDescription>{state.message}</AlertDescription>
                 </Alert>
              )}
            </CardFooter>
          </form>
        </Card>

        {state.data && (
          <Card className="mt-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-headline text-2xl">Generated Description</CardTitle>
                <CardDescription>Here's the AI-generated description for your project.</CardDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                <Clipboard className="h-5 w-5"/>
                <span className="sr-only">Copy to clipboard</span>
              </Button>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-muted-foreground">{state.data}</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
