"use client";

export function GoogleAnalytics({ measurementId }) {
  return (
    <>
      <script
        defer
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              'send_page_view': false,
              'transport_type': 'beacon',
              'anonymize_ip': true
            });
            gtag('event', 'page_view', {
              'send_to': '${measurementId}',
              'page_path': window.location.pathname,
              'page_title': document.title
            });
          `,
        }}
      />
    </>
  );
}