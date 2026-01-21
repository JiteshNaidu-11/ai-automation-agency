import Header from "./Header";
import bgImage from "../assets/bg-image.avif";

function Body() {
  return (
    <div className="relative">
      <Header />

      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 pt-40 text-white">
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold leading-tight">
              Automate Your Business <br /> with AI
            </h2>

            <p className="mt-6 text-lg text-gray-200">
              We build AI-powered automation systems that save time,
              reduce cost, and scale operations.
            </p>

            <button className="mt-8 rounded bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
