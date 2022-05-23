import Head from "next/head";

const Custom404 = () => {
  return (
    <div className="dr">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="h-screen | flex flex-col items-center justify-center | text-red-600 dg">
        <b className="text-2xl">404</b>
        <p className="mt-4 | text-xl font-semibold">Page Not Found</p>
      </div>
    </div>
  );
};

export default Custom404;
