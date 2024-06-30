import "@/styles/globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { GeistSans } from "geist/font/sans";

import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { ModalContainer } from "./shared/components/modal-container";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Collably",
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
      <body
        className={cn(
          fontSans.variable
        )}>

        <ClerkProvider>
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <ModalContainer />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
