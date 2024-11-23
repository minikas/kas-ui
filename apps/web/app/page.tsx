"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Apple } from "@/components/icons/apple";
import { Wallet } from "@/components/icons/wallet";
import { Wise } from "@/components/icons/wise";
import { Nubank } from "@/components/icons/nubank";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimation,
} from "framer-motion";
import { useEffect } from "react";
import { Candle } from "@/components/icons/candle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-2">
      <header className="w-full mx-auto flex flex-col items-center p-4 sm:p-10 gap-10">
        <div className="flex gap-2 items-center ">
          <div className="w-7 h-7 bg-pink-500 rounded-full" />
          <div className="flex gap-2">
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
            </p>
          </div>
        </div>
      </header>
      <main className="flex flex-wrap items justify-center gap-10 self-center">
        <Front />
        <Back />
      </main>
    </div>
  );
}

const Front = () => {
  return (
    <div className="flex flex-col gap-10 rounded-3xl p-7 bg-white w-72 h-72 shadow-lg">
      <p className="text-black leading-7 text-xl" style={{ fontWeight: 550 }}>
        Manager your
        <motion.span
          className="relative inline-block align-middle w-9 h-6 mx-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="absolute flex flex-col w-full">
            <Wise className="transform transition-all duration-300" />
            <Nubank className="-mt-[20px] transform transition-all duration-300" />
          </span>
        </motion.span>
        cards effortlessly with Apple Wallet. Track spending trends with
        detailed
        <Candle className="inline-block w-6 h-6 mx-1" />
        charts.
      </p>
      <Button className="rounded-full h-10">
        <Plus className="w-4 h-4 mr-2" />
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
    <div className="relative flex flex-col gap-10 rounded-3xl p-4 bg-walletShadow  w-72 h-72 shadow-lg group">
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
        <Wise className="transform transition-all duration-300 group-hover:-rotate-3 group-hover:-translate-y-2" />
        <Nubank className="-mt-[128px] transform transition-all duration-300 group-hover:-rotate-6 group-hover:-translate-y-4" />
      </div>
    </div>
  );
};
