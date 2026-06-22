"use client";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thank you! Your message has been received. We'll follow up within 24 hours.");
  }

  return (
    <div className="pt-20 pb-20 px-6 lg:px-10 max-w-5xl mx-auto">
      <ScrollReveal>
        <span className="text-[0.75rem] font-bold uppercase tracking-widest text-purple2">Let&apos;s Connect</span>
        <h1 className="font-serif text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-tight mt-2 mb-3">
          Ready to <span className="text-gold">Build</span> Together?
        </h1>
        <p className="text-slate-400 max-w-[520px] leading-[1.8] mb-12">
          Tell us about your project or challenge. We&apos;ll follow up within 24 hours to schedule a discovery call.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14">

        {/* Contact info */}
        <ScrollReveal>
          <h2 className="font-bold text-[1.15rem] mb-6">Get in Touch</h2>
          <div className="flex flex-col gap-5">
            {[
              { icon: "📧", label: "Email", value: "admin@techunaverse.com", href: "mailto:admin@techunaverse.com" },
              { icon: "🏢", label: "Company", value: "TechUnaVerse LLC", href: null },
              { icon: "📍", label: "Location", value: "Virginia, USA", href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-[12px] bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
                <div>
                  <p className="text-[0.74rem] text-slate-500 font-semibold uppercase tracking-wide">{label}</p>
                  {href
                    ? <a href={href} className="text-[0.92rem] font-medium text-white hover:text-gold transition-colors duration-200 no-underline">{value}</a>
                    : <p className="text-[0.92rem] font-medium">{value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-glass border border-glass rounded-[14px] p-5">
            <p className="text-gold2 text-[0.85rem] font-bold mb-2">⏱ Response Time</p>
            <p className="text-slate-400 text-[0.86rem] leading-relaxed">We respond to all inquiries within 24 business hours. For urgent needs, include "URGENT" in the subject line.</p>
          </div>

          <div className="mt-5 bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.2)] rounded-[14px] p-5">
            <p className="text-gold2 text-[0.85rem] font-bold mb-2">📅 Schedule a Free 15-Min Call</p>
            <p className="text-slate-400 text-[0.86rem] leading-relaxed mb-3">Just want to ask a quick question? We offer free 15-minute intro calls.</p>
            <a
              href="https://calendar.app.google/F7pGNirVTiWuG3CM7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gold text-[0.86rem] font-semibold border border-[rgba(212,175,55,0.4)] rounded-[8px] px-4 py-2 hover:bg-gold hover:text-navy transition-all duration-200 no-underline"
            >
              Book a Time →
            </a>
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={2}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "First Name", placeholder: "Jane", type: "text" },
                { label: "Last Name",  placeholder: "Smith",  type: "text" },
              ].map(({ label, placeholder, type }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <label className="text-[0.8rem] font-semibold text-slate-300">{label}</label>
                  <input type={type} placeholder={placeholder} required className="bg-glass border border-glass rounded-[10px] px-4 py-3 text-white placeholder-slate-500 text-[0.9rem] outline-none focus:border-[rgba(124,58,237,0.5)] focus:bg-[rgba(124,58,237,0.04)] transition-all duration-200" />
                </div>
              ))}
            </div>

            {[
              { label: "Email Address", placeholder: "jane@yourcompany.com", type: "email" },
              { label: "Company / Organization", placeholder: "Your Company Name", type: "text" },
            ].map(({ label, placeholder, type }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <label className="text-[0.8rem] font-semibold text-slate-300">{label}</label>
                <input type={type} placeholder={placeholder} className="bg-glass border border-glass rounded-[10px] px-4 py-3 text-white placeholder-slate-500 text-[0.9rem] outline-none focus:border-[rgba(124,58,237,0.5)] transition-all duration-200" />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.8rem] font-semibold text-slate-300">Service Interested In</label>
              <select required className="bg-[#0F1535] border border-glass rounded-[10px] px-4 py-3 text-white text-[0.9rem] outline-none focus:border-[rgba(124,58,237,0.5)] transition-all duration-200 cursor-pointer">
                <option value="">Select a service...</option>
                <optgroup label="AI Consulting">
                  <option>Web Strategy Consultation ($150)</option>
                  <option>AI Strategy Session ($250)</option>
                  <option>KnowledgeBot Launch Package ($1,500)</option>
                  <option>Business Automation Package ($3,000)</option>
                  <option>Digital Transformation Package ($5,000+)</option>
                </optgroup>
                <optgroup label="Web Development">
                  <option>Starter Website ($1,500)</option>
                  <option>Pro Website ($3,000)</option>
                  <option>Premium Website ($5,000+)</option>
                </optgroup>
                <optgroup label="DIY Resources">
                  <option>Monthly AI Toolkit ($29/mo)</option>
                  <option>Annual AI Toolkit ($249/yr)</option>
                  <option>Business Launch Starter Kit ($79)</option>
                  <option>AI Prompt Library ($49)</option>
                </optgroup>
                <option>UNA Studios — Custom Product</option>
                <option>Not sure — Let&apos;s talk</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.8rem] font-semibold text-slate-300">Tell Us About Your Project</label>
              <textarea placeholder="What challenge are you trying to solve? What does success look like for you?" rows={5} className="bg-glass border border-glass rounded-[10px] px-4 py-3 text-white placeholder-slate-500 text-[0.9rem] outline-none focus:border-[rgba(124,58,237,0.5)] transition-all duration-200 resize-y" />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple to-purple2 text-white rounded-[10px] font-bold text-[1rem] shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border-none mt-2"
            >
              Send Message →
            </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
