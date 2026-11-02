import type { ComponentType } from "react";
import { InBetweenCover } from "./InBetweenCover";
import { InBetweenStem } from "./InBetweenStem";
import { FragmentsCover } from "./FragmentsCover";
import { FragmentsArts } from "./FragmentsArts";
import { ResearchPage } from "./ResearchPage";

export type PageDef = { slug: string; title: string; theme: "in-between" | "fragments"; Component: ComponentType };

export const pages: PageDef[] = [
  { slug: "in-between-cover", title: "Cover", theme: "in-between", Component: InBetweenCover },
  { slug: "in-between-stem", title: "STEM divider", theme: "in-between", Component: InBetweenStem },
  { slug: "fragments-cover", title: "Cover", theme: "fragments", Component: FragmentsCover },
  { slug: "fragments-arts", title: "ARTS divider", theme: "fragments", Component: FragmentsArts },
  { slug: "in-between-research", title: "Research page", theme: "in-between", Component: () => <ResearchPage theme="in-between" /> },
  { slug: "fragments-research", title: "Research page", theme: "fragments", Component: () => <ResearchPage theme="fragments" /> },
];
export const bySlug = (s: string) => pages.find((p) => p.slug === s);
