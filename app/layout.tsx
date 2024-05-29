import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveContextProvider } from "@/context/ActionSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shohag Miah",
  description: "My simple fortfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveContextProvider>{children}</ActiveContextProvider>
      </body>
    </html>
  );
}
