"use client";
import Script from "next/script";

export default function Scripts() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Q8Z1XHT8NH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q8Z1XHT8NH');
          `}
      </Script>

      {/* Gumroad */}
      <script src="https://gumroad.com/js/gumroad.js"></script>
      {/* <Script
        src="https://assets.gumroad.com/packs/js/overlay-f8f9015a9aabefa09736.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("Gumroad script loaded");
        }}
        onReady={() => {
          console.log("Gumroad script ready");
        }}
        onError={(err) => {
          console.error("Gumroad script failed to load", err);
        }}
      ></Script>

      <Script
        src="https://gumroad.com/js/gumroad.js"
        strategy="lazyOnload"
      ></Script> */}
    </>
  );
}
