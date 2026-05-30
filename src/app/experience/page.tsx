import Experience from "@/components/Experience";
import Education from "@/components/Education";
import PageShell from "@/components/PageShell";

export const metadata = {
 title: "Experience | Vishi Agarwal",
};

export default function ExperiencePage() {
 return (
 <PageShell>
 <Experience />
 <Education />
 </PageShell>
 );
}
