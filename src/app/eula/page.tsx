"use client";

import Script from "next/script";

export default function EulaPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-4xl min-h-screen">
      <div
        {...({ name: "termly-embed" } as React.HTMLAttributes<HTMLDivElement>)}
        data-id="9c8c8f21-5c03-46ad-b636-fcc55beac885"
        className="prose prose-sm sm:prose-base max-w-none"
      />
      <Script
        id="termly-jssdk"
        strategy="afterInteractive"
        src="https://app.termly.io/embed-policy.min.js"
      />
    </div>
  );
}
