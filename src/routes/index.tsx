import { createFileRoute, Link } from "@tanstack/react-router";
import { Bus, Car, Clock, Footprints } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { money } from "@/data/menu";
import { PLACE } from "@/data/place";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "MeMe's Café · Springdale, Utah" }],
  }),
  component: Home,
});

const favorites = [
  {
    id: "bacon-and-egg",
    view: "lunch" as const,
    name: "Bacon and Egg Burger",
    price: 19,
    detail: "Crispy bacon, a fried egg, cheddar, and hollandaise.",
  },
  {
    id: "pork-verde-burger",
    view: "lunch" as const,
    name: "Pork Verde Burger",
    price: 19,
    detail: "Slow-roasted pork and spicy house-made chili verde.",
  },
  {
    id: "very-berry",
    view: "crepes" as const,
    name: "Very Berry Crepe",
    price: 14,
    detail: "Berry compote and sweet cream. On the menu all day.",
  },
];

function Home() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 pt-6 pb-8">
        <img
          src="/media/logo.png"
          alt="MeMe's Café. Breakfast, lunch, and dinner."
          className="mx-auto w-full max-w-md"
        />
        <p className="mx-auto mt-4 max-w-lg text-center text-lg text-ink">
          From-scratch cooking in downtown Springdale, a short walk from Zion.
        </p>
        <p className="mt-2 text-center font-semibold text-amber-deep">Open daily · 8am to 9pm</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link to="/menu" search={{ view: "now" }} className={buttonClass("primary")}>
            See the menu
          </Link>
          <a href={PLACE.mapsUrl} className={buttonClass("ink")}>
            Directions
          </a>
          <a href={PLACE.phoneTel} className={`${buttonClass("ghost")} sm:hidden`}>
            {PLACE.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-6 sm:grid-cols-3">
          <Fact icon={Bus} title="Shuttle stop 5" body="Get off the Zion line and you're here." />
          <Fact icon={Car} title="Free parking" body="Patron lot down Juniper Lane." />
          <Fact icon={Clock} title="No reservations" body="First come, first served. Order at the register." />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="font-display text-3xl font-semibold text-ink">What people come back for</h2>
        <p className="mt-1 max-w-xl text-bark">
          Crepes, half-pound burgers, and sandwiches. Voted best take-away food in 2025.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {favorites.map((item) => (
            <Link
              key={item.id}
              to="/menu"
              search={{ view: item.view }}
              hash={item.id}
              className="rounded-card border border-line bg-paper p-4 transition-colors duration-200 hover:border-amber"
            >
              <p className="font-display text-xl font-semibold text-ink">{item.name}</p>
              <p className="mt-1 text-sm text-bark">{item.detail}</p>
              <p className="mt-3 font-semibold text-amber-deep tabular-nums">{money(item.price)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">MeMe loves to cook</h2>
          <p className="mt-3 text-ink">
            Mechelle, called MeMe, opened the café in July 2012 with family and friends. It sits on Zion Park
            Blvd, walking distance from most Springdale hotels, with a patio out front and the cliffs right
            there.
          </p>
          <p className="mt-3 text-bark">
            “I've had a few meals that I would describe as perfect. One of them was Tuesday night at MeMe's
            Cafe in Springdale.” — Brian Passey, The Spectrum
          </p>
          <Link to="/visit" className={`${buttonClass("ghost")} mt-5`}>
            Hours and how to get here
          </Link>
        </div>
        <div className="rounded-card bg-ink p-5">
          <img src="/media/zion.png" alt="" className="w-full mix-blend-screen" />
          <p className="mt-3 flex items-start gap-2 text-sm text-cream">
            <Footprints className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
            Eat, then walk to the shuttle. Breakfast runs to 11:30. Sweet crepes stay on all day.
          </p>
        </div>
      </section>
    </div>
  );
}

function Fact({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Bus;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 size-5 shrink-0 text-amber" aria-hidden />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-cream/80">{body}</p>
      </div>
    </div>
  );
}
