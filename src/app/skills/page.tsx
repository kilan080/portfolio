import type { Metadata } from "next";
import Skills from "../components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technologies and tools Olamilekan Kilani works with.",
};

export default function SkillsPage() {
  return <Skills />;
}
