"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText, Loader2, Sparkles, Trash2, UploadCloud } from "lucide-react";

import { ContentCard } from "@/components/primitives/content-card";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { design } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

type FileStatus = "processing" | "ready";

type MockFile = {
  id: string;
  name: string;
  size: string;
  status: FileStatus;
};

let mockId = 0;

function nextMockFile(): Omit<MockFile, "id" | "status"> {
  const pool = [
    { name: "Nachhaltigkeitsbericht_Entwurf.pdf", size: "2.4 MB" },
    { name: "Energie_2025_Q1-Q2.xlsx", size: "892 KB" },
    { name: "Emissionen_Scope1_2.csv", size: "156 KB" },
    { name: "HR_Policies_de.pdf", size: "1.1 MB" },
    { name: "Lieferanten_Übersicht.xlsx", size: "445 KB" },
  ] as const;
  const pick = pool[mockId % pool.length];
  mockId += 1;
  return { name: pick.name, size: pick.size };
}

function StatusBadge({ status }: { status: FileStatus }) {
  if (status === "processing") {
    return (
      <Badge
        variant="outline"
        className="gap-1 border-amber-200/90 bg-amber-50/90 font-medium text-amber-900"
      >
        <Loader2 className="size-3 animate-spin" aria-hidden />
        Processing
      </Badge>
    );
  }
  return (
    <Badge
      variant="secondary"
      className="border border-primary/15 bg-primary/10 font-medium text-primary"
    >
      Ready
    </Badge>
  );
}

export function FileUploadZone() {
  const router = useRouter();
  const [drag, setDrag] = useState(false);
  const [files, setFiles] = useState<MockFile[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const addMockFiles = useCallback(() => {
    const base = nextMockFile();
    const id = `f-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const entry: MockFile = {
      id,
      ...base,
      status: "processing",
    };
    setFiles((prev) => [...prev, entry]);

    const t = setTimeout(() => {
      setFiles((prev) =>
        prev.map((f) => (f.id === id ? { ...f, status: "ready" as const } : f))
      );
      timersRef.current.delete(id);
    }, 1600);
    timersRef.current.set(id, t);
  }, []);

  useEffect(() => {
    const pendingTimers = timersRef.current;
    return () => {
      pendingTimers.forEach((t) => clearTimeout(t));
      pendingTimers.clear();
    };
  }, []);

  const removeFile = (id: string) => {
    const t = timersRef.current.get(id);
    if (t) clearTimeout(t);
    timersRef.current.delete(id);
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className={design.page.centeredMd}>
      <ContentCard elevation="lg" className="overflow-hidden">
        <CardHeader className="border-b border-border/50 bg-secondary/20 pb-6">
          <h1 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Upload your ESG documents
          </h1>
          <CardDescription className="text-base">
            Drag files into the area below or click to add demo files. Nothing is sent
            to a server in this build.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-8 pt-8">
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                addMockFiles();
              }
            }}
            onDragEnter={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDrag(true);
            }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDrag(false);
              addMockFiles();
            }}
            onClick={addMockFiles}
            className={cn(
              "flex min-h-[min(22rem,55vh)] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out motion-safe:hover:-translate-y-0.5 sm:min-h-[20rem] sm:py-16",
              drag
                ? "border-primary/50 bg-primary/[0.1] shadow-[0_0_0_4px_rgb(31_122_99_/0.14)] motion-safe:scale-[1.01]"
                : "border-primary/25 bg-gradient-to-b from-secondary/55 via-secondary/35 to-secondary/20 hover:border-primary/45 hover:from-secondary/75 hover:via-secondary/45 hover:to-secondary/30 hover:shadow-soft"
            )}
          >
            <span
              className={cn(
                "flex size-16 items-center justify-center rounded-2xl text-primary transition-[transform,background-color] duration-300 ease-out",
                drag ? "scale-105 bg-primary/18 shadow-soft" : "bg-primary/10 shadow-sm"
              )}
            >
              <UploadCloud className="size-8" strokeWidth={1.35} aria-hidden />
            </span>
            <p className="mt-6 text-base font-semibold text-foreground">
              Click to upload
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              or drag and drop your files here
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-wide text-primary/80">
              Supported formats: PDF, Excel, CSV
            </p>
          </div>

          {files.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                Uploaded files
              </h3>
              <ul className="flex flex-col gap-2" aria-label="Uploaded files">
                {files.map((f) => (
                  <li
                    key={f.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-card px-4 py-3.5 shadow-sm transition-[border-color,box-shadow] duration-200 ease-out hover:border-primary/25 hover:shadow-soft"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FileText className="size-5" strokeWidth={1.5} aria-hidden />
                      </span>
                      <div className="min-w-0 text-left">
                        <p className="truncate font-medium text-foreground">
                          {f.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{f.size}</p>
                      </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <StatusBadge status={f.status} />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile(f.id);
                        }}
                        aria-label={`Remove ${f.name}`}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            className="flex gap-3 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] to-secondary/40 px-4 py-4 sm:px-5 sm:py-5"
            role="status"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Sparkles className="size-5" strokeWidth={1.5} aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-foreground/90">
              <span className="font-medium text-foreground">
                AI is preparing to analyze your documents
              </span>
              <span className="mt-1 block text-muted-foreground">
                Once you continue, we&apos;ll run a simulated analysis pipeline on your
                queue.
              </span>
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col-reverse gap-3 border-t border-border/50 bg-muted/20 px-4 py-6 sm:flex-row sm:justify-between sm:px-6">
          <Link
            href="/onboarding"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full border-border/80 bg-background sm:w-auto"
            )}
          >
            Back
          </Link>
          <Button
            type="button"
            className="w-full shadow-soft transition-all duration-200 hover:shadow-soft-lg sm:w-auto sm:min-w-[11rem]"
            disabled={files.length === 0}
            onClick={() => router.push("/processing")}
          >
            Continue to Analysis
          </Button>
        </CardFooter>
      </ContentCard>
    </div>
  );
}
