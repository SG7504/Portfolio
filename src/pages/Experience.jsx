import Layout from "../components/Layout";
import experience from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <Layout>
      {/* DO NOT add max-w here — Layout already handles width */}
      <section className="min-h-screen px-6 py-12 text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>

        {/* SAME GRID SYSTEM AS PROJECTS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} index={index} {...exp} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
