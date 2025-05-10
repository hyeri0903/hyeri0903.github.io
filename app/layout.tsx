import LeftSidebar from "components/LeftSideBar";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "Hyeri Jung",
  description: "Hyeri Jung Web Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/rabbit.png" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-black min-h-screen flex items-center justify-center">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="bg-green">
          <LeftSidebar />
          <div className="flex md:ml-64">
            {/* mobile 상단바 공간 확보 */}
            <main className="max-w-screen-lg pt-16">
              {children}
            </main>
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
