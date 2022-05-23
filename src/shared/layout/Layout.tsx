import Header from "shared/layout/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="min-w-[320px] min-h-screen h-full my-32">
        {children}
      </main>
    </>
  );
};

export default Layout;
