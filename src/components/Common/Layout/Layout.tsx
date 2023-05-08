import { BasePageProps } from "@interfaces/baseTypes";
import { ContactDataType } from "@interfaces/dataTypes";
import "@styles/globals.scss";
import Head from "next/head";
import Header from "./components/Header/Header";

interface LayoutProps extends BasePageProps {
  children: React.ReactNode;
  contact: ContactDataType;
}

const Layout = ({ children, contact, head, website }: LayoutProps) => (
  <>
    <Head>
      <title>{`${head.title} - ${website.name}`}</title>
    </Head>

    <Header contact={contact} />
    {children}
  </>
);

export default Layout;
