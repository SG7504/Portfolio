import Layout from "../components/Layout";
import CertificationList from "../components/CertificationList";
import certifications from "../data/certifications";

export default function Certification() {
  return (
    <Layout>
      <section
        className="px-6 py-12 max-w-5xl mx-auto"
        aria-labelledby="certifications-heading"
      >
        <h1
          id="certifications-heading"
          className="text-3xl font-bold mb-6 text-teal-400"
          tabIndex={0}
        >
          Certifications
        </h1>

        <CertificationList certifications={certifications} />
      </section>
    </Layout>
  );
}
