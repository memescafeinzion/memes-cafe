export const PLACE = {
  name: "MeMe's Café",
  phoneDisplay: "(435) 772-0114",
  phoneTel: "tel:+14357720114",
  email: "admin@memescafezion.com",
  street: "975 Zion Park Blvd",
  city: "Springdale, UT 84767",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=975+Zion+Park+Blvd,+Springdale,+UT+84767",
  appleMapsUrl: "https://maps.apple.com/?address=975+Zion+Park+Blvd,Springdale,UT+84767",
  googleUrl:
    "https://www.google.com/maps/search/?api=1&query=MeMe%27s+Cafe+975+Zion+Park+Blvd+Springdale+UT",
  tripadvisorUrl:
    "https://www.tripadvisor.com/Restaurant_Review-g61001-d3333371-Reviews-Meme_s_Cafe-Springdale_Utah.html",
  instagram: "https://www.instagram.com/memescafezion/",
  facebook: "https://www.facebook.com/423487421022688",
  yelp: "https://www.yelp.com/biz/memes-cafe-springdale",
  x: "https://x.com/MeMes_Cafe1",
} as const;

const TZ = "America/Denver";

export function zionParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
    weekday: "short",
  }).formatToParts(date);
  const grab = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    hour: Number(grab("hour")),
    minute: Number(grab("minute")),
    weekday: grab("weekday"),
  };
}

function minutes(date = new Date()) {
  const { hour, minute } = zionParts(date);
  return hour * 60 + minute;
}

export function isOpen(date = new Date()) {
  const m = minutes(date);
  return m >= 8 * 60 && m < 21 * 60;
}

/** Lunch and dinner start at 11:30am Mountain Time. */
export function isLunchService(date = new Date()) {
  return minutes(date) >= 11 * 60 + 30;
}

export function serviceLine(date = new Date()) {
  if (!isOpen(date)) {
    const m = minutes(date);
    return m < 8 * 60 ? "Closed · opens at 8am" : "Closed · back at 8am";
  }
  if (isLunchService(date)) return "Lunch & dinner · until 9pm";
  return "Breakfast · until 11:30am";
}
