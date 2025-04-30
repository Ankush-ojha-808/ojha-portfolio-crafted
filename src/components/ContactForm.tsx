import React, { useRef, useState } from "react";
import { Mail, Phone, Download } from "lucide-react";

const email = "ojhaankush808@gmail.com";
const phone = "+91 9142348830";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1f1f2e] via-[#2d2f5a] to-[#181a2c] rounded-3xl p-8 shadow-xl w-full max-w-2xl mx-auto text-white">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 text-sm font-medium text-white/90">my naeme</label>
          <input
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-white/90">Email</label>
          <input
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-white/90">Message</label>
          <textarea
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 min-h-[100px]"
            name="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-lg text-white font-semibold hover:brightness-110 hover:scale-105 transition"
        >
          {submitted ? "Submitted!" : "Send Message"}
        </button>
      </form>

      <div className="flex flex-col md:flex-row md:items-center mt-8 gap-4 justify-between text-sm">
        <div className="flex items-center gap-2 text-white/80">
          <Mail size={20} className="text-violet-400" />
          <a href={`mailto:${email}`} className="hover:underline">{email}</a>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Phone size={20} className="text-violet-400" />
          <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
        </div>
        <a
          href="/lovable-uploads/74023295-cd46-478a-bf6c-7ac1f97be2dc.png"
          download="AnkushKumarOjha-Resume.png"
          className="inline-flex gap-2 items-center mt-2 md:mt-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:brightness-110 px-4 py-2 rounded-lg text-white font-medium transition"
        >
          <Download size={18} /> Download Resume
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
