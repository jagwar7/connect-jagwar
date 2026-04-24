"use server";

import { generateProjectDescription } from "@/ai/flows/generate-project-description";
import { z } from "zod";

const ActionInputSchema = z.object({
  projectName: z.string().min(1, "Project name is required."),
  technologiesUsed: z.string().min(1, "Please list at least one technology."),
  keyAchievements: z.string().min(1, "Please list at least one achievement."),
});

export async function handleGenerateDescription(
  prevState: any,
  formData: FormData
) {
  const rawData = {
    projectName: formData.get("projectName"),
    technologiesUsed: formData.get("technologiesUsed"),
    keyAchievements: formData.get("keyAchievements"),
  };

  const validation = ActionInputSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      message: "Validation failed",
      errors: validation.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const flowInput = {
      projectName: validation.data.projectName,
      technologiesUsed: validation.data.technologiesUsed.split(",").map(s => s.trim()).filter(Boolean),
      keyAchievements: validation.data.keyAchievements.split("\n").map(s => s.trim().replace(/^- /, '')).filter(Boolean),
    };

    const result = await generateProjectDescription(flowInput);
    
    return {
      message: "Success",
      errors: null,
      data: result.description,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred.",
      errors: null,
      data: null,
    };
  }
}
