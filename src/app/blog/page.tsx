import type { Metadata } from "next";
import Blog from "../components/Blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, tutorials and insights from Olamilekan Kilani.",
};

export default function BlogPage() {
  return <Blog />;
}
