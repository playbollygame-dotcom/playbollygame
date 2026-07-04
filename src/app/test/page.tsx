export default function TestPage() {
  return (
    <div
      style={{
        padding: "40px",
        background: "#111827",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>
        Blog Image Test
      </h1>

      <h2>Test 1 - Direct Image</h2>

      <img
        src="/images/blog/blog1.jpg"
        alt="Blog 1"
        style={{
          width: "500px",
          height: "300px",
          objectFit: "cover",
          border: "5px solid red",
          display: "block",
        }}
      />

      <br />

      <h2>Test 2 - Logo</h2>

      <img
        src="/logo.png"
        alt="Logo"
        style={{
          width: "200px",
          border: "5px solid green",
          display: "block",
        }}
      />

      <br />

      <h2>Test 3 - Simple Text</h2>

      <p>If you can see this page, Next.js is working.</p>
    </div>
  );
}