import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/site";

const serif = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], weight: ["300", "400", "500"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://trusttrio.com"),
  title: { default: "Trust Trio | A capable extension of your firm", template: "%s | Trust Trio" },
  description: "Reliable accounting, tax and wealth support for CPA firms, growing businesses and individuals across the US and India.",
  openGraph: { title: "Trust Trio", description: "A capable extension of your firm.", url: "https://trusttrio.com", siteName: "Trust Trio", type: "website" },
};

export const viewport: Viewport = { themeColor: "#123D32", width: "device-width", initialScale: 1 };

// Runs before first paint: lets CSS know scripting is available so reveal
// animations can start hidden. If scripting is off, everything stays visible.
const jsFlag = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
