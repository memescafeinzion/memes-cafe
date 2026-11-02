import { createFileRoute, Link } from "@tanstack/react-router";
import { Bus, Car, Clock } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { money } from "@/data/menu";
import { PLACE, serviceLine } from "@/data/place";

const media = (name: string) => `${import.meta.env.BASE_URL}media/gallery/${name}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MeMe's Café" },
      {
        name: "description",
        content:
          "Scratch-made crepes, breakfast, and burgers near Zion National Park. Open daily 8am–9pm in Springdale.",
      },
    ],
  }),
  component: Home,
});

const favorites = [
  {
    id: "very-berry",
    view: "crepes" as const,
    name: "Very Berry Crepe",
    price: 14,
    detail: "Berry compote, sweet cream, and whipped cream. On all day.",
    photo: "crepe.jpg",
  },
  {
    id: "bbq-pork-sandwich",
    view: "lunch" as const,
    name: "BBQ Pork",
    price: 16,
    detail: "Slow-roasted pork with house barbecue.",
    photo: "sandwich.jpg",
  },
  {
    id: "pork-verde-omelette",
    view: "breakfast" as const,
    name: "Breakfast plate",
    price: 14,
    detail: "Omelette, country potatoes, and salsa. Until 11:30.",
    photo: "omelette.jpg",
  },
];

const shots = [
  ["hero.jpg", "The patio at sunset, with the cliff behind the café."],
  ["patio.jpg", "Tables under the pergola on Zion Park Boulevard."],
  ["crepe.jpg", "Very Berry crepe, whipped cream, berry sauce."],
  ["sandwich.jpg", "Pulled pork and a garden salad."],
  ["omelette.jpg", "Omelette and country potatoes."],
  ["zion.jpg", "Zion canyon, a short walk from the front door."],
];

const reviews = [
  {
    text: "Best food we had in our entire Utah trip. The crepes were incredible and the views from the patio are unmatched. We came back three times.",
    author: "Sarah M.",
    source: "Tripadvisor",
  },
  {
    text: "Finally, a restaurant near Zion that doesn't feel like a tourist trap. Real food, fair prices, and the staff treats you like family.",
    author: "Mike R.",
    source: "Google",
  },
  {
    text: "The Hawaiian burger is life-changing. My kids loved the crepes. MeMe herself came out to check on us.",
    author: "Jessica T.",
    source: "Yelp",
  },
  {
    text: "We eat here every time we visit Zion. The patio with the canyon views at sunset is the best dining in southern Utah.",
    author: "David & Karen L.",
    source: "Tripadvisor",
  },
];

function Home() {
  return (
    <div>
      <section className="relative min-h-[70vh] text-cream">
        <img
          src={media("hero.jpg")}
          alt="MeMe's Café patio at sunset, red cliffs of Zion behind the building."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-end px-4 pt-16 pb-8">
          <p className="text-sm font-semibold tracking-wide text-amber uppercase">{serviceLine()}</p>
          <h1 className="mt-2 max-w-xl font-display text-5xl leading-none font-semibold">
            Scratch-made food near Zion.
          </h1>
          <p className="mt-3 max-w-md text-lg text-cream/90">
            Crepes, breakfast, and half-pound burgers. Open daily, 8am to 9pm. Est. 2012.
          </p>
          <Link to="/order" className={`${buttonClass("primary")} mt-5`}>
            Start a pickup order
          </Link>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-6 sm:grid-cols-3">
          <Fact icon={Bus} title="Shuttle stop 5" body="Get off the Zion line and you're here." />
          <Fact icon={Car} title="Free parking" body="Patron lot down Juniper Lane." />
          <Fact icon={Clock} title="No reservations" body="First come, first served. Hours can shift by season." />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-4 pt-8">
        <h2 className="font-display text-3xl font-semibold text-ink">Pictures</h2>
        <p className="mt-1 max-w-xl text-bark">The patio, the plates, and the canyon you eat in front of.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          {shots.map(([file, alt]) => (
            <img
              key={file}
              src={media(file)}
              alt={alt}
              className="aspect-[4/3] w-full rounded-card object-cover"
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="font-display text-3xl font-semibold text-ink">What people come back for</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {favorites.map((item) => (
            <Link
              key={item.id}
              to="/menu"
              search={{ view: item.view }}
              hash={item.id}
              className="overflow-hidden rounded-card border border-line bg-paper transition-colors duration-200 hover:border-amber"
            >
              <img src={media(item.photo)} alt="" className="aspect-square w-full object-cover" />
              <div className="p-4">
                <p className="font-display text-xl font-semibold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-bark">{item.detail}</p>
                <p className="mt-3 font-semibold text-amber-deep tabular-nums">{money(item.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-10 md:grid-cols-2 md:items-center">
        <img
          src={media("patio.jpg")}
          alt="Guests at tables under the MeMe's Café patio cover."
          className="aspect-[4/3] w-full rounded-card object-cover"
        />
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">MeMe loves to cook</h2>
          <p className="mt-3 text-ink">
            Mechelle, called MeMe, loves to cook and opened the café in July 2012 with family and friends. It
            sits downtown on Zion Park Blvd, shuttle stop 5, walking distance from most hotels.
          </p>
          <p className="mt-3 text-bark">
            Visitors come from across the country and overseas. The hope is that you see Zion, walk the town,
            and eat here before you leave.
          </p>
          <Link to="/visit" className={`${buttonClass("ghost")} mt-5`}>
            Hours and how to get here
          </Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <h2 className="font-display text-3xl font-semibold text-ink">What guests write</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {reviews.map((review) => (
              <figure key={review.author} className="rounded-card border border-line bg-cream p-4">
                <p className="text-ink">“{review.text}”</p>
                <figcaption className="mt-3 text-sm font-semibold text-bark">
                  {review.author} · {review.source}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-sm text-bark">
            <a href={PLACE.googleUrl} className="underline" target="_blank" rel="noreferrer">
              Google
            </a>
            {" · "}
            <a href={PLACE.tripadvisorUrl} className="underline" target="_blank" rel="noreferrer">
              Tripadvisor
            </a>
          </p>
        </div>
      </section>

      <section className="relative text-cream">
        <img
          src={media("zion.jpg")}
          alt="Sunset over the red cliffs of Zion Canyon."
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto max-w-5xl px-4 py-16">
          <h2 className="font-display text-4xl font-semibold">Steps from the canyon.</h2>
          <p className="mt-2 max-w-md">Eat, then walk to the shuttle. Sweet crepes stay on all day.</p>
          <a href={PLACE.mapsUrl} className={`${buttonClass("primary")} mt-5`}>
            Directions
          </a>
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
