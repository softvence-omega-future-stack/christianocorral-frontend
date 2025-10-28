// app/page.tsx
import HeroSection from "@/components/homepage/HeroSection";
import FeatureSection from "@/components/homepage/FeatureSection";
import CategoryGrid from "@/components/homepage/CategoryGrid";
import HowItWorks from "@/components/homepage/HowItWorks";
import FullWidthImage from "@/components/homepage/FullwidthImage";
import CustomerExperiences from "@/components/homepage/CustomerReviews";
import WhyUs from "@/components/homepage/WhyUs";
import SubscribeSection from "@/components/homepage/SubscribeSection";
import TopCompanies from "@/components/homepage/TopCompanies";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <CategoryGrid />
      <HowItWorks />
      <FullWidthImage />
      <CustomerExperiences />
      <WhyUs />
      <SubscribeSection />
      <TopCompanies />
    </main>
  );
}
