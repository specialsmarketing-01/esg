"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getStoredUserEmail } from "@/lib/auth-storage";
import { AppLoadingSkeleton } from "@/components/layout/app-loading-skeleton";

/**
 * Static-site guard: redirects to /login when no user is stored in localStorage.
 */
export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<"checking" | "ok">("checking");

  useEffect(() => {
    const email = getStoredUserEmail();
    if (!email) {
      const next = encodeURIComponent(pathname || "/dashboard");
      router.replace(`/login?next=${next}`);
      return;
    }
    setStatus("ok");
  }, [router, pathname]);

  if (status !== "ok") {
    return (
      <div className="min-h-screen" aria-busy="true" aria-label="Loading workspace">
        <AppLoadingSkeleton />
      </div>
    );
  }

  return <>{children}</>;
}
