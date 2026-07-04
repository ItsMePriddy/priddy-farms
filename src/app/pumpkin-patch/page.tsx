"use client";

import Link from "next/link";

const activities = [
  { icon: "🌽", title: "5-Acre Corn Maze", desc: "Get lost in our larger, more challenging corn maze — perfect for kids and adults alike." },
  { icon: "🚜", title: "Scenic Hayride", desc: "Take a relaxing ride through the picturesque farm to the pumpkin patch." },
  { icon: "🚂", title: "Barrel Train Ride", desc: "A fun, family-friendly train ride around the farm." },
  { icon: "🐐", title: "Petting Zoo", desc: "Meet and greet our friendly farm animals." },
  { icon: "⛳", title: "9-Hole Putt Putt", desc: "Mini golf fun for the whole family." },
  { icon: "🏰", title: "Bounce House", desc: "Let the kids jump and play." },
  { icon: "🎯", title: "Yard Games", desc: "Classic outdoor games for everyone." },
  { icon: "📸", title: "Photo Ops", desc: "Capture memories at our scenic photo spots." },
  { icon: "🔍", title: "Mini Maze", desc: "A smaller maze perfect for little ones." },
];

const pricingTiers = [
  { label: "General Admission (Ages 2+)", note: "Includes all daytime activities + one pie pumpkin per child" },
  { label: "Haunted House Add-On", price: "$4", note: "Requires general admission ticket" },
  { label: "Pumpkins & Gourds", note: "Available at the pumpkin lot — no admission required" },
];

export default function PumpkinPatchPage() {
  return (
    <div data-theme="pumpkin-patch">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #C7511A 0%, #E8A838 50%, #F5DEB3 100%)" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-3xl px-4 py-20">
          <p className="text-[var(--color-farm-wheat)] text-lg tracking-widest uppercase mb-4">Fall Festival</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Pumpkin Patch<br />&amp; Corn Maze
          </h1>
          <p className="text-2xl text-[var(--color-farm-wheat)] mb-8">
            September 19 – November 9, 2026
          </p>
          <Link
            href="/visit"
            className="inline-block px-8 py-4 bg-white text-[#C7511A] rounded-full text-lg font-semibold hover:bg-[var(--color-farm-wheat)] transition-colors no-underline shadow-lg"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Georgia, serif", color: "var(--color-farm-dark)" }}>
          A Fall Tradition
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          There&apos;s nothing quite like autumn on the farm. The crisp air, the golden leaves, and acres of pumpkins
          waiting to be picked. Bring the whole family for a day of fall fun you&apos;ll remember all year.
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Pumpkins, gourds, straw bales, mums, and cornstalks available at the pumpkin lot — no admission required.
        </p>
      </section>

      {/* Activities Grid */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "Georgia, serif", color: "var(--color-farm-dark)" }}>
            Activities &amp; Attractions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a) => (
              <div key={a.title} className="p-6 rounded-xl border border-[var(--color-farm-wheat)] hover:shadow-md transition-shadow bg-[var(--color-farm-cream)]/50">
                <span className="text-3xl mb-3 block">{a.icon}</span>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--color-farm-dark)" }}>{a.title}</h3>
                <p className="text-sm text-gray-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" style={{ background: "var(--color-farm-cream)" }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "Georgia, serif", color: "var(--color-farm-dark)" }}>
            Admission &amp; Pricing
          </h2>
          <p className="text-center text-gray-500 mb-12">We accept Cash, Apple Pay, and all major credit cards.</p>
          <div className="space-y-4">
            {pricingTiers.map((t) => (
              <div key={t.label} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl shadow-sm">
                <div>
                  <p className="font-semibold" style={{ color: "var(--color-farm-dark)" }}>{t.label}</p>
                  {t.note && <p className="text-sm text-gray-500 mt-1">{t.note}</p>}
                </div>
                {t.price && (
                  <span className="text-2xl font-bold mt-2 sm:mt-0" style={{ color: "var(--color-farm-amber)" }}>
                    {t.price}
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">Prices may change without prior notice. No pets please. Portable restrooms available. No smoking.</p>
        </div>
      </section>

      {/* Haunted Attraction CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #3E2723, #C7511A)" }}
      >
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
          👻 Haunted Attraction
        </h2>
        <p className="text-[var(--color-farm-wheat)] mb-6 max-w-xl mx-auto">
          For those who love a good scare! Open weekends in October. Daytime walkthrough: $4 add-on. Nighttime haunted house: $21 + tax at the gate.
        </p>
        <Link
          href="/visit"
          className="inline-block px-8 py-4 bg-[var(--color-harvest-gold)] text-[var(--color-farm-dark)] rounded-full text-lg font-semibold hover:bg-white transition-colors no-underline"
        >
          Get Tickets at the Gate
        </Link>
      </section>
    </div>
  );
}
