import { LayoutFooterColorEnum } from "@constants/enums";
import { BasePageProps } from "@interfaces/baseTypes";
import { ContactDataType } from "@interfaces/dataTypes";
import "@styles/globals.scss";
import Head from "next/head";
import LayoutFooter from "./components/Footer/Footer";
import LayoutHeader from "./components/Header/Header";

interface LayoutProps extends BasePageProps {
  children: React.ReactNode;
  contact: ContactDataType;
  footerColor?: LayoutFooterColorEnum;
}

const Layout = ({
  children,
  contact,
  head,
  website,
  footerColor = LayoutFooterColorEnum.DARK,
}: LayoutProps) => (
  <>
    <Head>
      <title>{`${head.title} - ${website.name}`}</title>
    </Head>

    <LayoutHeader contact={contact} />
    {children}
    <LayoutFooter contact={contact} color={footerColor} />
  </>
);

export default Layout;
