"use client";

import Script from "next/script";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-4xl">
      {/* Termly embed container */}
      <div
        {...({ name: "termly-embed" } as React.HTMLAttributes<HTMLDivElement>)}
        data-id="ff955319-ce45-44b3-8fc9-6ce90bb47c89"
        className="prose prose-sm sm:prose-base max-w-none"
      />

      {/* Load Termly script */}
      <Script
        id="termly-jssdk"
        strategy="afterInteractive"
        src="https://app.termly.io/embed-policy.min.js"
      />
    </div>
  );
}
