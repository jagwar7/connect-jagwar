'use server';
/**
 * @fileOverview A Genkit flow to generate compelling and concise project descriptions for a software engineering portfolio.
 *
 * - generateProjectDescription - A function that handles the project description generation process.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  technologiesUsed: z
    .array(z.string())
    .describe('A list of technologies used in the project.'),
  keyAchievements: z
    .array(z.string())
    .describe('A list of key achievements or outcomes of the project.'),
});
export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated compelling project description.'),
});
export type GenerateProjectDescriptionOutput = z.infer<
  typeof GenerateProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating compelling and concise project descriptions for a software engineering portfolio.

Based on the following project details, generate a professional and engaging project description. 
Highlight the key achievements and the technologies used. Ensure the description is concise and suitable for a portfolio.

Project Name: {{{projectName}}}
Technologies Used:
{{#each technologiesUsed}}
- {{{this}}}
{{/each}}
Key Achievements:
{{#each keyAchievements}}
- {{{this}}}
{{/each}}`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
