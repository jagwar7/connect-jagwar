import { Briefcase, GraduationCap, User, Layers } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalData, education, experience, categorizedSkills } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <SectionHeading title="About Me" icon={User} />
      <div className="grid grid-cols-1 gap-12">
        <div className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {personalData.bio}
          </p>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((job: any) => (
                <div key={job.company}>
                  <h4 className="font-semibold">{job.role}</h4>
                  <p className="text-sm text-muted-foreground">{job.company} | {job.period}</p>
                  <p className="mt-1 text-sm">{job.description}</p>
                  {job.techStack && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {job.techStack.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="px-2 py-0.5 text-xs">{tech}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <Layers className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categorizedSkills.map((categoryItem) => (
                <div key={categoryItem.category}>
                  <h4 className="mb-2 font-semibold">{categoryItem.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {categoryItem.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              {education.map((edu) => (
                <div key={edu.university}>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.university} | {edu.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
