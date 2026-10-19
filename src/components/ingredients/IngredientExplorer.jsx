
import React, { useMemo, useState } from "react";
import Ingred1 from "../../assets/Ingred1.jpeg";
import Ingred2 from "../../assets/Ingred2.jpeg";
import Ingred3 from "../../assets/Ingred3.jpeg";
import Ingred5 from "../../assets/Ingred5.jpeg";
import Ingred6 from "../../assets/Ingred6.jpeg";

const PRODUCTS = [
  "Daily Ultimate Essentials",
  "Daily Ultimate Longevity",
];

const CATEGORIES = [
  "All",
  "Vitamins & Minerals",
  "Raw Superfoods, Greens, Fruits & Herbs Complex",
  "Probiotics Complex",
  "Joint & Muscle Vitality",
  "Hydra Electrolytes Complex",
  "Heart Health Support",
  "Essential Amino & Renew Complex",
  "CRT8",
  "Postbiotics",
  "Digestive enzymes, adaptogens & super mushrooms complex",
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const INGREDIENTS = {
  "Vitamins & Minerals": [
    "Creatine Monohydrate",
    "Vitamin B2",
    "Vitamin B6",
    "Vitamin B12",
    "Biotin",
    "Vitamin C",
    "Calcium",
    "Choline",
    "Chromium",
    "Copper",
    "Vitamin D3",
    "Vitamin E",
  ],
  "Raw Superfoods, Greens, Fruits & Herbs Complex": [
    "Açaí Berry",
    "Acerola Cherry",
    "Alfalfa",
    "Apple",
    "Beetroot",
    "Broccoli",
    "Carrot",
    "Chlorella",
    "Cranberry",
    "Ginger Root",
    "Kale",
    "Spinach",
  ],
  "Probiotics Complex": [
    "Lactobacillus acidophilus",
    "Lactobacillus plantarum",
    "Lactobacillus rhamnosus",
    "Lactobacillus casei",
    "Lactobacillus paracasei",
    "Lactobacillus reuteri",
    "Bifidobacterium lactis",
    "Bifidobacterium longum",
    "Bifidobacterium breve",
    "Bifidobacterium bifidum",
    "Lactobacillus fermentum",
    "Lactobacillus gasseri",
  ],
  "Joint & Muscle Vitality": [
    "Collagen Peptides",
    "Glucosamine",
    "Chondroitin",
    "MSM",
    "Hyaluronic Acid",
    "Boswellia",
    "Turmeric Extract",
    "Ginger Extract",
    "Vitamin C",
    "Manganese",
    "Boron",
    "Silica",
  ],
  "Hydra Electrolytes Complex": [
    "Sodium",
    "Potassium",
    "Magnesium",
    "Calcium",
    "Chloride",
    "Coconut Water",
    "Citrate",
    "Trace Minerals",
    "Sodium Citrate",
    "Potassium Citrate",
    "Magnesium Citrate",
    "Calcium Citrate",
  ],
  "Heart Health Support": [
    "Coenzyme Q10",
    "Omega-3 Fatty Acids",
    "EPA",
    "DHA",
    "Olive Leaf",
    "Garlic Extract",
    "Hawthorn",
    "Plant Sterols",
    "Vitamin K2",
    "Folate",
    "Vitamin B6",
    "Vitamin B12",
  ],
  "Essential Amino & Renew Complex": [
    "L-Leucine",
    "L-Isoleucine",
    "L-Valine",
    "L-Lysine",
    "L-Threonine",
    "L-Methionine",
    "L-Phenylalanine",
    "L-Tryptophan",
    "L-Histidine",
    "L-Tyrosine",
    "L-Glutamine",
    "L-Arginine",
  ],
  CRT8: [
    "Creatine Monohydrate",
    "Creatine HCl",
    "Beta-Alanine",
    "Taurine",
    "L-Citrulline",
    "Betaine",
    "L-Tyrosine",
    "Magnesium",
    "Potassium",
    "Vitamin B6",
    "Vitamin B12",
    "Electrolyte Blend",
  ],
  Postbiotics: [
    "Lactobacillus Postbiotic",
    "Heat-Treated Lactobacillus",
    "Fermented Rice Extract",
    "Fermented Soy Extract",
    "Butyrate",
    "Tributyrin",
    "Yeast Fermentate",
    "Bifidobacterium Ferment",
    "Lactobacillus Ferment",
    "Fermented Fiber",
    "Postbiotic Complex",
    "Fermentation Metabolites",
  ],
  "Digestive enzymes, adaptogens & super mushrooms complex": [
    "Amylase",
    "Protease",
    "Lipase",
    "Lactase",
    "Bromelain",
    "Papain",
    "Ashwagandha",
    "Rhodiola Rosea",
    "Reishi Mushroom",
    "Lion's Mane",
    "Cordyceps",
    "Chaga Mushroom",
  ],
};

const IMAGES = [
  "https://images.unsplash.com/photo-1615485500704-8e990f9900f4?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
];

function PlusIcon({ expanded }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={`h-10 w-10 transition-transform duration-300 ${expanded ? "rotate-45" : ""
        }`}
    >
      <path
        d="M20 12V28M12 20H28"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IngredientCard({ ingredient, index, product }) {
  const [flipped, setFlipped] = useState(false);

  const image = ingredient.image || IMAGES[index % IMAGES.length];

  return (
    <article
      className="group min-w-0 cursor-pointer [perspective:1200px]"
      onClick={() => setFlipped((value) => !value)}
    >
      <div
        className={`relative grid w-full transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none ${flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        style={{ minHeight: 316 }}
      >
        {/* FRONT */}
        <div className="col-start-1 row-start-1 flex min-h-[316px] flex-col overflow-hidden rounded-[12px] bg-[var(--bg-warm)] [backface-visibility:hidden]">
          <div className="h-[100px] shrink-0 overflow-hidden bg-[var(--border-warm)]">
            <img
              src={image}
              alt=""
              width="700"
              height="240"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <div className="flex flex-1 flex-col px-4 pb-3 pt-3 sm:px-[18px]">
            <h3 className="font-serif text-[17px] font-normal leading-[1.18] tracking-[-0.2px] text-[var(--brand-deep)]">
              {ingredient.name}
            </h3>

            <p className="mt-2 line-clamp-4 text-[11px] leading-[1.45] text-[var(--brand-deep)]">
              {ingredient.description}
            </p>

            {ingredient.amount && (
              <div className="mt-3 text-[10px] leading-[1.5] text-[var(--brand-deep)]">
                <p>Amount per serving: {ingredient.amount}</p>
                <p>Daily Value: See product label</p>
              </div>
            )}

            <div className="mt-auto flex justify-end pt-2">
              <button
                type="button"
                aria-label={`View details for ${ingredient.name}`}
                aria-expanded={flipped}
                onClick={(event) => {
                  event.stopPropagation();
                  setFlipped(true);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-primary)]/75 text-[var(--brand-deep)] transition-colors hover:bg-[var(--brand-primary)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
              >
                <PlusIcon expanded={false} />
              </button>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="col-start-1 row-start-1 flex min-h-[316px] flex-col rounded-[12px] bg-[var(--brand-primary)] p-5 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/70">
            GUNALIFE INGREDIENT GUIDE
          </p>

          <h3 className="mt-3 font-serif text-[23px] leading-tight">
            {ingredient.name}
          </h3>

          <div className="my-4 h-px w-full bg-white/40" />

          <p className="text-[12px] leading-[1.65] text-white/95">
            {ingredient.details}
          </p>

          <p className="mt-3 text-[10px] leading-[1.5] text-white/65">
            Ingredient information is educational. Actual inclusion,
            amounts and benefits depend on the product formulation
            and verified product label.
          </p>

          <div className="mt-auto flex justify-end pt-3">
            <button
              type="button"
              aria-label={`Flip back ${ingredient.name}`}
              aria-expanded={flipped}
              onClick={(event) => {
                event.stopPropagation();
                setFlipped(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 transition-colors hover:bg-white hover:text-[var(--brand-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <PlusIcon expanded />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function makeIngredient(name, category, index) {
  const descriptions = {
    "Vitamins & Minerals":
      `${name} is a nutrient studied for its role in normal body functions. Its dietary role depends on individual needs and overall nutrient intake.`,
    "Raw Superfoods, Greens, Fruits & Herbs Complex":
      `${name} is a plant-derived food or botanical ingredient. Its nutritional composition varies with the source, processing and preparation.`,
    "Probiotics Complex":
      `${name} is associated with research into microorganisms and the gut microbiome. Effects are strain-specific and depend on the evidence available.`,
    "Joint & Muscle Vitality":
      `${name} is studied in relation to musculoskeletal nutrition, movement or connective-tissue biology. Evidence varies by ingredient and use.`,
    "Hydra Electrolytes Complex":
      `${name} is associated with fluid balance, hydration or normal muscle and nerve function. Dietary needs vary with activity and individual circumstances.`,
    "Heart Health Support":
      `${name} is studied in nutritional or cardiovascular research. Its effects depend on the formulation, dose and supporting clinical evidence.`,
    "Essential Amino & Renew Complex":
      `${name} is an amino acid or amino-acid-related ingredient studied for its role in protein metabolism and normal physiological processes.`,
    CRT8:
      `${name} is associated with sports nutrition or exercise research. Its role and appropriate use depend on the ingredient and supporting evidence.`,
    Postbiotics:
      `${name} represents a postbiotic or fermentation-related ingredient concept. Exact composition and evidence depend on the specific preparation.`,
    "Digestive enzymes, adaptogens & super mushrooms complex":
      `${name} is an enzyme, botanical or mushroom-related ingredient studied for different nutritional properties. Evidence varies by ingredient and preparation.`,
  };

  const details = {
    "Vitamins & Minerals":
      `${name} is involved in specific physiological processes depending on its form. Review the exact ingredient form, serving amount and relevant daily value on the verified product label.`,
    "Raw Superfoods, Greens, Fruits & Herbs Complex":
      `${name} comes from a food or botanical source. Nutrient content and composition can vary by cultivar, growing conditions and extraction method.`,
    "Probiotics Complex":
      `Microbial research depends on the exact strain, viable count, formulation and study conditions. A species name alone does not establish a specific health benefit.`,
    "Joint & Muscle Vitality":
      `Research in this area considers ingredient identity, amount, duration and the outcomes measured. Product-specific claims require supporting evidence for the finished formulation.`,
    "Hydra Electrolytes Complex":
      `Electrolytes participate in normal fluid balance and other physiological functions. Requirements vary with diet, exercise, climate and personal health circumstances.`,
    "Heart Health Support":
      `Nutritional research may examine biomarkers and cardiovascular-related outcomes. An ingredient description alone cannot establish prevention or treatment of a medical condition.`,
    "Essential Amino & Renew Complex":
      `Amino acids participate in protein synthesis and many metabolic pathways. Their dietary role depends on the specific amino acid and overall nutrition.`,
    CRT8:
      `Exercise-related research evaluates the specific ingredient, dose and training context. Follow the verified product label and seek professional guidance when appropriate.`,
    Postbiotics:
      `Postbiotic research depends on the exact preparation and its composition. Evidence for one preparation should not automatically be applied to another.`,
    "Digestive enzymes, adaptogens & super mushrooms complex":
      `These ingredients have different biological properties and research histories. Their identity, preparation and available evidence should be assessed individually.`,
  };

  return {
    id: `${category}-${index}-${name}`,
    name,
    category,
    description: descriptions[category],
    details: details[category],
    amount: null,
  };
}

const INGREDIENT_LIST = Object.entries(INGREDIENTS).flatMap(
  ([category, names]) =>
    names.map((name, index) => makeIngredient(name, category, index))
);

// Override first 6 cards with real product info
const FEATURED_OVERRIDES = [
  {
    id: "featured-1",
    name: "Creatine Monohydrate",
    category: "CRT8",
    image: Ingred2,
    description: "Supports rapid energy regeneration during short, high-intensity exercise and can improve strength and exercise performance when used appropriately.",
    details: "Creatine Monohydrate is one of the most researched sports nutrition ingredients. It works by increasing phosphocreatine stores in muscle, supporting ATP regeneration during high-intensity efforts. Evidence for strength and power improvements is well-established.",
    amount: null,
  },
  {
    id: "featured-2",
    name: "Taurine",
    category: "Amino sulfonic acid",
    image: Ingred6,
    description: "Participates in cellular fluid balance, calcium signalling and normal physiological functions. Research into exercise performance is ongoing.",
    details: "Taurine is conditionally essential and found in high concentrations in muscle, brain and heart tissue. It plays roles in osmoregulation, bile salt conjugation, and antioxidant defence. Its role in exercise recovery is an active area of research.",
    amount: null,
  },
  {
    id: "featured-3",
    name: "L-Leucine",
    category: "Essential amino acid",
    image: Ingred5,
    description: "Plays a key role in signalling pathways involved in muscle protein synthesis, alongside adequate protein intake and other essential amino acids.",
    details: "L-Leucine is a branched-chain amino acid (BCAA) that activates the mTOR signalling pathway, a primary regulator of muscle protein synthesis. It must be consumed through diet or supplementation as the body cannot synthesise it.",
    amount: null,
  },
  {
    id: "featured-4",
    name: "Glutathione",
    category: "Antioxidant tripeptide",
    image: null,
    description: "A naturally occurring compound that helps maintain cellular antioxidant defences and redox balance.",
    details: "Glutathione is a tripeptide (glutamate, cysteine, glycine) and the most abundant intracellular antioxidant. It plays a central role in neutralising free radicals, supporting immune function, and detoxification processes in the liver and other tissues.",
    amount: null,
  },
  {
    id: "featured-5",
    name: "Resveratrol",
    category: "Polyphenol",
    image: Ingred3,
    description: "A plant-derived compound studied for its interactions with cellular stress-response and metabolic pathways. Human evidence for longevity benefits remains insufficient.",
    details: "Resveratrol is found naturally in grapes, berries and peanuts. It activates sirtuins (SIRT1) and AMPK, which are involved in cellular energy sensing and stress response. Most robust findings are from in-vitro or animal studies; human clinical evidence is still developing.",
    amount: null,
  },
  {
    id: "featured-6",
    name: "Inulin",
    category: "Prebiotic dietary fibre",
    image: Ingred1,
    description: "A fermentable fibre that can support beneficial gut bacteria and bowel regularity. Larger amounts may cause gas or bloating.",
    details: "Inulin is a naturally occurring fructan found in chicory root, garlic, and onions. As a prebiotic, it selectively feeds Bifidobacterium and Lactobacillus species in the gut. It also contributes to stool bulking and may support mineral absorption.",
    amount: null,
  },
];

// Prepend the 6 featured cards to the full list
const FINAL_INGREDIENT_LIST = [...FEATURED_OVERRIDES, ...INGREDIENT_LIST];

export default function IngredientExplorer() {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLetter, setActiveLetter] = useState("");
  const [search, setSearch] = useState("");

  const visibleIngredients = useMemo(() => {
    return FINAL_INGREDIENT_LIST.filter((ingredient) => {
      const matchesCategory =
        activeCategory === "All" ||
        ingredient.category === activeCategory;

      const matchesLetter =
        !activeLetter ||
        ingredient.name.toUpperCase().startsWith(activeLetter);

      const matchesSearch =
        !search ||
        ingredient.name.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesLetter && matchesSearch;
    });
  }, [activeCategory, activeLetter, search]);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setActiveLetter("");
  };

  return (
    <section className="w-full bg-white px-4 pb-14 pt-8 text-[var(--brand-deep)] sm:px-7 sm:pt-10 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Product selector */}
        <div className="mb-6 flex flex-wrap gap-0">
          {PRODUCTS.map((product) => {
            const active = activeProduct === product;

            return (
              <button
                key={product}
                type="button"
                onClick={() => setActiveProduct(product)}
                aria-pressed={active}
                className={`rounded-full border border-[var(--brand-deep)] px-4 py-2 text-[11px] font-semibold transition-colors sm:text-[12px] ${active
                  ? "bg-[var(--bg-warm)] text-[var(--brand-deep)]"
                  : "bg-white text-[var(--brand-deep)] hover:bg-[var(--bg-cream)]"
                  }`}
              >
                {product}
              </button>
            );
          })}
        </div>

        {/* Category filters */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {CATEGORIES.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                aria-pressed={active}
                className={`rounded-full border px-3 py-[5px] text-[10px] leading-[1.35] transition-colors sm:text-[11px] ${active
                  ? "border-[var(--brand-primary)] bg-[var(--brand-primary)] text-white"
                  : "border-[var(--brand-primary)] bg-white text-[var(--brand-deep)] hover:bg-[var(--bg-warm)]"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="mb-5">
          <label htmlFor="ingredient-search" className="sr-only">
            Search ingredients
          </label>

          <input
            id="ingredient-search"
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setActiveLetter("");
            }}
            placeholder="Search ingredients..."
            className="w-full rounded-full border border-[var(--border-warm)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--brand-primary)] sm:max-w-[360px]"
          />
        </div>

        {/* Alphabet navigation */}
        <div className="mb-8 overflow-x-auto rounded-full bg-[var(--bg-warm)] p-1.5">
          <div className="flex min-w-[650px] items-center justify-between gap-1">
            {ALPHABET.map((letter) => {
              const active = activeLetter === letter;

              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => setActiveLetter(active ? "" : letter)}
                  aria-pressed={active}
                  aria-label={`Filter ingredients beginning with ${letter}`}
                  className={`flex h-7 min-w-6 items-center justify-center rounded-full px-1 text-[11px] font-semibold transition-colors ${active
                    ? "bg-[var(--brand-primary)] text-white"
                    : "text-[var(--brand-deep)] hover:bg-white"
                    }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Heading and result count */}
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-[27px] font-normal leading-tight tracking-[-0.5px] sm:text-[31px]">
              {activeCategory === "All"
                ? "Explore Ingredients"
                : activeCategory}
            </h2>
            <p className="mt-1 text-[11px] text-[var(--brand-deep)]/70">
              {activeProduct}
            </p>
          </div>

          <span className="text-[11px] text-[var(--brand-deep)]/70">
            {visibleIngredients.length} ingredients
          </span>
        </div>

        {/* Cards */}
        {visibleIngredients.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-3 lg:gap-y-4">
            {visibleIngredients.map((ingredient, index) => (
              <IngredientCard
                key={ingredient.id}
                ingredient={ingredient}
                index={index}
                product={activeProduct}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-[var(--bg-warm)] px-5 py-12 text-center">
            <p className="font-serif text-xl">No ingredients found</p>
            <p className="mt-2 text-sm text-[var(--brand-deep)]/70">
              Try another letter or search term.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveLetter("");
                setSearch("");
              }}
              className="mt-4 rounded-full bg-[var(--brand-primary)] px-5 py-2 text-sm text-white"
            >
              Clear search
            </button>
          </div>
        )}

        <p className="mt-8 text-[10px] leading-5 text-[var(--brand-deep)]/60">
          Ingredient descriptions are general educational information.
          They do not confirm that an ingredient is present in a GunaLife
          product. Always refer to the verified formulation and product
          label for actual ingredients, serving amounts and claims.
        </p>
      </div>
    </section>
  );
}
