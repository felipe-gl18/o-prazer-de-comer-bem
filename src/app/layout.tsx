import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import MenuBar from "@/components/menu-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center h-full w-full bg-white gap-6">
          <div className="w-ful text-center text-slate-600 py-8">
            <h1 className="text-2xl font-medium">O prazer</h1>
            <p className="text-medium text-slate-400">de comer bem</p>
          </div>
          <NavBar />
          <MenuBar />
          <div className="w-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
