import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="contact"
      data-screen-label="Footer"
      style={{
        background: "#33261A",
        color: "#EFE3CC",
        padding: "clamp(40px, 7vw, 56px) 20px 28px",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 28,
          }}
        >
          <div>
            <div style={{ fontFamily: "Besley, serif", fontWeight: 800, fontSize: 24, color: "#FBF3E0" }}>
              Priddy Farms
            </div>
            <div style={{ fontSize: 14.5, lineHeight: 1.6, opacity: 0.8, marginTop: 8 }}>
              Family-owned &amp; operated. Creating lasting memories in the Mid-South for over 27 years.
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", opacity: 0.7, marginBottom: 10 }}>
              MILLINGTON
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.6 }}>
              3805 West Union Rd.<br />
              Millington, TN 38053
              <br />
              <a href="tel:9016169338" style={{ color: "#E8B96A", fontWeight: 800, textDecoration: "none" }}>
                (901) 616-9338
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", opacity: 0.7, marginBottom: 10 }}>
              BARTLETT
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.6 }}>
              4595 N. Germantown Rd.<br />
              Arlington, TN 38002
              <br />
              <a href="tel:9013590800" style={{ color: "#E8B96A", fontWeight: 800, textDecoration: "none" }}>
                (901) 359-0800
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", opacity: 0.7, marginBottom: 10 }}>
              FOLLOW ALONG
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 15 }}>
              <a href="https://www.facebook.com/PriddyFarms/" target="_blank" style={{ color: "#EFE3CC", fontWeight: 700, textDecoration: "none" }}>
                Facebook
              </a>
              <a href="https://www.instagram.com/priddyfarms/" target="_blank" style={{ color: "#EFE3CC", fontWeight: 700, textDecoration: "none" }}>
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(239, 227, 204, 0.2)",
            marginTop: 32,
            paddingTop: 18,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <p style={{ margin: 0, fontSize: 11, lineHeight: 1.5, opacity: 0.55 }}>
            WARNING: Under Tennessee law, there is no liability for an injury to or death of a participant
            in an agritourism activity conducted at this agritourism location or by this agritourism professional
            if such injury or death results from the inherent risks of the agritourism activity. Inherent risks of
            agritourism activities include, among others, risks of injury inherent to land, equipment, and animals,
            as well as the potential for you to act in a negligent manner that may contribute to your injury or death.
            You are assuming the risk of participating in this agritourism activity. Tenn. Code Ann. § 43-39-103.
          </p>
          <div style={{ fontSize: 13, opacity: 0.7 }}>
            &copy; {year} Priddy Farms &middot; Millington &amp; Bartlett, Tennessee
          </div>
        </div>
      </div>
    </footer>
  );
}
