import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { PRODUCTS } from "@/lib/products";

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();
    const product = PRODUCTS[productId];
    if (!product) return NextResponse.json({ error: "Invalid product" }, { status: 400 });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techunaverse.com";

    const commonParams = {
      success_url: `${siteUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/resources`,
      metadata: { product_id: product.id, product_name: product.name, file: product.file },
      allow_promotion_codes: true,
    };

    const stripe = getStripe();
    let session;

    if (product.mode === "subscription") {
      session = await stripe.checkout.sessions.create({
        ...commonParams,
        mode: "subscription",
        line_items: [{
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: product.amount,
            recurring: { interval: product.interval! },
            product_data: { name: product.name, description: product.description },
          },
        }],
      });
    } else {
      session = await stripe.checkout.sessions.create({
        ...commonParams,
        mode: "payment",
        line_items: [{
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: product.amount,
            product_data: { name: product.name, description: product.description },
          },
        }],
      });
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Could not create checkout session." }, { status: 500 });
  }
}
