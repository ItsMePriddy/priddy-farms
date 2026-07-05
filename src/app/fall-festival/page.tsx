import '@/components/image-slot';
export default function FallFestivalPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#33261A", background: "#9C470B", minHeight: "100vh" }}>
      {/* Hero */}
      <section id="top" data-screen-label="Fall hero" style={{ textAlign: "center", padding: "clamp(44px, 8vw, 72px) 20px 12px" }}>
        <div style={{ fontFamily: "Caveat, cursive", fontWeight: 700, fontSize: "clamp(24px, 4vw, 32px)", color: "#C05F17" }}>sweater weather is farm weather</div>
        <h1 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(36px, 6.5vw, 60px)", lineHeight: 1.08, margin: "10px auto 16px", maxWidth: 720, textWrap: "balance" }}>Fall Festival</h1>
        <p style={{ fontSize: "clamp(16px, 2.2vw, 19px)", lineHeight: 1.6, color: "#6B5843", maxWidth: 600, margin: "0 auto" }}>September 19 through November 8 at both farms. Pick your pumpkin, ride the hayride, get lost in the maze — and come hungry.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
          <a href="/visit" style={{ display: "inline-block", background: "#8A3324", color: "#FBF3E0", textDecoration: "none", fontWeight: 800, fontSize: 16, padding: "14px 26px", borderRadius: 999 }}>Hours &amp; directions</a>
          <a href="#haunted" style={{ display: "inline-block", background: "#241B12", color: "#FBF3E0", textDecoration: "none", fontWeight: 800, fontSize: 16, padding: "14px 26px", borderRadius: 999 }}>Haunted nights →</a>
        </div>
        <image-slot id="fall-hero-photo" placeholder="Drop a big fall photo — the patch full of pumpkins, or kids on the hayride" shape="rounded" radius="20" style={{ display: "block", width: "min(960px, 100%)", aspectRatio: "16/8", margin: "32px auto 0" }}></image-slot>
      </section>

      {/* Things to do */}
      <section data-screen-label="Fall activities" style={{ padding: "clamp(40px, 7vw, 64px) 20px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <div style={{ fontFamily: "Caveat, cursive", fontWeight: 700, fontSize: 26, color: "#C05F17" }}>so much to do</div>
            <h2 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(28px, 4.5vw, 40px)", margin: "4px 0 0" }}>Out in the patch</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {[
              { img: "fall-pumpkins", title: "Pick-your-own pumpkins", desc: "Every shape and size, from tiny gourds to porch-worthy giants — grown right here.", placeholder: "Pumpkin patch photo" },
              { img: "fall-maze", title: "5-acre corn maze", desc: "Our biggest maze yet, cut fresh each season at the Millington farm. Bring your sense of direction.", placeholder: "Corn maze photo (aerial shot if you have one!)" },
              { img: "fall-hayride", title: "Hayrides & the train", desc: "A slow ride around the farm — hayrides at both locations, plus the little train at Bartlett.", placeholder: "Hayride or barrel train photo" },
              { img: "fall-animals", title: "Petting zoo", desc: "Say hello to the goats, chickens, and friends. Little hands welcome.", placeholder: "Petting zoo photo — goats are always a hit" },
              { img: "fall-draykon", title: "Meet Draykon", desc: "Our 150-foot dragon is waiting in the field for the bravest photo of your fall.", placeholder: "Photo of Draykon the dragon" },
              { img: "fall-treats", title: "Farm treats", desc: "Kettle corn, hot cider, and sweets to keep everybody smiling between rides.", placeholder: "Concessions photo — kettle corn, cider, funnel cakes" },
            ].map((a) => (
              <div key={a.img} style={{ background: "#FFFDF6", border: "1px solid #E3D5B8", borderRadius: 16, overflow: "hidden" }}>
                <image-slot id={a.img} placeholder={a.placeholder} shape="rect" style={{ display: "block", width: "100%", height: 170 }}></image-slot>
                <div style={{ padding: "20px 22px 22px" }}>
                  <h3 style={{ fontFamily: "Besley, serif", fontWeight: 700, fontSize: 22, margin: "0 0 6px" }}>{a.title}</h3>
                  <div style={{ color: "#6B5843", fontSize: 15, lineHeight: 1.55 }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Haunted */}
      <section id="haunted" data-screen-label="Haunted attraction" style={{ padding: "clamp(40px, 7vw, 64px) 20px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <div style={{ fontFamily: "Caveat, cursive", fontWeight: 700, fontSize: 26, color: "#C05F17" }}>if you dare</div>
            <h2 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(28px, 4.5vw, 40px)", margin: "4px 0 0" }}>After dark</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
            <div style={{ background: "#241B12", color: "#FBF3E0", borderRadius: 20, padding: "clamp(26px, 5vw, 42px)", boxShadow: "0 3px 14px rgba(59,42,29,0.12)" }}>
              <div style={{ fontSize: "12.5px", fontWeight: 800, letterSpacing: "0.1em", color: "#C05F17", marginBottom: 8 }}>WEEKENDS IN OCTOBER</div>
              <h3 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: 28, margin: "0 0 12px" }}>Haunted house &amp; woods trail</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, opacity: 0.9, margin: "0 0 16px" }}>The farm gets a little darker when the sun goes down. Our haunted house at Millington and the haunted woods trail at Bartlett open on weekends — for those who love a good scare.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
                <span style={{ background: "rgba(255,255,255,0.12)", padding: "5px 11px", borderRadius: 999, fontSize: 13, fontWeight: 700 }}>House walkthrough: $4</span>
                <span style={{ background: "rgba(255,255,255,0.12)", padding: "5px 11px", borderRadius: 999, fontSize: 13, fontWeight: 700 }}>Gate: $21 + tax</span>
                <span style={{ background: "rgba(255,255,255,0.12)", padding: "5px 11px", borderRadius: 999, fontSize: 13, fontWeight: 700 }}>Cash &amp; cards</span>
              </div>
              <a href="/visit" style={{ display: "inline-block", background: "#8A3324", color: "#FBF3E0", textDecoration: "none", fontWeight: 800, fontSize: 16, padding: "14px 26px", borderRadius: 999 }}>Get directions</a>
            </div>
            <image-slot id="fall-haunted-photo" placeholder="Haunted attraction photo — the spooky barn or haunted house entrance" shape="rounded" radius="20" style={{ display: "block", width: "100%", minHeight: 260 }}></image-slot>
          </div>
        </div>
      </section>

      {/* What to know */}
      <section data-screen-label="What to know" style={{ background: "#F3E7CE", padding: "clamp(40px, 7vw, 60px) 20px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 34px)", margin: "0 0 22px", textAlign: "center" }}>What to know before you go</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              ["Free admission", "Coming to the farm is free — pay only for the fun you pick: pumpkins, maze, rides, and more."],
              ["Cash & cards accepted", "We take cash, Apple Pay, and all major credit cards at both locations."],
              ["No pets, please", "For the safety of our animals and yours, leave furry friends at home."],
              ["Portable restrooms", "Clean portable restrooms are available at both farms."],
              ["Snacks & drinks", "Packaged snacks and drinks are available for purchase — or bring your own picnic."],
              ["Weather policy", "Farm fun is outdoor fun. Rain may close some activities — call ahead on iffy days."],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: "#FFFDF6", border: "1px solid #E3D5B8", borderRadius: 16, padding: 22 }}>
                <div style={{ fontFamily: "Besley, serif", fontWeight: 700, fontSize: 19, marginBottom: 6 }}>{title}</div>
                <div style={{ color: "#6B5843", fontSize: 15, lineHeight: 1.55 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
