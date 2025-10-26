import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { Particles } from "@/components/ui/particles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <main className="relative">
        <section className="relative grid grid-cols-12 mx-[64px] gap-[24px] min-h-screen">
          <div className="flex flex-col col-start-3 col-end-11 items-center justify-center text-center">
            <h1 className="desktop:text-[64px] text-primary font-semibold">
              Give Hope. Fund Care. Change Lives.
            </h1>
            <h2 className="desktop:text-[20px]">
              CancerLine Companion connects donors with cancer patients and
              caregivers who need financial support. Every scan brings someone
              closer to healing.
            </h2>
            <div className="flex flex-row justify-center items-center gap-[24px] mt-[64px]">
              <Button className="h-[59px] w-[199px] text-[20px] rounded-[12px]">
                Donate
              </Button>
              <Button
                className="h-[59px] w-[199px] text-[20px] rounded-[12px]"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <div className="absolute h-[226px] w-[226px] rounded-full border-2 right-[-120] top-20 border-accent-foreground"></div>
        <div className="absolute h-[355px] w-[355px] rounded-full border-2 right-[-180] top-40 border-accent-foreground"></div>
        <Particles
            className="absolute inset-0"
            quantity={150}
            ease={60}
            staticity={30}
            color="#372AAC"
            size={1.2}
          />
          <div className="absolute h-[226px] w-[266px] rounded-full border-2 left-[-200] bottom-100 border-accent-foreground"></div>
          <div className="absolute h-[355px] w-[355px] rounded-full border-2 left-[-180] bottom-40 border-accent-foreground"></div>
          <div className="absolute h-[141px] w-[141px] rounded-full border-2 left-[-90] bottom-20 border-accent-foreground"></div>
      </main>
    </div>
  );
}
