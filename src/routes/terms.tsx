import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Joist HQ" },
      {
        name: "description",
        content:
          "The terms that apply when you use Joist HQ quoting software for NZ residential builders.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
          Legal
        </span>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-8">
          Terms &amp; Conditions
        </h1>
        <p className="text-lg text-iron/70 leading-relaxed mb-12">
          These terms apply when you use Joist HQ ("the service"), operated by
          Joist HQ NZ. By creating an account or using the service, you agree
          to them.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="font-display text-2xl mb-3">Your account</h2>
            <p className="text-iron/70 leading-relaxed">
              You're responsible for keeping your login details secure and for
              everything done under your account. Let us know straight away if
              you think your account has been accessed without your
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Acceptable use</h2>
            <p className="text-iron/70 leading-relaxed">
              Use Joist HQ for lawful business purposes only. Don't attempt to
              reverse engineer the service, resell it, upload anything
              malicious, or use it in a way that interferes with other
              customers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Subscriptions and payment</h2>
            <p className="text-iron/70 leading-relaxed">
              Paid plans are billed in advance on a recurring basis. Fees are
              non-refundable except where required by law. You can cancel at
              any time and your plan will remain active until the end of the
              current billing period.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Your data and estimates</h2>
            <p className="text-iron/70 leading-relaxed">
              Plans, quotes, and project data you upload remain yours. Joist
              HQ produces estimates based on the inputs and rates you provide.
              Final pricing, scope, and contracts with your clients are your
              responsibility — always review estimates before sending them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Service availability</h2>
            <p className="text-iron/70 leading-relaxed">
              We aim to keep Joist HQ available and accurate, but we don't
              guarantee uninterrupted service or that estimates will be
              error-free. We may update, change, or remove features over time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Liability</h2>
            <p className="text-iron/70 leading-relaxed">
              To the extent permitted by law, Joist HQ's total liability to
              you is limited to the fees you've paid us in the previous 12
              months. We aren't liable for indirect or consequential loss
              (including lost profits or business). Nothing in these terms
              limits rights you have under the NZ Consumer Guarantees Act
              where it applies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Termination</h2>
            <p className="text-iron/70 leading-relaxed">
              You can stop using the service at any time. We may suspend or
              terminate accounts that breach these terms. On termination, you
              can export your data for a reasonable period before it's
              deleted.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Governing law</h2>
            <p className="text-iron/70 leading-relaxed">
              These terms are governed by New Zealand law and any disputes
              will be dealt with by the New Zealand courts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-3">Contact</h2>
            <p className="text-iron/70 leading-relaxed">
              Questions about these terms? Email{" "}
              <a
                href="mailto:hello@joisthq.com"
                className="text-safety font-semibold hover:underline"
              >
                hello@joisthq.com
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
