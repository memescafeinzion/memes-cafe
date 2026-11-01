import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MenuBoard } from "@/components/menu-board";
import { buttonClass } from "@/components/ui/button";
import { VIEWS, type MenuView } from "@/data/menu";
import { isLunchService, PLACE, serviceLine } from "@/data/place";

const VIEW_IDS = VIEWS.map((view) => view.id);

function parseView(value: unknown): MenuView {
  if (typeof value === "string" && VIEW_IDS.includes(value as MenuView)) return value as MenuView;
  return "now";
}

export const Route = createFileRoute("/menu")({
  validateSearch: (search: Record<string, unknown>) => ({
    view: parseView(search.view),
  }),
  head: () => ({
    meta: [
      { title: "Menu · MeMe's Café" },
      {
        name: "description",
        content:
          "Breakfast until 11:30, lunch and dinner until 9, crepes all day. MeMe's Café, Springdale, Utah.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { view } = Route.useSearch();
  const [line, setLine] = useState("Open daily · 8am to 9pm");

  useEffect(() => {
    const tick = () => setLine(serviceLine());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-wide text-amber-deep uppercase">{line}</p>
          <h1 className="font-display text-4xl font-semibold text-ink">Menu</h1>
        </div>
        <a href={PLACE.orderUrl} className={buttonClass("ink")} target="_blank" rel="noreferrer">
          Takeout
        </a>
      </div>
      <p className="mt-2 text-sm text-bark">
        {isLunchService()
          ? "Lunch and dinner are on. Breakfast plates ended at 11:30. Crepes did not."
          : "Breakfast is on until 11:30. Burgers and sandwiches start after that."}{" "}
        Eating in? Order at the register. Online orders are pickup only.
      </p>
      <div className="mt-6">
        <MenuBoard key={view} initialView={view} />
      </div>
    </div>
  );
}
