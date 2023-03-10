import { Html, Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <Head />
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
