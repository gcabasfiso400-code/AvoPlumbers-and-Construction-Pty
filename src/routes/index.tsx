import { createFileRoute } from "@tanstack/react-router";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Services } from "~/components/Services";
import { Projects } from "~/components/Projects";
import { WhyChooseUs } from "~/components/WhyChooseUs";
import { Testimonials } from "~/components/Testimonials";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
