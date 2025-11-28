import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Fazel Ahad",
  description: "Explore projects by Fazel Ahad including OCR apps, Face Detection, React applications, and more",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

