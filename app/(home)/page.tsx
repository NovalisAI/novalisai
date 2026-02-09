import Container from "@/components/layout/Container";
import Categories from "@/components/home/categories";
import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/pricing";
import Styles from "@/components/home/styles";
import Values from "@/components/home/values";
import GradientSection from "@/components/home/values/GradientSection";
import Team from "@/components/home/team";
import Domains from "@/components/home/domains";
import Projects from "@/components/home/projects";
import About from "@/components/home/about";

export default function Home() {
  return (
    <div className="">
      <Container type="extrinsic">
        <Hero />
      </Container>

      <Container type="intrinsic" className="bg-accent">
        <About />
      </Container>
      <Container type="extrinsic">
        <Domains />
      </Container>
      <Container type="extrinsic" id="projects">
        <Projects />
      </Container>

      <Container
        type="intrinsic"
        style={{
          backgroundImage: "linear-gradient(90deg, #F58855 0%, #FDBA74 100%)",
        }}
      >
        <GradientSection />
      </Container>
      <Container type="extrinsic">
        <Team />
      </Container>
    </div>
  );
}
