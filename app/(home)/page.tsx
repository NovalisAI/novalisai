import Container from "@/components/layout/Container";
import Hero from "@/components/home/hero";
import GradientSection from "@/components/home/values/GradientSection";
import Team from "@/components/home/team";
import Domains from "@/components/home/domains";
import Projects from "@/components/home/projects";
import About from "@/components/home/about";
import Process from "@/components/home/process";
import InnovationLab from "@/components/home/lab";
import PartnersSlider from "@/components/home/hero/PartnersSlider";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Container type="extrinsic">
        <Hero />
      </Container>

      <div className="py-12 bg-background border-y border-border">
        <PartnersSlider />
      </div>

      <Container type="intrinsic" className="bg-accent">
        <About />
      </Container>
      <Container type="extrinsic">
        <Domains />
      </Container>
      <Container type="extrinsic">
        <Process />
      </Container>
      <Container type="extrinsic">
        <Team />
      </Container>
      <Container type="extrinsic" id="projects">
        <Projects />
      </Container>

      <Container type="extrinsic">
        <InnovationLab />
      </Container>

      <Container
        type="intrinsic"
        style={{
          backgroundImage: "linear-gradient(90deg, #F58855 0%, #FDBA74 100%)",
        }}
      >
        <GradientSection />
      </Container>
    </div>
  );
}
