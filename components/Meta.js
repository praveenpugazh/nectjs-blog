import React from "react";
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "My Blog | Ajay Raju",
  keywords: "Trading , Investing , Economy",
  description: "Get the latest news in trading news and in investing sector",
};

export default Meta;
