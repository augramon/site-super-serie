import { HeroSection } from "@/components/sections/HeroSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { StructureSection } from "@/components/sections/StructureSection";
import { TrainingGoalsSection } from "@/components/sections/TrainingGoalsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PositioningSection />
      <DifferentialsSection />
      <StructureSection />
      <TrainingGoalsSection />
      <SocialProofSection />
      <Divider className="mx-auto max-w-7xl" />
      <LocationSection />
      <ContactSection />
    </>
  );
}
