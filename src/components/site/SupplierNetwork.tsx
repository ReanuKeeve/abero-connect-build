import { img } from "@/lib/site-images";

const CATEGORIES = [
  "Plastic Toys",
  "Plush",
  "Electronic Toys",
  "Vehicles",
  "Dolls",
  "Educational",
  "Outdoor",
  "Seasonal",
];

const REGIONS = [
  { name: "Shantou / Chenghai", note: "Toy manufacturing hub" },
  { name: "Yiwu", note: "Small commodities & accessories" },
  { name: "Shenzhen", note: "Electronic toys" },
  { name: "Ningbo", note: "Plastic & outdoor" },
];

export function SupplierNetwork() {
  return (
    <div className="grid gap-4">
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <img
          src={img.warehouse}
          alt="Supplier warehouse and product library"
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            Sourcing regions
          </p>
          <ul className="mt-3 space-y-2.5">
            {REGIONS.map((r) => (
              <li key={r.name} className="text-sm">
                <span className="font-semibold text-white">{r.name}</span>
                <span className="block text-white/60">{r.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            Categories covered
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
