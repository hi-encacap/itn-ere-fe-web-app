import { LayoutFooterColorEnum } from "@constants/enums";
import { SITE_CONFIG_CODE_ENUM } from "@encacap-group/common/dist/re";
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
      <meta
        name="description"
        content={`${
          head.description
            ? `${head.description} - ${siteConfig.website.name}`
            : siteConfig.website.description
        }. Địa chỉ liên hệ: ${siteConfig[SITE_CONFIG_CODE_ENUM.CONTACT_INFORMATION].address}`}
      />
      <meta property="og:title" content={`${head.title} - ${siteConfig.website.name}`} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={head.requestURL} />
    </Head>

    <LayoutHeader config={siteConfig} />
    {children}
    <LayoutFooter config={siteConfig} color={footerColor} />
  </>
);

export default Layout;
