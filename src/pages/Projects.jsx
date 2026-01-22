import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";

export default function Projects() {
  return (
    <Layout>
      <section className="min-h-screen px-6 py-12 max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
