// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function ContactForm() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/submissions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Submission failed");
//       }

//       setSuccess("✅ Form submitted successfully! Redirecting...");

//       setTimeout(() => {
//         navigate("/");
//       }, 1500);
//     } catch (err) {
//       console.error(err);
//       alert("❌ Submission failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-2">
//           Let’s Get Started
//         </h2>
//         <p className="text-center text-gray-500 mb-6">
//           Fill in your details and we’ll get back to you shortly.
//         </p>

//         {success ? (
//           <p className="text-green-600 text-center font-semibold">
//             {success}
//           </p>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full border rounded px-4 py-3"
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full border rounded px-4 py-3"
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={form.message}
//               onChange={handleChange}
//               required
//               className="w-full border rounded px-4 py-3"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:opacity-60"
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      // ✅ Proper error handling
      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSuccess("✅ Form submitted successfully! Redirecting...");

      // Optional reset (safe)
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      console.error("Submission Error:", err.message);
      alert(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Let’s Get Started</h2>
        <p className="text-center text-gray-500 mb-4">
          Fill in your details and we’ll get back to you shortly.
        </p>

        {success && (
          <p className="text-green-600 text-center font-semibold mb-4">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
