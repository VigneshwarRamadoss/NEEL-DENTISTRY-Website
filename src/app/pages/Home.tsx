import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { ServicesOverview } from "../components/ServicesOverview";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { MeetDoctor } from "../components/MeetDoctor";
import { Testimonials } from "../components/Testimonials";
import { SmileGallerySection } from "../components/SmileGallery";
import { CtaBanner } from "../components/CtaBanner";

export function Home() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <MeetDoctor />
      <SmileGallerySection />
      <Testimonials />
      <CtaBanner />
    </div>
  );
}
