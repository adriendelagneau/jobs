import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { NextResponse } from "next/server";

export const POST = verifySignatureAppRouter(
  async (req: Request) => {
    const body = await req.json();

    console.log("✅ Verified QStash job", body);

    return NextResponse.json({ ok: true });
  },
  {
    currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY!,
    nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY!,
  }
);

