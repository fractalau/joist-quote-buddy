import { createFileRoute } from "@tanstack/react-router";
import dashboardImg from "@/assets/dashboard-preview.jpg";
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
            Built for NZ residential builders
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
            Stop quoting for <span className="text-iron/40 italic">free.</span> Start winning for real.
          </h1>
          <p className="text-lg sm:text-xl text-iron/70 leading-relaxed mb-10 max-w-xl">
            The fastest way for small NZ building firms to price residential projects. Spend less time at the desk and more time on the tools — or with your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-safety text-white px-8 py-4 font-bold uppercase tracking-widest hover:brightness-110 transition-all rounded-sm">
              Start free trial
            </button>
            <button className="border-2 border-iron px-8 py-4 font-bold uppercase tracking-widest hover:bg-iron hover:text-white transition-all rounded-sm">
              Watch workflow
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={dashboardImg}
            alt="Joist HQ quoting dashboard with line items and margin calculations"
            width={1200}
            height={896}
            className="w-full aspect-[4/3] object-cover bg-concrete shadow-2xl rounded-sm"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border border-steel/40 hidden md:block rounded-sm">
            <div className="flex gap-4 items-center">
              <div className="size-12 rounded-full bg-safety/10 grid place-items-center text-safety">
                <span className="font-bold">4×</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-tighter">Faster quoting</p>
                <p className="text-sm text-iron/60">vs. spreadsheets</p>
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
            <span className="text-safety text-xs font-bold uppercase tracking-widest">The problem</span>
            <h2 className="font-display text-4xl leading-tight">The re-pricing loop ends here.</h2>
            <p className="text-steel text-lg leading-relaxed">
              Tired of spending your Sundays pulling together numbers, only for the client to ask for a "scaled-back" version? Joist HQ makes updates instant — without losing accuracy.
            </p>
          </div>
          {[
            {
              n: "01",
              title: "Rapid iteration",
              body: "Swap materials, adjust margins, and re-cost the entire build in seconds. No more fragile spreadsheets that break when you change one cell.",
            },
            {
              n: "02",
              title: "Credible proposals",
              body: "Present like a tier-one firm. Generate professional, branded PDFs that give clients confidence in your numbers and your professionalism.",
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
      title: "Build the quote",
      body: "Start from a template or a blank slate. Drop in your materials, labour, and supplier markups — pulled from your real relationships.",
    },
    {
      n: "02",
      title: "Send it across",
      body: "Generate a clean, branded proposal in minutes. Clients see the detail and the total — no scribbled-on PDFs.",
    },
    {
      n: "03",
      title: "Iterate without pain",
      body: "When feedback comes back, change the variable, not the whole sheet. Re-issue in seconds, not on a Sunday night.",
    },
  ];
  return (
    <section id="how" className="py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16">
        <span className="text-safety text-xs font-bold uppercase tracking-widest">How it works</span>
        <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
          From site visit to signed quote — without the late nights.
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
          <span className="text-safety text-xs font-bold uppercase tracking-widest">Who it's for</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 mb-8 leading-tight">
            Designed for the 3-to-10 person crew.
          </h2>
          <div className="space-y-8">
            {[
              {
                t: "Owner-operator focused",
                b: "We know you're still on-site. Joist HQ is built to be used in the ute or at the kitchen table after dinner.",
              },
              {
                t: "NZ supplier ready",
                b: "Pre-load your local merchant pricing and relationship-based discounts so quotes reflect what you'll actually pay.",
              },
              {
                t: "Professional edge",
                b: "Look like you have an estimating department, even if it's just you and a couple of apprentices.",
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
        <h2 className="font-display text-4xl sm:text-5xl mb-6">Ready to claim back your evenings?</h2>
        <p className="text-lg sm:text-xl text-iron/60 mb-10">
          Join Kiwi builders using Joist HQ to speed up their quoting and win more profitable work.
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
