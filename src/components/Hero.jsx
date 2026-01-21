import bgImage from "../assets/bg-image.avif";

function Hero() {
  return (
    <section
      className="relative h-screen w-full"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.55),
          rgba(0,0,0,0.55)
        ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">
          Automate Your Business <br /> with AI
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-xl">
          We build AI-powered automation systems that save time, reduce cost,
          and scale operations.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
