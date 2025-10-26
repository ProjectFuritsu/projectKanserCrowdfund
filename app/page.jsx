import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { Particles } from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar />
      <main className="relative">
        <section className="relative grid grid-cols-12 mx-16 gap-6 min-h-screen">
          <div className="flex flex-col col-start-4 col-end-10 items-center justify-center text-center">
            <h1 className="desktop:text-[64px] text-primary font-semibold">
              Give Hope. Fund Care. Change Lives.
            </h1>
            <h2 className="">
              CancerLine Companion connects donors with cancer patients and
              caregivers who need financial support. Every scan brings someone
              closer to healing.
            </h2>
            <div className="flex flex-row justify-center items-center gap-6 mt-8 ">
              <Button className="w-32">Donate</Button>
              <Button className="w-32" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="absolute h-[226px] w-[226px] rounded-full border-2 right-[-120] top-20 border-accent-foreground"></div>
          <div className="absolute h-[355px] w-[355px] rounded-full border-2 right-[-180] top-40 border-accent-foreground"></div>
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={60}
            staticity={30}
            color="#816DFF"
            size={1.2}
          />
          <div className="absolute h-[226px] w-[266px] rounded-full border-2 left-[-200] bottom-100 border-accent-foreground"></div>
          <div className="absolute h-[355px] w-[355px] rounded-full border-2 left-[-180] bottom-40 border-accent-foreground"></div>
          <div className="absolute h-[141px] w-[141px] rounded-full border-2 left-[-90] bottom-20 border-accent-foreground"></div>
        </section>
        <section className="relative grid grid-cols-12 mx-16 gap-6">
          <div className="flex flex-col col-start-3 col-end-11 justify-center items-center text-center py-8">
            <h1 className="text-4xl font-semibold text-primary">Our Mission</h1>
            <p>
              CancerLine exists to provide unwavering support, resources, and
              hope to cancer patients and their families throughout their
              journey. We believe that no one should face cancer alone, and
              through our comprehensive programs and community support, we
              ensure that every step of the way is met with compassion,
              understanding, and practical assistance.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
