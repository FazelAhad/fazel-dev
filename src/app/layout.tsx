import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fazel Ahad - Odoo Developer & Frontend Engineer",
  description: "Portfolio website of Fazel Ahad, an Odoo Developer and Frontend Engineer from Afghanistan",
  keywords: ["Fazel Ahad", "Odoo Developer", "Frontend Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Fazel Ahad" }],
  icons: {
    icon: "/fazel logo.jpeg",
    shortcut: "/fazel logo.jpeg",
    apple: "/fazel logo.jpeg",
  },
  openGraph: {
    title: "Fazel Ahad - Odoo Developer & Frontend Engineer",
    description: "Portfolio website of Fazel Ahad",
    type: "website",
    images: ["/fazel logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

