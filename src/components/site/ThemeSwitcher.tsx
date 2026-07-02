import { useEffect, useState } from "react";
import { Check, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

type Palette = {
  id: string;
  label: string;
  swatch: string;
  vars: Record<string, string>;
};

const PALETTES: Palette[] = [
  {
    id: "magenta",
    label: "Magenta",
    swatch: "oklch(0.65 0.27 330)",
    vars: {
      "--brand": "oklch(0.65 0.27 330)",
      "--brand-soft": "oklch(0.82 0.15 330)",
      "--blue-accent": "oklch(0.58 0.18 255)",
      "--cyan-accent": "oklch(0.78 0.13 215)",
      "--violet-accent": "oklch(0.62 0.18 295)",
      "--navy-deep": "oklch(0.18 0.05 260)",
      "--navy": "oklch(0.24 0.07 262)",
      "--navy-light": "oklch(0.34 0.08 262)",
      "--gradient-brand":
        "linear-gradient(135deg, oklch(0.65 0.27 330), oklch(0.62 0.18 295))",
      "--gradient-cool":
        "linear-gradient(135deg, oklch(0.58 0.18 255), oklch(0.78 0.13 215))",
      "--accent": "oklch(0.95 0.03 320)",
    },
  },
  {
    id: "sky",
    label: "Sky",
    swatch: "oklch(0.78 0.13 235)",
    vars: {
      "--brand": "oklch(0.72 0.15 235)",
      "--brand-soft": "oklch(0.86 0.09 230)",
      "--blue-accent": "oklch(0.66 0.15 235)",
      "--cyan-accent": "oklch(0.82 0.12 220)",
      "--violet-accent": "oklch(0.68 0.14 245)",
      "--navy-deep": "oklch(0.20 0.06 240)",
      "--navy": "oklch(0.26 0.08 240)",
      "--navy-light": "oklch(0.36 0.09 240)",
      "--gradient-brand":
        "linear-gradient(135deg, oklch(0.72 0.15 235), oklch(0.82 0.12 220))",
      "--gradient-cool":
        "linear-gradient(135deg, oklch(0.66 0.15 235), oklch(0.82 0.12 220))",
      "--accent": "oklch(0.94 0.04 235)",
    },
  },
  {
    id: "indigo",
    label: "Indigo",
    swatch: "oklch(0.48 0.20 275)",
    vars: {
      "--brand": "oklch(0.55 0.22 275)",
      "--brand-soft": "oklch(0.75 0.16 275)",
      "--blue-accent": "oklch(0.55 0.20 270)",
      "--cyan-accent": "oklch(0.75 0.14 245)",
      "--violet-accent": "oklch(0.58 0.22 290)",
      "--navy-deep": "oklch(0.17 0.08 275)",
      "--navy": "oklch(0.23 0.10 275)",
      "--navy-light": "oklch(0.33 0.11 275)",
      "--gradient-brand":
        "linear-gradient(135deg, oklch(0.55 0.22 275), oklch(0.58 0.22 290))",
      "--gradient-cool":
        "linear-gradient(135deg, oklch(0.55 0.20 270), oklch(0.75 0.14 245))",
      "--accent": "oklch(0.94 0.04 275)",
    },
  },
];

const STORAGE_KEY = "abero-palette";

function applyPalette(id: string) {
  const p = PALETTES.find((x) => x.id === id) ?? PALETTES[0];
  const root = document.documentElement;
  for (const [k, v] of Object.entries(p.vars)) {
    root.style.setProperty(k, v);
  }
}

export function ThemeSwitcher({ className }: { className?: string }) {
  const [current, setCurrent] = useState<string>("magenta");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) ?? "magenta";
    setCurrent(saved);
    applyPalette(saved);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el.closest("[data-theme-switcher]")) setOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const select = (id: string) => {
    setCurrent(id);
    localStorage.setItem(STORAGE_KEY, id);
    applyPalette(id);
    setOpen(false);
  };

  return (
    <div data-theme-switcher className={cn("relative", className)}>
      <button
        type="button"
        aria-label="Change color palette"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-2 text-foreground hover:bg-surface-2 transition"
      >
        <Palette className="size-4" />
        <span
          className="size-4 rounded-full ring-1 ring-black/10"
          style={{ background: PALETTES.find((p) => p.id === current)?.swatch }}
        />
      </button>
      {open ? (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-popover p-2 shadow-elevated z-50">
          <div className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Color palette
          </div>
          {PALETTES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => select(p.id)}
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground hover:bg-surface-2"
            >
              <span
                className="size-5 rounded-full ring-1 ring-black/10"
                style={{ background: p.swatch }}
              />
              <span className="flex-1 text-left">{p.label}</span>
              {current === p.id ? <Check className="size-4 text-foreground" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
