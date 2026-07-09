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
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s) {
                  var a = d.getElementsByTagName('head')[0];
                  var r = d.createElement('script');
                  r.async = 1;
                  r.src = s;
                  r.setAttribute('id', 'usetifulScript');
                  r.dataset.token = "7652218a0e50dbb6ffe2d8da3a0da864";  // This is your unique token. Don't change it.
                  
                  r.dataset.apiHostname = "https://www.usetiful.com";
                  a.appendChild(r);
                })(window, document, "https://www.usetiful.com/dist/usetiful.js");
                `,
            }}
          /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
