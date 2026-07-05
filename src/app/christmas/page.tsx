'use client';

import '@/components/image-slot';

export default function ChristmasPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#FBF3E0", background: "#2F4A33", minHeight: "100vh" }}>
      {/* Hero */}
      <section data-screen-label="Christmas hero" style={{ textAlign: "center", padding: "clamp(44px, 8vw, 72px) 20px 12px" }}>
        <div style={{ fontFamily: "Caveat, cursive", fontWeight: 700, fontSize: "clamp(24px, 4vw, 32px)", color: "#E8B96A" }}>the most wonderful time on the farm</div>
        <h1 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(36px, 6.5vw, 60px)", lineHeight: 1.08, margin: "10px auto 16px", maxWidth: 720, textWrap: "balance" }}>Christmas at the farm</h1>
        <p style={{ fontSize: "clamp(16px, 2.2vw, 19px)", lineHeight: 1.6, color: "rgba(251, 243, 224, 0.88)", maxWidth: 600, margin: "0 auto" }}>
          Fresh-cut trees up to 12 feet, handmade wreaths and garland, and that evergreen smell you can&apos;t get from a box in the attic.
        </p>
        <div style={{ display: "inline-block", background: "#2F4A33", color: "#FBF3E0", fontWeight: 800, fontSize: 15, padding: "10px 22px", borderRadius: 999, marginTop: 22 }}>
          Opening date announced soon — follow us for the news
        </div>
        <image-slot id="christmas-hero-photo" placeholder="Drop a Christmas photo — the tree lot at dusk, or a family carrying their tree" shape="rounded" radius="20" style={{ display: "block", width: "min(960px, 100%)", aspectRatio: "16/8", margin: "32px auto 0" }}></image-slot>
      </section>

      {/* What we offer */}
      <section data-screen-label="Christmas offerings" style={{ padding: "clamp(40px, 7vw, 64px) 20px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <div style={{ fontFamily: "Caveat, cursive", fontWeight: 700, fontSize: 26, color: "#E8B96A" }}>fresh from the farm</div>
            <h2 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(28px, 4.5vw, 40px)", margin: "4px 0 0" }}>Everything for the holidays</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
            {[
              { img: "christmas-trees", title: "Christmas trees", desc: "Fraser firs and more, from tabletop size up to 12-foot showstoppers. We&rsquo;ll shake it, net it, and help you load it.", ph: "Tree lot photo — rows of firs" },
              { img: "christmas-wreaths", title: "Handmade wreaths", desc: "Made fresh on the farm in every size — for the front door, the mantel, or somebody you love.", ph: "Wreath photo — handmade, with a red bow" },
              { img: "christmas-garland", title: "Garland & greenery", desc: "Fresh garland by the foot, plus loose greenery for your own creations.", ph: "Garland / greenery photo" },
            ].map((a) => (
              <div key={a.img} style={{ background: "#FFFDF6", border: "1px solid #E3D5B8", borderRadius: 16, overflow: "hidden" }}>
                <image-slot id={a.img} placeholder={a.ph} shape="rect" style={{ display: "block", width: "100%", height: 190 }}></image-slot>
                <div style={{ padding: "20px 22px 22px" }}>
                  <h3 style={{ fontFamily: "Besley, serif", fontWeight: 700, fontSize: 22, margin: "0 0 6px" }}>{a.title}</h3>
                  <div style={{ color: "#6B5843", fontSize: 15, lineHeight: 1.55 }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree care tips */}
      <section data-screen-label="Tree care tips" style={{ background: "#F3E7CE", padding: "clamp(40px, 7vw, 60px) 20px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 22 }}>
            <div style={{ fontFamily: "Caveat, cursive", fontWeight: 700, fontSize: 26, color: "#2F4A33" }}>a little farm wisdom</div>
            <h2 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 34px)", margin: "4px 0 0" }}>Keeping your tree fresh</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              ["1", "Fresh cut at home", "Take a half-inch off the trunk before it goes in the stand so it can drink."],
              ["2", "Water every day", "A fresh tree can drink a gallon a day the first week. Never let the stand run dry."],
              ["3", "Keep it cool", "Place your tree away from heat vents, fireplaces, and direct sunlight."],
              ["4", "Check the needles", "Soft, flexible needles mean your tree is still drinking. Brittle needles mean it&rsquo;s time to water."],
            ].map(([num, title, desc]) => (
              <div key={num} style={{ background: "#FFFDF6", border: "1px solid #E3D5B8", borderRadius: 16, padding: 22 }}>
                <div style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: 30, color: "#2F4A33" }}>{num}</div>
                <div style={{ fontFamily: "Besley, serif", fontWeight: 700, fontSize: 19, margin: "4px 0 6px" }}>{title}</div>
                <div style={{ color: "#6B5843", fontSize: 15, lineHeight: 1.55 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to find us */}
      <section data-screen-label="Where to find us" style={{ padding: "clamp(40px, 7vw, 60px) 20px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 22, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 36px)", margin: "0 0 16px" }}>Find your tree at Bartlett</h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(251, 243, 224, 0.88)", margin: "0 0 14px" }}>Our Christmas tree lot is at the Bartlett location. Come browse, pick your tree, and we&rsquo;ll help you load it up.</p>
              <div style={{ color: "rgba(251, 243, 224, 0.7)", fontSize: 15.5, lineHeight: 1.6, marginBottom: 16 }}>
                4595 N. Germantown Rd., Arlington, TN 38002<br />
                <a href="tel:9013590800" style={{ color: "#8A3324", fontWeight: 800, textDecoration: "none" }}>(901) 359-0800</a>
              </div>
              <a href="https://maps.google.com/?q=4595+N+Germantown+Rd+Arlington+TN+38002" target="_blank" style={{ display: "inline-block", background: "#8A3324", color: "#FBF3E0", textDecoration: "none", fontWeight: 800, fontSize: 16, padding: "14px 26px", borderRadius: 999 }}>Get directions →</a>
            </div>
            <image-slot id="christmas-location-photo" placeholder="Bartlett tree lot photo" shape="rounded" radius="16" style={{ width: "100%", height: 280 }}></image-slot>
          </div>
        </div>
      </section>
    </div>
  );
}
