import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App | Andy YTLam",
  icons: { icon: "/favicon-96x96.png" },
  description:
    "The Blog app is built by Andy (Yan Ting Lam) to enhance the knowledge of Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} text-gray-700 bg-white dark:text-gray-300 dark:bg-black min-h-screen select-none transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <ToastContainer />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
