import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('/src/assets/bg-image.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-3xl px-10 text-white">
        <h1 className="text-5xl font-bold leading-tight">
          Automate Your Business <br /> with AI
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-xl">
          We build AI-powered automation systems that save time,
          reduce cost, and scale operations.
        </p>

        <div className="mt-8">
          <Link
            to="/contact-form"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
