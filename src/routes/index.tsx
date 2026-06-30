import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { TrustCards } from "@/components/site/TrustCards";
import { SectionLabel } from "@/components/site/SectionLabel";
import { CTAButton } from "@/components/site/CTAButton";
import { ImageCarousel } from "@/components/site/ImageCarousel";
import { CertBadges } from "@/components/site/CertBadges";
import { ContactForm } from "@/components/site/ContactForm";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { SupplierNetwork } from "@/components/site/SupplierNetwork";
import { Modal } from "@/components/site/Modal";
import { heroSlides, aboutSlides, gallerySlides, img } from "@/lib/site-images";
import factoryTour from "@/assets/factory-tour.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABERO — Toy Manufacturing & Sourcing Partner" },
      {
        name: "description",
        content:
          "OEM/ODM toy solutions and China sourcing support for international brands, importers, distributors, and private label businesses.",
      },
      { property: "og:title", content: "ABERO — Toy Manufacturing & Sourcing Partner" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const ABOUT_BULLETS = [
  "Showroom and product selection support",
  "Factory coordination and sample management",
  "Quality control before shipment",
  "OEM/ODM and private label support",
];

const PROCESS = [
  {
    n: "01",
    title: "Injection Molding",
    img: img.productionLine,
    text: "Selected production capabilities for key toy categories and plastic components.",
  },
  {
    n: "02",
    title: "Assembly",
    img: img.assembly,
    text: "Process coordination for product assembly, packaging, and shipment readiness.",
  },
  {
    n: "03",
    title: "Quality Control",
    img: img.qualityControl,
    text: "Inspection support before production release and before final container loading.",
  },
  {
    n: "04",
    title: "Packaging",
    img: img.packaging,
    text: "Private label packaging, carton planning, and export-ready presentation.",
  },
];

const STEPS = ["Design", "Tooling", "Sampling", "Production", "QC", "Shipping"];

const SOURCING = [
  {
    title: "Supplier Search",
    text: "Find suitable factories based on category, MOQ, compliance, and target price.",
  },
  {
    title: "Order Follow-up",
    text: "Manage samples, production updates, QC, and shipment coordination.",
  },
  {
    title: "Factory Coordination",
    text: "Communicate with suppliers and coordinate practical production details.",
  },
  {
    title: "Export Preparation",
    text: "Support packaging, inspection, documentation, and shipping readiness.",
  },
];

function HomePage() {
  const [wechatOpen, setWechatOpen] = useState(false);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(55% 50% at 15% 10%, color-mix(in oklab, var(--blue-accent) 32%, transparent), transparent 70%), radial-gradient(45% 40% at 95% 20%, color-mix(in oklab, var(--cyan-accent) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16 lg:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur">
              <span className="size-1.5 rounded-full bg-brand" />
              OEM · ODM · Sourcing
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Toy Manufacturing &amp; Sourcing Partner
            </h1>
            <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan sm:text-xs">
              <MapPin className="size-3.5" />
              SHANTOU · CHINA · WORLD
            </div>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              OEM / ODM toy solutions and China sourcing support for international brands,
              importers, distributors, and private label businesses.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton to="/contact" icon={<ArrowRight className="size-4" />}>
                Send Inquiry
              </CTAButton>
              <CTAButton to="/manufacturing" variant="outline-light">
                View Capabilities
              </CTAButton>
            </div>
          </div>

          <div className="mt-12">
            <HeroCarousel slides={heroSlides} />
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              { k: "1000+", v: "Factories" },
              { k: "20+", v: "Years export" },
              { k: "Worldwide", v: "Markets" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-semibold text-white">{s.k}</dt>
                <dd className="text-[11px] uppercase tracking-wider text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <TrustCards />

      {/* ABOUT */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel>About ABERO</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Manufacturing expertise with sourcing power.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Founded in Shantou, China, ABERO combines selected manufacturing capabilities with
                an extensive supplier network to provide complete toy solutions for importers,
                distributors, retail chains, e-commerce sellers, and private label brands.
              </p>
              <ul className="mt-6 space-y-3">
                {ABOUT_BULLETS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-accent" />
                    <span className="text-base text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton to="/about" variant="ghost-dark" icon={<ArrowRight className="size-4" />}>
                  Learn about us
                </CTAButton>
              </div>
            </div>

            <div className="rounded-3xl bg-surface p-4 sm:p-6">
              <ImageCarousel slides={aboutSlides} />
            </div>
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Manufacturing · OEM · ODM</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">From idea to shipment.</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              We support brands through design, tooling, sampling, production, inspection,
              packaging, and shipping.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all hover:shadow-elevated"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={640}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 inline-flex size-10 items-center justify-center rounded-lg bg-white/95 text-sm font-bold text-navy-deep shadow">
                    {p.n}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2 sm:gap-3">
                <span className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-sm">
                  {s}
                </span>
                {i < STEPS.length - 1 ? (
                  <ArrowRight className="size-4 text-muted-foreground" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY VIDEO */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Factory Tour</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Show the complete process in 2–3 minutes.
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              A short factory tour video showing the office, showroom, production, warehouse,
              quality control, and container loading process.
            </p>
          </div>

          <div className="mt-10">
            <VideoPlayer
              src={factoryTour.url}
              poster={img.factoryExterior}
              label="Factory Tour"
              title="Inside ABERO — production, QC, and export floor."
            />
          </div>
        </div>
      </section>

      {/* CHINA SOURCING */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 50% at 80% 10%, color-mix(in oklab, var(--blue-accent) 22%, transparent), transparent 70%), radial-gradient(40% 40% at 10% 90%, color-mix(in oklab, var(--cyan-accent) 18%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <SectionLabel variant="dark">China Sourcing Services</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Your China sourcing partner.</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                ABERO helps clients source products throughout China by connecting product demand
                with suitable factories, practical quality control, and export-ready logistics.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-semibold text-cyan">
                1000+ factories in our network
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {SOURCING.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
                  >
                    <h3 className="text-base font-semibold text-white">{s.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-white/75">{s.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <CTAButton to="/china-sourcing" variant="outline-light" icon={<ArrowRight className="size-4" />}>
                  Explore sourcing services
                </CTAButton>
              </div>
            </div>

            <SupplierNetwork />
          </div>
        </div>
      </section>

      <CertBadges />

      {/* FACTORY GALLERY */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Factory Gallery</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Photos that build trust.</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              A look at production, warehouse, showroom, quality control, and export operations.
            </p>
          </div>
          <div className="mt-10 rounded-3xl bg-surface p-4 sm:p-6">
            <ImageCarousel slides={gallerySlides} autoplayMs={3500} />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 50% at 15% 100%, color-mix(in oklab, var(--blue-accent) 22%, transparent), transparent 70%), radial-gradient(50% 40% at 90% 0%, color-mix(in oklab, var(--cyan-accent) 18%, transparent), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <SectionLabel variant="dark">Contact Us</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Start your manufacturing or sourcing project.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Send us your product idea, target price, required quantity, market, and compliance
              requirements. Our team in Shantou, China will help evaluate the best production or
              sourcing solution.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton
                href="https://wa.me/"
                variant="outline-light"
                icon={<Phone className="size-4" />}
              >
                WhatsApp
              </CTAButton>
              <CTAButton
                onClick={() => setWechatOpen(true)}
                variant="outline-light"
                icon={<MessageCircle className="size-4" />}
              >
                WeChat QR
              </CTAButton>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 self-center text-sm font-semibold text-cyan hover:text-white transition"
              >
                Or visit contact page
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Modal open={wechatOpen} onClose={() => setWechatOpen(false)} title="WeChat">
        <div className="flex flex-col items-center text-center">
          <div className="grid size-56 place-items-center rounded-2xl border border-border bg-surface">
            <div className="grid size-44 place-items-center rounded-lg bg-card text-xs text-muted-foreground">
              QR Code Placeholder
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Scan with WeChat to add ABERO. WeChat ID:{" "}
            <span className="font-semibold text-foreground">abero-id</span>
          </p>
        </div>
      </Modal>
    </SiteLayout>
  );
}
