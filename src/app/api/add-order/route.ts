import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { CONSUMER_KEY, CONSUMER_SECRET } = process.env;
    if (!CONSUMER_KEY || !CONSUMER_SECRET) {
      return NextResponse.json(
        { message: "Missing API keys" },
        { status: 500 }
      );
    }

    const response = await axios.post(
      `https://wordpress.prezentowyswiat.pl/wp/wp-json/wc/v3/orders?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`,
      body,
      { headers: { "Content-Type": "application/json" } }
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error creating order:",
        error.response?.data || error.message
      );
      return NextResponse.json(
        { error: error.response?.data || "Internal Server Error" },
        { status: error.response?.status || 500 }
      );
    }

    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
