import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Amitesh Singh: backend and real-time systems engineer in Delhi, India, exploring AI agents. Former founding engineer; built an exchange matching engine, real-time multiplayer games, and autonomous browser and coding agents.";

export const metadata: Metadata = {
  title: {
    default: "Amitesh Singh · Backend & Real-time Systems Engineer",
    template: "%s · Amitesh Singh",
  },
  description,
  metadataBase: new URL("https://www.amitesh.work"),
  openGraph: {
    title: "Amitesh Singh",
    description,
    type: "website",
    url: "/",
    images: [
      {
        url: "/card.png",
        width: 1012,
        height: 524,
        alt: "Amitesh Singh portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amitesh Singh",
    description,
    images: ["/card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Layout>{children}</Layout>
        </body>
      </ThemeProvider>
    </html>
  );
}
