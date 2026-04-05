import Link from "next/link";

import { RegisterForm } from "@/components/auth/register-form";
import { Logo } from "@/components/brand/logo";
import { design } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
  return (
    <div className={design.page.appShell}>
      <header className={design.header.surfaceElevated}>
        <div
          className={cn(
            design.header.inner,
            design.header.innerShort,
            "max-w-6xl"
          )}
        >
          <Link
            href="/"
            className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Logo />
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Sign in
          </Link>
        </div>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:py-16">
        <RegisterForm />
      </div>
    </div>
  );
}
