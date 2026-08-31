import type { Metadata } from "next";
import { Anton, Oswald, Inter, Road_Rage, Rock_Salt, Lacquer } from "next/font/google";
import "./globals.css";
import "./contact-form.css";
import BrandLettering from "./BrandLettering";
import FormDelivery from "./FormDelivery";
const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const condensed = Oswald({ subsets: ["latin"], variable: "--font-condensed" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const punk = Road_Rage({ weight: "400", subsets: ["latin"], variable: "--font-punk" });
const logoStyle = Rock_Salt({ weight: "400", subsets: ["latin"], variable: "--font-logo" });
const posterHeading = Lacquer({ weight: "400", subsets: ["latin"], variable: "--font-poster-heading" });
export const metadata: Metadata = {
  title: {default:"Obsidian Motorcycles Ltd",template:"%s | Obsidian Motorcycles Ltd"},
  description: "Mobile motorcycle mechanics, breakdown assistance, recovery and transport for all types of motorbike in Shrewsbury, Shropshire.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${condensed.variable} ${body.variable} ${punk.variable} ${logoStyle.variable} ${posterHeading.variable}`}><FormDelivery/><BrandLettering/>{children}</body></html>;
}
