import contact from "../data/contact";

function Contact() {
  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">I'd love to hear from you!</p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={`mailto:${contact.email}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition"
        >
          Email Me
        </a>
        <a
          href={contact.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 px-6 py-3 rounded-xl transition"
        >
          View Resume
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-black transition"
        >
          GitHub
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Contact;
