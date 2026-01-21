import { Link } from "react-router-dom";

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 px-6 md:px-10 bg-black text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Contact Us
      </h2>

      <p className="text-center text-gray-300">
        Ready to automate your business?
      </p>

      <div className="text-center mt-6">
        <Link
          to="/contact-form"
          className="rounded bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-800 transition"
        >
        Book a Call
        </Link>

      </div>
    </section>
  );
}

export default Contact;
