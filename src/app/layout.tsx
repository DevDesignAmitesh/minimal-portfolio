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

export const metadata: Metadata = {
  title: {
    default: "Amitesh Singh",
    template: "%s · Amitesh Singh",
  },
  description:
    "Full-stack developer who builds systems from first principles and scales them with care. A calm personal notebook on the internet.",
  metadataBase: new URL("https://amitesh.work/"),
  openGraph: {
    title: "Amitesh Singh",
    description:
      "Full-stack developer who builds thoughtful systems from first principles and scales them with care.",
    type: "website",
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
    description:
      "Full-stack developer who builds thoughtful systems from first principles and scales them with care.",
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
