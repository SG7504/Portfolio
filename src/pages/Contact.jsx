import Layout from "../components/Layout";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <Layout>
      <main
        className="min-h-screen flex justify-center items-center bg-zinc-950 px-4"
        aria-labelledby="contact-heading"
        id="main-content"
        tabIndex={-1}
      >
        <ContactSection />
      </main>
    </Layout>
  );
}
