import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import {
  ClerkProvider
} from '@clerk/nextjs'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Collaby",
  description: "Bring your dreams to reality",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <ClerkProvider>
        <body
          className={cn(
            fontSans.variable
          )}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
