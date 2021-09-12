import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      {/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2QJKPXZ335"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-2QJKPXZ335');}`,
        }}
      />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WTF - who to follow",
  keywords: "UI,UX,website feedback",
  description:
    "Get Feed back for your website's UI/UX and imrove conversion rate",
};

export default Meta;
