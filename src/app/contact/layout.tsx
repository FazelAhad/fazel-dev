import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Fazel Ahad",
  description: "Get in touch with Fazel Ahad for collaborations, projects, or inquiries",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

