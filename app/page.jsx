import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "./../components/ui/blur-fade";
import { YouTubePlayer } from "@/components/ui/youtubeplayer";
import Testimonials from "@/components/ui/testimonials";

export default function MainPage() {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <main className=" bg-gray-100">
        <section className="relative grid grid-cols-12 mx-16 min-h-screen items-center justify-center">
          <div className="z-10 flex flex-col space-y-8 col-start-4 col-end-10 text-center">
            <BlurFade className="z-10 flex flex-col space-y-8 text-center">
            <h1
              animation="blurInUp"
              by="line"
              className="text-6xl font-semibold text-primary"
            >
              Give Hope. Fund Care. Change Lives.
            </h1>

            <h1
              animation="slideLeft"
              by="character"
              delay={1}
              className="text-base"
            >
              CancerLine Companion connects donors with cancer patients and
              caregivers who need financial support. Every scan brings someone
              closer to healing.
            </h1>
            </BlurFade>
            <BlurFade className="absolute h-[226px] w-[226px] rounded-full border-2 right-[-120] top-20 border-accent-foreground"></BlurFade>
            <BlurFade className="absolute h-[355px] w-[355px] rounded-full border-2 right-[-180] top-40 border-accent-foreground"></BlurFade>
            <BlurFade
              delay={1}
              className="flex flex-row items-center justify-center gap-5"
              inView
            >
              <Button className="w-32 h-10" variant="default">
                Donate now
              </Button>
              <Button className="w-32 h-10" variant="outline">
                Learn More
              </Button>
            </BlurFade>
          </div>
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={60}
            staticity={30}
            color="#816DFF"
            size={1.2}
          />
          <BlurFade className="absolute h-[226px] w-[266px] rounded-full border-2 left-[-200] bottom-70 border-accent-foreground"></BlurFade>
          <BlurFade className="absolute h-[355px] w-[355px] rounded-full border-2 left-[-180] bottom-20 border-accent-foreground"></BlurFade>
          <BlurFade className="absolute h-[141px] w-[141px] rounded-full border-2 left-[-90] bottom-5 border-accent-foreground"></BlurFade>
        </section>
        <section className="bg-background min-h-80 grid grid-cols-12">
          <BlurFade className="flex flex-col space-y-4 col-start-4 col-end-10 text-center justify-center items-center">
            <TextAnimate
              animation="blurInUp"
              by="line"
              className="text-3xl font-semibold text-primary"
            >
              Our Mission
            </TextAnimate>
            <TextAnimate animation="blurInUp" by="line" className="text-base">
              CancerLine exists to provide unwavering support, resources, and
              hope to cancer patients and their families throughout their
              journey. We believe that no one should face cancer alone, and
              through our comprehensive programs and community support, we
              ensure that every step of the way is met with compassion,
              understanding, and practical assistance.
            </TextAnimate>
          </BlurFade>
        </section>
        <section className="py-36 gap-9 grid grid-cols-12">
          <div className="flex flex-col space-y-4 col-start-4 col-end-10 text-center justify-center items-center">
            <TextAnimate
              animation="blurInUp"
              by="line"
              className="text-3xl font-semibold text-primary"
            >
              Voices of Hope
            </TextAnimate>
            <TextAnimate animation="blurInUp" by="line" className="text-base">
              Hear from our partner doctors about the impact we make together
            </TextAnimate>
          </div>
          <BlurFade
            className="col-start-4 col-end-10 justify-center items-center"
            inView
          >
            <YouTubePlayer videoId="WfwLnlGlCYM" />
          </BlurFade>
        </section>
        <section className="bg-background py-36 gap-9 grid grid-cols-12">
          <div className="flex flex-col space-y-4 col-start-4 col-end-10 text-center justify-center items-center">
            <TextAnimate
              animation="blurInUp"
              by="line"
              className="text-3xl font-semibold text-primary"
            >
              Stories That Inspire
            </TextAnimate>
            <TextAnimate animation="blurInUp" by="line" className="text-base">
              Real experiences from our community
            </TextAnimate>
            <BlurFade
              className="col-start-4 col-end-10 justify-center items-center"
              inView
            >
              <Testimonials />
            </BlurFade>
          </div>
        </section>
        <section className="bg-linear-to-br from-[#372AAC] via-[#5B50A0] to-[#372AAC] text-background min-h-80 grid grid-cols-12">
          <BlurFade className="flex flex-col space-y-4 col-start-4 col-end-10 text-center justify-center items-center">
            <TextAnimate
              animation="blurInUp"
              by="line"
              className="text-3xl font-semibold"
            >
              Join Our Mission of Hope
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="line"
              className="text-base font-light"
            >
              Every donation, every volunteer hour, every shared story brings us
              closer to a world where no one faces cancer alone.
            </TextAnimate>
            <BlurFade
              className="flex flex-row items-center justify-center gap-5"
              inView
            >
              <Button
                className="w-32 h-10 bg-background text-primary hover:bg-accent-foreground hover:text-background"
                variant="default"
              >
                Donate now
              </Button>
              <Button
                className="w-32 h-10 hover:text-background"
                variant="outline"
              >
                Learn More
              </Button>
            </BlurFade>
          </BlurFade>
        </section>
      </main>
    </div>
  );
}
