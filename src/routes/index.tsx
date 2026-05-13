import { createFileRoute } from "@tanstack/react-router";
import dashboardImg from "@/assets/dashboard-preview.jpg";
import heroVideo from "@/assets/hero-demo.mp4";
import buildersImg from "@/assets/builders-onsite.jpg";
import logoImg from "@/assets/joist-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Joist HQ — Plan, Scan, Price"
      className={`h-12 w-auto rounded-sm ${className}`}
    />
  );
}

function Nav() {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-steel/40">
      <Logo />
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
        <a href="#problem" className="hover:text-safety transition-colors">The problem</a>
        <a href="#how" className="hover:text-safety transition-colors">How it works</a>
        <a href="#who" className="hover:text-safety transition-colors">Who it's for</a>
      </div>
      <button className="bg-iron text-white px-5 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-safety transition-colors rounded-sm">
        Book a demo
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative px-6 sm:px-8 pt-16 sm:pt-20 pb-24 sm:pb-32 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-block bg-safety/10 text-safety px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            Plan · Scan · Price
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
            Estimate your build in minutes.
          </h1>
          <p className="text-lg sm:text-xl text-iron/70 leading-relaxed mb-10 max-w-xl">
            Upload the plans. Joist HQ reads them, pre-fills the inputs, and generates a structured estimate in minutes. When the client wants changes, update the inputs and re-run. No spreadsheet, no re-work.
          </p>
          <p className="text-base text-iron/60 mb-10 max-w-xl">
            Built on real project actuals from completed NZ builds. Not industry averages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-safety text-white px-8 py-4 font-bold uppercase tracking-widest hover:brightness-110 transition-all rounded-sm">
              Start free trial
            </button>
            <button className="border-2 border-iron px-8 py-4 font-bold uppercase tracking-widest hover:bg-iron hover:text-white transition-all rounded-sm">
              See how it works
            </button>
          </div>
        </div>
        <div className="relative">
          {/* Laptop frame */}
          <div className="bg-iron rounded-t-xl p-3 sm:p-4 shadow-2xl">
            <div className="bg-black rounded-md overflow-hidden aspect-[16/10]">
              <video
                src={heroVideo}
                poster={dashboardImg}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Laptop base */}
          <div className="relative mx-auto h-3 sm:h-4 w-[108%] -ml-[4%] bg-steel rounded-b-xl shadow-lg">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1.5 bg-iron/30 rounded-b-lg" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border border-steel/40 hidden md:block rounded-sm">
            <div className="flex gap-4 items-center">
              <div className="size-12 rounded-full bg-safety/10 grid place-items-center text-safety">
                <span className="font-bold">4×</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-tighter">Faster than spreadsheets</p>
                <p className="text-sm text-iron/60">From plans to priced estimate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Problem() {
  return (
    <section id="problem" className="bg-iron text-white py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <span className="inline-block bg-safety/10 text-safety px-3 py-1 text-xs font-bold uppercase tracking-widest">The problem</span>
            <h2 className="font-display text-4xl leading-tight">Quoting takes hours. Most of it never wins work.</h2>
            <p className="text-steel text-lg leading-relaxed">
              You price a job from the plans. The client wants it cheaper. You re-price. They want a new spec. You re-price again. Half the time the build never starts.
            </p>
          </div>
          {[
            {
              n: "01",
              title: "Re-run, don't rebuild",
              body: "Change a wall length, swap cladding, drop a bathroom — Joist HQ re-costs the whole estimate. No formulas to fix, no cells to chase.",
            },
            {
              n: "02",
              title: "Numbers the client can read",
              body: "Trade-by-trade breakdown with m² rates and quantities. The client sees where the money goes. Fewer arguments about the total.",
            },
          ].map((card) => (
            <div
              key={card.n}
              className="p-8 border border-white/10 hover:border-safety/50 transition-colors group"
            >
              <div className="size-10 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-safety/20 rounded-sm">
                <span className="text-safety font-bold">{card.n}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-steel/70 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Upload the plans",
      body: "Drop in the architectural PDFs. Joist HQ reads the drawings and pulls quantities — floor area, wall lengths, openings, roof pitch.",
    },
    {
      n: "02",
      title: "Check the inputs",
      body: "Pre-filled trade breakdown with m² rates, labour hours, and material quantities. Adjust anything that doesn't match the job.",
    },
    {
      n: "03",
      title: "Run it. Re-run it.",
      body: "Get a structured estimate in minutes. Client wants changes? Update the inputs, re-run. The numbers stay tied to the plans.",
    },
  ];
  return (
    <section id="how" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16">
        <span className="inline-block bg-safety/10 text-safety px-3 py-1 text-xs font-bold uppercase tracking-widest">How it works</span>
        <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
          Plans in. Priced estimate out.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 border-t border-steel/50">
        {steps.map((s) => (
          <div key={s.n} className="pt-8 border-t-2 border-iron -mt-px">
            <p className="font-display text-2xl text-safety mb-6">{s.n}</p>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-iron/70 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoItsFor() {
  return (
    <section id="who" className="py-24 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <img
          src={buildersImg}
          alt="Three NZ residential builders in hi-vis vests on a timber-framed site"
          width={1024}
          height={1216}
          loading="lazy"
          className="w-full aspect-[5/6] object-cover bg-white shadow-sm rounded-sm"
        />
        <div>
          <span className="inline-block bg-safety/10 text-safety px-3 py-1 text-xs font-bold uppercase tracking-widest">Who it's for</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 mb-8 leading-tight">
            For builders running 1 to 10 jobs at a time.
          </h2>
          <div className="space-y-8">
            {[
              {
                t: "Built for owner-operators",
                b: "You're still on the tools. Quote from the ute, the site office, or the kitchen table after dinner. Works on a phone.",
              },
              {
                t: "Priced on NZ actuals",
                b: "Rates come from completed NZ residential builds — not industry averages, not Australian data. Updated as new project actuals come in.",
              },
              {
                t: "Your suppliers, your margins",
                b: "Load your merchant pricing and trade rates once. Every estimate uses what you actually pay, not a generic markup.",
              },
            ].map((item) => (
              <div key={item.t} className="flex gap-6">
                <div className="shrink-0 size-6 mt-1 rounded-full border-2 border-safety" />
                <div>
                  <h4 className="font-bold mb-2">{item.t}</h4>
                  <p className="text-iron/70">{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl mb-6">Price your next job in minutes.</h2>
        <p className="text-lg sm:text-xl text-iron/60 mb-10">
          Upload a set of plans. See a full structured estimate. Decide if it's worth your time.
        </p>
        <div className="inline-flex flex-col items-center">
          <button className="bg-safety text-white px-10 sm:px-12 py-4 sm:py-5 font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform rounded-sm">
            Start your free trial
          </button>
          <p className="mt-4 text-xs font-bold text-iron/40 uppercase tracking-widest">
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-steel/40 py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo className="opacity-60" />
        <p className="text-sm text-iron/50 font-medium italic">
          © {new Date().getFullYear()} Joist HQ NZ. Built for the trades, by the trades.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-safety transition-colors">Privacy</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-safety transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-concrete font-sans text-iron">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <WhoItsFor />
      <FinalCta />
      <Footer />
    </div>
  );
}
