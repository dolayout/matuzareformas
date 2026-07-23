import Script from "next/script";
import siteHtml from "../index.html?raw";

const bodyMarkup = siteHtml
  .match(/<body>([\s\S]*?)<\/body>/i)?.[1]
  .replace(/<script[\s\S]*?<\/script>/gi, "");

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyMarkup ?? "" }} />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
