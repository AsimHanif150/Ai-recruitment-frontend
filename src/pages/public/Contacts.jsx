import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    // TODO: Connect with backend API
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-slate-700 text-slate-400 text-sm mb-8">
          Contact Us
        </span>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          We'd love to
          <br />
          <span className="text-blue-500">hear from you.</span>
        </h1>

        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Whether you have questions, feedback, or need support, our team is
          always ready to help you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

            <p className="text-slate-400 leading-relaxed mb-10">
              We'd love to hear from you. Reach out using the details below or
              send us a message through the contact form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Mail size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-slate-400 mt-1">
                    support@airecruitment.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Phone size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-slate-400 mt-1">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-slate-400 mt-1">
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={34} />
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  Message Sent!
                </h2>

                <p className="text-slate-400">
                  Thank you for contacting us. We'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Send us a Message
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-300 mb-2">
                      Message
                    </label>

                    <textarea
                      rows="6"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">
          Here are answers to some of the most common questions about our
          platform.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "How quickly will I receive a reply?",
              desc: "Our support team usually responds within 24 hours.",
            },
            {
              title: "Can companies post jobs?",
              desc: "Yes. Recruiters can register, post jobs, and manage applicants from one dashboard.",
            },
            {
              title: "Is AI matching included?",
              desc: "Yes. Our platform uses AI-powered candidate matching to help recruiters find the best talent faster.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition"
            >
              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl px-10 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to build your future?
          </h2>

          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of recruiters and candidates using our AI-powered
            recruitment platform.
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

export default Contacts;