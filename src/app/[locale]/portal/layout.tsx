import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../../core/styles/index.scss";
import "../public/globals.css";
import localFont from "next/font/local";
import { Footer } from "../../../core/components/footer/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Providers } from "../../../core/components/Providers";
import HeaderAuth from "../../../core/components/headers/auth";

const helvetica = localFont({
  src: "../../../../public/fonts/helvetica-light.ttf",
});

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favico.svg" />
        <title>Exotic</title>
      </head>
      <body className={helvetica.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <HeaderAuth />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
