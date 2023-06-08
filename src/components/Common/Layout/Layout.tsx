import { LayoutFooterColorEnum } from "@constants/enums";
import { BasePageProps } from "@interfaces/baseTypes";
import { SiteConfigDataType } from "@interfaces/dataTypes";
import "@styles/globals.scss";
import Head from "next/head";
import LayoutFooter from "./components/Footer/Footer";
import LayoutHeader from "./components/Header/Header";

export interface LayoutProps extends BasePageProps {
  children: React.ReactNode;
  siteConfig: SiteConfigDataType;
  footerColor?: LayoutFooterColorEnum;
}

const Layout = ({ children, siteConfig, head, footerColor = LayoutFooterColorEnum.DARK }: LayoutProps) => (
  <>
    <Head>
      <title>{`${head.title} - ${siteConfig.website.name}`}</title>
    </Head>

    <LayoutHeader config={siteConfig} />
    {children}
    <LayoutFooter config={siteConfig} color={footerColor} />
  </>
);

export default Layout;
