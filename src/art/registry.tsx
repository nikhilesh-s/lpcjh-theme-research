import type { ComponentType } from "react";
import { InBetweenCover } from "./InBetweenCover";
import { InBetweenStem } from "./InBetweenStem";
import { FragmentsCover } from "./FragmentsCover";
import { FragmentsArts } from "./FragmentsArts";
import { RationalePage, SpecPage } from "./Docs";
import { Deck } from "./Deck";
import { ResearchPage } from "./ResearchPage";

export type PageDef = { slug: string; title: string; theme: "in-between" | "fragments"; Component: ComponentType; kind?: "deck" };

export const pages: PageDef[] = [
  { slug: "in-between-cover", title: "Cover", theme: "in-between", Component: InBetweenCover },
  { slug: "in-between-stem", title: "STEM divider", theme: "in-between", Component: InBetweenStem },
  { slug: "fragments-cover", title: "Cover", theme: "fragments", Component: FragmentsCover },
  { slug: "fragments-arts", title: "ARTS divider", theme: "fragments", Component: FragmentsArts },
  { slug: "in-between-research", title: "Research page", theme: "in-between", Component: () => <ResearchPage theme="in-between" /> },
  { slug: "fragments-research", title: "Research page", theme: "fragments", Component: () => <ResearchPage theme="fragments" /> },
  { slug: "in-between-spec", title: "Palette and Typography", theme: "in-between", Component: () => <SpecPage theme="in-between" /> },
  { slug: "fragments-spec", title: "Palette and Typography", theme: "fragments", Component: () => <SpecPage theme="fragments" /> },
  { slug: "rationale-1", title: "Design Rationale 1", theme: "in-between", Component: () => <RationalePage page={1} /> },
  { slug: "rationale-2", title: "Design Rationale 2", theme: "fragments", Component: () => <RationalePage page={2} /> },
  { slug: "deck", title: "Final Presentation", theme: "in-between", Component: Deck, kind: "deck" },
];
export const bySlug = (s: string) => pages.find((p) => p.slug === s);
