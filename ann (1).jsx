import React from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, CalendarDays, CheckCircle2, Headphones,
  BriefcaseBusiness, PenTool, BarChart3, ExternalLink, Star,
  MessageCircle, FileText, Clock, ShieldCheck
} from "lucide-react";

const calendly = "https://calendly.com/gayannberalo/30min";
const email = "gayannberalo@gmail.com";
const phone = "+63 976 037 1205";
const location = "Metro Manila, Philippines";

// Canva-friendly image URL
const profilePhoto = "/mnt/data/62d525df-909e-46d5-b73b-6a38f701cf03(1).png";

const navItems = ["Home", "About", "Services", "Work", "Reviews", "Contact"];

const services = [
  {
    icon: Headphones,
    title: "Customer Support",
    items: [
      "Email, chat, phone, and inbox support",
      "Customer follow-ups until resolution",
      "Escalation handling and case monitoring",
      "Clear, calm, and professional communication",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Virtual Assistance",
    items: [
      "Daily admin support and organized trackers",
      "Calendar scheduling and appointment coordination",
      "Data entry, research, and documentation",
      "Reports, updates, and process follow-through",
    ],
  },
  {
    icon: PenTool,
    title: "Social Media Support",
    items: [
      "Canva content scheduling and publishing",
      "Inbox messages and comment responses",
      "Post coordination and team updates",
      "Engagement and performance insights",
    ],
  },
];

const work = [
  {
    year: "2026 – Present",
    title: "Social Media Moderator",
    company: "Streams of Living Praise Int Ministries",
    details: "Scheduled and published Canva content, managed inbox messages and comments, coordinated with the ministry team for timely posts, and tracked engagement insights.",
  },
  {
    year: "2019 – 2026",
    title: "Customer Service · Escalation Department",
    company: "The Safety Supply Company LTD",
    details: "Handled high-volume inquiries via phone and email, coordinated with teams, couriers, and suppliers, maintained records, and followed cases through to resolution.",
  },
  {
    year: "2015 – 2017",
    title: "Customer Support · Voice | Chat | Email",
    company: "Virtually Incredible LLC",
    details: "Pre-qualified tenants, managed inquiries, scheduled property viewings, coordinated access details, and followed up on applications, confirmations, cancellations, and changes.",
  },
];

const tools = {
  communication: ["Slack", "Zoom", "Google Meet", "Microsoft Teams", "WhatsApp", "Telegram"],
  customerSupport: ["Gmail", "Outlook", "TalkTo", "Live Chat Support Systems"],
  scheduling: ["Asana", "Google Calendar", "Calendly", "Microsoft Calendar"],
  collaboration: ["Google Drive", "Dropbox", "OneDrive", "Google Docs", "Google Sheets", "Microsoft Excel"],
  socialCRM: ["Canva", "Meta Business Suite", "Zoho CRM", "GoHighLevel (GHL)", "Salesforce"],
  productivity: ["Time Doctor", "Upwork"],
  voip: ["RingCentral", "3CX"],
  aiTools: [
    "ChatGPT — email writing, customer replies, and content creation",
    "Grammarly — grammar correction and professional writing",
    "Otter.ai — meeting transcription and notes",
    "Loom — tutorials and video updates"
  ]
};

const reviews = [
  {
    quote: "GAY-ANN consistently demonstrates a professional and positive attitude toward colleagues, customers, and clients. She works well with others, communicates respectfully, and maintains good working relationships across the team. In dealing with customers and clients, she is approachable, responsive, and service-oriented. Overall, she shows a responsible attitude toward her work and handles her duties with professionalism and commitment.",
    author: "Charina Sulay",
    role: "Web Master · The Safety Supply Company LTD"
  },
  {
    quote: "Gay Ann has good attendance record. She is able to handle special tasks assigned to her, apart from tackling the queue, with minimal supervision. She is able to help in assisting other colleagues by giving her insights on how to handle some customer issues that others are not familiar with.",
    author: "Balsam Hills Front Desk Manila",
    role: "Customer Support Team"
  },
  {
    quote: "She displayed proactiveness by creating a cheat sheet for faster access on different resources and shared it to the team. During available time, she also reviewed previously handled cases and QA audits to continuously improve quality and efficiency.",
    author: "Balsam Hills Front Desk Manila",
    role: "Operations & QA Feedback"
  }
];

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-400">
      <span>{children}</span><span className="h-px w-20 bg-amber-500/50" />
    </div>
  );
}

function ButtonLink({ href, children, variant = "gold" }) {
  const base = "inline-flex items-center justify-center gap-2 px-7 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition-all";
  const styles = variant === "gold"
    ? "bg-amber-400 text-black hover:bg-amber-300"
    : "border border-amber-400/60 text-white hover:bg-white/10";
  return <a href={href} className={`${base} ${styles}`}>{children}<ExternalLink size={14} /></a>;
}

export default function PortfolioWebsite() {
  return (
    <main className="min-h-screen bg-[#05020d] text-white selection:bg-amber-400 selection:text-black">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <header className="sticky top-0 z-50 border-b border-amber-500/25 bg-[#05020d]/90 py-6 backdrop-blur">
          <nav className="flex items-center justify-between">
            <a href="#home" className="font-serif text-2xl font-bold">Gay-Ann<span className="text-amber-400">.VA</span></a>
            <div className="hidden gap-9 md:flex">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[0.18em] hover:text-amber-400">{item}</a>
              ))}
            </div>
          </nav>
        </header>

        <section id="home" className="grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <SectionLabel>Customer Service · Virtual Assistant</SectionLabel>
            <h1 className="mt-7 font-serif text-5xl leading-tight md:text-7xl">Gay-Ann <span className="italic text-amber-400">Beralo</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Reliable customer support and virtual assistance for business owners who need organized admin help, clear communication, and consistent follow-through.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href={calendly}>Book a Call</ButtonLink>
              <ButtonLink href="#work" variant="outline">View My Work</ButtonLink>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-l border-amber-400/60 pl-6">
              <div><p className="font-serif text-4xl text-amber-400">7+</p><p className="text-xs text-white/60">Years support experience</p></div>
              <div><p className="font-serif text-4xl text-amber-400">100%</p><p className="text-xs text-white/60">Commitment to clients</p></div>
              <div><p className="font-serif text-4xl text-amber-400">VA</p><p className="text-xs text-white/60">Remote-ready support</p></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .1 }} className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-amber-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-amber-400/30 bg-[#120a43] p-5 shadow-2xl">
              <div className="overflow-hidden rounded-[1.5rem] border border-amber-400/25 bg-[#24185f]">
                <img src={profilePhoto} alt="Gay-Ann Beralo" className="h-[520px] w-full object-cover object-top" />
              </div>
              <div className="absolute bottom-10 left-10 right-10 rounded-2xl border border-amber-400/30 bg-[#05020d]/85 p-5 backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.28em] text-amber-400">Currently available</p>
                <p className="mt-2 font-serif text-2xl">Professional support for busy teams</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="border-t border-amber-500/20 py-24">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><SectionLabel>About Me</SectionLabel><h2 className="mt-5 font-serif text-4xl">Support <span className="italic text-amber-400">behind the work</span></h2></div>
            <div className="space-y-6 text-base leading-8 text-white/75">
              <p>I am a detail-oriented Customer Service and Virtual Assistant based in Metro Manila, Philippines. I help businesses stay organized by handling communication, admin tasks, follow-ups, and customer concerns with professionalism and care.</p>
              <p>My experience includes customer service escalation, courier and case follow-ups, social media moderation, appointment coordination, and daily reporting. I value clarity, consistency, and dependable support.</p>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                <div className="border border-amber-400/25 p-5"><MapPin className="text-amber-400"/><p className="mt-3 text-sm">{location}</p></div>
                <div className="border border-amber-400/25 p-5"><Mail className="text-amber-400"/><p className="mt-3 break-all text-sm">{email}</p></div>
                <div className="border border-amber-400/25 p-5"><Phone className="text-amber-400"/><p className="mt-3 text-sm">{phone}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24">
          <SectionLabel>What I Offer</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl">Services designed to <span className="italic text-amber-400">free your time</span></h2>
          <div className="mt-12 grid md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="border border-amber-400/30 bg-[#120a43] p-8 transition hover:bg-[#1a1058]">
                  <Icon className="text-amber-400"/><h3 className="mt-5 font-serif text-xl">{service.title}</h3>
                  <ul className="mt-6 space-y-3 text-sm text-white/75">{service.items.map((item) => <li key={item}>— {item}</li>)}</ul>
                </div>
              );
            })}
          </div>
        </section>

        <section id="work" className="py-24">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl">A process built for <span className="italic text-amber-400">clarity & results</span></h2>
          <div className="mt-12 space-y-5">
            {work.map((item, i) => (
              <div key={item.title} className="grid border border-amber-400/30 bg-[#10083b] md:grid-cols-[190px_1fr]">
                <div className="bg-white/10 p-8"><p className="font-serif text-4xl text-amber-400/70">0{i+1}</p><p className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-amber-400">{item.year}</p></div>
                <div className="p-8"><h3 className="font-serif text-2xl">{item.title}</h3><p className="mt-1 text-sm font-bold text-amber-400">{item.company}</p><p className="mt-4 leading-7 text-white/70">{item.details}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <SectionLabel>Tools & Software</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl">Professional tools for <span className="italic text-amber-400">efficient support</span></h2>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">Communication Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.communication.map((tool) => (
                  <span key={tool} className="border border-amber-400/25 bg-[#120a43] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/80">{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">Email & Chat Customer Support Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.customerSupport.map((tool) => (
                  <span key={tool} className="border border-amber-400/25 bg-[#120a43] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/80">{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">Scheduling, Calendar & Task Management</h3>
              <div className="flex flex-wrap gap-3">
                {tools.scheduling.map((tool) => (
                  <span key={tool} className="border border-amber-400/25 bg-[#120a43] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/80">{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">File Storage & Collaboration</h3>
              <div className="flex flex-wrap gap-3">
                {tools.collaboration.map((tool) => (
                  <span key={tool} className="border border-amber-400/25 bg-[#120a43] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/80">{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">Social Media & CRM Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.socialCRM.map((tool) => (
                  <span key={tool} className="border border-amber-400/25 bg-[#120a43] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/80">{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">Time Tracking & Productivity Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.productivity.map((tool) => (
                  <span key={tool} className="border border-amber-400/25 bg-[#120a43] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/80">{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">VOIP & Calling Systems</h3>
              <div className="flex flex-wrap gap-3">
                {tools.voip.map((tool) => (
                  <span key={tool} className="border border-amber-400/25 bg-[#120a43] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/80">{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">AI & Productivity Tools</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {tools.aiTools.map((tool) => (
                  <div key={tool} className="border border-amber-400/25 bg-[#120a43] p-5 text-sm leading-7 text-white/80">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-24">
          <SectionLabel>Reviews</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl">Trusted for <span className="italic text-amber-400">reliable support</span></h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={index} className="border border-amber-400/30 bg-[#120a43] p-8">
                <div className="flex gap-1 text-amber-400">{[1,2,3,4,5].map((s) => <Star key={s} size={16} fill="currentColor" />)}</div>
                <p className="mt-6 leading-7 text-white/75">“{review.quote}”</p>
                <div className="mt-6 border-t border-amber-400/20 pt-4">
                  <p className="font-semibold text-white">{review.author}</p>
                  <p className="text-sm text-amber-400">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-y border-amber-500/20 py-24 text-center">
          <SectionLabel>Let’s Connect</SectionLabel>
          <div className="mx-auto mt-7 max-w-3xl">
            <div className="mx-auto mb-8 inline-flex items-center gap-3 border border-blue-700 bg-[#0d163a] px-7 py-3 text-xs uppercase tracking-[0.18em] text-cyan-300"><span className="h-3 w-3 rounded-full bg-green-500" />Currently available for new clients</div>
            <h2 className="font-serif text-4xl md:text-5xl">Ready to <span className="italic text-amber-400">reclaim your time?</span><br/>Let’s talk.</h2>
            <p className="mx-auto mt-7 max-w-xl text-white/70">Whether you need ongoing support or help with a specific project, I’d love to hear about your business and how I can help it thrive.</p>
            <div className="mt-9"><ButtonLink href={calendly}>Book a Call Now</ButtonLink></div>
            <div className="mx-auto mt-10 max-w-lg rounded-3xl border border-amber-400/40 bg-[#120a43] p-7 text-left">
              <p className="flex items-center gap-3 text-sm"><Mail className="text-amber-400"/> {email}</p>
              <p className="mt-4 flex items-center gap-3 text-sm"><Phone className="text-amber-400"/> {phone}</p>
              <p className="mt-4 flex items-center gap-3 text-sm"><CalendarDays className="text-amber-400"/> Calendly: 30-minute discovery call</p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 py-10 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>Gay-Ann Beralo · Customer Service | Virtual Assistant</p>
          <p className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/> Available for Remote Work Worldwide</p>
        </footer>
      </div>
    </main>
  );
}
