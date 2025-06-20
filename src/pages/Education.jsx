import Layout from "../components/Layout";
import Education from "../components/Education";

export default function EducationPage() {
  return (
    <Layout>
      <main className="px-6 py-12 max-w-5xl mx-auto text-white">
        <h1 
          className="text-3xl font-bold text-center mb-10 border-b pb-4 border-gray-600 dark:border-gray-400"
          tabIndex={0}
          aria-label="Education page"
        >
          Education
        </h1>
        <Education />
      </main>
    </Layout>
  );
}
