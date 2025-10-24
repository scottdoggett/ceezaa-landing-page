"use client";

import Script from "next/script";

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 max-w-4xl min-h-screen">
      <div
        {...({ name: "termly-embed" } as React.HTMLAttributes<HTMLDivElement>)}
        data-id="26c57894-3858-44fc-8738-b8db78a81cf5"
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
