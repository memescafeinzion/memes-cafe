import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { MENU, money, sectionsFor, VIEWS, type MenuView } from "@/data/menu";
import { isLunchService } from "@/data/place";
import { cn } from "@/lib/cn";

export function MenuBoard({ initialView }: { initialView: MenuView }) {
  const [view, setView] = useState<MenuView>(initialView);
  const [query, setQuery] = useState("");
  const lunch = isLunchService();

  const sections = useMemo(() => sectionsFor(view, lunch, query), [view, lunch, query]);
  const shown = sections.reduce((n, section) => n + section.items.length, 0);
  const total = MENU.reduce((n, section) => n + section.items.length, 0);

  return (
    <div>
      <label className="flex min-h-12 items-center gap-2 rounded-full border border-line bg-cream px-4">
        <Search className="size-5 shrink-0 text-bark" aria-hidden />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search crepes, pork verde, beer…"
          className="w-full bg-transparent py-2 text-base text-ink outline-none placeholder:text-bark"
          enterKeyHint="search"
          autoComplete="off"
        />
      </label>

      <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1" role="tablist" aria-label="Menu sections">
        {VIEWS.map((item) => {
          const on = view === item.id && !query;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => {
                setView(item.id);
                setQuery("");
              }}
              className={cn(
                "min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold",
                on ? "bg-ink text-cream" : "bg-paper text-ink",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-bark">
        {query
          ? `${shown} match${shown === 1 ? "" : "es"} across the menu`
          : view === "now"
            ? lunch
              ? "Lunch and dinner, plus crepes that stay on all day."
              : "Breakfast until 11:30, plus crepes that stay on all day."
            : `${shown} of ${total} items`}
      </p>

      {sections.length === 0 ? (
        <p className="mt-8 rounded-card border border-line bg-paper px-4 py-6 text-ink">
          Nothing under that name. Try crepe, burger, or verde.
        </p>
      ) : (
        <div className="mt-4 space-y-4">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 rounded-card border border-line bg-paper px-4 py-3">
              <h2 className="font-display text-2xl font-semibold text-ink">{section.title}</h2>
              {section.blurb ? <p className="mt-1 text-sm text-bark">{section.blurb}</p> : null}
              <ul className="mt-2">
                {section.items.map((item) => (
                  <li
                    key={item.id}
                    id={item.id}
                    className="flex scroll-mt-28 gap-3 border-b border-line py-3 last:border-b-0"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-ink">{item.name}</h3>
                      {item.detail ? <p className="mt-0.5 text-sm text-bark">{item.detail}</p> : null}
                    </div>
                    <p className="shrink-0 font-semibold text-amber-deep tabular-nums">
                      {item.price == null ? "Ask" : money(item.price)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}

      <p className="mt-6 text-xs text-bark">
        Consuming raw or undercooked eggs, meat, or poultry may increase your risk of foodborne illness.
        Menu transcribed from the printed board. Ask the register if a special has changed.
      </p>
    </div>
  );
}
