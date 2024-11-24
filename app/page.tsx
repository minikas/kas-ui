"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Apple } from "@/components/icons/apple";
import { Wallet } from "@/components/icons/wallet";
import { Wise } from "@/components/icons/wise";
import { Nubank } from "@/components/icons/nubank";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Candle } from "@/components/icons/candle";
import dynamic from "next/dynamic";

const RandomPoints = dynamic(
  () => import("@/components/randomPoints").then((mod) => mod.RandomPoints),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <RandomPoints />
      <div className="flex flex-col items-center justify-center min-h-screen p-5 relative z-10">
        <div className="flex items-center bg-slate-50 flex-col gap-6">
          <header className="flex gap-2 items-center">
            <div className="min-w-7 h-7 bg-pink-500 rounded-full" />
            <div className="flex gap-x-2 flex-wrap">
              <p className="text-xs font-mono">
                Crafted by
                <Link
                  target="_blank"
                  href="https://github.com/minikas"
                  className="ml-2 font-bold text-pink-500"
                >
                  Kas Ferreira
                </Link>
                .
              </p>
              <p className="text-xs font-mono">
                Designed by
                <Link
                  target="_blank"
                  href="https://x.com/hypeople"
                  className="ml-2 font-bold text-blue-600"
                >
                  @hypeople
                </Link>
                .
              </p>
            </div>
          </header>
          <main className="flex flex-wrap items justify-center gap-10 self-center">
            <Front />
            <Back />
          </main>
        </div>
      </div>
    </>
  );
}

const Front = () => {
  return (
    <div className="flex flex-col gap-10 rounded-3xl p-7 bg-white w-72 h-72 shadow-lg">
      <p className="text-black leading-7 text-xl" style={{ fontWeight: 550 }}>
        Manager your
        <motion.span
          className="relative inline-block align-middle w-8 h-5 mx-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="absolute flex flex-col w-full">
            <Wise className="transform transition-all duration-300 -rotate-12 -translate-y-1" />
            <Nubank className="-mt-[22px] transform transition-all duration-300" />
          </span>
        </motion.span>
        cards effortlessly with Apple Wallet. Track spending trends with
        detailed
        <Candle className="inline-block w-6 h-6 mx-1" />
        charts.
      </p>
      <Button className="rounded-full h-10 group">
        <Plus className="w-4 h-4 mr-2 transition-transform group-hover:rotate-90" />
        Add Card
      </Button>
    </div>
  );
};

const Back = () => {
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const rounded1 = useTransform(count1, (latest) => Math.round(latest));
  const rounded2 = useTransform(count2, (latest) => Math.round(latest));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const controls1 = animate(count1, 220, {
      duration: 1,
      ease: "easeOut",
    });
    const controls2 = animate(count2, 70, {
      duration: 1,
      ease: "easeOut",
    });

    return () => {
      controls1.stop();
      controls2.stop();
    };
  }, [count1, count2]);

  return (
    <div
      className="relative flex flex-col gap-10 rounded-3xl p-4 bg-walletShadow w-72 h-72 shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex-1 flex flex-col justify-end text-white">
        <div className="relative flex flex-col gap-2 z-10 p-4">
          <div className="flex items-center gap-1">
            <Apple className="w-5 h-5" />
            <p className="font-light text-sm" style={{ lineHeight: "unset" }}>
              Cash
            </p>
          </div>
          <motion.p className="text-4xl font-light">
            $<motion.span>{rounded1}</motion.span>,
            <motion.span className="opacity-60">{rounded2}</motion.span>
          </motion.p>
          <span className="text-xs font-light opacity-55">Total Balance</span>
        </div>
        <Wallet className="absolute w-full" />
      </div>
      <div className="absolute flex flex-col w-[82%] mx-auto ml-2">
        <Wise
          className={`transform transition-all duration-300 ${isHovered ? "-rotate-3 -translate-y-2" : ""}`}
        />
        <Nubank
          className={`-mt-[128px] transform transition-all duration-300 ${isHovered ? "-rotate-6 -translate-y-4" : ""}`}
        />
      </div>
    </div>
  );
};
