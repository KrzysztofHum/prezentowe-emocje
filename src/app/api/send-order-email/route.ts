import { NextResponse } from "next/server";
import { Resend } from "resend";
import { OrderConfirmation } from "@/emails/OrderConfirmations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { customer, orderDetails, paymentInfo } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["delivered@resend.dev"],
      subject: "Potwierdzenie zamówienia",
      react: OrderConfirmation({
        customer,
        orderDetails,
        paymentInfo,
      }),
    });
    // await resend.emails.send({
    //   from: "onboarding@resend.dev", // Użyj testowej domeny Resend!
    //   to: ["delivered@resend.dev"], // Adres testowy
    //   subject: "Testowy e-mail",
    //   html: "<p>To jest testowy e-mail wysłany z localhost.</p>",
    // });
    return NextResponse.json({ message: "Email wysłany!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Nie udało się wysłać e-maila, ${error}.` },
      { status: 500 }
    );
  }
}
