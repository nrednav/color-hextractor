import type { AppProps } from "next/app";

import Layout from "shared/layout/Layout";

import "shared/styles/global.css";

const App = (props: AppProps) => {
  const { Component, pageProps, router } = props;

  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
};

export default App;
