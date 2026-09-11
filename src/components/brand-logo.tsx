"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const WAVE_FRAMES = [site.logoWave1, site.logoWave2, site.logoWave1, site.logoWave2, site.logoWave1] as const;
const WAVE_EVERY_MS = 90_000;
const FRAME_MS = 180;

export function BrandLogo({
  size,
  priority = false,
}: {
  size: "header" | "footer";
  priority?: boolean;
}) {
  const [frame, setFrame] = useState(site.logo);
  const [waving, setWaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameTimer: number | undefined;
    let stopTimer: number | undefined;

    const wave = () => {
      setWaving(true);
      let index = 0;
      setFrame(WAVE_FRAMES[0]);
      frameTimer = window.setInterval(() => {
        index += 1;
        if (index >= WAVE_FRAMES.length) {
          window.clearInterval(frameTimer);
          setFrame(site.logo);
          return;
        }
        setFrame(WAVE_FRAMES[index]);
      }, FRAME_MS);
      stopTimer = window.setTimeout(() => {
        setWaving(false);
        setFrame(site.logo);
      }, WAVE_FRAMES.length * FRAME_MS + 200);
    };

    const first = window.setTimeout(wave, 1_500);
    const loop = window.setInterval(wave, WAVE_EVERY_MS);

    return () => {
      window.clearTimeout(first);
      window.clearInterval(loop);
      window.clearInterval(frameTimer);
      window.clearTimeout(stopTimer);
    };
  }, []);

  const box =
    size === "header"
      ? "h-[4.375rem] w-[4.375rem] sm:h-[5.625rem] sm:w-[5.625rem]"
      : "h-[6.25rem] w-[6.25rem]";

  return (
    <span className={`relative inline-flex overflow-hidden rounded-full bg-white shadow-[0_4px_16px_rgba(74,24,120,0.16)] ${box} ${waving ? "logo-waving" : ""}`}>
      <Image
        src={frame}
        alt={site.name}
        width={size === "header" ? 90 : 120}
        height={size === "header" ? 90 : 120}
        priority={priority}
        className="h-full w-full object-cover"
      />
      <Image src={site.logoWave1} alt="" width={1} height={1} className="sr-only" />
      <Image src={site.logoWave2} alt="" width={1} height={1} className="sr-only" />
    </span>
  );
}
