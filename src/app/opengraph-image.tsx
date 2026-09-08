import { ImageResponse } from "next/og";
import { person, heroCopy } from "@/lib/content";

export const runtime = "nodejs";
export const alt = "Mohammad Hunain — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b0c0e 0%, #1a1410 50%, #0b0c0e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e08a63",
            marginBottom: 24,
          }}
        >
          {person.location}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#f2f1ed",
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          {person.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 600,
            color: "#e08a63",
            marginBottom: 28,
          }}
        >
          {person.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#9a9da5",
            maxWidth: 900,
            lineHeight: 1.5,
          }}
        >
          {heroCopy.supporting}
        </div>
      </div>
    ),
    { ...size }
  );
}
