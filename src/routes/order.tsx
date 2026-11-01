import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button, buttonClass } from "@/components/ui/button";
import { money } from "@/data/menu";
import { PLACE } from "@/data/place";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order pickup · MeMe's Café" },
      {
        name: "description",
        content: "Build a pickup order for MeMe's Café in Springdale. Pay when you pick it up.",
      },
    ],
  }),
  component: OrderPage,
});

function ticket(name: string, phone: string, when: string, note: string, lines: { name: string; qty: number; price?: number }[]) {
  const items = lines.map((line) => `${line.qty} × ${line.name}`).join("\n");
  return [`Pickup order for MeMe's Café`, name, phone, when || "ASAP", note, items].filter(Boolean).join("\n");
}

function OrderPage() {
  const cart = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [when, setWhen] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState("");

  const hasAsk = cart.lines.some((line) => line.price == null);
  const ready = name.trim().length > 1 && phone.trim().length >= 7 && cart.count > 0;

  function place() {
    const body = ticket(name.trim(), phone.trim(), when.trim(), note.trim(), cart.lines);
    setSent(body);
  }

  if (sent) {
    const sms = `sms:+14357720114?body=${encodeURIComponent(sent)}`;
    return (
      <div className="mx-auto max-w-lg px-4 py-6">
        <p className="text-sm font-semibold tracking-wide text-amber-deep uppercase">Pickup</p>
        <h1 className="font-display text-4xl font-semibold text-ink">Order is ready</h1>
        <p className="mt-2 text-bark">
          This stays on MeMe's site. Text sends the ticket to the café. Pay when you pick it up. Nothing is charged
          here.
        </p>
        <pre className="mt-4 whitespace-pre-wrap rounded-card border border-line bg-paper p-4 text-sm text-ink">{sent}</pre>
        <a href={sms} className={`${buttonClass("primary")} mt-4 w-full`}>
          Text order to the café
        </a>
        <p className="mt-3 text-sm text-bark">Or call {PLACE.phoneDisplay} and read the ticket.</p>
        <button
          type="button"
          className={`${buttonClass("ghost")} mt-4`}
          onClick={() => {
            cart.clear();
            setSent("");
          }}
        >
          Start another order
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6">
      <p className="text-sm font-semibold tracking-wide text-amber-deep uppercase">Pickup only</p>
      <h1 className="font-display text-4xl font-semibold text-ink">Your order</h1>
      <p className="mt-2 text-bark">Add food from the menu. Pay at the window when you pick it up. No account.</p>

      {cart.lines.length === 0 ? (
        <div className="mt-6 rounded-card border border-line bg-paper p-4">
          <p className="text-ink">Nothing in the order yet.</p>
          <Link to="/menu" search={{ view: "now" }} className={`${buttonClass("primary")} mt-4`}>
            See the menu
          </Link>
        </div>
      ) : (
        <ul className="mt-4 rounded-card border border-line bg-paper px-4">
          {cart.lines.map((line) => (
            <li key={line.id} className="flex items-center gap-3 border-b border-line py-3 last:border-b-0">
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink">{line.name}</p>
                <p className="text-sm text-amber-deep tabular-nums">
                  {line.price == null ? "Ask" : money(line.price * line.qty)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="grid size-11 place-items-center rounded-full bg-cream text-lg font-semibold text-ink"
                  onClick={() => cart.setQty(line.id, line.qty - 1)}
                  aria-label={`Remove one ${line.name}`}
                >
                  −
                </button>
                <span className="w-6 text-center font-semibold tabular-nums">{line.qty}</span>
                <button
                  type="button"
                  className="grid size-11 place-items-center rounded-full bg-cream text-lg font-semibold text-ink"
                  onClick={() => cart.setQty(line.id, line.qty + 1)}
                  aria-label={`Add one ${line.name}`}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.count > 0 ? (
        <>
          <p className="mt-3 text-right font-semibold text-ink">
            {hasAsk ? "Total plus items marked Ask · " : "Total · "}
            {money(cart.total)}
          </p>
          <form
            className="mt-4 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              if (ready) place();
            }}
          >
            <label className="block">
              <span className="text-sm font-semibold text-ink">Name</span>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1 min-h-12 w-full rounded-card border border-line bg-paper px-3 text-ink outline-none"
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">Phone</span>
              <input
                required
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-1 min-h-12 w-full rounded-card border border-line bg-paper px-3 text-ink outline-none"
                autoComplete="tel"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">Pickup time</span>
              <input
                value={when}
                onChange={(event) => setWhen(event.target.value)}
                placeholder="ASAP, or 12:30"
                className="mt-1 min-h-12 w-full rounded-card border border-line bg-paper px-3 text-ink outline-none placeholder:text-bark"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink">Note</span>
              <textarea
                value={note}
                onChange={(event) => setNote(event.target.value)}
                rows={3}
                className="mt-1 w-full rounded-card border border-line bg-paper px-3 py-2 text-ink outline-none"
              />
            </label>
            <Button type="submit" className="w-full" disabled={!ready}>
              Place pickup order
            </Button>
          </form>
        </>
      ) : null}
    </div>
  );
}
