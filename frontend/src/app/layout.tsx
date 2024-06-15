import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "./markdown.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "@/components/layout/side-bar";
import Header from "@/components/layout/header";
import { ALL_AVAILABLE_OPENAI_MODELS } from "llamaindex";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Mai - Playground",
  description: "Powered by LLamaIndex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TooltipProvider>
          <div className="grid h-screen w-full pl-[56px]">
            <SideBar />
            <div className="flex flex-col">
              <Header />
              {children}
            </div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
