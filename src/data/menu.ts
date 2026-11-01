export type MenuTag =
  | "breakfast"
  | "lunch"
  | "allday"
  | "crepes"
  | "kids"
  | "drinks"
  | "sides";

export type MenuView =
  | "now"
  | "breakfast"
  | "crepes"
  | "lunch"
  | "kids"
  | "drinks"
  | "sides"
  | "all";

export type MenuItem = {
  id: string;
  name: string;
  /** Missing when the printed menu doesn't list one. */
  price?: number;
  detail?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  blurb?: string;
  tags: MenuTag[];
  items: MenuItem[];
};

export const VIEWS: { id: MenuView; label: string }[] = [
  { id: "now", label: "Right now" },
  { id: "breakfast", label: "Breakfast" },
  { id: "crepes", label: "Crepes" },
  { id: "lunch", label: "Lunch & dinner" },
  { id: "kids", label: "Kids" },
  { id: "drinks", label: "Drinks" },
  { id: "sides", label: "Sides" },
  { id: "all", label: "Full menu" },
];

export const MENU: MenuSection[] = [
  {
    id: "sweet-crepes",
    title: "Famous crepes",
    blurb: "Served all day. Whipped cream on every one.",
    tags: ["allday", "crepes", "breakfast", "lunch"],
    items: [
      {
        id: "very-berry",
        name: "Very Berry",
        price: 14,
        detail: "Mixed berry compote, house-made sweet cream, powdered sugar, whipped cream",
      },
      {
        id: "papas-favorite",
        name: "Papa's Favorite",
        price: 12,
        detail: "Apples, cinnamon and sugar, caramel drizzle, sweet cream, powdered sugar, whipped cream",
      },
      {
        id: "mommas-favorite",
        name: "Momma's Favorite",
        price: 12,
        detail: "Banana, Nutella, chocolate drizzle, powdered sugar, whipped cream",
      },
      {
        id: "bees-knees",
        name: "Bee's Knees",
        price: 12,
        detail: "Bananas, honey, house-made sweet cream, powdered sugar, whipped cream",
      },
      {
        id: "just-peachy",
        name: "Just Peachy",
        price: 12,
        detail: "Peaches, cinnamon and sugar, caramel drizzle, sweet cream, powdered sugar, whipped cream",
      },
      {
        id: "cinnamon-sugar",
        name: "Cinnamon Sugar",
        price: 9,
        detail: "Butter, powdered sugar, whipped cream",
      },
      {
        id: "lemon-sugar",
        name: "Lemon Sugar",
        price: 9,
        detail: "Lemon, butter, powdered sugar, whipped cream",
      },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    blurb: "Served until 11:30am. Egg whites +$2. Gluten-free crepe batter +$1.",
    tags: ["breakfast"],
    items: [
      {
        id: "breakfast-crepe",
        name: "Breakfast Crepe",
        price: 14,
        detail: "Scrambled eggs, ham or bacon, cheddar, hollandaise",
      },
      {
        id: "veggie-delight-crepe",
        name: "MeMe's Veggie Delight Crepe",
        price: 15,
        detail:
          "Sautéed vegetables, spinach, cheddar, roasted red pepper aioli. Add egg, ham, bacon, or veggie patty +$2",
      },
      {
        id: "good-morning-sandwich",
        name: "Good Morning Sandwich",
        price: 14,
        detail:
          "Scrambled eggs, ham or bacon, cheddar, hollandaise drizzle on grilled sourdough, country potatoes",
      },
      {
        id: "traditional-breakfast",
        name: "Traditional Breakfast",
        price: 14,
        detail: "Two eggs, ham or bacon, country potatoes, toast",
      },
      {
        id: "denver-omelette",
        name: "Better w/ Bacon Denver Omelette",
        price: 14,
        detail: "Bacon, onion, bell pepper, cheddar, country potatoes, toast",
      },
      {
        id: "pork-verde-omelette",
        name: "Pork Verde Omelette",
        price: 14,
        detail: "Slow-roasted pork, mozzarella, spicy house-made chili verde, country potatoes, toast",
      },
      {
        id: "veggie-omelette",
        name: "Veggie Omelette",
        price: 14,
        detail: "Sautéed fresh vegetables, cheddar, country potatoes, toast",
      },
      {
        id: "ham-cheese-omelette",
        name: "Ham and Cheese Omelette",
        price: 14,
        detail: "Ham, cheddar, mozzarella, country potatoes, toast",
      },
      {
        id: "cheese-omelette",
        name: "Cheese Omelette",
        price: 13,
        detail: "Cheddar, mozzarella, country potatoes, toast",
      },
    ],
  },
  {
    id: "kids-breakfast",
    title: "Kids breakfast",
    blurb: "Comes with milk, chocolate milk, apple juice, or a fountain drink.",
    tags: ["breakfast", "kids"],
    items: [
      {
        id: "kids-traditional",
        name: "Traditional Breakfast",
        price: 10,
        detail: "Scrambled egg, bacon, potatoes, toast",
      },
      {
        id: "kids-crepe-breakfast",
        name: "Choice of Crepe",
        price: 10,
        detail:
          "Egg and cheese, ham and cheese, cheese, Nutella and banana, lemon and powdered sugar, or cinnamon and sugar",
      },
    ],
  },
  {
    id: "breakfast-sides",
    title: "Breakfast sides",
    tags: ["breakfast", "sides"],
    items: [
      { id: "side-bacon", name: "Bacon", price: 6 },
      { id: "side-ham", name: "Ham", price: 5 },
      { id: "side-eggs", name: "Fresh Eggs (2)", price: 4 },
      { id: "side-potatoes", name: "Country Potatoes", price: 6 },
      { id: "side-plain-crepe", name: "Plain Crepe", price: 5 },
      { id: "side-toast", name: "Toast", price: 5 },
      { id: "side-salsa-b", name: "Salsa Verde", price: 1 },
      { id: "side-pickled-b", name: "Pickled Jalapenos", price: 1 },
    ],
  },
  {
    id: "burgers",
    title: "100% Angus burgers",
    blurb:
      "Half-pound burger with fries or a salad. Double patty +$3.50. Sweet potato fries +$2. Onion rings or jalapeño bites +$3. Mayo, lettuce, tomato, onion, pickle. Vegan patty available.",
    tags: ["lunch"],
    items: [
      {
        id: "bacon-and-egg",
        name: "Bacon and Egg",
        price: 19,
        detail: "Crispy bacon, fried egg, cheddar, hollandaise",
      },
      {
        id: "teriyaki-burger",
        name: "Teriyaki",
        price: 19,
        detail: "Pulled pork, grilled pineapple, cheddar, teriyaki, no mayo. Garnish optional",
      },
      {
        id: "jalapeno-popper",
        name: "Jalapeno Popper",
        price: 19,
        detail: "Cheddar, bacon, jalapeño, cream cheese, house-made sriracha mayo",
      },
      {
        id: "pork-verde-burger",
        name: "Pork Verde",
        price: 19,
        detail: "Slow-roasted pork, grilled onions, mozzarella, spicy house-made chili verde, no mayo",
      },
      {
        id: "bbq-cheddar",
        name: "BBQ Cheddar",
        price: 19,
        detail: "Crispy bacon, cheddar, onion ring, house-made BBQ sauce",
      },
      { id: "mushroom-swiss", name: "Mushroom Swiss", price: 18 },
      { id: "bacon-cheddar", name: "Bacon Cheddar", price: 18 },
      { id: "cheddar-burger", name: "Cheddar", price: 16 },
      { id: "hamburger", name: "Hamburger", price: 15 },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    blurb: "With fries or a salad. Sweet potato fries +$2. Onion rings or jalapeño bites +$3.",
    tags: ["lunch"],
    items: [
      {
        id: "hawaiian",
        name: "MeMe's Hawaiian",
        price: 16,
        detail: "Slow-roasted pork, grilled pineapple, teriyaki, cheddar. Add bacon +$2",
      },
      {
        id: "zion-cubano",
        name: "Zion Cubano",
        price: 16,
        detail: "Slow-roasted pork, ham, Swiss, grilled pickles, mayo, mustard on grilled white bread",
      },
      {
        id: "buffalo-chicken",
        name: "Buffalo Chicken",
        price: 16,
        detail: "Chicken breast, Swiss, spicy buffalo, ranch. Lettuce, tomato, pickle, and onion available",
      },
      {
        id: "chicken-bacon-ranch",
        name: "Chicken Bacon Ranch",
        price: 17,
        detail: "Chicken breast, bacon, cheddar, ranch. Lettuce, tomato, pickle, and onion available",
      },
      {
        id: "bbq-pork-sandwich",
        name: "BBQ Pork",
        price: 16,
        detail: "Slow-roasted pork with house-made BBQ sauce",
      },
      {
        id: "pork-philly",
        name: "Pork Philly",
        price: 16,
        detail: "Slow-roasted pork, grilled onions, grilled bell peppers, Swiss, mayo",
      },
      {
        id: "blt",
        name: "Bacon, Lettuce and Tomato",
        price: 13,
        detail: "Bacon, lettuce, tomato, and mayo on grilled white bread",
      },
      {
        id: "bacon-ranch-grilled-cheese",
        name: "Bacon Ranch Grilled Cheese",
        price: 14,
        detail: "Crispy bacon, ranch, and cheddar on sourdough",
      },
      {
        id: "garden-grilled-cheese",
        name: "Garden Vegetable Grilled Cheese",
        price: 15,
        detail: "Sautéed vegetables, cheddar, spinach, and roasted red bell pepper aioli on sourdough",
      },
    ],
  },
  {
    id: "savory-crepes",
    title: "Savory crepes",
    blurb: "Gluten-free batter +$1.",
    tags: ["lunch", "crepes"],
    items: [
      {
        id: "chicken-basil",
        name: "Chicken Basil",
        price: 16,
        detail:
          "Chicken, spinach, mushrooms, grilled onions, cheddar, house-made basil oil, roasted red bell pepper aioli",
      },
      {
        id: "vegetarian-basil",
        name: "Vegetarian Basil",
        price: 14,
        detail:
          "Spinach, mushrooms, grilled onions, cheddar, house-made basil oil, roasted red bell pepper aioli",
      },
      {
        id: "bbq-pork-crepe",
        name: "BBQ Pork",
        price: 16,
        detail:
          "Slow-roasted pork, grilled onions, cheddar, house-made BBQ, honey drizzle, crispy onions",
      },
      {
        id: "pork-verde-crepe",
        name: "Pork Verde",
        price: 16,
        detail: "Slow-roasted pork, grilled onions, mozzarella, house-made spicy chili verde",
      },
      {
        id: "veggie-delight",
        name: "MeMe's Veggie Delight",
        price: 15,
        detail:
          "Sautéed vegetables, spinach, cheddar, roasted red bell pepper aioli. Bacon, ham, egg, or veggie patty inside +$2",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    blurb: "Add chicken, slow-roasted pork, or pork chili verde +$3.",
    tags: ["lunch"],
    items: [
      {
        id: "bbq-salad",
        name: "BBQ Salad",
        price: 16,
        detail:
          "Mixed greens, cabbage, bacon, onions, tomatoes, cilantro, cheddar, house-made BBQ sauce and ranch",
      },
      {
        id: "spinach-salad",
        name: "Spinach",
        price: 16,
        detail:
          "Spinach, mixed greens, mushrooms, almonds, craisins, apples, mozzarella, house-made vinaigrette",
      },
      {
        id: "zesty-cilantro",
        name: "Zesty Cilantro",
        price: 16,
        detail:
          "Mixed greens, bell peppers, mozzarella, tomatoes, cilantro, onions, house-made zesty cilantro dressing",
      },
      {
        id: "large-garden",
        name: "Large Garden",
        price: 16,
        detail: "Mixed greens, seasonal vegetables, choice of dressing",
      },
    ],
  },
  {
    id: "kids-lunch",
    title: "Kids menu",
    blurb: "Comes with apple juice, milk, chocolate milk, or a fountain drink. Swap fries for an apple or banana.",
    tags: ["lunch", "kids"],
    items: [
      { id: "kids-grilled-cheese", name: "Grilled Cheese Sandwich with Fries", price: 10 },
      { id: "kids-strips", name: "Chicken Strips with Fries", price: 10 },
      { id: "kids-mac", name: "Mac n' Cheese with Fries", price: 10 },
      {
        id: "kids-crepe-lunch",
        name: "Choice of Crepe",
        price: 10,
        detail: "Ham and cheese, cheese, Nutella and banana, lemon and powdered sugar, or cinnamon and sugar",
      },
    ],
  },
  {
    id: "lunch-sides",
    title: "Sides",
    tags: ["lunch", "sides"],
    items: [
      { id: "jalapeno-bites", name: "Crispy, Cheesy Jalapeno Potato Bites (six)", price: 8 },
      { id: "mac", name: "Mac n' Cheese", price: 7 },
      { id: "onion-rings", name: "Onion Rings", price: 9 },
      { id: "sweet-potato-fries", name: "Sweet Potato Fries", price: 8 },
      { id: "fries", name: "French Fries", price: 6 },
      { id: "garden-side", name: "Garden Side Salad", price: 7 },
      { id: "salsa", name: "Salsa Verde", price: 1 },
      { id: "pickled", name: "Pickled Jalapenos", price: 1 },
      {
        id: "dipping-sauce",
        name: "House-made Dipping Sauce",
        price: 0.25,
        detail: "BBQ, cilantro, sriracha aioli, or red pepper aioli",
      },
    ],
  },
  {
    id: "draft",
    title: "Utah draft",
    blurb: "Alcohol from 10:30am Sat, Sun, and holidays · 11:30am weekdays.",
    tags: ["drinks"],
    items: [
      {
        id: "rv-rockers",
        name: "RV Rockers Son Of a Peach",
        price: 7,
        detail: "16 IBU. Unfiltered wheat ale brewed with Carolina peaches",
      },
      {
        id: "silver-reef-ipa",
        name: "Silver Reef Fresh & Juicy",
        price: 7,
        detail: "45 IBU. Session IPA, tropical hop aroma",
      },
      {
        id: "agua-del-diablo",
        name: "Silver Reef Agua del Diablo",
        price: 7,
        detail: "20 IBU. Crisp Mexican-style lager",
      },
    ],
  },
  {
    id: "micro",
    title: "Micro beer",
    tags: ["drinks"],
    items: [
      {
        id: "hop-rising",
        name: "Squatters Hop Rising",
        price: 7,
        detail: "9% ABV · 72 IBU. Imperial IPA, dry-hopped, malty backbone",
      },
      {
        id: "devastator",
        name: "Wasatch Devastator",
        price: 7,
        detail: "8% ABV · 18 IBU. Double bock, creamy",
      },
      {
        id: "ghost-rider",
        name: "Wasatch Ghost Rider",
        price: 7,
        detail: "6% ABV · 45 IBU. Unfiltered IPA, pale barley, citrus hops, coriander",
      },
      {
        id: "cali-squeeze",
        name: "Cali Squeeze Hef",
        price: 7,
        detail: "5% ABV · 15 IBU. Ruby red, blood orange and citrus",
      },
      {
        id: "firestone-805",
        name: "Firestone Walker 805",
        price: 7,
        detail: "5% ABV · 20 IBU. Malt sweetness, balanced hops",
      },
    ],
  },
  {
    id: "house-drinks",
    title: "House specials",
    tags: ["drinks"],
    items: [
      {
        id: "memosa",
        name: 'MeMe\'s "MeMosa"',
        price: 9,
        detail: "OJ and sweet champagne. Original, or with mango puree",
      },
      {
        id: "wine-margarita",
        name: "Wine Margarita",
        detail: "Lime, strawberry, or mango. Price isn't printed on the menu — ask at the register.",
      },
    ],
  },
  {
    id: "wine",
    title: "Wine by the glass",
    blurb: "5 oz pours, per Utah law.",
    tags: ["drinks"],
    items: [
      { id: "chardonnay", name: "Chardonnay", price: 6 },
      { id: "pinot-grigio", name: "Pinot Grigio", price: 6 },
      { id: "cabernet", name: "Cabernet Sauvignon", price: 6 },
      { id: "pinot-noir", name: "Pinot Noir", price: 6 },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    tags: ["drinks", "breakfast", "lunch"],
    items: [
      { id: "oj", name: "Orange Juice", price: 5 },
      { id: "apple-cran", name: "Apple or Cranberry Juice", price: 4 },
      { id: "milk", name: "Milk, Chocolate Milk, or Hot Chocolate", price: 3.5 },
      { id: "coffee", name: "Brewed Coffee", price: 3.5, detail: "Fresh ground. Free refills" },
      { id: "tea", name: "Brewed Tea", price: 3, detail: "Hot or iced. Free refills" },
      { id: "fountain", name: "Fountain Drink", price: 3, detail: "Coke products. Free refills" },
      { id: "luma", name: "Luma Wellness Shot", price: 6, detail: "Immunity or circulation" },
      {
        id: "tractor",
        name: "Tractor Organic Juice",
        price: 6,
        detail: "Strawberry dragonfruit, lemonade, farmers punch, or mango peach",
      },
    ],
  },
];

export function money(price: number) {
  if (Number.isInteger(price)) return `$${price}`;
  return `$${price.toFixed(2)}`;
}

export function sectionsFor(view: MenuView, lunch: boolean, query: string) {
  const q = query.trim().toLowerCase();
  const picked = MENU.filter((section) => {
    if (q) return true;
    if (view === "all") return true;
    if (view === "now") {
      return lunch
        ? section.tags.includes("lunch") || section.tags.includes("allday")
        : section.tags.includes("breakfast") || section.tags.includes("allday");
    }
    return section.tags.includes(view);
  })
    .map((section) => {
      if (!q) return section;
      const items = section.items.filter((item) =>
        `${item.name} ${item.detail ?? ""}`.toLowerCase().includes(q),
      );
      return { ...section, items };
    })
    .filter((section) => section.items.length > 0);

  return picked;
}
