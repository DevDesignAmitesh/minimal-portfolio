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
  "Backend & real-time systems engineer in Delhi, exploring AI agents. Ex-founding engineer at Macro Rides; built an exchange matching engine, multiplayer games and AI agents.";

const title = "Amitesh Singh · Backend & Real-time Systems Engineer";

// Share preview: a screenshot of the bento homepage (1200x630). Retake it when the design changes.
const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Amitesh Singh: backend and real-time systems engineer. Bento portfolio with projects, experience and blogs.",
};

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s · Amitesh Singh",
  },
  description,
  metadataBase: new URL("https://www.amitesh.work"),
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    siteName: "Amitesh Singh",
    locale: "en_IN",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Amitesh48256",
    images: [ogImage],
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
