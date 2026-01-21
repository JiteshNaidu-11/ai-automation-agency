import bgImage from "../assets/bg-image.avif";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/60 w-full min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Automate Your Business <br /> with AI
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We build AI-powered automation systems that save time, reduce cost,
            and scale operations.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
