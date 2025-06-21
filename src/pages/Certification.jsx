// Certification.jsx
import React from "react";
import Layout from "../components/Layout";
import CertificationList from "../components/CertificationList";
import certifications from "../data/certifications";

export default function Certification() {
  return (
    <Layout>
      <main className="text-white px-6 py-12 max-w-5xl mx-auto">
        <h1 
          className="text-3xl font-bold mb-6 text-teal-400"
          tabIndex={0}
          id="certifications-heading"
        >
          
        </h1>
        <div 
          aria-labelledby="certifications-heading"
          role="region"
        >
          <CertificationList certifications={certifications} />
        </div>
      </main>
    </Layout>
  );
}
