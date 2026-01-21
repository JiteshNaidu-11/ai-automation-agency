import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg-image.avif";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-16">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Automate Your Business <br /> with AI
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            We build AI-powered automation systems that save time,
            reduce cost, and scale operations.
          </p>

          <button
            onClick={() => navigate("/contact-form")}
            className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
