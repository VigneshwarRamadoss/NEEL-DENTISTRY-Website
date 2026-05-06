import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { ServicesOverview } from "../components/ServicesOverview";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { MeetDoctor } from "../components/MeetDoctor";
import { Testimonials } from "../components/Testimonials";
import { SmileGallery } from "../components/SmileGallery";
import { CtaBanner } from "../components/CtaBanner";

export function Home() {
  return (
    <div className="pt-[80px]">
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <MeetDoctor />
      <SmileGallery />
      <Testimonials />
      <CtaBanner />
    </div>
  );
}
