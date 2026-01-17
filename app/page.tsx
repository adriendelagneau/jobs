"use client";

export default function Home() {
  const startJob = async () => {
    await fetch("/api/start-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ test: "123" }),
    });

    alert("Job started!");
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>QStash Background Job Test</h1>
      <button
        onClick={startJob}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          fontSize: 16,
        }}
      >
        Start Background Job
      </button>
    </main>
  );
}
