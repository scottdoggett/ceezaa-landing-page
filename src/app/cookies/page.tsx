"use client";

import Script from "next/script";

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-4xl">
      <div
        {...({ name: "termly-embed" } as React.HTMLAttributes<HTMLDivElement>)}
        data-id="2745ca3b-02c4-47c9-b99f-1fd933f9ddc6"
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
