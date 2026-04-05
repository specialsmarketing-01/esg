"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { ContentCard } from "@/components/primitives/content-card";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { design } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const STEPS = [
  "Company Profile",
  "Upload Documents",
  "Preferences",
  "Review & Finish",
] as const;

const industryLabels: Record<string, string> = {
  manufacturing: "Manufacturing",
  retail: "Retail & wholesale",
  services: "Professional services",
  tech: "Technology",
  hospitality: "Hospitality & tourism",
  other: "Other",
};

const employeeLabels: Record<string, string> = {
  "1-10": "1–10",
  "11-50": "11–50",
  "51-250": "51–250",
  "250+": "250+",
};

const countryLabels: Record<string, string> = {
  AT: "🇦🇹 Austria",
  DE: "🇩🇪 Germany",
  CH: "🇨🇭 Switzerland",
  EU: "Other EU country",
  OTHER: "Outside Europe",
};

function OnboardingStepper({ currentStep }: { currentStep: number }) {
  const progressValue = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium text-muted-foreground">
          <span>
            Step {currentStep + 1} of {STEPS.length}
          </span>
          <span className="tabular-nums">{Math.round(progressValue)}%</span>
        </div>
        <Progress value={progressValue} />
      </div>
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3" aria-label="Onboarding progress">
        {STEPS.map((label, i) => {
          const done = i < currentStep;
          const active = i === currentStep;
          return (
            <li
              key={label}
              className={cn(
                "rounded-lg border px-2 py-2.5 text-center transition-all duration-200 sm:px-3 sm:py-3",
                done && "border-primary/30 bg-primary/5 text-primary",
                active &&
                  "border-primary bg-primary/10 text-foreground shadow-sm ring-1 ring-primary/20",
                !done &&
                  !active &&
                  "border-border/70 bg-muted/20 text-muted-foreground"
              )}
            >
              <span className="block text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">
                {i + 1}
              </span>
              <span className="mt-1 block text-[11px] font-medium leading-tight sm:text-xs">
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState<string | null>(null);
  const [employees, setEmployees] = useState<string | null>(null);
  const [country, setCountry] = useState<string>("AT");
  const [hasEsgDocuments, setHasEsgDocuments] = useState(false);

  const [prefCsrd, setPrefCsrd] = useState(false);
  const [prefVoluntary, setPrefVoluntary] = useState(true);
  const [prefBank, setPrefBank] = useState(false);
  const [language, setLanguage] = useState<string | null>("de");

  const step0Valid =
    companyName.trim().length > 1 &&
    industry !== null &&
    employees !== null;

  const step2Valid = language !== null;
  const canContinue =
    (step === 0 && step0Valid) ||
    (step === 1 && true) ||
    (step === 2 && step2Valid) ||
    step === 3;

  function goNext() {
    if (step < STEPS.length - 1) setStep((s) => s + 1);
    else router.push("/dashboard");
  }

  function goBack() {
    if (step > 0) setStep((s) => s - 1);
  }

  function skipForNow() {
    router.push("/upload");
  }

  const summary = useMemo(
    () => ({
      company: companyName.trim() || "—",
      industry: (industry && industryLabels[industry]) || "—",
      employees: (employees && employeeLabels[employees]) || "—",
      country: countryLabels[country] ?? country,
      hasDocs: hasEsgDocuments ? "Yes" : "No",
      prefs: [
        prefVoluntary && "Voluntary reporting",
        prefCsrd && "CSRD-style preparation",
        prefBank && "Bank / lender questionnaires",
      ].filter(Boolean),
      language: language === "de" ? "German" : language === "en" ? "English" : "—",
    }),
    [
      companyName,
      industry,
      employees,
      country,
      hasEsgDocuments,
      prefVoluntary,
      prefCsrd,
      prefBank,
      language,
    ]
  );

  return (
    <div className={design.page.centeredNarrow}>
      <OnboardingStepper currentStep={step} />

      <ContentCard elevation="lg" className="mt-8 border-border/70">
          <CardHeader className="text-center sm:text-left">
            <CardTitle className="text-lg sm:text-xl">
              {step === 0 && "Company Profile"}
              {step === 1 && "Upload Documents"}
              {step === 2 && "Preferences"}
              {step === 3 && "Review & Finish"}
            </CardTitle>
            <CardDescription className="text-center sm:text-left">
              {step === 0 &&
                "Tell us about your organization so we can tailor your ESG workspace."}
              {step === 1 &&
                "Add files that describe your environmental and social footprint."}
              {step === 2 &&
                "Choose how you want reports framed — you can change this anytime."}
              {step === 3 &&
                "Confirm your details before we open your dashboard preview."}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            {step === 0 && (
              <>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    placeholder="e.g. Alpenwerk GmbH"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    autoComplete="organization"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Industry</Label>
                  <Select
                    value={industry ?? undefined}
                    onValueChange={(v) => setIndustry(v ?? null)}
                  >
                    <SelectTrigger className="w-full min-w-0">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail & wholesale</SelectItem>
                      <SelectItem value="services">Professional services</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="hospitality">Hospitality & tourism</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Number of Employees</Label>
                  <Select
                    value={employees ?? undefined}
                    onValueChange={(v) => setEmployees(v ?? null)}
                  >
                    <SelectTrigger className="w-full min-w-0">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1–10</SelectItem>
                      <SelectItem value="11-50">11–50</SelectItem>
                      <SelectItem value="51-250">51–250</SelectItem>
                      <SelectItem value="250+">250+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Country</Label>
                  <Select value={country} onValueChange={(v) => setCountry(v ?? "AT")}>
                    <SelectTrigger className="w-full min-w-0">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AT">{countryLabels.AT}</SelectItem>
                      <SelectItem value="DE">{countryLabels.DE}</SelectItem>
                      <SelectItem value="CH">{countryLabels.CH}</SelectItem>
                      <SelectItem value="EU">{countryLabels.EU}</SelectItem>
                      <SelectItem value="OTHER">{countryLabels.OTHER}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border/60 bg-muted/15 p-4 transition-colors duration-200 hover:bg-muted/25">
                  <Checkbox
                    id="has-esg-docs"
                    checked={hasEsgDocuments}
                    onCheckedChange={(c) => setHasEsgDocuments(c === true)}
                    className="mt-0.5"
                  />
                  <span className="text-sm font-medium leading-snug text-foreground">
                    I already have ESG-related documents
                  </span>
                </label>
              </>
            )}

            {step === 1 && (
              <div className="flex flex-col items-center gap-6 rounded-xl border border-dashed border-primary/25 bg-primary/[0.03] px-4 py-10 text-center">
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Upload energy bills, policies, prior reports, or spreadsheets. The
                  next screen in the app accepts drag-and-drop — this step is here so
                  you know what to prepare.
                </p>
                <Link
                  href="/upload"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-primary/30 bg-background"
                  )}
                >
                  Open upload page
                </Link>
              </div>
            )}

            {step === 2 && (
              <>
                <div className="flex flex-col gap-3">
                  <Label className="text-foreground">Reporting context</Label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border/60 bg-muted/15 p-4">
                    <Checkbox
                      checked={prefVoluntary}
                      onCheckedChange={(c) => setPrefVoluntary(c === true)}
                      className="mt-0.5"
                    />
                    <span className="text-sm leading-snug text-foreground">
                      Voluntary sustainability report
                    </span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border/60 bg-muted/15 p-4">
                    <Checkbox
                      checked={prefCsrd}
                      onCheckedChange={(c) => setPrefCsrd(c === true)}
                      className="mt-0.5"
                    />
                    <span className="text-sm leading-snug text-foreground">
                      CSRD / ESRS preparation (light)
                    </span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border/60 bg-muted/15 p-4">
                    <Checkbox
                      checked={prefBank}
                      onCheckedChange={(c) => setPrefBank(c === true)}
                      className="mt-0.5"
                    />
                    <span className="text-sm leading-snug text-foreground">
                      Bank or investor questionnaires
                    </span>
                  </label>
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Language</Label>
                  <Select
                    value={language ?? undefined}
                    onValueChange={(v) => setLanguage(v ?? null)}
                  >
                    <SelectTrigger className="w-full min-w-0">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {step === 3 && (
              <div className="space-y-4 rounded-xl border border-border/60 bg-muted/20 p-4 text-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Check className="size-4" strokeWidth={2.5} aria-hidden />
                  <span className="font-medium text-foreground">
                    Ready to review
                  </span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Company:</span>{" "}
                    {summary.company}
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Industry:</span>{" "}
                    {summary.industry}
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Employees:</span>{" "}
                    {summary.employees}
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Country:</span>{" "}
                    {summary.country}
                  </li>
                  <li>
                    <span className="font-medium text-foreground">ESG documents:</span>{" "}
                    {summary.hasDocs}
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Focus:</span>{" "}
                    {summary.prefs.length ? summary.prefs.join(", ") : "—"}
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Language:</span>{" "}
                    {summary.language}
                  </li>
                </ul>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-6 border-t border-border/60 bg-muted/10">
            <p className="text-center text-xs leading-relaxed text-muted-foreground">
              Your data is secure and will never be shared.
            </p>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {step > 0 ? (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-border/80 sm:w-auto"
                  onClick={goBack}
                >
                  <ArrowLeft className="mr-1 size-4" aria-hidden />
                  Back
                </Button>
              ) : (
                <span className="hidden sm:block" aria-hidden />
              )}
              {step === 0 ? (
                <div className="flex w-full flex-col-reverse gap-3 sm:ml-auto sm:w-auto sm:flex-row sm:flex-row-reverse sm:justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-border/80 sm:w-auto"
                    onClick={skipForNow}
                  >
                    Skip for now
                  </Button>
                  <Button
                    type="button"
                    className="w-full shadow-soft transition-all duration-200 hover:shadow-soft-lg sm:w-auto sm:min-w-[9rem]"
                    disabled={!canContinue}
                    onClick={goNext}
                  >
                    Continue
                    <ArrowRight className="ml-1 size-4" aria-hidden />
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  className="w-full shadow-soft transition-all duration-200 hover:shadow-soft-lg sm:ml-auto sm:w-auto sm:min-w-[9rem]"
                  disabled={!canContinue}
                  onClick={goNext}
                >
                  {step === STEPS.length - 1 ? (
                    <>
                      Finish
                      <Check className="ml-1 size-4" aria-hidden />
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="ml-1 size-4" aria-hidden />
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardFooter>
      </ContentCard>
    </div>
  );
}
