"use client";

import Script from "next/script";

export default function UsePolicyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-4xl">
      <div
        {...({ name: "termly-embed" } as React.HTMLAttributes<HTMLDivElement>)}
        data-id="e540e5a0-5187-49cd-8393-d9ea5c4ca43d"
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
