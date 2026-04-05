import type { ComponentProps, ReactNode } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  label: string;
  hint?: ReactNode;
  className?: string;
  inputClassName?: string;
} & Omit<ComponentProps<typeof Input>, "id">;

/**
 * Label + Input stack with consistent vertical rhythm for forms.
 */
export function FormField({
  id,
  label,
  hint,
  className,
  inputClassName,
  ...inputProps
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} className={cn("min-h-9", inputClassName)} {...inputProps} />
      {hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}
