import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, email };

    const existing =
      JSON.parse(localStorage.getItem("contactLeads")) || [];

    existing.push(userData);
    localStorage.setItem("contactLeads", JSON.stringify(existing));

    setSubmitted(true);

    setTimeout(() => {
      setRedirecting(true);
    }, 2000);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 text-center">

        {!submitted && (
          <>
            <h2 className="text-3xl font-bold text-gray-900">
              Let’s Get Started
            </h2>

            <p className="text-gray-600 mt-2 mb-8">
              Fill in your details and we’ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </>
        )}

        {submitted && (
          <div className="py-12">
            <div className="text-green-600 text-4xl mb-4">✔</div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Form Submitted Successfully
            </h3>

            <p className="text-gray-600 mt-3">
              Thank you! We’ll get back to you shortly.
            </p>

            {redirecting && (
              <p className="mt-6 text-blue-600 font-medium animate-pulse">
                Redirecting to home page...
              </p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default ContactForm;
