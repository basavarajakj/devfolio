import type { Metadata } from "next";
import { Noto_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const notoSans = Noto_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500" ]
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Devfolio - A software engineer portfolio",
  description: "his is a personal portfolio made by bassu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={notoSans.className}>
        <ThemeProvider 
          defaultTheme="dark"
          storageKey="theme"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
