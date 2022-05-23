import Head from "next/head";

const Custom500 = () => {
  return (
    <div className="dr">
      <Head>
        <title>500 - Server Error</title>
      </Head>
      <div className="h-screen | flex flex-col items-center justify-center | text-red-600 dg">
        <b className="text-2xl">500</b>
        <p className="mt-4 | text-xl font-semibold">Server Error</p>
      </div>
    </div>
  );
};

export default Custom500;
