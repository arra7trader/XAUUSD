import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "XAUUSD Extreme Expert";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(251,191,36,0.28), transparent 30%), radial-gradient(circle at 80% 15%, rgba(56,189,248,0.24), transparent 24%), linear-gradient(180deg, #08111a, #05070a)",
          color: "white",
          padding: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 24,
              border: "1px solid rgba(253, 224, 71, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              letterSpacing: 6,
              background: "rgba(251,191,36,0.12)",
            }}
          >
            XAU
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase" }}>
              XAUUSD Extreme Expert
            </div>
            <div style={{ fontSize: 54, fontWeight: 700, maxWidth: 820 }}>
              Belajar kenapa chart emas bisa naik, turun, dan berubah struktur
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "rgba(226,232,240,0.9)",
          }}
        >
          <span>Kurikulum • Chart Lab • Studi Kasus • Quiz • Glossary</span>
          <span>Bahasa Indonesia</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
