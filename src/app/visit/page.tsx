"use client";
import '@/components/image-slot';


/* ─── Design palette ─── */
const C = {
  cream: "#6B4A2E",
  card: "#FFFDF6",
  border: "#E3D5B8",
  ink: "#FBF3E0",
  body: "#EFE3CC",
  muted: "#D4C5A0",
  barnRed: "#8A3324",
  orange: "#C05F17",
  tint: "#F5ECD5",
};

/* ─── Typography helpers (inline style objects) ─── */
const fonts = {
  display: "'Besley', Georgia, 'Times New Roman', serif",
  body: "'Nunito Sans', -apple-system, BlinkMacSystemFont, sans-serif",
  handwritten: "'Caveat', 'Comic Sans MS', cursive",
};

export default function VisitPage() {
  return (
    <main style={{ background: C.cream, fontFamily: fonts.body, color: C.body, lineHeight: 1.6 }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0" }}>
        {/* ═══════════════════════════════════════════
            1. HERO
           ═══════════════════════════════════════════ */}
        <section
          style={{
            textAlign: "center",
            padding: "80px 24px 60px",
          }}
        >
          <p
            style={{
              fontFamily: fonts.handwritten,
              fontSize: "1.5rem",
              color: C.orange,
              margin: "0 0 8px",
            }}
          >
            we&rsquo;ll leave the gate open
          </p>
          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              color: C.ink,
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            Come visit us
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: C.muted,
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Two farms, one warm welcome. Here&rsquo;s everything you need to
            find us, plan your day, and get your questions answered.
          </p>
        </section>

        {/* ═══════════════════════════════════════════
            2. LOCATIONS
           ═══════════════════════════════════════════ */}
        <section
          style={{
            background: C.cream,
            padding: "0 24px 80px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: 32,
            }}
          >
            {/* ─── Millington Card ─── */}
            <div
              style={{
                background: C.card,
                borderRadius: 20,
                border: `1px solid ${C.border}`,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ position: "relative" }}>
                <image-slot
                  placeholder="Millington farm photo"
                  shape="rect"
                  radius="0"
                  style={{ minHeight: 220, borderRadius: 0 }}
                ></image-slot>
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: C.orange,
                    color: "#fff",
                    fontFamily: fonts.body,
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    padding: "4px 12px",
                    borderRadius: 999,
                    lineHeight: "22px",
                  }}
                >
                  NEW · 50 ACRES
                </span>
              </div>
              <div style={{ padding: "28px 28px 32px" }}>
                <h2
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: C.ink,
                    margin: "0 0 12px",
                  }}
                >
                  Millington
                </h2>
                <p style={{ margin: "0 0 6px", fontSize: "0.95rem" }}>
                  3805 West Union Rd., Millington, TN 38053
                </p>
                <p style={{ margin: "0 0 14px", fontSize: "0.95rem" }}>
                  <a
                    href="tel:+19016169338"
                    style={{
                      color: C.barnRed,
                      fontWeight: 700,
                      textDecoration: "none",
                      fontSize: "1.05rem",
                    }}
                  >
                    (901) 616-9338
                  </a>
                </p>
                <a
                  href="https://maps.google.com/?q=3805+West+Union+Rd+Millington+TN+38053"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    color: C.orange,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                    marginBottom: 20,
                  }}
                >
                  Google Maps directions &rarr;
                </a>
                <div
                  style={{
                    borderTop: `1px solid ${C.border}`,
                    paddingTop: 18,
                    marginTop: 0,
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 10px",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: C.ink,
                    }}
                  >
                    What&rsquo;s offered
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    {[
                      "Pumpkin Patch",
                      "Corn Maze",
                      "Christmas Trees",
                      "Summer Camp",
                      "Hayrides",
                      "Petting Zoo",
                      "Birthday Parties",
                      "Private Events",
                    ].map((item) => (
                      <span
                        key={item}
                        style={{
                          background: C.cream,
                          color: C.muted,
                          fontSize: "0.8rem",
                          padding: "4px 12px",
                          borderRadius: 999,
                          border: `1px solid ${C.border}`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Bartlett Card ─── */}
            <div
              style={{
                background: C.card,
                borderRadius: 20,
                border: `1px solid ${C.border}`,
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ position: "relative" }}>
                <image-slot
                  placeholder="Bartlett farm photo"
                  shape="rect"
                  radius="0"
                  style={{ minHeight: 220, borderRadius: 0 }}
                ></image-slot>
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "#3A7D44",
                    color: "#fff",
                    fontFamily: fonts.body,
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    padding: "4px 12px",
                    borderRadius: 999,
                    lineHeight: "22px",
                  }}
                >
                  THE ORIGINAL
                </span>
              </div>
              <div style={{ padding: "28px 28px 32px" }}>
                <h2
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: C.ink,
                    margin: "0 0 12px",
                  }}
                >
                  Bartlett
                </h2>
                <p style={{ margin: "0 0 6px", fontSize: "0.95rem" }}>
                  4595 N. Germantown Rd., Arlington, TN 38002
                </p>
                <p style={{ margin: "0 0 14px", fontSize: "0.95rem" }}>
                  <a
                    href="tel:+19013590800"
                    style={{
                      color: C.barnRed,
                      fontWeight: 700,
                      textDecoration: "none",
                      fontSize: "1.05rem",
                    }}
                  >
                    (901) 359-0800
                  </a>
                </p>
                <a
                  href="https://maps.google.com/?q=4595+N+Germantown+Rd+Arlington+TN+38002"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    color: C.orange,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                    marginBottom: 20,
                  }}
                >
                  Google Maps directions &rarr;
                </a>
                <div
                  style={{
                    borderTop: `1px solid ${C.border}`,
                    paddingTop: 18,
                    marginTop: 0,
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 10px",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: C.ink,
                    }}
                  >
                    What&rsquo;s offered
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    {[
                      "Pumpkin Patch",
                      "Corn Maze",
                      "Birthday Parties",
                      "Field Trips",
                    ].map((item) => (
                      <span
                        key={item}
                        style={{
                          background: C.cream,
                          color: C.muted,
                          fontSize: "0.8rem",
                          padding: "4px 12px",
                          borderRadius: 999,
                          border: `1px solid ${C.border}`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            3. HOURS
           ═══════════════════════════════════════════ */}
        <section
          style={{
            background: C.tint,
            padding: "72px 24px",
          }}
        >
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: fonts.display,
                fontSize: "2rem",
                fontWeight: 700,
                color: C.ink,
                textAlign: "center",
                margin: "0 0 40px",
              }}
            >
              Hours
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 20,
              }}
            >
              {/* Weekday */}
              <div
                style={{
                  background: C.card,
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                  padding: "24px 24px 28px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: C.ink,
                    margin: "0 0 6px",
                  }}
                >
                  Weekdays
                </p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: C.orange,
                    margin: "0 0 4px",
                    fontFamily: fonts.body,
                  }}
                >
                  9 AM &ndash; 6 PM
                </p>
                <p style={{ fontSize: "0.85rem", color: C.muted, margin: 0 }}>
                  Monday &ndash; Friday
                </p>
              </div>

              {/* Weekend */}
              <div
                style={{
                  background: C.card,
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                  padding: "24px 24px 28px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: C.ink,
                    margin: "0 0 6px",
                  }}
                >
                  Weekends
                </p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: C.orange,
                    margin: "0 0 4px",
                    fontFamily: fonts.body,
                  }}
                >
                  8 AM &ndash; 7 PM
                </p>
                <p style={{ fontSize: "0.85rem", color: C.muted, margin: 0 }}>
                  Saturday &amp; Sunday
                </p>
              </div>

              {/* Seasonal */}
              <div
                style={{
                  background: C.card,
                  borderRadius: 16,
                  border: `1px solid ${C.border}`,
                  padding: "24px 24px 28px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: fonts.display,
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: C.ink,
                    margin: "0 0 6px",
                  }}
                >
                  Seasonal
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: C.orange,
                    margin: "0 0 4px",
                    fontFamily: fonts.body,
                  }}
                >
                  Hours Vary
                </p>
                <p style={{ fontSize: "0.85rem", color: C.muted, margin: 0 }}>
                  Check activity pages for seasonal and holiday hours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            4. ADMISSION & PRICING
           ═══════════════════════════════════════════ */}
        <section
          style={{
            background: C.cream,
            padding: "72px 24px",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: fonts.display,
                fontSize: "2rem",
                fontWeight: 700,
                color: C.ink,
                margin: "0 0 16px",
              }}
            >
              Admission &amp; pricing
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: C.body,
                margin: "0 0 24px",
                lineHeight: 1.7,
              }}
            >
              Admission is always <strong>free</strong>. You only pay for the
              activities you enjoy &mdash; hayrides, corn maze, pumpkins, and
              more. It&rsquo;s our way of making sure a day at the farm is
              accessible for every family.
            </p>
            <div
              style={{
                background: C.tint,
                borderRadius: 14,
                border: `1px solid ${C.border}`,
                padding: "24px 28px",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  color: C.orange,
                  margin: "0 0 8px",
                  fontSize: "0.95rem",
                }}
              >
                &#127758; Group rates available
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: C.muted,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Planning a school field trip, church group outing, or large
                gathering? We offer discounted group rates for parties of 15
                or more. Call us to book your date.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            5. FAQ / PRACTICAL NOTES
           ═══════════════════════════════════════════ */}
        <section
          style={{
            background: C.tint,
            padding: "72px 24px",
          }}
        >
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: fonts.display,
                fontSize: "2rem",
                fontWeight: 700,
                color: C.ink,
                textAlign: "center",
                margin: "0 0 40px",
              }}
            >
              Good to know
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 16,
              }}
            >
              {/* Parking */}
              <FaqCard icon="&#128663;" title="Parking" text="Free on-site parking for all visitors. Overflow lot available on busy weekends." />
              {/* Cash & Cards */}
              <FaqCard icon="&#128179;" title="Cash &amp; cards" text="We accept cash, Apple Pay, and all major credit cards." />
              {/* No Pets */}
              <FaqCard icon="&#128054;" title="No pets" text="For the safety of our animals and guests, only service animals are permitted." />
              {/* Weather */}
              <FaqCard icon="&#9728;&#65039;" title="Weather policy" text="We operate rain or shine. In severe weather, check our Facebook page for closures." />
              {/* Restrooms */}
              <FaqCard icon="&#128701;" title="Restrooms" text="Portable restrooms are available at both locations throughout the season." />
              {/* Food */}
              <FaqCard icon="&#127860;" title="Food &amp; drinks" text="Concession stand with snacks, drinks, and seasonal treats. Outside food welcome." />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            6. CONTACT CTA
           ═══════════════════════════════════════════ */}
        <section
          style={{
            background: C.cream,
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: fonts.handwritten,
                fontSize: "1.5rem",
                color: C.orange,
                margin: "0 0 12px",
              }}
            >
              Still have questions?
            </p>
            <p
              style={{
                fontSize: "1.15rem",
                color: C.body,
                margin: "0 0 28px",
                lineHeight: 1.7,
              }}
            >
              Give us a call &mdash; we love hearing from you.
            </p>
            <a
              href="tel:+19013590800"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: C.orange,
                color: "#fff",
                fontFamily: fonts.body,
                fontWeight: 700,
                fontSize: "1.2rem",
                padding: "16px 40px",
                borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(192,95,23,0.3)",
                transition: "background 0.2s",
              }}
            >
              &#128222; (901) 359-0800
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ─── FAQ card sub-component ─── */
function FaqCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div
      style={{
        background: C.card,
        borderRadius: 14,
        border: `1px solid ${C.border}`,
        padding: "24px 20px",
      }}
    >
      <p style={{ fontSize: "1.6rem", margin: "0 0 8px", lineHeight: 1 }}>{icon}</p>
      <p
        style={{
          fontFamily: fonts.display,
          fontWeight: 700,
          fontSize: "1rem",
          color: C.ink,
          margin: "0 0 6px",
        }}
      >
        {title}
      </p>
      <p style={{ fontSize: "0.85rem", color: C.muted, margin: 0, lineHeight: 1.6 }}>
        {text}
      </p>
    </div>
  );
}
