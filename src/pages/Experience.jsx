import Layout from "../components/Layout";
import experience from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <Layout>
      <section className="min-h-screen px-6 py-12 max-w-5xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
