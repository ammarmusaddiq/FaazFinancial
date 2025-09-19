import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { AppContextProvider } from "@/context/AppContext.jsx";
import "./globals.css";

export const metadata = {
  title: "Faaz Financial Group",
  description: "Created with Next.js",
  generator: "Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AppContextProvider>
          {children}
        </AppContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
