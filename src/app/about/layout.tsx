import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Fazel Ahad",
  description: "Learn more about Fazel Ahad, a 21-year-old Odoo Developer and Frontend Engineer from Afghanistan",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

