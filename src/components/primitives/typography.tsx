import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";
import { design } from "@/lib/design-tokens";

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function DisplayHeading<T extends ElementType = "h1">({
  as,
  className,
  ...props
}: PolymorphicProps<T>) {
  const Comp = as ?? "h1";
  return <Comp className={cn(design.type.display, className)} {...props} />;
}

export function PageTitle<T extends ElementType = "h1">({
  as,
  className,
  ...props
}: PolymorphicProps<T>) {
  const Comp = as ?? "h1";
  return <Comp className={cn(design.type.pageTitle, className)} {...props} />;
}

export function SectionTitle<T extends ElementType = "h2">({
  as,
  className,
  ...props
}: PolymorphicProps<T>) {
  const Comp = as ?? "h2";
  return (
    <Comp className={cn(design.type.sectionTitle, className)} {...props} />
  );
}

export function Lead({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn(design.type.lead, className)} {...props} />;
}

export function Subtitle({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn(design.type.subtitle, className)} {...props} />;
}
