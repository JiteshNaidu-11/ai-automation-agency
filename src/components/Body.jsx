 <div className="relative min-h-screen">   
      
      <Header />
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center px-10 text-white">
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold leading-tight">
              Automate Your Business with AI
            </h2>
            <p className="mt-6 text-lg text-gray-200">
              We build AI-powered automation systems that save time,
              reduce cost, and scale operations.
            </p>

            <button className="mt-8 rounded bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>

    </div>

    export default Body