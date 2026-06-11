"use client";

import { useEffect, useState } from "react";

const MARQUEE_ADS = [
  "🔥 MEGA DEAL: buy 1 cable, get 0 free!",
  "📣 You are visitor number 1,000,000, claim your prize!",
  "💸 Lower your mortgage with this ONE weird gadget!",
  "🚀 Download more RAM today (legally?! )",
  "🎁 A wild discount appeared! Act in the next 4 seconds!",
];

export default function AdBanner() {
  const [isPremium, setIsPremium] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const premium = localStorage.getItem("premium");
    if (premium === "true") setIsPremium(true);
  }, []);

  if (!mounted || isPremium) return null;

  return (
    <>
      {/* Top marquee */}
      <div className="overflow-hidden border-y border-yellow-500/40 bg-yellow-300 text-sm font-bold text-black">
        <div className="ad-marquee flex w-max gap-12 py-2 pl-12">
          {[...MARQUEE_ADS, ...MARQUEE_ADS].map((text, i) => (
            <span key={i} className="whitespace-nowrap">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Floating ad */}
      <aside className="fixed bottom-4 right-4 z-50 w-60 rounded-xl border-2 border-pink-500 bg-gradient-to-br from-fuchsia-500 to-orange-400 p-4 text-white shadow-2xl">
        <p className="text-xs uppercase">Advertisement</p>
        <p className="mt-1 text-lg font-black">CONGRATULATIONS! 🎉</p>
        <p className="mt-1 text-sm">
          Claim your surprise discount before it disappears!
        </p>
      </aside>
    </>
  );
}