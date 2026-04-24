"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ShareButton() {
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({ description: "Profile link copied to clipboard!" });
      } catch (error) {
        console.error("Error copying to clipboard:", error);
        toast({ variant: "destructive", description: "Could not copy link." });
      }
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleShare}>
      <Share2 className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
      <span className="sr-only">Share Profile</span>
    </Button>
  );
}
