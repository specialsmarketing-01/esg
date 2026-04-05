/**
 * Marketing / guest links that require login after static sign-in.
 */
export function hrefLoginNext(path: string): string {
  const normalized =
    path.startsWith("/") && !path.startsWith("//") ? path : "/dashboard";
  return `/login?next=${encodeURIComponent(normalized)}`;
}
