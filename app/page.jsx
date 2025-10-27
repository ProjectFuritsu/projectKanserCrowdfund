"use client";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";

import Testimonials from "@/components/ui/testimonials";
import { useState } from "react";

export default function Home() {
  const navItems = [
    { name: "About", link: "#" },
    { name: "How it Works", link: "#mission" },
    { name: "Partners", link: "#voices" },
    { name: "Stories", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-100">
    

      {/* === Main Content === */}
      <main>
        <section
          id="home"
          className="relative grid grid-cols-12 mx-16 min-h-screen"
        >
          <div className="flex flex-col col-start-4 col-end-10 items-center justify-center text-center">
            <h1 className="desktop:text-[64px] text-primary font-semibold">
              Give Hope. Fund Care. Change Lives.
            </h1>
            <p>
              CancerLine Companion connects donors with cancer patients and
              caregivers who need financial support. Every scan brings someone
              closer to healing.
            </p>
            <div className="flex flex-row justify-center items-center gap-6 mt-8">
              <Button className="w-32">Donate</Button>
              <Button className="w-32" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={60}
            staticity={30}
            color="#816DFF"
            size={1.2}
          />
        </section>

        <section
          id="mission"
          className="relative grid grid-cols-12 min-h-80 bg-white"
        >
          <div className="flex flex-col mx-16 col-start-4 col-end-10 justify-center items-center text-center">
            <h1 className="text-3xl font-semibold mb-6 text-primary">
              Our Mission
            </h1>
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

        <section
          id="voices"
          className="relative grid grid-cols-12 mx-16 min-h-screen"
        >
          <div className="flex flex-col mx-16 py-4 col-start-4 col-end-10 justify-center gap-6 items-center text-center">
            <h1 className="text-3xl font-semibold text-primary">
              Voices of Hope
            </h1>
            <p>
              Hear from our partner doctors about the impact we make together.
            </p>
            <div className="border-2 h-120 w-full"></div>
          </div>
        </section>
        <section className="relative grid grid-cols-12 min-h-screen bg-white">
          <div className="flex flex-col mx-16 py-4 col-start-4 col-end-10 justify-center gap-6 items-center text-center">
            <h1 className="text-3xl font-semibold text-primary">
              Stories That Inspire
            </h1>
            <p>Real experiences from our community</p>
            <Testimonials />
          </div>
        </section>
        <section
          
          className="relative grid grid-cols-12 min-h-100"
        >
          <div className="flex flex-col mx-16 col-start-4 col-end-10 justify-center items-center text-center">
            <h1 className="text-3xl font-semibold mb-6 text-primary">
              Join Our Mission of Hope
            </h1>
            <p>
              Every donation, every volunteer hour, every shared story brings us closer to a world where no one faces cancer alone.
            </p>
            <div className="flex flex-row justify-center items-center gap-6 mt-8">
              <Button className="w-42">Donate</Button>
              <Button className="w-42" variant="outline">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
