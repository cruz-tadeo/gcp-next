import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
export const helveticaNeue = localFont({
  src: "../../../public/fonts/helvetica-neue-regular.ttf",
});

export const montserrat = Montserrat({ subsets: ["latin"] });
