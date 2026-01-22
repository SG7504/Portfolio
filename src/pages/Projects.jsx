import certifications from "../data/Projects";
import CertificationList from "../components/ProjectCard";
import Layout from "../components/Layout";

export default function ProjectCard() {
  return (
    <Layout>
      <section className="min-h-screen px-6 py-12 max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <ProjectCard Projects={Projects} />
      </section>
    </Layout>
  );
}
