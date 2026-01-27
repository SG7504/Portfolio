import Layout from "../components/Layout";
import experience from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <Layout>
      <section className="min-h-screen px-6 py-12 max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>

        {/* SAME GRID SYSTEM AS PROJECTS (but 1 column) */}
        <div className="grid gap-10 grid-cols-1">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} index={index} {...exp} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
