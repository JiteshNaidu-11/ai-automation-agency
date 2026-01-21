function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-32 bg-gray-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-lg">
            Our structured approach ensures AI automation is implemented
            efficiently, securely, and aligned with your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="rounded-xl bg-white border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Discovery & Analysis
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We evaluate your workflows, systems, and objectives to identify
              high-impact automation opportunities.
            </p>
          </div>

          <div className="rounded-xl bg-white border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Solution Design
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We design tailored AI workflows that integrate seamlessly with
              your tools and data infrastructure.
            </p>
          </div>

          <div className="rounded-xl bg-white border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Build & Test
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Automation systems are implemented, tested, and optimized for
              accuracy, reliability, and performance.
            </p>
          </div>

          <div className="rounded-xl bg-white border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Deploy & Scale
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Solutions are deployed, monitored, and refined as your business
              evolves and scales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
