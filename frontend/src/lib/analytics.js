"use client";

export function GoogleAnalytics({ measurementId }) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', { 'send_page_view': false });
            gtag('event', 'page_view');
          `,
        }}
      />
    </>
  );
}
