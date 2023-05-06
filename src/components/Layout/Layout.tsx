import "@styles/globals.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <div />
    {children}
  </>
);

export default Layout;
