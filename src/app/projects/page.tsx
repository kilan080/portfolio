import type { Metadata } from "next";
import Projects from "../components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of projects built by Olamilekan Kilani.",
};

export default function ProjectsPage() {
  return <Projects />;
}
