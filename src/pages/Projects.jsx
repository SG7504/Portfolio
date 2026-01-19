import certifications from "../data/certifications";
import CertificationList from "../components/CertificationList";
import Layout from "../components/Layout";

export default function CertificationPage() {
  return (
    <Layout>
      <section className="min-h-screen px-6 py-12 max-w-6xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Certifications
        </h2>

        <CertificationList certifications={certifications} />
      </section>
    </Layout>
  );
}
