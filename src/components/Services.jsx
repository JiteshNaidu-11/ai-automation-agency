import { Link } from "react-router-dom";

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-34 bg-gray-100 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-4xl font-bold text-center mb-6">
          AI Automation That Actually Grows Your Business
        </h2>

        <p className="mx-auto max-w-3xl text-center text-gray-600 mb-14">
          We design and implement intelligent automation systems that eliminate
          repetitive work, improve customer experience, and help your business
          scale without increasing operational cost. Our process is simple,
          transparent, and tailored to your specific business needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">AI Chatbots</h3>
            <p className="text-gray-600">
              Reduce support workload and respond to customers instantly with
              AI-powered chatbots that qualify leads and answer queries 24/7.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p className="text-gray-600">
              Save hours every week by automating repetitive internal processes,
              approvals, and task handoffs across your tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">CRM Automation</h3>
            <p className="text-gray-600">
              Keep your CRM clean and up to date with automated data syncing,
              lead updates, and AI-powered insights.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Lead Management</h3>
            <p className="text-gray-600">
              Capture, score, and route leads automatically so your sales team
              focuses only on high-intent prospects.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Email Automation</h3>
            <p className="text-gray-600">
              Send personalized, AI-driven follow-ups and campaigns that improve
              response rates without manual effort.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Data & Reporting Automation
            </h3>
            <p className="text-gray-600">
              Get real-time dashboards and automated reports so you can make
              faster, data-driven decisions.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-10 text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">
            Why Businesses Choose Us
          </h3>
          <p className="text-gray-600">
            Our clients typically save 20–40% of operational time within the
            first 90 days by replacing manual workflows with AI-powered systems.
            We focus on ROI, reliability, and long-term scalability.
          </p>
        </div>

        <div className="text-center">
         <Link
          to="./contact-form"
          className="rounded border border-blue-600 px-6 py-3 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
          >
          Book Appointment
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Services;
