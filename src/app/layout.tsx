import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${jakarta.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
