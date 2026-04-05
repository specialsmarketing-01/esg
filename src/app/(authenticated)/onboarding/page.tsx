import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";
import { AppChrome } from "@/components/layout/app-chrome";

export default function OnboardingPage() {
  return (
    <AppChrome
      title="Onboarding"
      description="Company profile, uploads, preferences, and review — all in your browser for this demo."
    >
      <OnboardingWizard />
    </AppChrome>
  );
}
