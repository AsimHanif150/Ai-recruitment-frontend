import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-slate-700 text-slate-400 text-sm mb-8">
          Our Story
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          About the
          <br />
          <span className="text-blue-500">platform.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          We're building the future of recruitment — connecting talented
          candidates with the right opportunities, faster and smarter, using
          AI-powered matching.
        </p>
      </section>

      {/* Mission + Stats */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-slate-800">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed">
            Hiring shouldn't be slow, biased, or frustrating for either side.
            Our platform brings recruiters and candidates together on one
            streamlined system — where job posting, applications, and
            candidate discovery all happen in one place, backed by
            intelligent matching that saves everyone time.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
          <div className="grid grid-cols-2 gap-8 text-center">
            {[
              { value: "1,000+", label: "Jobs Posted" },
              { value: "500+", label: "Companies" },
              { value: "10k+", label: "Candidates" },
              { value: "95%", label: "Match Accuracy" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-blue-500">
                  {stat.value}
                </p>
                <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          Three simple steps from sign-up to your next hire — or your next role.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📝",
              title: "Create a Profile",
              desc: "Sign up as a candidate or recruiter and build your profile in minutes.",
            },
            {
              icon: "🔍",
              title: "Find the Right Match",
              desc: "Browse jobs or applicants, and let smart matching surface the best fits.",
            },
            {
              icon: "🤝",
              title: "Connect & Hire",
              desc: "Apply, review, and connect — all tracked in one dashboard.",
            },
          ].map((step, i) => (
            <div
              key={step.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center text-lg">
                  {step.icon}
                </div>
                <span className="text-slate-600 text-sm font-medium">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl px-10 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of candidates and recruiters already using the
            platform.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;