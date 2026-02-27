import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s) {
                var a = d.getElementsByTagName('head')[0];
                var r = d.createElement('script');
                r.async = 1;
                r.src = s;
                r.setAttribute('id', 'usetifulScript');
                r.dataset.token = "65318218e671bc163c9306ddd37ccb3b";
                r.dataset.apiHostname = "https://www.usetiful.dev";
                a.appendChild(r);
              })(window, document, "https://www.usetiful.dev/dist/usetiful.js");
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
