import { Poppins } from "next/font/google";

import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/scrollsmoothcontainer";
import { MainNavbar } from "@/components/ui/reusablenavbar";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "CancerLine Funding",
  description: "CancerLine Companion Official Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <MainNavbar/>
        {children}
     </SmoothScrollProvider>
      </body>
    </html>
  );
}
