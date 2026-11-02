import type { ComponentType } from "react";
import { InBetweenCover } from "./InBetweenCover";
import { InBetweenStem } from "./InBetweenStem";

export type PageDef = { slug: string; title: string; theme: "in-between" | "fragments"; Component: ComponentType };

export const pages: PageDef[] = [
  { slug: "in-between-cover", title: "Cover", theme: "in-between", Component: InBetweenCover },
  { slug: "in-between-stem", title: "STEM divider", theme: "in-between", Component: InBetweenStem },
];
export const bySlug = (s: string) => pages.find((p) => p.slug === s);
