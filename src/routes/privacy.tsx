import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Joist HQ" },
      {
        name: "description",
        content:
          "How Joist HQ collects, uses, and protects your information when you use our quoting software for NZ residential builders.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = "18 May 2026";

  return (
    <div className="min-h-screen bg-concrete font-sans text-iron">
      <header className="border-b border-steel/40 px-6 sm:px-8 py-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-widest hover:text-safety transition-colors"
          >
            ← Joist HQ
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-iron/50">
            Last updated {updated}
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
        <span className="inline-block bg-safety/10 text-safety px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
          Privacy
        </span>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-lg text-iron/70 leading-relaxed mb-12">
          Joist HQ ("we", "us") builds quoting software for NZ residential
          builders. This policy explains what we collect, why, and what your
          rights are.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="font-display text-2xl mb-3">What we collect</h2>
            <p className="text-iron/70 leading-relaxed">
              Account details you give us (name, email, company), the plans
              and project data you upload, and basic usage data (pages
              visited, features used, device info) to keep the product
              working.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Why we collect it</h2>
            <p className="text-iron/70 leading-relaxed">
              To run your account, generate your estimates, improve the
              product, and contact you about your subscription. We don't sell
              your data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Your project data</h2>
            <p className="text-iron/70 leading-relaxed">
              Plans and quotes you upload belong to you. We use them to
              produce your estimates and may use anonymised, aggregated
              project actuals to improve our rate library. We never share
              identifiable client or project data with other customers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Storage and security</h2>
            <p className="text-iron/70 leading-relaxed">
              Data is stored with reputable cloud providers and protected with
              standard security controls. No system is perfectly secure, but
              we take reasonable steps to keep your data safe.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Your rights</h2>
            <p className="text-iron/70 leading-relaxed">
              You can ask us to access, correct, or delete your personal
              information at any time. Under the NZ Privacy Act 2020 you can
              also complain to the Office of the Privacy Commissioner.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Contact</h2>
            <p className="text-iron/70 leading-relaxed">
              Questions about this policy? Email{" "}
              <a
                href="mailto:privacy@joisthq.com"
                className="text-safety font-semibold hover:underline"
              >
                privacy@joisthq.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-steel/40">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-widest hover:text-safety transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
