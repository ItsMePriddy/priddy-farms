"use client";

import "@/components/image-slot";

const styles = {
  section: {
    padding: "80px 24px",
    width: "100%",
  },
  inner: {
    maxWidth: "1080px",
    margin: "0 auto",
  },
  // Typography
  h1: {
    fontFamily: "'Besley', 'Georgia', serif",
    fontWeight: 800,
    fontSize: "clamp(36px, 6.5vw, 60px)",
    lineHeight: 1.08,
    color: "#33261A",
    margin: "0 0 20px 0",
    textAlign: "center" as const,
  },
  h2: {
    fontFamily: "'Besley', 'Georgia', serif",
    fontWeight: 800,
    fontSize: "clamp(28px, 4.5vw, 40px)",
    lineHeight: 1.2,
    color: "#33261A",
    margin: "0 0 8px 0",
    textAlign: "center" as const,
  },
  h3: {
    fontFamily: "'Besley', 'Georgia', serif",
    fontWeight: 700,
    fontSize: "22px",
    color: "#33261A",
    margin: "0",
  },
  kicker: {
    fontFamily: "'Caveat', 'Brush Script MT', cursive",
    fontWeight: 700,
    fontSize: "26px",
    color: "#C05F17",
    textAlign: "center" as const,
    margin: "0 0 8px 0",
  },
  bodyText: {
    fontFamily: "'Nunito Sans', 'Arial', sans-serif",
    fontWeight: 400,
    fontSize: "17px",
    lineHeight: 1.65,
    color: "#4A3A29",
    textAlign: "center" as const,
    maxWidth: "680px",
    margin: "0 auto",
  },
  bodyTextLeft: {
    fontFamily: "'Nunito Sans', 'Arial', sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: 1.7,
    color: "#4A3A29",
    margin: "0 0 16px 0",
  },
  // Card
  card: {
    background: "#FFFDF6",
    border: "1px solid #E3D5B8",
    borderRadius: "16px",
    boxShadow: "0 2px 10px rgba(59,42,29,0.06)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column" as const,
  },
  // Button (pill)
  btnRed: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Nunito Sans', 'Arial', sans-serif",
    fontWeight: 800,
    fontSize: "15px",
    color: "#FBF3E0",
    background: "#8A3324",
    padding: "14px 18px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    lineHeight: 1,
    letterSpacing: "0.02em",
    transition: "background 0.2s",
  },
  // Feature chip
  chip: {
    display: "inline-block",
    fontFamily: "'Nunito Sans', 'Arial', sans-serif",
    fontWeight: 700,
    fontSize: "13px",
    color: "#4A3A29",
    background: "#F3E7CE",
    padding: "5px 12px",
    borderRadius: "999px",
    lineHeight: 1.4,
  },
  // Badge pill (NEW·50 ACRES, THE ORIGINAL)
  badgeOrange: {
    display: "inline-block",
    fontFamily: "'Nunito Sans', 'Arial', sans-serif",
    fontWeight: 700,
    fontSize: "12px",
    color: "#C05F17",
    background: "#F3E7CE",
    padding: "4px 10px",
    borderRadius: "999px",
    lineHeight: 1.3,
    marginLeft: "8px",
    verticalAlign: "middle",
  },
  badgeGreen: {
    display: "inline-block",
    fontFamily: "'Nunito Sans', 'Arial', sans-serif",
    fontWeight: 700,
    fontSize: "12px",
    color: "#2F4A33",
    background: "#F3E7CE",
    padding: "4px 10px",
    borderRadius: "999px",
    lineHeight: 1.3,
    marginLeft: "8px",
    verticalAlign: "middle",
  },
  // Phone link
  phone: {
    color: "#8A3324",
    fontWeight: 800,
    fontFamily: "'Nunito Sans', 'Arial', sans-serif",
    fontSize: "16px",
    textDecoration: "none",
  },
  // Label pill on seasonal cards
  seasonLabel: {
    display: "inline-block",
    fontFamily: "'Nunito Sans', 'Arial', sans-serif",
    fontWeight: 700,
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "999px",
    lineHeight: 1.3,
    marginBottom: "8px",
  },
  // Season link cards
  seasonLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Besley', 'Georgia', serif",
    fontWeight: 700,
    fontSize: "18px",
    color: "#FFFDF6",
    padding: "32px 20px",
    borderRadius: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    lineHeight: 1.3,
    minHeight: "100px",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  },
};

// Shared component helpers
function PillButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={styles.btnRed}
      onMouseOver={(e) => (e.currentTarget.style.background = "#6E2819")}
      onMouseOut={(e) => (e.currentTarget.style.background = "#8A3324")}
    >
      {label}
    </a>
  );
}

export default function HomePage() {
  return (
    <div style={{ background: "#FEFAF1", minHeight: "100vh" }}>
      {/* ════════════════════════════════════════════════
          1. HERO — centered, cream bg
         ════════════════════════════════════════════════ */}
      <section
        style={{
          ...styles.section,
          paddingTop: "40px",
          background: "#F7EFDD",
          textAlign: "center",
        }}
      >
        {/* Announcement banner (fall) */}
        <div
          style={{
            background: "#8A3324",
            color: "#FBF3E0",
            fontFamily: "'Nunito Sans', 'Arial', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            padding: "10px 24px",
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 36px auto",
            borderRadius: "999px",
            lineHeight: 1.5,
          }}
        >
          🍂 Fall Festival at our new Millington farm opens September 19
          &mdash; see you in the patch!
        </div>

        <div style={styles.inner}>
          <p style={styles.kicker}>y&rsquo;all come make a memory with us</p>
          <h1 style={styles.h1}>
            Two farms. One family.
            <br />
            Fun for every season.
          </h1>
          <p style={styles.bodyText}>
            For over 27 years, Priddy Farms has grown pumpkins, Christmas trees,
            and family traditions right here in the Mid-South.
          </p>

          <image-slot
            id="hero-photo"
            placeholder="Drop your favorite farm photo here — hayride, patch, or the whole family"
            shape="rounded"
            radius="20"
            style={{ display: "block", width: "min(960px,100%)", aspectRatio: "16/8", margin: "32px auto 0" }}
          ></image-slot>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          2. CHOOSE YOUR FARM — cream bg
         ════════════════════════════════════════════════ */}
      <section style={{ ...styles.section, background: "#F7EFDD" }}>
        <div style={styles.inner}>
          <p style={styles.kicker}>start here</p>
          <h2 style={{ ...styles.h2, marginBottom: "40px" }}>Choose your farm</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "32px",
            }}
          >
            {/* ── Millington Card ── */}
            <div style={styles.card}>
              <image-slot
                id="millington-photo"
                placeholder="Drop a Millington photo — rolling hills, corn maze, or the pond"
                style={{ width: "100%", height: "220px" }}
              ></image-slot>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                  <h3 style={styles.h3}>Millington</h3>
                  <span style={styles.badgeOrange}>NEW&middot;50 ACRES</span>
                </div>
                <p style={{ fontFamily: "'Nunito Sans', 'Arial', sans-serif", fontSize: "15px", color: "#6B5843", margin: 0, lineHeight: 1.4 }}>
                  3805 West Union Rd., Millington, TN 38053
                </p>
                <a href="tel:+19016169338" style={styles.phone}>
                  (901) 616-9338
                </a>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                  {["Pumpkin Patch", "5-Acre Corn Maze", "Hayrides", "Petting Zoo", "Haunted House", "Private Events"].map(
                    (chip) => (
                      <span key={chip} style={styles.chip}>
                        {chip}
                      </span>
                    )
                  )}
                </div>
                <div style={{ marginTop: "8px" }}>
                  <PillButton href="#visit" label="Plan your visit" />
                </div>
              </div>
            </div>

            {/* ── Bartlett Card ── */}
            <div style={styles.card}>
              <image-slot
                id="bartlett-photo"
                placeholder="Drop a Bartlett photo — the train, Christmas trees, or the original patch"
                style={{ width: "100%", height: "220px" }}
              ></image-slot>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                  <h3 style={styles.h3}>Bartlett</h3>
                  <span style={styles.badgeGreen}>THE ORIGINAL</span>
                </div>
                <p style={{ fontFamily: "'Nunito Sans', 'Arial', sans-serif", fontSize: "15px", color: "#6B5843", margin: 0, lineHeight: 1.4 }}>
                  4595 N. Germantown Rd., Arlington, TN 38002
                </p>
                <a href="tel:+19013590800" style={styles.phone}>
                  (901) 359-0800
                </a>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                  {[
                    "Pumpkin Patch",
                    "Hayride & Train",
                    "Haunted Woods Trail",
                    "Birthday Parties",
                    "Petting Zoo",
                    "Christmas Trees",
                  ].map((chip) => (
                    <span key={chip} style={styles.chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "8px" }}>
                  <PillButton href="#visit" label="Plan your visit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3. ON THE FARM THIS YEAR — tint bg #F3E7CE
         ════════════════════════════════════════════════ */}
      <section style={{ ...styles.section, background: "#F3E7CE" }}>
        <div style={styles.inner}>
          <h2 style={{ ...styles.h2, marginBottom: "40px" }}>On the farm this year</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Fall Festival */}
            <div style={styles.card}>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", textAlign: "center", alignItems: "center" }}>
                <span style={{ ...styles.seasonLabel, background: "#C05F17", color: "#FFFDF6" }}>OPENS SEPTEMBER 19</span>
                <h3 style={{ ...styles.h3, fontSize: "20px" }}>Fall Festival</h3>
                <p style={{ fontFamily: "'Nunito Sans', 'Arial', sans-serif", fontSize: "15px", color: "#6B5843", margin: 0, lineHeight: 1.5 }}>
                  Pumpkin patch, 5-acre corn maze, hayrides, petting zoo &mdash;
                  the full farm experience.
                </p>
                <div style={{ marginTop: "8px" }}>
                  <PillButton href="/pumpkin-patch" label="Learn more" />
                </div>
              </div>
            </div>

            {/* Christmas Season */}
            <div style={styles.card}>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", textAlign: "center", alignItems: "center" }}>
                <span style={{ ...styles.seasonLabel, background: "#2F4A33", color: "#FFFDF6" }}>OPENING DATE COMING SOON</span>
                <h3 style={{ ...styles.h3, fontSize: "20px" }}>Christmas Season</h3>
                <p style={{ fontFamily: "'Nunito Sans', 'Arial', sans-serif", fontSize: "15px", color: "#6B5843", margin: 0, lineHeight: 1.5 }}>
                  Cut your own tree, sip hot cocoa, and make a memory with
                  the ones you love.
                </p>
                <div style={{ marginTop: "8px" }}>
                  <PillButton href="/christmas-trees" label="Learn more" />
                </div>
              </div>
            </div>

            {/* Private Events */}
            <div style={styles.card}>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px", textAlign: "center", alignItems: "center" }}>
                <span style={{ ...styles.seasonLabel, background: "#8A3324", color: "#FFFDF6" }}>NOW BOOKING</span>
                <h3 style={{ ...styles.h3, fontSize: "20px" }}>Private Events</h3>
                <p style={{ fontFamily: "'Nunito Sans', 'Arial', sans-serif", fontSize: "15px", color: "#6B5843", margin: 0, lineHeight: 1.5 }}>
                  Birthdays, reunions, company picnics &mdash; book our farm
                  for your next gathering.
                </p>
                <div style={{ marginTop: "8px" }}>
                  <PillButton href="/private-events" label="Learn more" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4. PLAN YOUR VISIT — cream bg
         ════════════════════════════════════════════════ */}
      <section id="visit" style={{ ...styles.section, background: "#F7EFDD" }}>
        <div style={styles.inner}>
          <p style={styles.kicker}>the important stuff</p>
          <h2 style={{ ...styles.h2, marginBottom: "40px" }}>Plan your visit</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Hours */}
            <div style={styles.card}>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ ...styles.h3, fontSize: "20px", textAlign: "center" }}>Hours</h3>
                <div style={{ fontFamily: "'Nunito Sans', 'Arial', sans-serif", fontSize: "15px", color: "#4A3A29", lineHeight: 2 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 600 }}>Mon &ndash; Fri</span>
                    <span>3:00 PM &ndash; 7:00 PM</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 600 }}>Saturday</span>
                    <span>9:00 AM &ndash; 7:00 PM</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 600 }}>Sunday</span>
                    <span>12:00 PM &ndash; 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Admission */}
            <div style={styles.card}>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ ...styles.h3, fontSize: "20px", textAlign: "center" }}>Admission &amp; Pricing</h3>
                <p style={{ fontFamily: "'Nunito Sans', 'Arial', sans-serif", fontSize: "15px", color: "#4A3A29", margin: 0, lineHeight: 1.6 }}>
                  Admission varies by season and activity. Fall Festival
                  tickets are available at the gate or online. Groups of 15+
                  qualify for discounted rates.
                </p>
                <div style={{ marginTop: "4px" }}>
                  <PillButton href="/pricing" label="See pricing" />
                </div>
              </div>
            </div>

            {/* Find Us */}
            <div style={styles.card}>
              <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ ...styles.h3, fontSize: "20px", textAlign: "center" }}>Find us</h3>
                <div style={{ fontFamily: "'Nunito Sans', 'Arial', sans-serif", fontSize: "15px", color: "#4A3A29", lineHeight: 1.8 }}>
                  <div>
                    <strong style={{ color: "#33261A" }}>Millington</strong>
                    <br />
                    3805 West Union Rd., Millington, TN 38053
                    <br />
                    <a
                      href="https://maps.google.com/?q=3805+West+Union+Rd+Millington+TN+38053"
                      target="_blank"
                      rel="noopener"
                      style={{ color: "#8A3324", fontWeight: 700, fontSize: "14px" }}
                    >
                      View on Google Maps &rarr;
                    </a>
                  </div>
                  <div style={{ marginTop: "12px" }}>
                    <strong style={{ color: "#33261A" }}>Bartlett / Arlington</strong>
                    <br />
                    4595 N. Germantown Rd., Arlington, TN 38002
                    <br />
                    <a
                      href="https://maps.google.com/?q=4595+N+Germantown+Rd+Arlington+TN+38002"
                      target="_blank"
                      rel="noopener"
                      style={{ color: "#8A3324", fontWeight: 700, fontSize: "14px" }}
                    >
                      View on Google Maps &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          5. LETTER FROM THE FAMILY — tint bg
         ════════════════════════════════════════════════ */}
      <section style={{ ...styles.section, background: "#F3E7CE" }}>
        <div style={styles.inner}>
          <div
            style={{
              ...styles.card,
              padding: "48px 40px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontFamily: "'Caveat', 'Brush Script MT', cursive",
                fontWeight: 700,
                fontSize: "26px",
                color: "#C05F17",
                textAlign: "center",
                margin: "0 0 8px 0",
              }}
            >
              a letter from our family
            </p>
            <h2
              style={{
                fontFamily: "'Besley', 'Georgia', serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 3.5vw, 36px)",
                color: "#33261A",
                textAlign: "center",
                margin: "0 0 28px 0",
                lineHeight: 1.15,
              }}
            >
              27 years of pumpkins, pine trees &amp; memories
            </h2>

            <div style={{ maxWidth: "640px", margin: "0 auto" }}>
              <p style={styles.bodyTextLeft}>
                When we opened our gates back in 1997, we had a five-acre
                pumpkin patch, a beat-up hay wagon, and a dream of sharing
                the simple joy of farm life with our community. We never
                could have imagined the way y&rsquo;all would embrace us.
              </p>
              <p style={styles.bodyTextLeft}>
                Today, we&rsquo;re blessed to welcome families from all over
                the Mid-South to not one, but two farms. We&rsquo;ve added
                corn mazes, Christmas trees, summer camps, and haunted
                attractions &mdash; but the heart of Priddy Farms is still
                the same. It&rsquo;s the laughter of kids chasing through
                the pumpkin patch. The quiet hush of a family walking
                through the Christmas trees. The way a hayride under the
                stars brings everybody closer.
              </p>
              <p style={styles.bodyTextLeft}>
                Thank you for being part of our story. Whether this is your
                first visit or your 27th, you&rsquo;re family here.
              </p>
              <p
                style={{
                  fontFamily: "'Caveat', 'Brush Script MT', cursive",
                  fontWeight: 600,
                  fontSize: "22px",
                  color: "#6B5843",
                  textAlign: "right",
                  margin: "24px 0 0 0",
                }}
              >
                &mdash; The Priddy Family
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          6. EXPLORE THE SEASONS — cream bg
         ════════════════════════════════════════════════ */}
      <section style={{ ...styles.section, background: "#F7EFDD" }}>
        <div style={styles.inner}>
          <h2 style={{ ...styles.h2, marginBottom: "40px" }}>
            Every season, its own adventure
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {/* Pumpkin Patch */}
            <a
              href="/pumpkin-patch"
              style={{ ...styles.seasonLink, background: "#C05F17" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              🎃 Pumpkin Patch
            </a>

            {/* Christmas */}
            <a
              href="/christmas-trees"
              style={{ ...styles.seasonLink, background: "#2F4A33" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              🎄 Christmas
            </a>

            {/* Summer Camp */}
            <a
              href="/summer-camp"
              style={{ ...styles.seasonLink, background: "#DFA032" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              ☀️ Summer Camp
            </a>

            {/* Field Trips */}
            <a
              href="/field-trips"
              style={{ ...styles.seasonLink, background: "#5B7B4A" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              🚌 Field Trips
            </a>

            {/* Birthday Parties */}
            <a
              href="/birthday-parties"
              style={{ ...styles.seasonLink, background: "#8A3324" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              🎂 Birthday Parties
            </a>

            {/* Haunted Attraction */}
            <a
              href="/haunted-attraction"
              style={{ ...styles.seasonLink, background: "#1A1A1A" }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              👻 Haunted Attraction
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
