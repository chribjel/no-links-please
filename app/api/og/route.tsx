import { ImageResponse } from "next/og"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8fafc",
        backgroundImage: "linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)",
      }}
    >
      {/* Main content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          textAlign: "center",
        }}
      >
        {/* App title */}
        <div
          style={{
            fontSize: 84,
            fontWeight: "bold",
            color: "#1e293b",
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Unlinkify
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: "#64748b",
            marginBottom: "40px",
            maxWidth: "900px",
            lineHeight: 1.3,
          }}
        >
          Remove auto-linking from URLs with zero-width spaces
        </div>

        {/* Visual demonstration */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            backgroundColor: "white",
            padding: "30px 40px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
          }}
        >
          {/* Before */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                fontSize: 18,
                color: "#64748b",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Before
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#3b82f6",
                fontFamily: "monospace",
                textDecoration: "underline",
              }}
            >
              example.com
            </div>
          </div>

          {/* Arrow */}
          <div
            style={{
              fontSize: 40,
              color: "#6366f1",
            }}
          >
            →
          </div>

          {/* After */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                fontSize: 18,
                color: "#64748b",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              After
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#1e293b",
                fontFamily: "monospace",
              }}
            >
              example.​com
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            fontSize: 20,
            color: "#6366f1",
            marginTop: "30px",
            fontWeight: "500",
          }}
        >
          unlinkify.com
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
