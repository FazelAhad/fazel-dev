import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography - Fazel Ahad",
  description: "Photography journey and gallery by Fazel Ahad",
};

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

