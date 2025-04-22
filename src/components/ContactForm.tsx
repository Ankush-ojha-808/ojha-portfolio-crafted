
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
    <div className="bg-gradient-to-br from-[#181c2e] to-[#232546] rounded-2xl p-8 shadow-glass w-full max-w-xl mx-auto">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium">Your Name</label>
          <input
            className="w-full p-2 rounded bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            required
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            className="w-full p-2 rounded bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
            name="email"
            type="email"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            className="w-full p-2 rounded bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent min-h-[80px]"
            name="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-accent px-6 py-2 rounded-lg text-white font-medium hover:scale-105 transition"
        >
          {submitted ? "Submitted!" : "Send Message"}
        </button>
      </form>

      <div className="flex flex-col md:flex-row md:items-center mt-8 gap-4 justify-between">
        <div className="flex items-center gap-2">
          <Mail size={20} className="text-accent" />
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={20} className="text-accent" />
          <a href={`tel:${phone}`} className="hover:underline">
            {phone}
          </a>
        </div>
        <a
          href="/lovable-uploads/74023295-cd46-478a-bf6c-7ac1f97be2dc.png"
          download="AnkushKumarOjha-Resume.png"
          className="inline-flex gap-2 items-center mt-2 md:mt-0 bg-accent/70 hover:bg-accent px-4 py-2 rounded-lg text-white font-medium transition"
        >
          <Download size={18} /> Download Resume
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
