import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NAV = [
  { to: "/about", label: "About Us" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/china-sourcing", label: "Sourcing" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-background/80 backdrop-blur"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="ABERO home">
          <span className="sm:hidden"><Logo height={52} /></span>
          <span className="hidden sm:inline-block"><Logo height={64} /></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground bg-surface-2"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-2/70"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeSwitcher />
          <CTAButton to="/contact" icon={<ArrowRight className="size-4" />}>
            Send Inquiry
          </CTAButton>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg border border-border bg-card p-2 text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => {
                const active = path === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium",
                      active ? "bg-surface-2 text-foreground" : "text-muted-foreground hover:bg-surface-2"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4">
              <CTAButton to="/contact" className="w-full" icon={<ArrowRight className="size-4" />}>
                Send Inquiry
              </CTAButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
