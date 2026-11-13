import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-slate-700 text-slate-400 text-sm mb-8">
          AI-Powered Recruitment
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Hiring, reimagined
          <br />
          <span className="text-blue-500">with intelligence.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
          Connect the right candidates with the right roles — faster,
          smarter, and without the noise of traditional hiring.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Get Started
          </Link>
          <Link
            to="/jobs"
            className="border border-slate-700 hover:border-slate-500 text-slate-200 px-8 py-3 rounded-lg font-medium transition"
          >
            Browse Jobs
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "1,000+", label: "Jobs Posted" },
            { value: "500+", label: "Companies" },
            { value: "10k+", label: "Candidates" },
            { value: "95%", label: "Match Accuracy" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">
          Built for both sides of hiring
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          Whether you're posting roles or looking for one, everything you
          need lives in a single platform.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: "Smart Matching",
              desc: "AI-driven scoring surfaces the strongest candidates for every role automatically.",
            },
            {
              icon: "⚡",
              title: "Fast Applications",
              desc: "Candidates apply in seconds. Recruiters review in one clean dashboard.",
            },
            {
              icon: "🔒",
              title: "Role-Based Access",
              desc: "Admins, recruiters, and candidates each get a tailored, secure experience.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
  <div className="bg-slate-900 border border-slate-800 rounded-2xl px-10 py-16 text-center hover:border-blue-500/30 transition">
    <h2 className="text-3xl font-bold mb-4 text-white">
      Ready to find your next hire — or your next role?
    </h2>

    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
      Join thousands already using the platform to hire and get hired faster.
    </p>

    <Link
      to="/register"
      className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium transition"
    >
      Create Your Free Account
    </Link>
  </div>
</section>
    </div>
  );
}

export default Home;