import { Client } from "@upstash/qstash";
import { NextResponse } from "next/server";

const qstash = new Client({
  token: process.env.QSTASH_TOKEN!,
});

export async function POST(req: Request) {
  const body = await req.json();

  const origin = new URL(req.url).origin;

  await qstash.publishJSON({
    url: `${origin}/api/job`,
    body: {
      message: "Hello from QStash",
      data: body,
    },
  });

  return NextResponse.json({ queued: true });
}
