import { Link } from "@tanstack/react-router";
import { Home, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import type { ReactNode } from "react";
import { PLACE } from "@/data/place";

const tabs = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/menu", label: "Menu", icon: UtensilsCrossed, exact: false },
  { to: "/visit", label: "Visit", icon: MapPin, exact: false },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-2">
          <Link to="/" className="flex min-h-11 items-center" aria-label="MeMe's Café home">
            <span className="font-display text-xl leading-none font-semibold text-ink">
              MeMe's <span className="text-amber-deep">Café</span>
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
            {tabs.map((tab) => (
              <Link
                key={tab.to}
                to={tab.to}
                activeOptions={{ exact: tab.exact }}
                className="min-h-11 rounded-full px-4 py-2 font-semibold text-ink hover:bg-paper data-[status=active]:bg-ink data-[status=active]:text-cream"
              >
                {tab.label}
              </Link>
            ))}
            <a href={PLACE.phoneTel} className="min-h-11 rounded-full bg-amber px-4 py-2 font-semibold text-ink">
              Call
            </a>
          </nav>
        </div>
      </header>

      <main className="pb-nav md:pb-0">{children}</main>

      <nav
        aria-label="Primary"
        className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-ink-soft bg-ink text-cream md:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Link
                key={tab.to}
                to={tab.to}
                activeOptions={{ exact: tab.exact }}
                className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-cream/80 data-[status=active]:text-amber"
              >
                <Icon className="size-5" aria-hidden />
                {tab.label}
              </Link>
            );
          })}
          <a
            href={PLACE.phoneTel}
            className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-cream/80"
          >
            <Phone className="size-5" aria-hidden />
            Call
          </a>
        </div>
      </nav>
    </div>
  );
}
