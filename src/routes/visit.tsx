import { createFileRoute, Link } from "@tanstack/react-router";
import { Bus, Car, Mail, Phone } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { PLACE } from "@/data/place";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit · MeMe's Café" },
      {
        name: "description",
        content:
          "975 Zion Park Blvd, Springdale. Shuttle stop 5. Free parking on Juniper Lane. Open daily 8am–9pm. No reservations.",
      },
    ],
  }),
  component: VisitPage,
});

const hours = [
  ["Every day", "8:00am – 9:00pm"],
  ["Breakfast", "8:00am – 11:30am"],
  ["Lunch & dinner", "11:30am – 9:00pm"],
  ["Sweet crepes", "All day"],
  ["Alcohol", "10:30am Sat, Sun, holidays · 11:30am weekdays"],
];

function VisitPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <p className="text-sm font-semibold tracking-wide text-amber-deep uppercase">Springdale, Utah</p>
      <h1 className="mt-1 font-display text-4xl font-semibold text-ink">Find the café</h1>
      <p className="mt-3 text-lg text-ink">
        {PLACE.street}
        <br />
        {PLACE.city}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a href={PLACE.mapsUrl} className={buttonClass("primary")}>
          Open directions
        </a>
        <a href={PLACE.phoneTel} className={buttonClass("ink")}>
          <Phone className="size-4" aria-hidden />
          {PLACE.phoneDisplay}
        </a>
      </div>

      <section className="mt-8 rounded-card border border-line bg-paper px-4 py-3">
        <h2 className="font-display text-2xl font-semibold">Hours</h2>
        <dl className="mt-2">
          {hours.map(([label, value]) => (
            <div key={label} className="flex gap-4 border-b border-line py-3 last:border-b-0">
              <dt className="w-36 shrink-0 font-semibold text-ink">{label}</dt>
              <dd className="text-bark">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="pt-3 text-sm text-bark">
          First come, first served. Indoor tables and the outside patio. We don't take reservations.
        </p>
      </section>

      <section className="mt-4 grid gap-3 sm:grid-cols-2">
        <article className="rounded-card border border-line bg-paper p-4">
          <Bus className="size-5 text-amber-deep" aria-hidden />
          <h2 className="mt-2 font-display text-xl font-semibold">From the shuttle</h2>
          <p className="mt-1 text-sm text-bark">
            Zion line, stop 5. Most downtown hotels are a short walk. You're in the middle of the shops and
            galleries.
          </p>
        </article>
        <article className="rounded-card border border-line bg-paper p-4">
          <Car className="size-5 text-amber-deep" aria-hidden />
          <h2 className="mt-2 font-display text-xl font-semibold">If you're driving</h2>
          <p className="mt-1 text-sm text-bark">
            Free patron parking down Juniper Lane. The café is at 975 Zion Park Blvd.
          </p>
        </article>
      </section>

      <section className="mt-4 overflow-hidden rounded-card border border-line">
        <iframe
          title="Map showing MeMe's Café in Springdale"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-113.012%2C37.182%2C-112.988%2C37.195&layer=mapnik&marker=37.188425%2C-113.000059"
          className="h-64 w-full border-0"
          loading="lazy"
        />
      </section>

      <section className="mt-4 rounded-card bg-ink p-5 text-cream">
        <h2 className="font-display text-2xl font-semibold">Pickup</h2>
        <p className="mt-2 text-sm text-cream/80">
          Build the order on this site. Text sends it to the café. Pay when you pick it up. If you are eating here,
          order at the register instead.
        </p>
        <Link to="/order" className={`${buttonClass("primary")} mt-4`}>
          Start a pickup order
        </Link>
        <p className="mt-4 flex items-center gap-2 text-sm">
          <Mail className="size-4 text-amber" aria-hidden />
          <a href={`mailto:${PLACE.email}`} className="underline">
            {PLACE.email}
          </a>
        </p>
        <p className="mt-1 text-sm text-cream/80">Big orders: call {PLACE.phoneDisplay}.</p>
      </section>

      <section className="mt-6 flex flex-wrap gap-2 pb-4">
        {[
          ["Instagram", PLACE.instagram],
          ["Facebook", PLACE.facebook],
          ["Yelp", PLACE.yelp],
          ["X", PLACE.x],
        ].map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className={buttonClass("ghost")}>
            {label}
          </a>
        ))}
      </section>
    </div>
  );
}
