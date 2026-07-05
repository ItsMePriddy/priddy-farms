import '@/components/image-slot';
export default function PartiesEventsPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#33261A", background: "#FEF8F3", minHeight: "100vh" }}>
      {/* Hero */}
      <section data-screen-label="Events hero" style={{ textAlign: "center", padding: "clamp(44px, 8vw, 72px) 20px 12px" }}>
        <div style={{ fontFamily: "Caveat, cursive", fontWeight: 700, fontSize: "clamp(24px, 4vw, 32px)", color: "#DFA032" }}>celebrate farm-style</div>
        <h1 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(36px, 6.5vw, 60px)", lineHeight: 1.08, margin: "10px auto 16px", maxWidth: 720, textWrap: "balance" }}>Parties &amp; events</h1>
        <p style={{ fontSize: "clamp(16px, 2.2vw, 19px)", lineHeight: 1.6, color: "#6B5843", maxWidth: 600, margin: "0 auto" }}>
          Birthdays, field trips, summer camp, and gatherings big and small. Tell us the occasion — we&rsquo;ll bring the farm.
        </p>
        <a href="#book" style={{ display: "inline-block", background: "#8A3324", color: "#FBF3E0", textDecoration: "none", fontWeight: 800, fontSize: 16, padding: "14px 26px", borderRadius: 999, marginTop: 24 }}>
          Book by phone
        </a>
      </section>

      {/* Section Card: image-left text-right or image-right text-left */}
      {[
        {
          label: "AT OUR BARTLETT FARM", labelColor: "#8A3324", title: "Birthday parties",
          desc: "A party the kids will talk about all year — hayride, petting zoo, and room to run, with a covered spot for cake and presents. We handle the farm fun; you bring the birthday kid.",
          chips: ["Hayride included", "Covered party area", "Petting zoo"],
          phone: "9013590800", phoneText: "Call (901) 359-0800 to book",
          img: "events-birthday", ph: "Birthday party photo — cake at the pavilion, or kids on the barrel train", imgRight: false,
        },
        {
          label: "SCHOOLS & GROUPS", labelColor: "#5C7A4A", title: "Field trips",
          desc: "A hands-on farm day for students: how pumpkins grow, meeting the animals, a hayride around the fields, and every child home with their own pumpkin. Teachers ride free — of course.",
          chips: ["Group rates", "Pumpkin for every child", "Weekday mornings"],
          phone: "9016169338", phoneText: "Call (901) 616-9338 to schedule",
          img: "events-fieldtrip", ph: "Field trip photo — a class in the patch", imgRight: true,
        },
        {
          label: "EVERY JUNE · MILLINGTON", labelColor: "#DFA032", title: "Summer camp",
          desc: "Two weeks of real farm life on 50 acres — animals to feed, ponds to fish, and plenty of good old-fashioned outside. Spots fill fast every year.",
          chips: ["Two June sessions", "50 acres to explore", "Limited spots"],
          phone: "9016169338", phoneText: "Call (901) 616-9338 for details",
          img: "events-camp", ph: "Summer camp photo — kids fishing, feeding animals, or on the hay pile", imgRight: false,
        },
      ].map((section) => {
        const ImageCol = (
          <image-slot
            key={section.img + "-img"}
            id={section.img}
            placeholder={section.ph}
            shape="rect"
            style={{ display: "block", width: "100%", minHeight: 260 }}
          />
        );
        const TextCol = (
          <div key={section.img + "-txt"} style={{ padding: "clamp(26px, 5vw, 42px)" }}>
            <div style={{ fontSize: "12.5px", fontWeight: 800, letterSpacing: "0.1em", color: section.labelColor, marginBottom: 8 }}>{section.label}</div>
            <h2 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 36px)", margin: "6px 0 12px" }}>{section.title}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#4A3A29", margin: "0 0 14px" }}>{section.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
              {section.chips.map((c) => (
                <span key={c} style={{ background: "#F3E7CE", color: "#6B4A2E", fontSize: 13, fontWeight: 700, padding: "5px 11px", borderRadius: 999 }}>{c}</span>
              ))}
            </div>
            <a href={`tel:${section.phone}`} style={{ display: "inline-block", background: "#8A3324", color: "#FBF3E0", textDecoration: "none", fontWeight: 800, fontSize: 16, padding: "14px 26px", borderRadius: 999 }}>
              {section.phoneText}
            </a>
          </div>
        );

        return (
          <section key={section.img} data-screen-label={section.title} style={{ padding: "clamp(28px, 5vw, 40px) 20px 0" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", background: "#FFFDF6", border: "1px solid #E3D5B8", borderRadius: 20, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", alignItems: "stretch" }}>
                {section.imgRight ? [TextCol, ImageCol] : [ImageCol, TextCol]}
              </div>
            </div>
          </section>
        );
      })}

      {/* Private events */}
      <section data-screen-label="Private events" style={{ padding: "clamp(40px, 7vw, 60px) 20px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <h2 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(28px, 4.5vw, 40px)", margin: "0" }}>Private events at Millington</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
            <div style={{ background: "#FFFDF6", border: "1px solid #E3D5B8", borderRadius: 20, overflow: "hidden" }}>
              <image-slot id="events-private" placeholder="Private event photo — wedding setup on the farm, or a company picnic" shape="rect" style={{ display: "block", width: "100%", height: 200 }}></image-slot>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "Besley, serif", fontWeight: 700, fontSize: 22, margin: "0 0 8px" }}>The big stuff</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "#4A3A29", margin: "0 0 14px" }}>
                  50 rolling acres with finger lakes — room for company picnics, family reunions, weddings, corporate retreats, and more.
                  Available April through mid-September.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 16 }}>
                  {["50 acres of space", "April – mid-Sept", "All sizes welcome"].map((c) => (
                    <span key={c} style={{ background: "#F3E7CE", color: "#6B4A2E", fontSize: 13, fontWeight: 700, padding: "5px 11px", borderRadius: 999 }}>{c}</span>
                  ))}
                </div>
                <a href="tel:9016169338" style={{ display: "inline-block", background: "#8A3324", color: "#FBF3E0", textDecoration: "none", fontWeight: 800, fontSize: 16, padding: "14px 26px", borderRadius: 999 }}>Call (901) 616-9338</a>
              </div>
            </div>
            <image-slot id="events-private-2" placeholder="Another event photo — the view from the hills, or a pavilion setup" shape="rounded" radius="20" style={{ display: "block", width: "100%", minHeight: 260 }}></image-slot>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section id="book" data-screen-label="Book" style={{ background: "#F3E7CE", padding: "clamp(44px, 8vw, 68px) 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontFamily: "Caveat, cursive", fontWeight: 700, fontSize: 28, color: "#C05F17" }}>let&rsquo;s make it happen</div>
          <h2 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(28px, 4.5vw, 40px)", margin: "6px 0 16px" }}>Ready to book?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "#4A3A29", margin: "0 0 24px" }}>
            Everything starts with a phone call. We&rsquo;ll figure out the details together — dates, group size, food, the works.
          </p>
          <a href="tel:9016169338" style={{ display: "inline-block", background: "#8A3324", color: "#FBF3E0", textDecoration: "none", fontWeight: 800, fontSize: 18, padding: "16px 34px", borderRadius: 999 }}>
            Call (901) 616-9338
          </a>
          <div style={{ marginTop: 16, color: "#6B5843", fontSize: 15 }}>or reach us at <a href="tel:9013590800" style={{ color: "#8A3324", fontWeight: 800, textDecoration: "none" }}>(901) 359-0800</a> for Bartlett events</div>
        </div>
      </section>
    </div>
  );
}
