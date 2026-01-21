import bgImage from "../assets/bg-image.avif";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.55),
          rgba(0,0,0,0.55)
        ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
          Automate Your Business <br /> with AI
        </h1>

        <p className="mt-4 max-w-xl text-lg text-gray-200">
          We build AI-powered automation systems that save time, reduce cost,
          and scale operations.
        </p>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
