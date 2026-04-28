import crackers from "@/assets/crackers.png";
import { Heart, Share2 } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px]">
      {/* Phone frame */}
      <div className="relative rounded-[3rem] bg-foreground p-2 shadow-[0_30px_80px_-20px_hsl(var(--foreground)/0.35)]">
        <div className="overflow-hidden rounded-[2.5rem] bg-card">
          {/* Notch */}
          <div className="relative flex h-7 items-center justify-center">
            <div className="h-5 w-24 rounded-full bg-foreground" />
          </div>

          {/* Screen content */}
          <div className="px-5 pb-6 pt-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>‹ Back</span>
              <span className="font-medium">Food Scanner</span>
              <span>•••</span>
            </div>

            <div className="mt-4 flex justify-center">
              <div className="rounded-2xl bg-secondary/60 p-3">
                <img src={crackers} alt="Fig and Olive Crackers" className="h-32 w-32 object-contain" loading="lazy" />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif text-lg font-bold leading-tight text-foreground">
                Fig and Olive Crackers, Fig and Olive
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">Lesley Stowe</p>

              <div className="mt-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-score-red text-[10px] font-bold text-white">
                    !
                  </span>
                  <span className="text-sm font-bold text-foreground">46/100</span>
                </div>
                <span className="text-xs text-muted-foreground">Avoid</span>
                <div className="ml-auto flex gap-2">
                  <button className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-foreground">
                    <Heart className="h-3.5 w-3.5" />
                  </button>
                  <button className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-foreground">
                    <Share2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-secondary/50 p-3">
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs">
                    🥑
                  </div>
                  <p className="text-xs font-semibold text-foreground">Oliver Says:</p>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                  "This product's low score mainly comes from the processed sugars. Like honey and brown sugar, which can
                  impact your family's health when consumed frequently, especially for kids who are still developing.
                  Additionally, there are several additives that aren't ideal for your goal of avoiding processed foods,
                  making this a choice to consider more carefully."
                </p>
              </div>

              <div className="mt-3 border-t border-border pt-3">
                <p className="text-xs font-semibold text-foreground">Breakdowns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative ice cubes */}
      <div className="pointer-events-none absolute -left-16 top-1/3 hidden h-14 w-14 rotate-12 rounded-xl bg-card/70 shadow-lg backdrop-blur-sm md:block" />
      <div className="pointer-events-none absolute -right-14 top-1/4 hidden h-12 w-12 -rotate-6 rounded-xl bg-card/70 shadow-lg backdrop-blur-sm md:block" />
      <div className="pointer-events-none absolute -left-10 bottom-20 hidden h-10 w-10 rotate-6 rounded-lg bg-card/60 shadow-md backdrop-blur-sm md:block" />
      <div className="pointer-events-none absolute -right-20 bottom-32 hidden h-16 w-16 -rotate-12 rounded-2xl bg-card/70 shadow-lg backdrop-blur-sm md:block" />
    </div>
  );
};

export default PhoneMockup;
