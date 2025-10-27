"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[360px] h-[260px] md:w-[420px] md:h-[280px] shrink-0 flex items-stretch"
          >
            <Card
              className={cn(
                "w-full h-full flex flex-col justify-between rounded-2xl border border-border bg-card text-foreground shadow-sm transition-all duration-300",
                "hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
              )}
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <blockquote className="flex flex-col gap-4">
                  <span className="text-sm leading-relaxed text-muted-foreground line-clamp-5">
                    “{item.quote}”
                  </span>
                  <div className="flex items-center gap-4 mt-4">
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-10 w-10 rounded-full border-2 border-primary object-cover"
                      />
                    )}
                    <div className="flex flex-col">
                      <span className="font-medium text-primary">
                        {item.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
