import type { Metadata } from "next";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import PageHeader from "../components/page-header";

export const metadata: Metadata = {
  title: "Careers | Alpha",
  description:
    "Career information and professional development opportunities with Alpha's marine services team.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader
        eyebrow="Careers"
        title="Build Your Career at Sea"
        description="Develop your competence, strengthen your skills, and build a meaningful career in safe and reliable offshore marine operations."
      />

      <Footer />
    </main>
  );
}
